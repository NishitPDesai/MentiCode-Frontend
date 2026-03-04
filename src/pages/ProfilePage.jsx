import React, { useState } from 'react';
import {
    LayoutDashboard,
    GraduationCap,
    BarChart3,
    Code2,
    Settings,
    User,
    Terminal as ConsoleIcon,
    Award,
    Flame,
    Clock,
    CheckCircle2,
    AlertTriangle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProfilePage = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Courses', path: '/courses', icon: <GraduationCap size={20} /> },
        { name: 'Leaderboard', path: '#', icon: <BarChart3 size={20} /> },
        { name: 'Code Analysis', path: '/analyzer', icon: <Code2 size={20} /> },
    ];

    const [showSettingsModal, setShowSettingsModal] = useState(false);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%', background: 'var(--bg-dark)' }}>
            {/* Sidebar (Shared) */}
            <aside style={{ width: '280px', borderRight: '1px solid var(--border-color)', padding: '32px 24px', display: 'flex', flexDirection: 'column' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px', textDecoration: 'none', color: 'white' }}>
                    <div className="glass" style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-blue)', color: 'white' }}>
                        <Code2 size={24} />
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>Mentic Code</span>
                </Link>

                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`nav-item ${currentPath === item.path ? 'active' : ''}`}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                                borderRadius: '12px', color: currentPath === item.path ? 'white' : 'var(--text-secondary)',
                                textDecoration: 'none', fontWeight: 500,
                                backgroundColor: currentPath === item.path ? 'var(--accent-blue)' : 'transparent',
                                boxShadow: currentPath === item.path ? '0 4px 12px var(--accent-blue-glow)' : 'none'
                            }}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}

                    <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
                        <Link to="/profile" className="nav-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', color: 'white', textDecoration: 'none', fontWeight: 500, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                            <User size={20} /> Profile
                        </Link>
                        <a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); setShowSettingsModal(true); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                            <Settings size={20} /> Settings
                        </a>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    {/* User Header Profile */}
                    <div className="card-3d glass" style={{ padding: '40px', marginBottom: '40px', display: 'flex', gap: '32px', alignItems: 'center' }}>
                        <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-blue), #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 700, border: '4px solid var(--bg-card)' }}>
                            AC
                        </div>
                        <div style={{ flex: 1 }}>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                Alex Chen <span style={{ fontSize: '0.9rem', background: 'rgba(59, 130, 246, 0.2)', color: 'var(--accent-blue)', padding: '4px 12px', borderRadius: '99px', fontWeight: 600, verticalAlign: 'middle', height: 'fit-content' }}>Level 12 Developer</span>
                            </h1>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '24px' }}>Turning coffee into beautiful code since 2024.</p>

                            <div style={{ display: 'flex', gap: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Flame color="var(--warning)" size={24} />
                                    <div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>14 Days</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Streak</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Award color="var(--accent-blue)" size={24} />
                                    <div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>12,450</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Total XP</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Clock color="var(--success)" size={24} />
                                    <div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>48 hrs</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Time Learned</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button className="btn-pill btn-pill-secondary">Edit Profile</button>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
                        {/* Learning Progress & Heatmap */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <section>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Current Tracks</h3>
                                <div className="card-3d glass" style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)' }}>
                                                <Code2 size={24} />
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Web Development Bootcamp</h4>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>CSS Grid Layouts</p>
                                            </div>
                                        </div>
                                        <Link to="/webapp-course" className="btn-pill btn-pill-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Continue</Link>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>Progress</span>
                                        <span style={{ fontWeight: 700 }}>65%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ width: '65%', height: '100%', background: 'var(--accent-blue)' }}></div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Activity</h3>
                                <div className="card-3d glass" style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '150px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
                                        {/* Mock Chart Bars */}
                                        {[40, 60, 30, 80, 50, 90, 100, 70, 40, 85, 30, 65, 45, 80].map((height, i) => (
                                            <div key={i} style={{ flex: 1, background: height > 70 ? 'var(--accent-blue)' : 'rgba(59, 130, 246, 0.2)', height: `${height}%`, borderRadius: '4px 4px 0 0' }}></div>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                        <span>2 weeks ago</span>
                                        <span>Today</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Recent Achievements */}
                        <section>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Achievements</h3>
                            <div className="card-3d glass" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    { title: 'Variable Virtuoso', desc: 'Completed Variables 101', icon: <CheckCircle2 color="var(--success)" size={20} /> },
                                    { title: '7-Day Streak', desc: 'Coded for a full week straight', icon: <Flame color="var(--warning)" size={20} /> },
                                    { title: 'Bug Squasher', desc: 'Fixed 50 syntax errors', icon: <AlertTriangle color="var(--accent-blue)" size={20} /> },
                                    { title: 'Hello World', desc: 'Wrote your first line of code', icon: <ConsoleIcon color="var(--text-secondary)" size={20} /> }
                                ].map((achievement, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {achievement.icon}
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>{achievement.title}</h4>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{achievement.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Settings Modal */}
                        {showSettingsModal && (
                            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                                <div className="card-3d glass" style={{ width: '480px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Settings</h3>
                                        <button onClick={() => setShowSettingsModal(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.5rem' }}>&times;</button>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        <h4 style={{ fontSize: '1.1rem', color: 'var(--error)' }}>Danger Zone</h4>
                                        <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                                <div>
                                                    <h5 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px', color: 'white', margin: 0 }}>Clear All Playgrounds</h5>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Permanently delete all sessions.</p>
                                                </div>
                                                <button style={{ padding: '8px 16px', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--error)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s ease' }}>
                                                    Clear
                                                </button>
                                            </div>
                                            <div style={{ height: '1px', background: 'rgba(239,68,68,0.2)', margin: '16px 0' }}></div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div>
                                                    <h5 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px', color: 'white', margin: 0 }}>Delete Account</h5>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Permanently remove account.</p>
                                                </div>
                                                <button style={{ padding: '8px 16px', background: 'var(--error)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s ease' }}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default ProfilePage;
