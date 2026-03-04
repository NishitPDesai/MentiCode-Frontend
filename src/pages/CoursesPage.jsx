import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    GraduationCap,
    BarChart3,
    Code2,
    Settings,
    Search,
    Flame,
    Bell,
    Play,
    Filter,
    Zap,
    Bot,
    Network,
    ArrowRight,
    Star,
    Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ display: 'flex', height: '100vh', background: '#0B1120', color: 'white', overflow: 'hidden', fontFamily: '"Inter", sans-serif' }}>

            {/* Main Content Area */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden', position: 'relative' }}>
                {/* Loading Overlay */}
                {isLoading && (
                    <div style={{ position: 'absolute', inset: 0, background: '#0B1120', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
                        <div style={{ width: '48px', height: '48px', border: '4px solid rgba(56, 189, 248, 0.1)', borderTopColor: '#3B82F6', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                        <p style={{ marginTop: '16px', color: '#94A3B8', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px' }}>LOADING EXPERIENCE...</p>
                        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                )}

                {/* Top Nav Bar */}
                <header style={{ height: '70px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', zIndex: 10, opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}>
                    <div style={{ flex: 1, maxWidth: '500px', position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                        <input
                            type="text"
                            placeholder="Search courses, tracks, or languages..."
                            style={{ width: '100%', background: '#1E293B', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '10px 16px 10px 44px', color: 'white', fontSize: '0.9rem', outline: 'none' }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginLeft: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1E293B', padding: '6px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Flame size={16} color="#F97316" fill="#F97316" />
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white' }}>5 DAY STREAK</span>
                        </div>
                        <button style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer', position: 'relative' }}>
                            <Bell size={20} />
                            <span style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%' }}></span>
                        </button>
                        <Link to="/profile" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer', border: '2px solid rgba(255,255,255,0.1)' }}>
                            <svg viewBox="0 0 36 36" fill="none" style={{ width: '100%', height: '100%', transform: 'translateY(6px)' }}>
                                <circle cx="18" cy="12" r="6" fill="#047857" />
                                <path d="M6 36C6 29.3726 11.3726 24 18 24C24.6274 24 30 29.3726 30 36" fill="#047857" />
                            </svg>
                        </Link>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '40px', opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}>

                    {/* Continue Learning Banner */}
                    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0F172A, #1E293B)', borderRadius: '24px', padding: '200px', display: 'flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}>
                        <div style={{ flex: 1, zIndex: 10 }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 12px', background: '#3B82F6', color: 'white', fontSize: '0.65rem', fontWeight: 800, borderRadius: '999px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Current Track
                            </div>
                            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: '"Outfit", sans-serif', margin: '0 0 8px 0', color: 'white' }}>Python for Beginners</h2>
                            <p style={{ color: '#94A3B8', fontSize: '1rem', margin: '0 0 32px 0', maxWidth: '500px', lineHeight: 1.6 }}>
                                You're making great progress! Continue where you left off at <span style={{ color: 'white', fontWeight: 600 }}>CSS Grid Layouts</span>.
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '32px' }}>
                                <div style={{ flex: 1, maxWidth: '280px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 800, marginBottom: '8px', color: 'white' }}>
                                        <span>PROGRESS</span>
                                        <span>65%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ height: '100%', background: '#3B82F6', width: '65%', boxShadow: '0 0 10px rgba(59,130,246,0.5)' }}></div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>Estimated</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>12h Left</div>
                                </div>
                            </div>

                            <Link to="/course/1" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '0.95rem', fontWeight: 600, background: '#3B82F6', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', textDecoration: 'none', boxShadow: '0 4px 14px 0 rgba(59,130,246,0.39)' }} className="hover-lift">
                                <Play size={18} fill="currentColor" /> Resume Learning
                            </Link>
                        </div>

                        {/* Background / Floating elements */}
                        <div style={{ position: 'absolute', top: '24px', right: '24px', width: '64px', height: '64px', background: '#0B1120', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(12deg)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)', zIndex: 1 }}>
                            <Star size={32} color="#FACC15" fill="#FACC15" />
                        </div>
                        <div style={{ position: 'absolute', right: '80px', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, pointerEvents: 'none' }}>
                            <Code size={200} color="#3B82F6" strokeWidth={1.5} />
                        </div>
                    </section>

                    <div style={{ display: 'flex', gap: '40px', flexDirection: 'row' }}>
                        {/* Filters Sidebar */}
                        <aside style={{ width: '256px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Filter size={18} color="#3B82F6" /> Languages
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {['JavaScript', 'Python', 'Java', 'C++ / C', 'TypeScript'].map(lang => (
                                        <label key={lang} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '0.85rem', color: lang === 'C++ / C' ? 'white' : '#94A3B8' }}>
                                            <input type="checkbox" defaultChecked={lang === 'C++ / C'} style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', accentColor: '#3B82F6' }} />
                                            {lang}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', width: '100%' }}></div>

                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Zap size={18} color="#3B82F6" /> Difficulty
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {['Beginner', 'Intermediate', 'Advanced'].map(diff => (
                                        <label key={diff} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '0.85rem', color: diff === 'Beginner' ? 'white' : '#94A3B8' }}>
                                            <input type="radio" name="diff" defaultChecked={diff === 'Beginner'} style={{ width: '16px', height: '16px', accentColor: '#3B82F6' }} />
                                            {diff}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div style={{ background: '#1E293B', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <h4 style={{ fontWeight: 800, color: 'white', marginBottom: '8px', fontSize: '1rem' }}>Daily Challenge</h4>
                                <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.5 }}>Solve a React hook problem and earn bonus +150 XP!</p>
                                <button style={{ width: '100%', padding: '10px', background: 'white', color: '#3B82F6', fontSize: '0.8rem', fontWeight: 800, borderRadius: '8px', border: 'none', cursor: 'pointer' }} className="hover-lift">
                                    START NOW
                                </button>
                            </div>
                        </aside>

                        {/* Courses Grid border */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>Recommended for You</h2>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Sort by:</span>
                                    <select style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '0.8rem', fontWeight: 700, outline: 'none', cursor: 'pointer' }}>
                                        <option>Most Popular</option>
                                        <option>Newest</option>
                                        <option>Easiest</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>

                                {/* Course Card 1 */}
                                <Link to="/course/1" className="hover-lift" style={{ borderRadius: '16px', padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer', background: '#1E293B', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ padding: '24px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                            <div style={{ width: '48px', height: '48px', background: '#0F172A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                                                <Bot size={24} />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 700, background: 'rgba(59, 130, 246, 0.1)', padding: '4px 10px', borderRadius: '999px', color: '#60A5FA' }}>+500 XP</span>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>8 MODULES</span>
                                            </div>
                                        </div>
                                        <h3 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '12px', color: 'white' }}>Python for Beginners</h3>
                                        <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '32px', lineHeight: 1.6 }}>Master the fundamentals of Python through gamified challenges and logic automation puzzles.</p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', fontWeight: 800 }}>
                                                <span style={{ color: '#64748B', textTransform: 'uppercase' }}>PROGRESS</span>
                                                <span style={{ color: 'white' }}>0%</span>
                                            </div>
                                            <div style={{ width: '100%', height: '4px', background: '#0F172A', borderRadius: '2px', overflow: 'hidden' }}>
                                                <div style={{ height: '100%', background: '#3B82F6', width: '0%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 'auto', padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase' }}>
                                            <div style={{ width: '6px', height: '6px', background: '#10B981', borderRadius: '50%' }}></div> BEGINNER
                                        </span>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            Start Track <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </Link>

                                {/* Course Card 2 */}
                                <Link to="/course/2" className="hover-lift" style={{ borderRadius: '16px', padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden', cursor: 'pointer', background: '#1E293B', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ padding: '24px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                            <div style={{ width: '48px', height: '48px', background: '#0F172A', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                                                <Network size={24} />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 700, background: 'rgba(59, 130, 246, 0.1)', padding: '4px 10px', borderRadius: '999px', color: '#60A5FA' }}>+850 XP</span>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>15 MODULES</span>
                                            </div>
                                        </div>
                                        <h3 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '12px', color: 'white' }}>Data Structures Mastery</h3>
                                        <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '32px', lineHeight: 1.6 }}>In-depth guide to efficient algorithms, memory management and data optimization in C++.</p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', fontWeight: 800 }}>
                                                <span style={{ color: '#64748B', textTransform: 'uppercase' }}>PROGRESS</span>
                                                <span style={{ color: 'white' }}>15%</span>
                                            </div>
                                            <div style={{ width: '100%', height: '4px', background: '#0F172A', borderRadius: '2px', overflow: 'hidden' }}>
                                                <div style={{ height: '100%', background: '#3B82F6', width: '15%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 'auto', padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#FACC15', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase' }}>
                                            <div style={{ width: '6px', height: '6px', background: '#FACC15', borderRadius: '50%' }}></div> INTERMEDIATE
                                        </span>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            Resume Track <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CoursesPage;
