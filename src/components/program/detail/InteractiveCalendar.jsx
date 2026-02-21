import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';

const MONTH_NAMES = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];
const DAY_HEADERS = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];

const PROGRAMS = [
    { id: 'ielts', label: 'IELTS', days: [0, 2, 4, 6] },
    { id: 'gmat', label: 'GMAT', days: [0, 6] },
    { id: 'gre', label: 'GRE', days: [0, 6] },
    { id: 'sat', label: 'SAT', days: [0, 6] }
];

const RAMADHAN_DAYS = {
    ielts: [1, 2, 3]
};

const DAY_MAP = {
    0: 'Minggu', 1: 'Senin', 2: 'Selasa', 3: 'Rabu',
    4: 'Kamis', 5: 'Jumat', 6: 'Sabtu'
};

const PROGRAM_IDS = PROGRAMS.map(p => p.id);

function parseCSV(text) {
    if (!text) return [];
    const rows = text.split(/\r?\n/).map(r => r.trim()).filter(r => r.length > 0);
    return rows.map(r => {
        const out = []; let cur = ""; let q = false;
        for (let i = 0; i < r.length; i++) {
            const c = r[i];
            if (c === '"') q = !q;
            else if (c === ',' && !q) { out.push(cur.trim()); cur = ""; }
            else cur += c;
        }
        out.push(cur.trim());
        return out;
    });
}

function normalizeMonth(m) {
    const s = m.toLowerCase().replace(/\s+/g, "");
    const map = {
        "januari": 1, "january": 1, "januar": 1,
        "februari": 2, "february": 2,
        "maret": 3, "march": 3,
        "april": 4,
        "mei": 5, "may": 5,
        "juni": 6, "june": 6,
        "juli": 7, "july": 7,
        "agustus": 8, "august": 8,
        "september": 9,
        "oktober": 10, "october": 10,
        "november": 11,
        "desember": 12, "december": 12
    };
    return map[s] || null;
}

