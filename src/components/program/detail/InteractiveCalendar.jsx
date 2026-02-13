import React, { useState, useMemo, useEffect } from 'react';

const MONTH_NAMES = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];
const DAY_HEADERS = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];

const PROGRAMS = ['ielts', 'gmat', 'gre', 'sat'];

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year, month) {
    return new Date(year, month, 1).getDay();
}

function getUrlParam(name) {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

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
    const s = m.toLowerCase().replace(/\s+/g,"");
    const map = {
        "januari":1,"january":1,"januar":1,
        "februari":2,"february":2,
        "maret":3,"march":3,
        "april":4,
        "mei":5,"may":5,
        "juni":6,"june":6,
        "juli":7,"july":7,
        "agustus":8,"august":8,
        "september":9,
        "oktober":10,"october":10,
        "november":11,
        "desember":12,"december":12
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
    const dt = new Date(year, m - 1, d);
    return dt;
}

function extractEventsFromCSV(rows, year, programId) {
    if (!rows || rows.length < 3) return [];
    let headers = rows[1];
    let batches = rows[2];
    let startRow = 3;
    const events = [];
    for (let r = startRow; r < rows.length; r++) {
        const row = rows[r];
        for (let c = 0; c < headers.length; c++) {
            const progName = headers[c];
            const batch = batches[c];
            if (!progName || !batch) continue;
            const short = progName.split(" ")[0].toLowerCase();
            if (short !== programId) continue;
            const date = parseDateLabel(row[0], year);
            if (!date) continue;
            events.push({
                date: date,
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear(),
                programId,
                batch,
            });
        }
    }
    return events;
}


const SHEET_URL_BASE = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEJ_iHnHRZAY40HtvBvGjHK2fL5XNgigtlUwKcz6CSzRbct6s8L-EwNE9tcm_lPUtAadtFbzi3WZB9";
const SHEET_GID = {
    general: '0',
    ramadhan: '889451535'
};


const InteractiveCalendar = ({ programSlug }) => {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const [hoveredDate, setHoveredDate] = useState(null);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const programId = programSlug && PROGRAMS.includes(programSlug) ? programSlug : null;

    useEffect(() => {
        if (!programId) return;
        setLoading(true);
        const urls = [
            `${SHEET_URL_BASE}/pub?gid=${SHEET_GID.general}&single=true&output=csv`,
            `${SHEET_URL_BASE}/pub?gid=${SHEET_GID.ramadhan}&single=true&output=csv`
        ];
        Promise.all(
            urls.map(url => fetch(url).then(r => r.ok ? r.text() : null).catch(() => null))
        ).then(([generalCsv, ramadhanCsv]) => {
            const rowsG = parseCSV(generalCsv);
            const rowsR = parseCSV(ramadhanCsv);
            const evG = extractEventsFromCSV(rowsG, year, programId);
            const evR = extractEventsFromCSV(rowsR, year, programId);
            setEvents([...evG, ...evR]);
            setLoading(false);
        });
    }, [year, programId]);

    const totalDays = getDaysInMonth(year, month);
    const startOffset = getFirstDayOfWeek(year, month);

    const cells = useMemo(() => {
        const arr = [];
        for (let i = 0; i < startOffset; i++) arr.push(null);
        for (let d = 1; d <= totalDays; d++) arr.push(d);
        return arr;
    }, [year, month, totalDays, startOffset]);

    const isToday = (d) =>
        d !== null &&
        year === today.getFullYear() &&
        month === today.getMonth() &&
        d === today.getDate();

    if (!programId) return null;

    const eventDays = events
        .filter(ev => ev.year === year && ev.month === month)
        .map(ev => ev.day);

    const prevMonth = () => {
        if (month === 0) { setMonth(11); setYear(y => y - 1); }
        else setMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (month === 11) { setMonth(0); setYear(y => y + 1); }
        else setMonth(m => m + 1);
    };

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
                            {/* Left panel */}
                            <div className="md:w-[30%] flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 pb-5 md:pb-0 md:pr-6">
                                {/* Month navigation */}
                                <div>
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

                                    {/* Legend */}
                                    <div className="space-y-2 mb-5">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                            <span className="text-xs font-medium text-slate-600">Hari kelas</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-3 h-3 rounded-full bg-slate-200" />
                                            <span className="text-xs font-medium text-slate-400">Tidak ada kelas</span>
                                        </div>
                                    </div>

                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Jadwal kelas diambil dari spreadsheet Ultimate Education.
                                    </p>
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
                                {/* Date cells */}
                                <div className="grid grid-cols-7 gap-1 md:gap-1.5">
                                    {cells.map((date, idx) => {
                                        if (date === null) {
                                            return <div key={`blank-${idx}`} className="aspect-square" />;
                                        }
                                        const isEventDay = eventDays.includes(date);
                                        const isTodayCell = isToday(date);
                                        const isHovered = hoveredDate === date;

                                        let cellClass =
                                            'aspect-square flex items-center justify-center rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 select-none relative';

                                        if (isEventDay) {
                                            cellClass += ' bg-emerald-50 text-emerald-600 border border-emerald-200/60 cursor-pointer hover:bg-emerald-500 hover:text-white hover:scale-105 hover:shadow-md';
                                        } else {
                                            cellClass += ' text-slate-300';
                                        }

                                        if (isHovered && isEventDay) {
                                            cellClass += ' bg-emerald-500 text-white scale-105 shadow-md';
                                        }

                                        return (
                                            <div
                                                key={date}
                                                className={cellClass}
                                                onMouseEnter={() => isEventDay && setHoveredDate(date)}
                                                onMouseLeave={() => setHoveredDate(null)}
                                            >
                                                {date}
                                                {isTodayCell && (
                                                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ultimate-blue" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Hover feedback */}
                                <div className="mt-4 h-8 flex items-center justify-center">
                                    {hoveredDate ? (
                                        <div className="text-xs text-ultimate-blue font-semibold bg-blue-50 px-3 py-1.5 rounded-full">
                                            {hoveredDate} {MONTH_NAMES[month]} {year} — Kelas tersedia
                                        </div>
                                    ) : (
                                        <div className="text-[11px] text-slate-400 italic">
                                            Arahkan kursor ke tanggal berwarna untuk info kelas
                                        </div>
                                    )}
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
