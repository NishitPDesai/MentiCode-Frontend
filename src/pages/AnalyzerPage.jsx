import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    GraduationCap,
    BarChart3,
    Code2,
    Github,
    Terminal as ConsoleIcon,
    Settings,
    User,
    CheckCircle2,
    AlertTriangle,
    Shield,
    Activity,
    Search,
    Rocket,
    BarChart
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnalyzerPage = () => {
    const [activeTab, setActiveTab] = useState('My Analyses');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%', background: 'var(--bg-dark)' }}>
            {/* Sidebar */}
            <aside style={{ width: '280px', borderRight: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', padding: '24px 20px', background: '#0B0F19' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px', textDecoration: 'none', color: 'white' }}>
                    <div className="glass" style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-blue)', color: 'white' }}>
                        <Code2 size={24} />
                    </div>
                    <div>
                        <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)', display: 'block', lineHeight: 1 }}>MENTIC CODE</span>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '1px', fontWeight: 600 }}>DEV ENVIRONMENT</span>
                    </div>
                </Link>

                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
                            onClick={(e) => {
                                if (item.path === '#') e.preventDefault();
                                setActiveTab(item.name);
                            }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px',
                                background: activeTab === item.name ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                                color: activeTab === item.name ? 'var(--accent-blue)' : 'var(--text-secondary)',
                                fontWeight: activeTab === item.name ? 600 : 500,
                                textDecoration: 'none', transition: 'all 0.2s ease', border: activeTab === item.name ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid transparent'
                            }}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* User Profile Card */}
                <Link to="/profile" className="glass" style={{ marginTop: '24px', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px', color: 'white', border: '1px solid rgba(255,255,255,0.05)', background: '#111827', textDecoration: 'none', cursor: 'pointer' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, #fde68a, #f59e0b)', borderRadius: '50%' }}></div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 700, margin: 0 }}>Alex Chen</p>
                        <p style={{ fontSize: '0.7rem', color: 'var(--accent-green)', fontWeight: 600, margin: 0 }}>Lvl 24 • Pro</p>
                    </div>

                    <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', padding: '0 16px', boxSizing: 'border-box', transform: 'translateY(12px)' }}>
                        <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden', display: 'flex' }}>
                            <div style={{ width: '75%', height: '100%', background: 'var(--accent-green)' }}></div>
                        </div>
                        <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', textAlign: 'right', marginTop: '4px' }}>75% TO LVL 25</div>
                    </div>
                </Link>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '40px', overflowY: 'auto', position: 'relative' }}>
                {/* Loading Overlay */}
                {isLoading && (
                    <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
                        <div style={{ width: '48px', height: '48px', border: '4px solid rgba(56, 189, 248, 0.1)', borderTopColor: '#38bdf8', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                        <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px' }}>INITIALIZING ENGINE...</p>
                        <style>{`
                            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                        `}</style>
                    </div>
                )}

                <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <div>
                            <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Repository Analysis</h1>
                            <p style={{ color: 'var(--text-secondary)' }}>Connect a repo to get AI-driven insights and learning recommendations.</p>
                        </div>
                        <button className="btn-pill btn-pill-primary">
                            <Github size={20} /> Connect GitHub
                        </button>
                    </div>

                    {/* Repo Selection / Search */}
                    <div className="card-3d glass" style={{ padding: '24px', marginBottom: '40px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <Search size={20} color="var(--text-secondary)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="text"
                                placeholder="Paste repository URL (e.g., https://github.com/user/repo)"
                                style={{ width: '100%', padding: '16px 16px 16px 48px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '12px', color: 'white', fontSize: '1rem', outline: 'none' }}
                                defaultValue="https://github.com/mentic-labs/core-api"
                            />
                        </div>
                        <button className="btn-pill btn-pill-secondary" style={{ padding: '16px 32px' }}>Analyze</button>
                    </div>

                    {/* Analysis Results */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
                            {/* Score Cards */}
                            {[
                                { title: 'Clean Code Score', value: '94%', icon: <CheckCircle2 color="var(--success)" />, status: 'Excellent' },
                                { title: 'Complexity', value: 'Low', icon: <Activity color="var(--accent-blue)" />, status: 'Good' },
                                { title: 'Security', value: '98%', icon: <Shield color="var(--success)" />, status: 'Secure' },
                                { title: 'Technical Debt', value: 'Medium', icon: <AlertTriangle color="var(--warning)" />, status: 'Needs Review' }
                            ].map((stat, i) => (
                                <div key={i} className="card-3d glass" style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600 }}>{stat.title}</span>
                                        {stat.icon}
                                    </div>
                                    <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '8px' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.85rem', color: stat.status === 'Needs Review' ? 'var(--warning)' : 'var(--success)' }}>{stat.status}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                            {/* Recommendations */}
                            <div className="card-3d glass" style={{ padding: '32px' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <AlertTriangle size={20} color="var(--warning)" /> Suggested Improvements
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {[
                                        { file: 'src/services/auth.js', text: 'Consider extracting authentication logic into a middleware to reduce cyclomatic complexity in the route handler.', type: 'refactor' },
                                        { file: 'src/utils/database.js', text: 'Potential memory leak detected: Ensure database connections are properly closed in error scenarios.', type: 'bug' },
                                        { file: 'package.json', text: 'Dependency "lodash" can be replaced with native ES6 array methods for a smaller bundle size.', type: 'optimization' }
                                    ].map((rec, i) => (
                                        <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: `4px solid ${rec.type === 'bug' ? 'var(--error)' : rec.type === 'refactor' ? 'var(--warning)' : 'var(--accent-blue)'}` }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                                <code style={{ fontSize: '0.85rem', color: 'var(--accent-blue)' }}>{rec.file}</code>
                                                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.2)', padding: '2px 8px', borderRadius: '4px' }}>{rec.type}</span>
                                            </div>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>{rec.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Learning Path Generation */}
                            <div className="card-3d glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Personalized Learning Path</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
                                    Based on your repository analysis, we've generated a custom course to address your skill gaps.
                                </p>

                                <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid var(--accent-blue-glow)', borderRadius: '12px', padding: '20px', marginBottom: 'auto' }}>
                                    <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>Advanced Error Handling & Async Patterns</h4>
                                    <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '20px', marginBottom: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <li>Try/Catch in Async/Await</li>
                                        <li>Connection Pooling strategies</li>
                                        <li>Middleware extraction</li>
                                    </ul>
                                </div>

                                <button className="btn-pill btn-pill-primary" style={{ width: '100%', marginTop: '24px', padding: '16px' }}>
                                    <Code2 size={20} /> Start Generated Course
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default AnalyzerPage;
