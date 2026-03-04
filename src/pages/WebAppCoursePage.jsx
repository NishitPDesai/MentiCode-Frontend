import React, { useState } from 'react';
import { ArrowLeft, BookOpen, FileCode2, PlayCircle, CheckCircle2, ChevronRight, Layout, Monitor, Smartphone, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebAppCoursePage = () => {
    const [activeTopic, setActiveTopic] = useState('HTML');

    const topics = [
        { id: 'HTML', name: 'HTML5', icon: <FileCode2 size={20} />, color: '#f97316' },
        { id: 'CSS', name: 'CSS3', icon: <Layout size={20} />, color: '#3b82f6' },
        { id: 'JS', name: 'JavaScript', icon: <Monitor size={20} />, color: '#facc15' },
        { id: 'React', name: 'React', icon: <Smartphone size={20} />, color: '#61dafb' },
        { id: 'Node', name: 'Node.js', icon: <Server size={20} />, color: '#68a063' },
    ];

    const syllabus = {
        'HTML': [
            { level: 1, title: 'HTML Basics: Tags and Structure', duration: '15 mins', status: 'completed' },
            { level: 2, title: 'Forms and Inputs', duration: '20 mins', status: 'completed' },
            { level: 3, title: 'Semantic HTML5 Elements', duration: '30 mins', status: 'active' },
            { level: 4, title: 'SEO Best Practices Sandbox', duration: '45 mins', status: 'locked' },
        ],
        'CSS': [
            { level: 1, title: 'CSS Selectors and Specificity', duration: '20 mins', status: 'locked' },
            { level: 2, title: 'Flexbox Layouts', duration: '45 mins', status: 'locked' },
            { level: 3, title: 'CSS Grid Mastery', duration: '1 hr', status: 'locked' },
        ],
        'JS': [
            { level: 1, title: 'Variables and Data Types', duration: '30 mins', status: 'locked' },
            { level: 2, title: 'Functions and Scope', duration: '45 mins', status: 'locked' },
            { level: 3, title: 'Asynchronous JavaScript (Promises/Async/Await)', duration: '1.5 hrs', status: 'locked' },
        ],
        'React': [
            { level: 1, title: 'Thinking in React Components', duration: '45 mins', status: 'locked' },
            { level: 2, title: 'State and Props', duration: '1 hr', status: 'locked' },
            { level: 3, title: 'Hooks: useState and useEffect', duration: '1.5 hrs', status: 'locked' },
        ],
        'Node': [
            { level: 1, title: 'Introduction to Node Runtime', duration: '30 mins', status: 'locked' },
            { level: 2, title: 'Building REST APIs with Express', duration: '2 hrs', status: 'locked' },
        ]
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'white', display: 'flex', flexDirection: 'column', fontFamily: '"Inter", sans-serif' }}>
            <header style={{ height: '70px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 32px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', zIndex: 10, position: 'sticky', top: 0 }}>
                <Link to="/profile" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '8px', fontWeight: 500, transition: 'color 0.2s ease' }} className="hover-lift">
                    <ArrowLeft size={20} /> Back to Profile
                </Link>
                <div style={{ margin: '0 24px', width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }}></div>
                <h1 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    Web Development Bootcamp
                </h1>
            </header>

            <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                {/* Sidebar */}
                <aside style={{ width: '280px', background: '#0b1219', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', padding: '24px' }}>
                    <h2 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800, marginBottom: '24px' }}>Course Topics</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {topics.map(topic => (
                            <button
                                key={topic.id}
                                onClick={() => setActiveTopic(topic.id)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', cursor: 'pointer', border: 'none',
                                    background: activeTopic === topic.id ? `${topic.color}15` : 'transparent',
                                    color: activeTopic === topic.id ? topic.color : 'var(--text-secondary)',
                                    fontWeight: activeTopic === topic.id ? 700 : 500,
                                    borderLeft: activeTopic === topic.id ? `4px solid ${topic.color}` : '4px solid transparent',
                                    transition: 'all 0.2s ease',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{ opacity: activeTopic === topic.id ? 1 : 0.6 }}>{topic.icon}</div>
                                {topic.name}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main Content Area */}
                <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${topics.find(t => t.id === activeTopic).color}20`, color: topics.find(t => t.id === activeTopic).color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {topics.find(t => t.id === activeTopic).icon}
                            </div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>{topics.find(t => t.id === activeTopic).name} Curriculum</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px' }}>
                            Master {topics.find(t => t.id === activeTopic).name} through hands-on project building and interactive exercises. Complete all levels to unlock the final certification project.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {syllabus[activeTopic].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex', alignItems: 'stretch', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden',
                                    opacity: item.status === 'locked' ? 0.6 : 1, transform: item.status === 'active' ? 'scale(1.02)' : 'none', transition: 'all 0.2s ease', cursor: item.status === 'locked' ? 'not-allowed' : 'pointer',
                                    boxShadow: item.status === 'active' ? '0 10px 25px -5px rgba(0,0,0,0.5)' : 'none'
                                }} className={item.status !== 'locked' ? 'hover-lift' : ''}>

                                    <div style={{ width: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: item.status === 'active' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(0,0,0,0.2)', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '20px 0' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>Level</span>
                                        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: item.status === 'completed' ? 'var(--accent-green)' : (item.status === 'active' ? '#38bdf8' : 'white') }}>
                                            {item.level}
                                        </span>
                                    </div>

                                    <div style={{ flex: 1, padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: item.status === 'active' ? '#38bdf8' : 'white' }}>{item.title}</h3>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><PlayCircle size={14} /> Exercise</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>⏱ {item.duration}</span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {item.status === 'completed' ? (
                                                <CheckCircle2 color="var(--accent-green)" size={28} />
                                            ) : item.status === 'active' ? (
                                                <Link to="/playground" className="btn-pill btn-pill-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                                                    Start <ChevronRight size={16} style={{ marginLeft: '4px' }} />
                                                </Link>
                                            ) : (
                                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <div style={{ width: '8px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WebAppCoursePage;
