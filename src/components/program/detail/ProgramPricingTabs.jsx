import React, { useState, useEffect, useMemo } from 'react';
import { fetchPricingData, findProgramRow, cleanNum, formatPrice as fmt, ONLINE_PRICES, WA_NUMBER, isTBI, SUBJECTS_FALLBACK } from '../../../utils/pricing';

const normalizeTextBlock = (text = '') => String(text)
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const ProgramPricingTabs = ({ data, programSlug }) => {
    // Basic program info
    const programData = data || {};

    // Filter tabs as requested: remove "Ultimate ..." empty tabs
    const tabKeys = useMemo(() => {
        return Object.keys(programData).filter(k => {
            const lower = k.toLowerCase();
            // User requested to remove "Ultimate ..." tabs that are empty or not real tabs
            if (lower.includes('ultimate') && !lower.includes('gmat')) {
                // Keep "Ultimate GMAT" if it has content? 
                // User said: "Ultimate IELTS, Ultimate a,b,c yang tidak ada isinya hapus saja"
                // Check if it has content
                const hasContent = programData[k].description || (programData[k].curriculum && programData[k].curriculum.length > 0);
                if (!hasContent) return false;
            }
            if (lower.startsWith('ultimate') && !programData[k].curriculum?.length) return false;
            if (['silver', 'bronze', 'gold', 'premium'].includes(lower)) return false;
            return true;
        });
    }, [programData]);


    const [pricingData, setPricingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [activeTab, setActiveTab] = useState(tabKeys[0] || 'Group');

    // Fetch Pricing Data on Mount
    useEffect(() => {
        let mounted = true;
        async function load() {
            try {
                const d = await fetchPricingData();
                if (mounted) {
                    setPricingData(d);
                    setLoading(false);
                }
            } catch (e) {
                console.error(e);
                if (mounted) setLoading(false);
            }
        }
        load();
        return () => { mounted = false; };
    }, []);

    // Helper to determine Tab Type
    const getTabType = (name) => {
        const n = (name || '').toLowerCase();
        if (n.includes('bundling')) return 'Bundling';
        if (n.includes('custom')) return 'Custom';
        if (n.match(/private|privat|personal|1-on-1|individual/)) return 'Private';
        return 'Group';
    };

    const activeType = getTabType(activeTab);
    const currentProg = programData[activeTab] || {};

    // Find Dynamic Row for current program
    const pricingRow = useMemo(() => findProgramRow(pricingData, programSlug), [pricingData, programSlug]);

    // Determine visible tabs with Custom rule:
    // - Show Custom tab only if there is price per 3 sessions (tigasesil/tigasesin)
    // - If no 3-sessions price but tab has description/curriculum, keep the tab but hide pricing column
    const visibleTabs = useMemo(() => {
        if (!tabKeys || tabKeys.length === 0) return [];
        const slugKey = (programSlug || '').replace(/-/g, '').toLowerCase();
        const onlineOpts = ONLINE_PRICES[slugKey];
        // If pricing not loaded yet, tentatively show all for minimal UI flicker,
        // except hide Group if we already know there's no online mapping and no pricingRow.
        return tabKeys.filter(t => {
            const type = getTabType(t);
            if (type === 'Group') {
                if (!pricingRow && !onlineOpts) return false;
                const hasGroup =
                    (cleanNum(pricingRow?.bronzeg) > 0) ||
                    (cleanNum(pricingRow?.silverg) > 0) ||
                    (onlineOpts && ((onlineOpts.bronzeg || 0) > 0 || (onlineOpts.silverg || 0) > 0));
                return hasGroup;
            }
            if (type === 'Custom') {
                if (!pricingRow) {
                    // When no pricing row, still allow explanation tab
                    return true;
                }
                const hasPack = (cleanNum(pricingRow?.tigasesil) > 0) || (cleanNum(pricingRow?.tigasesin) > 0);
                if (hasPack) return true;
                const cp = programData[t] || {};
                const hasExplanation = !!cp.description || (cp.curriculum && cp.curriculum.length > 0);
                return hasExplanation; // keep tab only for explanation
            }
            return true;
        });
    }, [tabKeys, pricingRow, programSlug, programData]);

    // Keep activeTab consistent with visibleTabs
    useEffect(() => {
        if (visibleTabs.length && !visibleTabs.includes(activeTab)) {
            setActiveTab(visibleTabs[0]);
        }
    }, [visibleTabs, activeTab]);

    if (loading) return (
        <section className="py-12 md:py-16 bg-slate-50">
            <div className="container mx-auto animate-pulse">
                <div className="h-7 w-52 bg-slate-200 rounded mb-3"></div>
                <div className="h-5 w-96 bg-slate-200 rounded mb-8"></div>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="px-16 py-3 rounded-full bg-slate-200"></div>
                    ))}
                </div>
                <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-[68%] p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                            <div className="h-7 w-2/5 bg-slate-200 rounded mb-5"></div>
                            <div className="space-y-3 mb-8">
                                <div className="h-4 w-full bg-slate-200 rounded"></div>
                                <div className="h-4 w-11/12 bg-slate-200 rounded"></div>
                                <div className="h-4 w-10/12 bg-slate-200 rounded"></div>
                            </div>
                            <div className="space-y-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="h-4 w-full bg-slate-200 rounded"></div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-[32%] p-6 md:p-8 bg-slate-50/30">
                            <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg border border-slate-100">
                                <div className="h-6 w-32 bg-slate-200 rounded mb-4"></div>
                                <div className="space-y-3 mb-6">
                                    <div className="h-10 w-full bg-slate-200 rounded"></div>
                                    <div className="h-10 w-full bg-slate-200 rounded"></div>
                                    <div className="h-10 w-full bg-slate-200 rounded"></div>
                                </div>
                                <div className="h-12 w-full bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    return (
        <section className="py-12 md:py-16 bg-slate-50">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-ultimate-blue mb-3 text-left">
                    Topik & Harga
                </h2>
                <p className="text-slate-500 text-left mb-10 text-[15px] md:text-base">
                    Pilih tipe kelas yang sesuai dengan kebutuhan belajar kamu
                </p>

                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-left gap-2 md:gap-3 mb-10">
                    {visibleTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                px-5 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold 
                                transition-all duration-200 border
                                ${activeTab === tab
                                    ? 'bg-ultimate-blue text-white border-ultimate-blue shadow-lg shadow-ultimate-blue/20'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-ultimate-blue hover:text-ultimate-blue'
                                }
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">

                    {/* BUNDLING TAB LAYOUT */}
                    {activeType === 'Bundling' ? (
                        <BundlingModule pricingData={pricingData} />
                    ) : (
                        <div className="flex flex-col lg:flex-row">
                            {/* Left: Description & Curriculum (Manual Content) */}
                            <div className="lg:w-[68%] p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
                                    {currentProg.title}
                                </h3>

                                {currentProg.description && (
                                    <p className="text-slate-600 mb-4 leading-relaxed text-[15px] whitespace-pre-line text-justify">
                                        {normalizeTextBlock(currentProg.description)}
                                    </p>
                                )}
                                {currentProg.features && (
                                    <p className="text-slate-500 mb-10 leading-relaxed text-[15px] whitespace-pre-line text-justify">
                                        {normalizeTextBlock(currentProg.features)}
                                    </p>
                                )}

                                <CurriculumList features={currentProg.curriculum} />
                            </div>

                            {/* Right: Pricing Card */}
                            {(() => {
                                const slugKey = (programSlug || '').replace(/-/g, '').toLowerCase();
                                const onlineOpts = ONLINE_PRICES[slugKey];
                                const hasGroupPricing =
                                    (cleanNum(pricingRow?.bronzeg) > 0) ||
                                    (cleanNum(pricingRow?.silverg) > 0) ||
                                    (onlineOpts && ((onlineOpts.bronzeg || 0) > 0 || (onlineOpts.silverg || 0) > 0));
                                const showCustomPricing = (activeType !== 'Custom') ||
                                    (cleanNum(pricingRow?.tigasesil) > 0 || cleanNum(pricingRow?.tigasesin) > 0);
                                const showGroupPricing = (activeType !== 'Group') || hasGroupPricing;
                                if (!(showCustomPricing && showGroupPricing)) return null;
                                return (
                                    <div className="lg:w-[32%] p-6 md:p-8 bg-slate-50/30">
                                        <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg border border-slate-100 lg:sticky lg:top-8">

                                            {activeType === 'Custom' && (
                                                <CustomModule
                                                    programSlug={programSlug}
                                                    pricingRow={pricingRow}
                                                />
                                            )}

                                            {activeType === 'Group' && (
                                                <GroupModule
                                                    programSlug={programSlug}
                                                    pricingRow={pricingRow}
                                                    currentProg={currentProg}
                                                />
                                            )}

                                            {activeType === 'Private' && (
                                                <PrivateModule
                                                    programSlug={programSlug}
                                                    pricingRow={pricingRow}
                                                    currentProg={currentProg}
                                                />
                                            )}

                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// --- SUB-COMPONENTS ---

/* 
 * GROUP MODULE 
 */
const GroupModule = ({ programSlug, pricingRow, currentProg }) => {
    const [groupMode, setGroupMode] = useState('Offline');
    const [groupVariant, setGroupVariant] = useState('Bronze');
    const [extra, setExtra] = useState(0);
    const [takeBundling, setTakeBundling] = useState(false);

    // Online/Offline check
    const slugKey = programSlug?.toLowerCase().replace(/-/g, '');
    const onlineOpts = ONLINE_PRICES[slugKey];
    const hasOnline = !!onlineOpts;

    // Ensure valid mode
    useEffect(() => {
        const safeMode = (hasOnline && groupMode === 'Online') ? 'Online' : 'Offline';
        if (safeMode !== groupMode && hasOnline) setGroupMode(safeMode);
    }, [hasOnline, groupMode]);

    // Prices
    const getPrice = (v) => {
        if (groupMode === 'Online' && onlineOpts) {
            return onlineOpts[v.toLowerCase() + 'g'];
        }
        return cleanNum(pricingRow?.[v.toLowerCase() + 'g']);
    };

    const basePrice = getPrice(groupVariant);
    const perSession = cleanNum(pricingRow?.persesi);
    const bundlingVal = cleanNum(pricingRow?.bundling); // Bundling Test Price

    const extraCost = extra * perSession;
    const bundlingCost = takeBundling ? bundlingVal : 0;
    const total = basePrice + extraCost + bundlingCost;

    // WA Generation
    const waLink = useMemo(() => {
        let msg = `Halo Ultimate Education,\n\nSaya ingin mendaftar *${currentProg.title || programSlug}* (Group — ${groupVariant})`;
        if (groupMode === 'Online') msg += ` - Online`;
        msg += `\n- Harga Dasar: ${fmt(basePrice)}`;
        if (extra > 0) msg += `\n- Tambah Kelas: ${extra} x ${fmt(perSession)}`;
        if (takeBundling) msg += `\n- Bundling Test: ${fmt(bundlingVal)}`;

        msg += `\n\nTotal: *${fmt(total)}*`;
        return `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(msg)}`;
    }, [programSlug, currentProg, groupVariant, groupMode, basePrice, extra, takeBundling, total]);

    if (!pricingRow) return <div className="text-center text-slate-400 py-4">Harga belum tersedia.</div>;

    return (
        <div>
            {hasOnline && (
                <div className="flex p-1 bg-slate-100 rounded-xl mb-5">
                    {['Offline', 'Online'].map((m) => (
                        <button
                            key={m}
                            onClick={() => setGroupMode(m)}
                            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${groupMode === m ? 'bg-white text-ultimate-blue shadow-sm' : 'text-slate-400'}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>
            )}
            <h4 className="text-base font-bold text-slate-800 mb-3">Pilih Paket</h4>
            <div className="space-y-2 mb-5">
                {['Bronze', 'Silver'].map(v => {
                    const p = getPrice(v);
                    if (!p) return null;
                    return (
                        <button
                            key={v}
                            onClick={() => setGroupVariant(v)}
                            className={`w-full text-left p-3.5 rounded-xl border-2 transition-all ${groupVariant === v ? 'border-ultimate-blue bg-blue-50/40' : 'border-slate-100 hover:border-slate-200'}`}
                        >
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{v}</div>
                            <div className="text-lg font-bold text-slate-900">{fmt(p)}</div>
                        </button>
                    );
                })}
            </div>

            {/* Add-ons */}
            {(perSession > 0 || bundlingVal > 0) && (
                <div className="pt-4 border-t border-slate-100 mb-4 space-y-3">
                    {perSession > 0 && (
                        <div>
                            <CounterRow label="Tambah Kelas" value={extra} onDec={() => setExtra(Math.max(0, extra - 1))} onInc={() => setExtra(extra + 1)} />
                            <div className="text-xs text-right text-slate-400 mt-1">@ {fmt(perSession)}</div>
                        </div>
                    )}

                    {bundlingVal > 0 && (
                        <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer">
                            <input type="checkbox" checked={takeBundling} onChange={e => setTakeBundling(e.target.checked)} className="w-5 h-5 text-ultimate-blue rounded" />
                            <div className="flex-1">
                                <div className="text-sm font-bold text-slate-800">Bundling Test</div>
                            </div>
                            <div className="font-bold text-slate-900">{fmt(bundlingVal)}</div>
                        </label>
                    )}
                </div>
            )}

            <div className="pt-4 border-t border-slate-100 text-sm mb-5">
                <div className="flex justify-between font-bold text-slate-900">
                    <span>Total</span>
                    <span className="text-ultimate-blue">{fmt(total)}</span>
                </div>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-ultimate-blue text-white text-center rounded-xl font-bold shadow-lg hover:shadow-xl transition-all text-[15px]">
                Daftar Sekarang
            </a>
        </div>
    );
};

/* 
 * PRIVATE MODULE 
 */
const PrivateModule = ({ programSlug, pricingRow, currentProg }) => {
    const [plan, setPlan] = useState('Silver');
    const [sessions, setSessions] = useState(12); // Default for Silver/Gold
    const [consult, setConsult] = useState(5);
    const [gateway, setGateway] = useState(false); // Garansi handle
    const [subjects, setSubjects] = useState([]);
    const [extra, setExtra] = useState(0);
    const [takeBundling, setTakeBundling] = useState(false);

    // Helpers
    const getVal = (k) => cleanNum(pricingRow?.[k]);

    // Plan Logic
    useEffect(() => {
        if (plan === 'Silver') {
            // Fixed ? Usually Silver private is flexible or fixed? 
            // Based on generic private.html logic, Silver behaves like normal package
        } else if (plan === 'Gold') {
            const t = getVal('sesigold') || 20;
            setConsult(5);
            setSessions(Math.max(12, t - 5));
        } else if (plan === 'Premium') {
            if (gateway) {
                setSessions(30); setConsult(5);
            } else {
                const t = getVal('sesipremium') || 35;
                setConsult(5);
                setSessions(Math.max(20, t - 5));
            }
        }
    }, [plan, gateway, pricingRow]);

    // Subjects (Only for IGCSE, A-Level, O-Level)
    const subjectKey = useMemo(() => {
        const lower = (programSlug || '').toLowerCase();
        if (lower.includes('igcse')) return 'igcse';
        if (lower.includes('alevel') || lower.includes('a-level')) return 'alevel';
        if (lower.includes('olevel') || lower.includes('o-level')) return 'olevel';
        return null;
    }, [programSlug]);

    const subjectList = subjectKey ? SUBJECTS_FALLBACK[subjectKey] : [];

    const subjectCount = plan === 'Silver' ? 1 : plan === 'Gold' ? 2 : 3;
    useEffect(() => {
        if (!subjectKey) {
            setSubjects([]);
            return;
        }
        setSubjects(arr => {
            const n = [...arr];
            if (n.length > subjectCount) return n.slice(0, subjectCount);
            while (n.length < subjectCount) n.push('');
            return n;
        });
    }, [subjectCount, subjectKey]);

    if (!pricingRow) return <div className="text-center text-slate-400">Harga belum tersedia.</div>;

    // Price Calc
    let base = 0;
    if (plan === 'Premium' && gateway) {
        base = getVal('garansi');
    } else {
        base = getVal(plan.toLowerCase());
    }

    const perSession = getVal('persesi');
    const bundlingVal = getVal('bundling');

    const extraCost = extra * perSession;
    const bundlingCost = takeBundling ? bundlingVal : 0;
    const total = base + extraCost + bundlingCost;

    // WA
    const waLink = (() => {
        let msg = `Halo Ultimate Education,\n\nSaya ingin mendaftar *${currentProg.title || programSlug}* (Private - ${plan})`;
        if (subjectKey && subjects.filter(Boolean).length) msg += `\n- Subject: ${subjects.filter(Boolean).join(', ')}`;
        if (['Gold', 'Premium'].includes(plan) && !gateway) msg += `\n- Alokasi: ${sessions} Kelas, ${consult} Konsul`;
        if (plan === 'Premium' && gateway) msg += ` (Garansi Skor)`;
        msg += `\n- Harga Dasar: ${fmt(base)}`;
        if (extra > 0) msg += `\n- Tambah Kelas: ${extra} x ${fmt(perSession)}`;
        if (takeBundling) msg += `\n- Bundling Test: ${fmt(bundlingVal)}`;
        msg += `\n\nTotal: *${fmt(total)}*`;
        return `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(msg)}`;
    })();

    return (
        <div>
            <h4 className="text-base font-bold text-slate-800 mb-3">Pilih Paket</h4>
            <div className="space-y-2 mb-5">
                {['Silver', 'Gold', 'Premium'].map(p => {
                    const price = cleanNum(pricingRow?.[p.toLowerCase()]);
                    if (!price) return null;
                    return (
                        <button key={p} onClick={() => setPlan(p)} className={`w-full text-left p-3.5 rounded-xl border-2 transition-all ${plan === p ? 'border-ultimate-blue bg-blue-50/40' : 'border-slate-100 hover:border-slate-200'}`}>
                            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{p}</div>
                            <div className="text-lg font-bold text-slate-900">{fmt(price)}</div>
                        </button>
                    )
                })}
            </div>

            {/* Subject Dropdowns */}
            {subjectKey && (
                <div className="mb-5 space-y-2">
                    <h5 className="text-xs font-bold text-slate-600">Subject ({subjectCount})</h5>
                    {subjects.map((valStr, i) => (
                        <select
                            key={i}
                            value={valStr}
                            onChange={e => {
                                const n = [...subjects]; n[i] = e.target.value; setSubjects(n);
                            }}
                            className="w-full text-sm p-2 border border-slate-200 rounded-lg bg-white"
                        >
                            <option value="">Pilih Subject {i + 1}</option>
                            {subjectList.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    ))}
                </div>
            )}

            {/* Garansi Checkbox */}
            {plan === 'Premium' && getVal('garansi') > 0 && (
                <label className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200 cursor-pointer mb-5">
                    <input type="checkbox" checked={gateway} onChange={e => setGateway(e.target.checked)} className="w-5 h-5 text-ultimate-blue rounded" />
                    <div>
                        <div className="text-sm font-bold text-slate-800">Garansi Skor</div>
                        <div className="text-xs text-slate-500">Upgrade ke paket garansi</div>
                    </div>
                </label>
            )}

            {/* Addons */}
            {(perSession > 0 || bundlingVal > 0) && (
                <div className="pt-4 border-t border-slate-100 mb-4 space-y-3">
                    {perSession > 0 && (
                        <div>
                            <CounterRow label="Tambah Kelas" value={extra} onDec={() => setExtra(Math.max(0, extra - 1))} onInc={() => setExtra(extra + 1)} />
                            <div className="text-xs text-right text-slate-400 mt-1">@ {fmt(perSession)}</div>
                        </div>
                    )}

                    {bundlingVal > 0 && (
                        <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer">
                            <input type="checkbox" checked={takeBundling} onChange={e => setTakeBundling(e.target.checked)} className="w-5 h-5 text-ultimate-blue rounded" />
                            <div className="flex-1">
                                <div className="text-sm font-bold text-slate-800">Bundling Test</div>
                            </div>
                            <div className="font-bold text-slate-900">{fmt(bundlingVal)}</div>
                        </label>
                    )}
                </div>
            )}

            <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-50 mb-5">
                <span>Total</span>
                <span className="text-ultimate-blue">{fmt(total)}</span>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-ultimate-blue text-white text-center rounded-xl font-bold shadow-lg hover:shadow-xl transition-all text-[15px]">
                Daftar Sekarang
            </a>
        </div>
    );
};

/* 
 * CUSTOM MODULE (From custom.html)
 */
const CustomModule = ({ pricingRow, programSlug }) => {
    // Logic: Local Package (3 sessions), Native Package (3 sessions), Consult (per session)
    const [localQty, setLocalQty] = useState(0);
    const [nativeQty, setNativeQty] = useState(0);
    const [konsulQty, setKonsulQty] = useState(0);

    const priceLocal3 = cleanNum(pricingRow?.tigasesil);
    const priceNative3 = cleanNum(pricingRow?.tigasesin);
    const priceKonsul = cleanNum(pricingRow?.persesi); // "per sesi" in Custom refers to Consult

    const total = (localQty / 3 * priceLocal3) + (nativeQty / 3 * priceNative3) + (konsulQty * priceKonsul);

    // Helpers to step by 3
    const step3 = (val, dir) => {
        let n = val + (dir === 'inc' ? 3 : -3);
        return Math.max(0, n);
    };

    const waLink = useMemo(() => {
        let lines = [];
        if (localQty > 0) lines.push(`Local Teacher: ${localQty} sesi (${localQty / 3} paket)`);
        if (nativeQty > 0) lines.push(`Native Teacher: ${nativeQty} sesi (${nativeQty / 3} paket)`);
        if (konsulQty > 0) lines.push(`Konsultasi: ${konsulQty} sesi`);

        const msg = `Halo Ultimate Education,\n\nSaya ingin mendaftar *Custom Class ${programSlug}*:\n${lines.map(l => '- ' + l).join('\n')}\n\nTotal: *${fmt(total)}*`;
        return `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(msg)}`;
    }, [localQty, nativeQty, konsulQty, programSlug, total]);

    if (!pricingRow) return <div className="text-center text-slate-400">Harga tidak tersedia.</div>;

    return (
        <div>
            <div className="bg-yellow-50 text-yellow-800 text-sm p-4 rounded-xl mb-6">
                Program Custom memungkinkan Anda menentukan jumlah sesi belajar sesuai kebutuhan (kelipatan 3 sesi).
            </div>

            <div className="space-y-4 mb-6">
                {priceLocal3 > 0 && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <label className="text-sm font-bold text-slate-700 block mb-1">Local Teacher</label>
                        <div className="text-xs text-slate-500 mb-2">Rp {fmt(priceLocal3)} / 3 sesi</div>
                        <div className="flex items-center justify-between">
                            <button onClick={() => setLocalQty(step3(localQty, 'dec'))} className="w-8 h-8 rounded-lg bg-white border shadow-sm font-bold text-slate-600">-</button>
                            <span className="font-bold text-slate-900">{localQty} sesi</span>
                            <button onClick={() => setLocalQty(step3(localQty, 'inc'))} className="w-8 h-8 rounded-lg bg-ultimate-blue text-white shadow-sm font-bold">+</button>
                        </div>
                    </div>
                )}

                {priceNative3 > 0 && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <label className="text-sm font-bold text-slate-700 block mb-1">Native Teacher</label>
                        <div className="text-xs text-slate-500 mb-2">Rp {fmt(priceNative3)} / 3 sesi</div>
                        <div className="flex items-center justify-between">
                            <button onClick={() => setNativeQty(step3(nativeQty, 'dec'))} className="w-8 h-8 rounded-lg bg-white border shadow-sm font-bold text-slate-600">-</button>
                            <span className="font-bold text-slate-900">{nativeQty} sesi</span>
                            <button onClick={() => setNativeQty(step3(nativeQty, 'inc'))} className="w-8 h-8 rounded-lg bg-ultimate-blue text-white shadow-sm font-bold">+</button>
                        </div>
                    </div>
                )}

                {priceKonsul > 0 && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <label className="text-sm font-bold text-slate-700 block mb-1">Konsultasi Beasiswa</label>
                        <div className="text-xs text-slate-500 mb-2">Rp {fmt(priceKonsul)} / sesi (kelipatan 3)</div>
                        <div className="flex items-center justify-between">
                            <button onClick={() => setKonsulQty(step3(konsulQty, 'dec'))} className="w-8 h-8 rounded-lg bg-white border shadow-sm font-bold text-slate-600">-</button>
                            <span className="font-bold text-slate-900">{konsulQty} sesi</span>
                            <button onClick={() => setKonsulQty(step3(konsulQty, 'inc'))} className="w-8 h-8 rounded-lg bg-ultimate-blue text-white shadow-sm font-bold">+</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-50 mb-5">
                <span>Total</span>
                <span className="text-ultimate-blue">{fmt(total)}</span>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 bg-ultimate-blue text-white text-center rounded-xl font-bold shadow-lg hover:shadow-xl transition-all text-[15px]">
                Daftar Sekarang
            </a>
        </div>
    );
};

/* 
 * BUNDLING MODULE (From combo.html)
 */
const BundlingModule = ({ pricingData }) => {
    // Selectors
    const allPrograms = useMemo(() => pricingData.map(r => r.program).sort(), [pricingData]);

    // State
    const [p1, setP1] = useState('');
    const [p1lvl, setP1Lvl] = useState('');
    const [p2, setP2] = useState('');
    const [p2lvl, setP2Lvl] = useState('');

    const [c1, setC1] = useState(0); // Additional classes
    const [c2, setC2] = useState(0);

    const [bundleOpt, setBundleOpt] = useState('0'); // 0, P1, P2, Both

    // Helpers
    const getRow = (name) => pricingData.find(r => r.program === name);
    const getPrice = (name, lvlKey) => cleanNum(getRow(name)?.[lvlKey]);
    const getPerSesi = (name) => cleanNum(getRow(name)?.persesi);
    const getBundling = (name) => {
        const row = getRow(name);
        const val = row?.bundling;
        if (isTBI(val)) return { mode: 'tbi', price: 0 };
        const n = cleanNum(val);
        return { mode: n > 0 ? 'fixed' : 'none', price: n };
    };

    // Derived
    const base1 = getPrice(p1, p1lvl);
    const base2 = getPrice(p2, p2lvl);
    const cost1 = c1 * getPerSesi(p1);
    const cost2 = c2 * getPerSesi(p2);

    // Bundling Cost
    let bundCost = 0;
    const b1Info = getBundling(p1);
    const b2Info = getBundling(p2);

    if (bundleOpt === 'P1' && b1Info.mode === 'fixed') bundCost += b1Info.price;
    if (bundleOpt === 'P2' && b2Info.mode === 'fixed') bundCost += b2Info.price;
    if (bundleOpt === 'Both') {
        if (b1Info.mode === 'fixed') bundCost += b1Info.price;
        if (b2Info.mode === 'fixed') bundCost += b2Info.price;
    }

    // Totals
    const REGFEE = 350000;
    const programCost = base1 + base2;
    // Discount logic based on combo.html:
    // "disbase = programCost + c1tot + c2tot"
    // "subtotalBeforeReg = disbase + bundTot"
    const subtotalBeforeReg = programCost + cost1 + cost2 + bundCost;
    const subtotal = subtotalBeforeReg + REGFEE;

    let discount = 0;
    let discLabel = '';
    if (subtotalBeforeReg >= 17000000) {
        discount = REGFEE + 1000000;
        discLabel = "Potongan Pendaftaran + Rp1.000.000";
    } else if (subtotalBeforeReg >= 14000000) {
        discount = REGFEE + 300000;
        discLabel = "Potongan Pendaftaran + Rp300.000";
    }

    const grandTotal = subtotal - discount;

    // WA
    const waLink = useMemo(() => {
        let msg = `Halo Ultimate Education,\nSaya ingin mengambil Program Bundling:\n\n`;
        msg += `Primary: ${p1} (${formatLevel(p1lvl)}) - ${fmt(base1)}\n`;
        if (p2) msg += `Secondary: ${p2} (${formatLevel(p2lvl)}) - ${fmt(base2)}\n`;
        if (c1 > 0) msg += `Extra P1: ${c1} sesi - ${fmt(cost1)}\n`;
        if (c2 > 0) msg += `Extra P2: ${c2} sesi - ${fmt(cost2)}\n`;
        if (bundleOpt !== '0') msg += `Bundling Test Option: ${bundleOpt}\n`;

        msg += `\nBiaya Daftar: ${fmt(REGFEE)}`;
        if (discount > 0) msg += `\nDiscount: -${fmt(discount)} (${discLabel})`;
        msg += `\n\nTotal: *${fmt(grandTotal)}*`;

        return `https://api.whatsapp.com/send/?phone=${WA_NUMBER}&text=${encodeURIComponent(msg)}`;
    }, [p1, p1lvl, p2, p2lvl, c1, c2, bundleOpt, grandTotal]);


    const HAS_P1 = !!p1 && !!p1lvl;

    return (
        <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Form Side */}
            <div className="lg:w-[65%] p-6 md:p-10 bg-white">
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Build Your Bundle</h3>
                    <p className="text-slate-500">Pilih kombinasi program untuk mendapatkan harga spesial.</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                    <h4 className="font-bold text-ultimate-blue mb-4">Primary Program</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <select className="p-3 rounded-xl border border-slate-200" value={p1} onChange={e => setP1(e.target.value)}>
                            <option value="">Pilih Program</option>
                            {allPrograms.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        <select className="p-3 rounded-xl border border-slate-200" value={p1lvl} onChange={e => setP1Lvl(e.target.value)} disabled={!p1}>
                            <option value="">Pilih Level</option>
                            <LevelOptions row={getRow(p1)} />
                        </select>
                    </div>
                </div>

                {HAS_P1 && (
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
                        <h4 className="font-bold text-slate-600 mb-4">Secondary Program (Optional)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <select className="p-3 rounded-xl border border-slate-200" value={p2} onChange={e => setP2(e.target.value)}>
                                <option value="">Pilih Program (Optional)</option>
                                {allPrograms.filter(x => x !== p1).map(p => <option key={p} value={p}>{p}</option>)}
                            </select>
                            <select className="p-3 rounded-xl border border-slate-200" value={p2lvl} onChange={e => setP2Lvl(e.target.value)} disabled={!p2}>
                                <option value="">Pilih Level</option>
                                <LevelOptions row={getRow(p2)} />
                            </select>
                        </div>
                    </div>
                )}

                {/* Extras */}
                {HAS_P1 && (
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-600 mb-4">Tambahan Kelas & Ujian</h4>
                        <div className="space-y-4">
                            <CounterRow label={`Extra Kelas (${p1})`} value={c1} onDec={() => setC1(Math.max(0, c1 - 1))} onInc={() => setC1(c1 + 1)} />
                            {p2 && <CounterRow label={`Extra Kelas (${p2})`} value={c2} onDec={() => setC2(Math.max(0, c2 - 1))} onInc={() => setC2(c2 + 1)} />}

                            <div className="pt-4 border-t border-slate-200">
                                <label className="block text-sm font-bold text-slate-600 mb-2">Bundling Test Option</label>
                                <select className="w-full p-2 border border-slate-200 rounded-lg" value={bundleOpt} onChange={e => setBundleOpt(e.target.value)}>
                                    <option value="0">No Bundling Test</option>
                                    {b1Info.mode !== 'none' && <option value="P1">Test for {p1}</option>}
                                    {b2Info.mode !== 'none' && <option value="P2">Test for {p2}</option>}
                                    {(b1Info.mode !== 'none' && b2Info.mode !== 'none') && <option value="Both">Both Tests</option>}
                                </select>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Receipt Side */}
            <div className="lg:w-[35%] bg-slate-100 p-6 md:p-10 border-l border-slate-200">
                <div className="sticky top-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4 border-slate-200">Ringkasan Biaya</h3>

                    {!HAS_P1 ? (
                        <div className="text-slate-400 text-center py-10">Pilih program utama untuk melihat ringkasan.</div>
                    ) : (
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span>{p1}</span>
                                <span className="font-bold">{fmt(base1)}</span>
                            </div>
                            {p2 && (
                                <div className="flex justify-between">
                                    <span>{p2}</span>
                                    <span className="font-bold">{fmt(base2)}</span>
                                </div>
                            )}
                            {(c1 > 0 || c2 > 0) && (
                                <div className="flex justify-between text-slate-600">
                                    <span>Extra Classes</span>
                                    <span>{fmt(cost1 + cost2)}</span>
                                </div>
                            )}
                            {bundCost > 0 && (
                                <div className="flex justify-between text-slate-600">
                                    <span>Bundling Tests</span>
                                    <span>{fmt(bundCost)}</span>
                                </div>
                            )}

                            <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between">
                                <span>Biaya Daftar</span>
                                <span>{fmt(REGFEE)}</span>
                            </div>

                            {discount > 0 && (
                                <div className="flex justify-between text-green-600 font-bold">
                                    <span>Discount</span>
                                    <span>-{fmt(discount)}</span>
                                </div>
                            )}

                            <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between text-lg font-bold text-ultimate-blue">
                                <span>Total</span>
                                <span>{fmt(grandTotal)}</span>
                            </div>

                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full mt-6 py-4 bg-ultimate-blue text-white text-center rounded-xl font-bold shadow-xl hover:bg-ultimate-navy transition-all">
                                Daftar via WhatsApp
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Utils for sub-components
const LevelOptions = ({ row }) => {
    if (!row) return null;
    return (
        <>
            {cleanNum(row.bronzeg) > 0 && <option value="bronzeg">Group - Bronze</option>}
            {cleanNum(row.silverg) > 0 && <option value="silverg">Group - Silver</option>}
            {cleanNum(row.silver) > 0 && <option value="silver">Private - Silver</option>}
            {cleanNum(row.gold) > 0 && <option value="gold">Private - Gold</option>}
            {cleanNum(row.premium) > 0 && <option value="premium">Private - Premium</option>}
        </>
    );
};

const formatLevel = (key) => {
    const map = {
        bronzeg: 'Group Bronze', silverg: 'Group Silver',
        silver: 'Private Silver', gold: 'Private Gold', premium: 'Private Premium'
    };
    return map[key] || key;
};

const CounterRow = ({ label, value, onDec, onInc }) => (
    <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-600">{label}</span>
        <div className="flex items-center gap-2">
            <button onClick={onDec} disabled={value <= 0} className="w-8 h-8 rounded-lg border bg-white disabled:bg-slate-100 flex items-center justify-center font-bold">-</button>
            <span className="text-sm font-bold w-6 text-center">{value}</span>
            <button onClick={onInc} className="w-8 h-8 rounded-lg bg-ultimate-blue text-white flex items-center justify-center font-bold">+</button>
        </div>
    </div>
);

const CurriculumList = ({ features }) => {
    const [openIdx, setOpenIdx] = useState(null);
    if (!features || !features.length) return null;

    return (
        <>
            <h4 className="text-lg font-heading font-bold text-slate-900 mb-5">
                Cuplikan Materi Pembelajaran
            </h4>
            <div className="space-y-3">
                {features.map((item, idx) => (
                    <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden transition-colors">
                        <button
                            className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-slate-50/50 hover:bg-slate-50 transition-colors"
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        >
                            <span className="font-semibold text-slate-800 text-[15px]">{item.title}</span>
                            <svg className={`w-5 h-5 text-ultimate-blue shrink-0 ml-4 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-200 ${openIdx === idx ? 'max-h-96' : 'max-h-0'}`}>
                            <div className="p-4 md:p-5 text-slate-600 border-t border-slate-100 text-[15px] leading-relaxed whitespace-pre-line text-justify">
                                {normalizeTextBlock(item.content)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProgramPricingTabs;
