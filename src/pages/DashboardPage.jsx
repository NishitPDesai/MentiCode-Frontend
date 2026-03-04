import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    Code2,
    BarChart3,
    User,
    Settings,
    Bell,
    Search,
    ChevronLeft,
    ChevronRight,
    RefreshCw,
    Filter,
    Rocket,
    BarChart,
    ChevronUp,
    ChevronDown,
    CheckCircle2,
    RefreshCcw,
    Code,
    Plus,
    GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [expandedRepo, setExpandedRepo] = useState('mentic-core-engine');
    const [activeFilter, setActiveFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [playgrounds, setPlaygrounds] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('playgrounds') || '[]');
        setPlaygrounds(stored);
        // Simulate network loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const toggleRepo = (repo) => {
        setExpandedRepo(expandedRepo === repo ? null : repo);
    };

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Analyses', path: '/dev/my-analyses', icon: <BarChart size={20} /> },
        { name: 'Courses', path: '/learn/courses', icon: <GraduationCap size={20} /> },
    ];

    return (
        <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-dark)', color: 'white', overflow: 'hidden' }}>
            {/* Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} navItems={navItems} /> 

            {/* Main Content */}
            <main style={{ flex: 1, overflowY: 'auto', background: '#0f172a', position: 'relative' }}>
                {/* Loading Overlay */}
                {isLoading && (
                    <div style={{ position: 'absolute', inset: 0, background: '#0f172a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
                        <div style={{ width: '48px', height: '48px', border: '4px solid rgba(56, 189, 248, 0.1)', borderTopColor: '#38bdf8', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                        <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px' }}>LOADING DATA...</p>
                        <style>{`
                            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        `}</style>
                    </div>
                )}

                {/* Header */}
                <header style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 10, background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(10px)', opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}>
                    <div>
                        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                            Repository & Playground <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Dashboard</span>
                        </h1>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', fontWeight: 600 }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
                            {playgrounds.length} Active Playgrounds
                        </div>
                        <div style={{ position: 'relative', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                            <Bell size={20} />
                            <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', background: 'var(--accent-blue)', borderRadius: '50%', border: '2px solid #0f172a' }}></div>
                        </div>
                    </div>
                </header>

                <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>

                    {/* ACTIVE PLAYGROUNDS SECTION */}
                    <section>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '0.5px', margin: 0 }}>
                                    ACTIVE PLAYGROUNDS
                                    <span style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>NEW</span>
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px', margin: 0 }}>Continue where you left off in your ephemeral coding sessions.</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', padding: '6px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                                    Count: <span style={{ color: 'white' }}>{playgrounds.length}</span>
                                </span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '16px' }}>
                            {/* Start New Playground Card */}
                            <Link to="/create-playground" style={{ minWidth: '280px', height: '200px', borderRadius: '16px', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', textDecoration: 'none', color: 'white', background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(139, 92, 246, 0.1))', transition: 'all 0.2s ease', cursor: 'pointer', boxShadow: '0 10px 30px -10px rgba(56, 189, 248, 0.2)' }} className="hover-lift">
                                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 8px 16px rgba(56, 189, 248, 0.4)' }}>
                                    <Plus size={28} />
                                </div>
                                <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.5px' }}>Start New Playground</span>
                            </Link>

                            {/* Active Sessions */}
                            {playgrounds.map(pg => {
                                const timeMins = Math.floor((new Date() - new Date(pg.createdAt)) / 60000);
                                const timeStr = timeMins < 60 ? `${timeMins || 1}m ago` : `${Math.floor(timeMins / 60)}h ago`;
                                return (
                                    <div key={pg.id} style={{ minWidth: '320px', height: '200px', borderRadius: '16px', background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${pg.template.color}20`, color: pg.template.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {/* In a real app we'd map icons back, using Code fallback */}
                                                <Code size={20} />
                                            </div>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{timeStr}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{pg.name}</h3>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0, flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{pg.template.name} Environment</p>
                                        <Link to="/playground" style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: 'auto', transition: 'all 0.2s ease', cursor: 'pointer', textDecoration: 'none' }} className="hover-lift">
                                            Open Playground <Code size={14} />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* MY REPOSITORIES SECTION */}
                    <section>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.5px', margin: 0 }}>MY REPOSITORIES</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px', margin: 0 }}>Your connected GitHub sources ready for deep analysis.</p>
                            </div>
                            <button style={{ padding: '10px 20px', borderRadius: '8px', background: 'white', color: '#0f172a', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none' }}>
                                <RefreshCw size={16} /> Refresh Sources
                            </button>
                        </div>

                        {/* Search and Filter */}
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                            <div style={{ flex: 1, position: 'relative' }}>
                                <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                                <input
                                    type="text"
                                    placeholder="Search your repositories..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{ width: '100%', padding: '14px 16px 14px 48px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'white', outline: 'none', fontSize: '0.95rem' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '6px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                {['All', 'Backend', 'Frontend'].map(f => (
                                    <button
                                        key={f}
                                        onClick={() => setActiveFilter(f)}
                                        style={{
                                            padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600,
                                            background: activeFilter === f ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                                            color: activeFilter === f ? '#38bdf8' : 'var(--text-secondary)',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Repository List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                            {/* Repo Card 1 */}
                            {(activeFilter === 'All' || activeFilter === 'Backend') && ('mentic-core-engine'.includes(searchQuery.toLowerCase())) && (
                                <div style={{ borderRadius: '16px', background: '#111827', border: expandedRepo === 'mentic-core-engine' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                                    {/* Header */}
                                    <div onClick={() => toggleRepo('mentic-core-engine')} style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                                                <Code2 size={24} />
                                            </div>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>mentic-core-engine</h3>
                                                    <span style={{ padding: '2px 6px', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700 }}>TS</span>
                                                </div>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>The core processing logic for real-time code analysis and playground sync.</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontWeight: 700, fontSize: '1rem' }}>
                                                    ★ 1.2k
                                                </div>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '1px', marginTop: '2px' }}>STARS</div>
                                            </div>
                                            {expandedRepo === 'mentic-core-engine' ? <ChevronUp size={20} color="var(--text-secondary)" /> : <ChevronDown size={20} color="var(--text-secondary)" />}
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    {expandedRepo === 'mentic-core-engine' && (
                                        <div style={{ padding: '0 24px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px', paddingTop: '24px' }}>

                                            {/* Left Col: Basic Details */}
                                            <div>
                                                <h4 style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', margin: 0, paddingBottom: '16px' }}>BASIC DETAILS</h4>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <span style={{ color: 'var(--text-secondary)' }}>Primary Languages</span>
                                                        <span style={{ fontWeight: 600 }}>TypeScript (92%), CSS</span>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <span style={{ color: 'var(--text-secondary)' }}>Total Files</span>
                                                        <span style={{ fontWeight: 600 }}>248</span>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <span style={{ color: 'var(--text-secondary)' }}>Recent Commits</span>
                                                        <span style={{ fontWeight: 600 }}>14 (Last 7 days)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Col: Health Summary & Action */}
                                            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>
                                                        "Analysis suggest high complexity in the /src/core/parser module. Ready to optimize using Mentic patterns."
                                                    </p>
                                                    <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                                                            <CheckCircle2 size={16} color="var(--accent-green)" /> Clean Logic
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                                                            <CheckCircle2 size={16} color="var(--accent-green)" /> Security OK
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-blue)' }}>
                                                            <RefreshCcw size={16} /> Active Maint.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div style={{ display: 'flex', gap: '12px' }}>
                                                    <Link to="/playground" style={{ flex: 1, padding: '14px', borderRadius: '10px', background: '#3b82f6', color: '#fff', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }} className="hover-lift">
                                                        SEND TO PLAYGROUND
                                                    </Link>
                                                    <button style={{ width: '48px', height: '48px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                        <Settings size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Repo Card 2 */}
                            {(activeFilter === 'All' || activeFilter === 'Frontend') && ('frontend-ui-kit'.includes(searchQuery.toLowerCase())) && (
                                <div style={{ borderRadius: '16px', background: '#111827', border: expandedRepo === 'frontend-ui-kit' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255,255,255,0.05)' }}>
                                    <div onClick={() => toggleRepo('frontend-ui-kit')} style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(249, 115, 22, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}>
                                                <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>&lt;&gt;</span>
                                            </div>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>frontend-ui-kit</h3>
                                                    <span style={{ padding: '2px 6px', background: 'rgba(249, 115, 22, 0.1)', color: '#f97316', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700 }}>JS</span>
                                                </div>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>A collection of accessible and reusable components for web apps.</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontWeight: 700, fontSize: '1rem' }}>
                                                    ★ 428
                                                </div>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '1px', marginTop: '2px' }}>STARS</div>
                                            </div>
                                            {expandedRepo === 'frontend-ui-kit' ? <ChevronUp size={20} color="var(--text-secondary)" /> : <ChevronDown size={20} color="var(--text-secondary)" />}
                                        </div>
                                    </div>
                                    {expandedRepo === 'frontend-ui-kit' && (
                                        <div style={{ padding: '0 24px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px', paddingTop: '24px' }}>
                                            <div>
                                                <h4 style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', margin: 0, paddingBottom: '16px' }}>BASIC DETAILS</h4>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <span style={{ color: 'var(--text-secondary)' }}>Primary Languages</span>
                                                        <span style={{ fontWeight: 600 }}>JavaScript (95%)</span>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <span style={{ color: 'var(--text-secondary)' }}>Total Files</span>
                                                        <span style={{ fontWeight: 600 }}>45</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>
                                                        "UI checks passed. Needs more unit tests."
                                                    </p>
                                                </div>
                                                <div style={{ display: 'flex', gap: '12px' }}>
                                                    <Link to="/playground" style={{ flex: 1, padding: '14px', borderRadius: '10px', background: '#3b82f6', color: '#fff', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }} className="hover-lift">
                                                        SEND TO PLAYGROUND
                                                    </Link>
                                                    <button style={{ width: '48px', height: '48px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                        <Settings size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Repo Card 3 */}
                            {(activeFilter === 'All' || activeFilter === 'Backend') && ('data-pipeline-utils'.includes(searchQuery.toLowerCase())) && (
                                <div style={{ borderRadius: '16px', background: '#111827', border: expandedRepo === 'data-pipeline-utils' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255,255,255,0.05)' }}>
                                    <div onClick={() => toggleRepo('data-pipeline-utils')} style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                                    <div style={{ width: '12px', height: '4px', background: 'currentColor', borderRadius: '2px' }}></div>
                                                    <div style={{ width: '18px', height: '4px', background: 'currentColor', borderRadius: '2px' }}></div>
                                                    <div style={{ width: '12px', height: '4px', background: 'currentColor', borderRadius: '2px' }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>data-pipeline-utils</h3>
                                                    <span style={{ padding: '2px 6px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700 }}>PY</span>
                                                </div>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Streamlining ETL processes and data validation schemas.</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontWeight: 700, fontSize: '1rem' }}>
                                                    ★ 82
                                                </div>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '1px', marginTop: '2px' }}>STARS</div>
                                            </div>
                                            {expandedRepo === 'data-pipeline-utils' ? <ChevronUp size={20} color="var(--text-secondary)" /> : <ChevronDown size={20} color="var(--text-secondary)" />}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {expandedRepo === 'data-pipeline-utils' && (
                                <div style={{ padding: '0 24px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px', paddingTop: '24px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '1px', marginBottom: '16px', margin: 0, paddingBottom: '16px' }}>BASIC DETAILS</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: 'var(--text-secondary)' }}>Primary Languages</span>
                                                <span style={{ fontWeight: 600 }}>Python (98%)</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ color: 'var(--text-secondary)' }}>Total Files</span>
                                                <span style={{ fontWeight: 600 }}>24</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>
                                                "No major issues found. Fast and reliable."
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '12px' }}>
                                            <Link to="/playground" style={{ flex: 1, padding: '14px', borderRadius: '10px', background: '#3b82f6', color: '#fff', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }} className="hover-lift">
                                                SEND TO PLAYGROUND
                                            </Link>
                                            <button style={{ width: '48px', height: '48px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                                <Settings size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

// Helper component for simple internal icons
const DatabaseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);

export default DashboardPage;
