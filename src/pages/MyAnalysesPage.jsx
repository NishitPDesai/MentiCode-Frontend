import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    Code2,
    BarChart3,
    User,
    Search,
    Filter,
    Rocket,
    BarChart,
    ChevronDown,
    Folder,
    AlertTriangle,
    CheckCircle2,
    ShieldCheck,
    ArrowRight,
    CircleSlash,
    Database,
    LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MyAnalysesPage = () => {
    const [activeTab, setActiveTab] = useState('My Analyses');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Playgrounds', path: '/playgrounds', icon: <Rocket size={20} /> },
        { name: 'My Analyses', path: '/my-analyses', icon: <BarChart size={20} /> },
    ];

    return (
        <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-dark)', color: 'white', overflow: 'hidden' }}>

            {/* Main Content */}
            <main style={{ flex: 1, overflowY: 'auto', background: '#0f172a', position: 'relative' }}>
                {/* Loading Overlay */}
                {isLoading && (
                    <div style={{ position: 'absolute', inset: 0, background: '#0f172a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
                        <div style={{ width: '48px', height: '48px', border: '4px solid rgba(16, 185, 129, 0.1)', borderTopColor: '#10b981', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                        <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px' }}>FETCHING REPORTS...</p>
                        <style>{`
                            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        `}</style>
                    </div>
                )}

                {/* Header */}
                <header style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 10, background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)', opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}>
                    <div>
                        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                            Analysis History <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>& Reports</span>
                        </h1>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="text"
                                placeholder="Search audits..."
                                style={{ width: '250px', padding: '10px 16px 10px 44px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'white', outline: 'none', fontSize: '0.9rem' }}
                            />
                        </div>
                        <button style={{ padding: '10px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'white', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <Filter size={16} /> Filter
                        </button>
                    </div>
                </header>

                <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px', opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}>

                    {/* MY ANALYSES List */}
                    <section>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.5px', margin: '0 0 8px 0', textTransform: 'uppercase' }}>MY ANALYSES</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>Review your historical code audits and production readiness scores.</p>
                            </div>
                            <button style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
                                SORT BY: <span style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>Recent First <ChevronDown size={14} /></span>
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                            {/* Analysis Card 1 */}
                            <div style={{ borderRadius: '16px', background: '#111827', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', display: 'flex', alignItems: 'center', gap: '40px', transition: 'all 0.2s ease', cursor: 'pointer' }} className="hover-lift">
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flex: 1 }}>
                                    <div style={{ color: '#3b82f6', marginTop: '4px' }}>
                                        <Folder size={24} fill="currentColor" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px 0', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            mentic-core-engine
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            Oct 24, 2023 • 14:30
                                        </div>
                                    </div>
                                </div>

                                {/* Score Ring */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--accent-green)" strokeWidth="3" strokeDasharray="90, 100" />
                                        </svg>
                                        <span style={{ position: 'absolute', fontWeight: 800, fontSize: '0.9rem' }}>90%</span>
                                    </div>
                                    <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '1px' }}>READINESS</span>
                                </div>

                                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '0.7rem', color: 'var(--accent-green)', fontWeight: 800, letterSpacing: '1px', marginBottom: '12px', textTransform: 'uppercase' }}>Key Wins</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                                <CheckCircle2 size={14} color="var(--accent-green)" /> Optimized SQL
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                                <CheckCircle2 size={14} color="var(--accent-green)" /> Type Safety
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.7rem', color: 'var(--error)', fontWeight: 800, letterSpacing: '1px', marginBottom: '12px', textTransform: 'uppercase' }}>Issues</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                                <AlertTriangle size={14} color="#facc15" /> Memory Leak
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                                    <span style={{ padding: '6px 12px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.5px' }}>SECURE</span>
                                    <Link to="/analyzer" style={{ padding: '10px 20px', borderRadius: '10px', background: 'var(--accent-blue)', color: 'white', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                                        View Full Report <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Analysis Card 2 */}
                            <div style={{ borderRadius: '16px', background: '#111827', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', display: 'flex', alignItems: 'center', gap: '40px', transition: 'all 0.2s ease', cursor: 'pointer' }} className="hover-lift">
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flex: 1 }}>
                                    <div style={{ color: '#f97316', marginTop: '4px', fontWeight: 800, fontSize: '1.2rem' }}>
                                        &lt;&gt;
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px 0', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            frontend-ui-kit
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            Oct 21, 2023 • 09:15
                                        </div>
                                    </div>
                                </div>

                                {/* Score Ring */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#facc15" strokeWidth="3" strokeDasharray="62, 100" />
                                        </svg>
                                        <span style={{ position: 'absolute', fontWeight: 800, fontSize: '0.9rem' }}>62%</span>
                                    </div>
                                    <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '1px' }}>READINESS</span>
                                </div>

                                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '0.7rem', color: 'var(--accent-green)', fontWeight: 800, letterSpacing: '1px', marginBottom: '12px', textTransform: 'uppercase' }}>Key Wins</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                                <CheckCircle2 size={14} color="var(--accent-green)" /> Mobile Friendly
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.7rem', color: 'var(--error)', fontWeight: 800, letterSpacing: '1px', marginBottom: '12px', textTransform: 'uppercase' }}>Issues</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                                <CircleSlash size={14} color="var(--error)" /> CSS Bloat
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                                <CircleSlash size={14} color="var(--error)" /> Accessibility
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                                    <span style={{ padding: '6px 12px', borderRadius: '12px', border: '1px solid rgba(250, 204, 21, 0.3)', color: '#facc15', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.5px' }}>NEEDS REFACTOR</span>
                                    <button style={{ padding: '10px 20px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', color: 'white', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                                        View Full Report <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Analysis Card 3 */}
                            <div style={{ borderRadius: '16px', background: '#111827', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', display: 'flex', alignItems: 'center', gap: '40px', transition: 'all 0.2s ease', cursor: 'pointer' }} className="hover-lift">
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flex: 1 }}>
                                    <div style={{ color: '#10b981', marginTop: '4px' }}>
                                        <Database size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px 0', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            data-pipeline-utils
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            Oct 15, 2023 • 18:45
                                        </div>
                                    </div>
                                </div>

                                {/* Score Ring */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ position: 'relative', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--accent-green)" strokeWidth="3" strokeDasharray="92, 100" />
                                        </svg>
                                        <span style={{ position: 'absolute', fontWeight: 800, fontSize: '0.9rem' }}>92%</span>
                                    </div>
                                    <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '1px' }}>READINESS</span>
                                </div>

                                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '0.7rem', color: 'var(--accent-green)', fontWeight: 800, letterSpacing: '1px', marginBottom: '12px', textTransform: 'uppercase' }}>Key Wins</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                                <CheckCircle2 size={14} color="var(--accent-green)" /> High Coverage
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                                                <CheckCircle2 size={14} color="var(--accent-green)" /> Clean Schemas
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 800, letterSpacing: '1px', marginBottom: '12px', textTransform: 'uppercase' }}>Issues</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>No critical issues</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px' }}>
                                    <span style={{ padding: '6px 12px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.5px' }}>PRODUCTION READY</span>
                                    <button style={{ padding: '10px 20px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', color: 'white', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                                        View Full Report <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Summary */}
                    <section style={{ display: 'flex', gap: '24px', background: '#111827', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '32px' }}>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <LineChart size={28} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 4px 0' }}>48</h3>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '1px', margin: 0 }}>TOTAL AUDITS</p>
                            </div>
                        </div>

                        <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 4px 0' }}>84%</h3>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '1px', margin: 0 }}>AVG READINESS</p>
                            </div>
                        </div>

                        <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>

                        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Monthly Usage</span>
                                <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>32 / 100 Reports</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '32%', height: '100%', background: 'var(--accent-blue)' }}></div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default MyAnalysesPage;