function parseDateLabel(label, year) {
    if (!label) return null;
    let t = label.replace(/\(.*?\)/g, "").trim();
    t = t.replace(/^(senin|selasa|rabu|kamis|jumat|sabtu|minggu|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\s*,?/i, "").trim();
    t = t.replace(/^[,-\s]+|[,-\s]+$/g, "");
    const mWord = (t.match(/(januari|january|januar|februari|february|maret|march|april|mei|may|juni|june|juli|july|agustus|august|september|oktober|october|november|desember|december)/i) || [])[0];
    if (!mWord) return null;
    const m = normalizeMonth(mWord);
    const dMatch = t.match(/(\d{1,2})/);
    const d = dMatch ? parseInt(dMatch[1]) : null;
    if (!m || !d) return null;
    return new Date(year, m - 1, d);
}

function getLocalISO(d) {
    const y = d.getFullYear();
    const m = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${y}-${m}-${day}`;
}

function shortProgramName(name) {
    const map = {
        "IElTS Weekdays (19.30 - 21.00)": "IELTS",
        "IELTS Weekdays (19.00 - 21.00)": "IELTS",
        "IELTS Weekend (13.0 - 17.00)": "IELTS",
        "SAT (08.00 - 12.00)": "SAT",
        "SAT (10.00 - 12.00) ": "SAT",
        "GRE (13.00 - 17.00)": "GRE",
        "GRE (13.00 - 15.00)": "GRE",
        "GMAT (13.00 - 17.00)": "GMAT",
        "GMAT (13.00 - 15.00)": "GMAT"
    };
    return map[name] || name.split(" ")[0];
}

function formatBatchLabel(batch) {
    const cleaned = batch
        .replace(/^(IELTS|SAT|GRE|GMAT)\s+/i, "")
        .replace(/\bINTENSIVE\b/i, "")
        .replace(/\s{2,}/g, " ")
        .trim();
    return cleaned || batch;
}

function hashOffset(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (h * 31 + str.charCodeAt(i)) % 360;
    }
    return h;
}

function getProgramTime(programFull, group) {
    if (programFull) {
        const m = programFull.match(/\(([^)]+)\)/);
        if (m && m[1]) return m[1].trim();
    }
    const full = (programFull || "").toLowerCase();
    if (full.includes("weekday")) {
        return group === "ramadhan" ? "19.00 - 21.00" : "19.30 - 21.00";
    }
    if (full.includes("weekend")) {
        return "13.0 - 17.00";
    }
    const short = shortProgramName(programFull || "");
    const map = {
        general: { "SAT": "08.00 - 12.00", "GRE": "13.00 - 17.00", "GMAT": "13.00 - 17.00" },
        ramadhan: { "SAT": "10.00 - 12.00", "GRE": "13.00 - 15.00", "GMAT": "13.00 - 15.00" }
    };
    return (map[group] && map[group][short]) || "";
}

function extractEventsFromCSV(rows, year, group, getBatchColor) {
    if (!rows || rows.length < 3) return [];
    const events = [];
    let headers = null;
    let batches = null;
    let headerRowIndex = -1;

    for (let i = 0; i < Math.min(rows.length, 10); i++) {
        const rowStr = rows[i].join(" ").toUpperCase();
        if ((rowStr.includes("IELTS") && rowStr.includes("WEEKEND")) ||
            (rowStr.includes("SAT") && rowStr.includes("12.00")) ||
            (rowStr.includes("GRE") && rowStr.includes("15.00"))) {
            if (!rowStr.includes("INTENSIVE") && !rowStr.includes("BATCH")) {
                if (headerRowIndex === -1) headerRowIndex = i;
            }
        }
    }
    if (headerRowIndex === -1) return [];

    let batchRowIndex = headerRowIndex + 1;
    if (batchRowIndex >= rows.length) return [];

    headers = rows[headerRowIndex];
    batches = rows[batchRowIndex];
    let startRow = batchRowIndex + 1;

    for (let r = startRow; r < rows.length; r++) {
        const row = rows[r];
        const rowStr = row.join(" ").toUpperCase();

        if ((rowStr.includes("INTENSIVE") || rowStr.includes("BATCH")) &&
            !rowStr.match(/\d{1,2}\s+(JAN|FEB|MAR|APR|MAY|MEI|JUN|JUL|AUG|AGU|SEP|OCT|OKT|NOV|DEC|DES)/i)) {
            batches = row;
            continue;
        }
        if (row.every(c => !c.trim())) continue;

        for (let c = 0; c < headers.length; c++) {
            const cell = row[c] || "";
            if (!cell.trim()) continue;
            const dt = parseDateLabel(cell, year);
            if (dt) {
                const programFull = headers[c];
                if (!programFull) continue;
                const batch = batches[c] || "Unknown Batch";
                const programShort = shortProgramName(programFull);
                const programId = programShort.toLowerCase();
                const color = getBatchColor(programId, batch);
                const time = getProgramTime(programFull, group);

                events.push({
                    date: getLocalISO(dt),
                    program: programShort,
                    programId,
                    batch,
                    short: programShort,
                    time,
                    color
                });
            }
        }
    }
    return events;
}

const SHEET_URL_BASE = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEJ_iHnHRZAY40HtvBvGjHK2fL5XNgigtlUwKcz6CSzRbct6s8L-EwNE9tcm_lPUtAadtFbzi3WZB9";
const SHEET_GID = {
    general: '0',
    ramadhan: '889451535'
};

// 42-cell calendar matrix (6 rows × 7 cols) matching HTML version
function getMatrix(year, month) {
    const today = new Date();
    const first = new Date(year, month, 1);
    const startDow = first.getDay();
    const start = new Date(first);
    start.setDate(1 - startDow);

    const arr = [];
    for (let i = 0; i < 42; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        arr.push({
            date: d,
            inMonth: d.getMonth() === month,
            isToday: d.toDateString() === today.toDateString()
        });
    }
    return arr;
}


const InteractiveCalendar = ({ programSlug }) => {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const [hoveredDateKey, setHoveredDateKey] = useState(null);
    const [eventsByDate, setEventsByDate] = useState(new Map());
    const [batchFilter, setBatchFilter] = useState('all');
    const [csvRowsGeneral, setCsvRowsGeneral] = useState(null);
    const [csvRowsRamadhan, setCsvRowsRamadhan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [allBatches, setAllBatches] = useState([]);
    const [batchColorMap, setBatchColorMap] = useState(new Map());

    const programId = programSlug && PROGRAM_IDS.includes(programSlug) ? programSlug : null;
    const programConfig = PROGRAMS.find(p => p.id === programId);

    // Centralized batch color assignment (matching HTML's getBatchColor)
    const batchColorsRef = useRef(new Map());
    const programColorIndexRef = useRef(new Map());

    const getBatchColor = useCallback((pId, batch) => {
        const key = pId + "|" + batch;
        if (batchColorsRef.current.has(key)) return batchColorsRef.current.get(key);
        const idx = programColorIndexRef.current.get(pId) || 0;
        const hue = (hashOffset(pId) + idx * 137) % 360;
        const color = `hsl(${hue}, 70%, 45%)`;
        programColorIndexRef.current.set(pId, idx + 1);
        batchColorsRef.current.set(key, color);
        return color;
    }, []);

    useEffect(() => {
        if (!programId) return;
        setLoading(true);
        const fetchSheetByGid = async (gid) => {
            const urls = [
                `${SHEET_URL_BASE}/pub?gid=${gid}&single=true&output=csv`,
                `${SHEET_URL_BASE}/pub?output=csv&gid=${gid}`
            ];
            for (const u of urls) {
                try {
                    const res = await fetch(u);
                    if (!res.ok) continue;
                    const text = await res.text();
                    if (text && text.includes(',') && !text.trim().startsWith('<')) {
                        return text;
                    }
                } catch (_) { }
            }
            return null;
        };
        Promise.all([fetchSheetByGid(SHEET_GID.general), fetchSheetByGid(SHEET_GID.ramadhan)])
            .then(([generalCsv, ramadhanCsv]) => {
                setCsvRowsGeneral(generalCsv ? parseCSV(generalCsv) : null);
                setCsvRowsRamadhan(ramadhanCsv ? parseCSV(ramadhanCsv) : null);
            })
            .finally(() => setLoading(false));
    }, [programId]);

    // Build events map (matching HTML's buildEventsByDate)
    useEffect(() => {
        if (!programId) return;

        // Reset color state per build
        batchColorsRef.current = new Map();
        programColorIndexRef.current = new Map();

        const rowsG = csvRowsGeneral;
        const rowsR = csvRowsRamadhan;
        const eventsG = rowsG ? extractEventsFromCSV(rowsG, year, "general", getBatchColor) : [];
        const eventsR = rowsR ? extractEventsFromCSV(rowsR, year, "ramadhan", getBatchColor) : [];
        const events = eventsG.concat(eventsR);
        const map = new Map();
        const batchSet = new Set();

        events.forEach(ev => {
            if (!map.has(ev.date)) map.set(ev.date, []);
            map.get(ev.date).push(ev);
            batchSet.add(ev.batch);
        });

        setEventsByDate(map);
        setAllBatches(Array.from(batchSet).sort());
        setBatchColorMap(new Map(batchColorsRef.current));
    }, [year, csvRowsGeneral, csvRowsRamadhan, programId, getBatchColor]);

    // 42-cell matrix (matching HTML)
    const cells = useMemo(() => getMatrix(year, month), [year, month]);

    const getEventsForDate = useCallback((d) => {
        const key = getLocalISO(d);
        const list = eventsByDate.get(key) || [];
        let filtered = list.filter(e => e.programId === programId);
        if (batchFilter !== 'all') filtered = filtered.filter(e => e.batch === batchFilter);
        return filtered;
    }, [eventsByDate, programId, batchFilter]);

    // Filter batches based on current program
    const availableBatches = useMemo(() => {
        const set = new Set();
        eventsByDate.forEach((list) => {
            list.forEach((ev) => {
                if (ev.programId === programId) set.add(ev.batch);
            });
        });
        return Array.from(set).sort();
    }, [eventsByDate, programId]);

    const prevMonth = () => {
        if (month === 0) { setMonth(11); setYear(y => y - 1); }
        else setMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (month === 11) { setMonth(0); setYear(y => y + 1); }
        else setMonth(m => m + 1);
    };

    if (!programId) return null;

    // Deduplicate events for display
    const dedupeEvents = (events) => {
        const unique = [];
        const seen = new Set();
        events.forEach(ev => {
            const key = ev.program + "|" + ev.batch;
            if (!seen.has(key)) {
                seen.add(key);
                unique.push(ev);
            }
        });
        return unique;
    };

    // Program availability info (matching HTML's renderProgramInfo)
    const programDayNames = programConfig ? programConfig.days.map(d => DAY_MAP[d]).join(', ') : '';
    const ramadhanDays = RAMADHAN_DAYS[programId];
    const ramadhanDayNames = ramadhanDays ? ramadhanDays.map(d => DAY_MAP[d]).join(', ') : '';

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto">
                <div className="bg-hero-gradient rounded-3xl md:rounded-[3rem] p-5 md:p-10 shadow-2xl overflow-hidden relative">
                    {/* Decorative blurs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-ultimate-yellow/10 rounded-full -ml-20 -mb-20 blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-8 text-center">
                            Jadwal Kelas {programId.toUpperCase()} di Ultimate Education
                        </h2>

                        <div className="bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-8 shadow-inner flex flex-col md:flex-row gap-6 md:gap-8">
                            {/* Left panel - Sidebar */}
                            <div className="md:w-[30%] flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 pb-5 md:pb-0 md:pr-6">
                                <div>
                                    {/* Month navigation */}
                                    <div className="flex items-center justify-between mb-4">
                                        <button onClick={prevMonth} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors" aria-label="Bulan sebelumnya">
                                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                        </button>
                                        <div className="text-center">
                                            <div className="text-xl md:text-2xl font-bold text-ultimate-blue leading-tight">{MONTH_NAMES[month]}</div>
                                            <div className="text-sm text-slate-400 font-semibold">{year}</div>
                                        </div>
                                        <button onClick={nextMonth} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors" aria-label="Bulan berikutnya">
                                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                    </div>

                                    {/* Legend - Weekday/Weekend distinction */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2.5">
                                            <span className="w-4 h-4 rounded bg-green-100 border-2 border-green-300" />
                                            <span className="text-xs font-medium text-slate-600">Hari kerja (Weekday)</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <span className="w-4 h-4 rounded bg-red-100 border-2 border-red-300" />
                                            <span className="text-xs font-medium text-slate-600">Akhir pekan (Weekend)</span>
                                        </div>
                                    </div>

                                    {/* Program availability info */}
                                    {programConfig && (
                                        <div className="space-y-2 mb-4">
                                            <div className="bg-gray-50 rounded-lg p-3">
                                                <p className="text-xs font-semibold text-ultimate-blue">{programConfig.label} Class</p>
                                                <p className="text-xs text-slate-500 mt-1">Available on {programDayNames}</p>
                                            </div>
                                            {ramadhanDays && (
                                                <div className="bg-gray-50 rounded-lg p-3">
                                                    <p className="text-xs font-semibold text-ultimate-blue">{programConfig.label} Ramadhan Class</p>
                                                    <p className="text-xs text-slate-500 mt-1">Available on {ramadhanDayNames}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Batch filter */}
                                    {availableBatches.length > 0 && (
                                        <div className="mb-4">
                                            <div className="text-xs font-semibold text-slate-600 mb-2">Batch</div>
                                            <select
                                                className="w-full rounded-lg border border-slate-200 text-xs px-3 py-2 text-slate-700"
                                                value={batchFilter}
                                                onChange={(e) => setBatchFilter(e.target.value)}
                                            >
                                                <option value="all">Semua Batch</option>
                                                {availableBatches.map((b) => (
                                                    <option key={b} value={b}>{formatBatchLabel(b)}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    {/* Batch legend (matching HTML's renderBatchLegend) */}
                                    {availableBatches.length > 0 && (
                                        <div className="space-y-1.5 mb-4">
                                            <p className="text-xs font-bold text-ultimate-blue">Batch Legend</p>
                                            {availableBatches.map(b => {
                                                const colorKey = programId + "|" + b;
                                                const color = batchColorMap.get(colorKey) || "#0ea5e9";
                                                return (
                                                    <div key={b} className="flex items-center gap-2">
                                                        <span className="w-3.5 h-3.5 rounded flex-shrink-0" style={{ background: color, boxShadow: '0 1px 2px rgba(0,0,0,.2)' }} />
                                                        <span className="text-xs text-slate-600">{formatBatchLabel(b)}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                </div>

                                {/* Info banner */}
                                <div className="mt-4 bg-blue-50 rounded-xl p-3 border border-blue-100">
                                    <div className="text-[11px] font-bold text-ultimate-blue mb-0.5">{programId.toUpperCase()} Preparation</div>
                                    <div className="text-[12px] text-slate-600">Online &amp; Offline — fleksibel</div>
                                </div>
                            </div>

                            {/* Right panel: calendar grid */}
                            <div className="md:w-[70%]">
                                {/* Day headers */}
                                <div className="grid grid-cols-7 gap-1 md:gap-1.5 mb-2">
                                    {DAY_HEADERS.map(day => (
                                        <div key={day} className="text-center text-[10px] md:text-xs font-bold text-slate-400 tracking-wider py-1.5">
                                            {day}
                                        </div>
                                    ))}
                                </div>
                                {/* Date cells - 42-cell matrix like HTML version */}
                                <div className="grid grid-cols-7 gap-1 md:gap-1.5" style={{ overflow: 'visible' }}>
                                    {cells.map((c, idx) => {
                                        const events = c.inMonth ? getEventsForDate(c.date) : [];
                                        const isEventDay = events.length > 0;
                                        const uniqueEvents = isEventDay ? dedupeEvents(events) : [];
                                        const dateKey = getLocalISO(c.date);
                                        const isHovered = hoveredDateKey === dateKey;
                                        const isWeekend = c.date.getDay() === 0 || c.date.getDay() === 6;

                                        let cellClass =
                                            'aspect-square flex flex-col items-center justify-center rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 select-none relative';

                                        if (!c.inMonth) {
                                            cellClass += ' opacity-30 text-slate-300';
                                        } else if (isEventDay) {
                                            if (isWeekend) {
                                                cellClass += ' bg-red-50 text-red-600 cursor-default hover:scale-105 hover:shadow-md';
                                            } else {
                                                cellClass += ' bg-emerald-50 text-emerald-600 cursor-default hover:scale-105 hover:shadow-md';
                                            }
                                        } else {
                                            cellClass += ' text-slate-300';
                                        }

                                        if (c.isToday && c.inMonth) {
                                            cellClass += ' ring-2 ring-ultimate-blue shadow-lg';
                                        }

                                        // Determine tooltip alignment: cells on right side align right
                                        const colIdx = idx % 7;
                                        let tooltipAlign = 'left-1/2 -translate-x-1/2'; // center by default
                                        if (colIdx <= 1) tooltipAlign = 'left-0'; // left-align for leftmost cols
                                        if (colIdx >= 5) tooltipAlign = 'right-0'; // right-align for rightmost cols

                                        return (
                                            <div
                                                key={`cell-${idx}`}
                                                className={cellClass}
                                                onMouseEnter={() => isEventDay && setHoveredDateKey(dateKey)}
                                                onMouseLeave={() => setHoveredDateKey(null)}
                                                style={Object.assign(
                                                    { overflow: 'visible' },
                                                    isEventDay ? {
                                                        boxShadow: isWeekend
                                                            ? 'inset 0 0 0 2px #fca5a5'
                                                            : 'inset 0 0 0 2px #6ee7b7'
                                                    } : {}
                                                )}
                                            >
                                                <span>{c.date.getDate().toString().padStart(2, '0')}</span>
                                                {/* Color dots only */}
                                                {isEventDay && uniqueEvents.length > 0 && (
                                                    <div className="mt-0.5 flex items-center justify-center gap-0.5">
                                                        {uniqueEvents.slice(0, 4).map((ev, i) => (
                                                            <span
                                                                key={`dot-${ev.batch}-${i}`}
                                                                className="w-1.5 h-1.5 rounded-full"
                                                                style={{ background: ev.color || '#0ea5e9' }}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                                {c.isToday && c.inMonth && (
                                                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ultimate-blue" />
                                                )}

                                                {/* Floating tooltip above cell */}
                                                {isHovered && isEventDay && (() => {
                                                    const dayName = DAY_MAP[c.date.getDay()];
                                                    return (
                                                        <div
                                                            className={`absolute bottom-full mb-2 ${tooltipAlign} z-50 pointer-events-none`}
                                                            style={{ minWidth: '240px', maxWidth: '340px' }}
                                                        >
                                                            <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                                                                <div className="bg-gradient-to-r from-[#145da0] to-[#0e4a80] px-4 py-2 flex items-center justify-between">
                                                                    <span className="text-sm font-bold text-white">{c.date.getDate()} {MONTH_NAMES[c.date.getMonth()]} {c.date.getFullYear()}</span>
                                                                    <span className="text-xs text-white/70">{dayName}</span>
                                                                </div>
                                                                <div className="p-3 space-y-2">
                                                                    {uniqueEvents.map((ev, i) => {
                                                                        const label = formatBatchLabel(ev.batch);
                                                                        return (
                                                                            <div key={`tip-${ev.batch}-${i}`} className="flex items-center gap-2">
                                                                                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: ev.color || '#0ea5e9' }} />
                                                                                <span className="text-xs font-semibold text-slate-700">{ev.program}</span>
                                                                                <span className="text-xs text-slate-400">·</span>
                                                                                <span className="text-xs text-slate-500">{label}</span>
                                                                                {ev.time && (
                                                                                    <>
                                                                                        <span className="text-xs text-slate-400">·</span>
                                                                                        <span className="text-xs text-ultimate-blue font-semibold">{ev.time}</span>
                                                                                    </>
                                                                                )}
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                            {/* Arrow */}
                                                            <div className={`absolute top-full ${colIdx <= 1 ? 'left-4' : colIdx >= 5 ? 'right-4' : 'left-1/2 -translate-x-1/2'} w-0 h-0`} style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid white' }} />
                                                        </div>
                                                    );
                                                })()}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Mobile Legend */}
                                <div className="md:hidden border-t border-slate-100 mt-3 pt-3">
                                    <div className="flex justify-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded bg-green-100 border-2 border-green-300" />
                                            <span className="text-xs text-slate-500">Weekday</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded bg-red-100 border-2 border-red-300" />
                                            <span className="text-xs text-slate-500">Weekend</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveCalendar;
