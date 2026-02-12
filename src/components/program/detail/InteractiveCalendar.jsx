import React, { useState, useMemo } from 'react';

const MONTH_NAMES = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];
const DAY_HEADERS = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];

// IELTS class days: Minggu(0), Selasa(2), Kamis(4), Sabtu(6)
const IELTS_WEEKDAY = new Set([2, 4]);   // Selasa, Kamis
const IELTS_WEEKEND = new Set([0, 6]);   // Minggu, Sabtu

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year, month) {
    return new Date(year, month, 1).getDay();
}

const InteractiveCalendar = () => {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const [hoveredDate, setHoveredDate] = useState(null);

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
                            Jadwal Kelas IELTS di Ultimate Education
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
                                            <span className="text-xs font-medium text-slate-600">Weekday (Selasa, Kamis)</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <span className="text-xs font-medium text-slate-600">Weekend (Minggu, Sabtu)</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-3 h-3 rounded-full bg-slate-200" />
                                            <span className="text-xs font-medium text-slate-400">Tidak ada kelas</span>
                                        </div>
                                    </div>

                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Kelas tersedia setiap <strong>Minggu, Selasa, Kamis, Sabtu</strong>. Pilih jadwal sesuai aktivitasmu.
                                    </p>
                                </div>

                                {/* Info banner */}
                                <div className="mt-4 bg-blue-50 rounded-xl p-3 border border-blue-100">
                                    <div className="text-[11px] font-bold text-ultimate-blue mb-0.5">IELTS Preparation</div>
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
                                        const dow = idx % 7;
                                        const isWeekdayClass = IELTS_WEEKDAY.has(dow);
                                        const isWeekendClass = IELTS_WEEKEND.has(dow);
                                        const isClassDay = isWeekdayClass || isWeekendClass;
                                        const isTodayCell = isToday(date);
                                        const isHovered = hoveredDate === date;

                                        let cellClass =
                                            'aspect-square flex items-center justify-center rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-all duration-150 select-none relative';

                                        if (isWeekdayClass) {
                                            cellClass += ' bg-emerald-50 text-emerald-600 border border-emerald-200/60 cursor-pointer hover:bg-emerald-500 hover:text-white hover:scale-105 hover:shadow-md';
                                        } else if (isWeekendClass) {
                                            cellClass += ' bg-red-50 text-red-500 border border-red-200/60 cursor-pointer hover:bg-red-400 hover:text-white hover:scale-105 hover:shadow-md';
                                        } else {
                                            cellClass += ' text-slate-300';
                                        }

                                        if (isHovered && isClassDay) {
                                            cellClass += isWeekdayClass
                                                ? ' bg-emerald-500 text-white scale-105 shadow-md'
                                                : ' bg-red-400 text-white scale-105 shadow-md';
                                        }

                                        return (
                                            <div
                                                key={date}
                                                className={cellClass}
                                                onMouseEnter={() => isClassDay && setHoveredDate(date)}
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
                                            {hoveredDate} {MONTH_NAMES[month]} {year} — Kelas IELTS tersedia
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
