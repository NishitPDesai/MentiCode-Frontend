import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, BookOpen, FileText, Code2, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';

const CourseDetailsPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('Docs');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <div style={{ width: '48px', height: '48px', border: '4px solid rgba(56, 189, 248, 0.1)', borderTopColor: '#38bdf8', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '16px' }}></div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '1px', color: 'var(--text-secondary)' }}>LOADING COURSE DATA...</h2>
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'white', display: 'flex', flexDirection: 'column', fontFamily: '"Inter", sans-serif' }}>
            {/* Header */}
            <header style={{ height: '70px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 32px', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', zIndex: 10, position: 'sticky', top: 0 }}>
                <Link to="/courses" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '8px', fontWeight: 500, transition: 'color 0.2s ease' }} className="hover-lift">
                    <ArrowLeft size={20} /> Back to Courses
                </Link>
                <div style={{ margin: '0 24px', width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }}></div>
                <h1 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Code2 size={18} />
                    </div>
                    Python for Beginners
                </h1>

                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Progress: 15%</div>
                    <div style={{ width: '120px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '15%', height: '100%', background: 'var(--accent-green)' }}></div>
                    </div>
                </div>
            </header>

            <main style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
                {/* Main Content Area */}
                <div style={{ background: 'var(--bg-dark)', padding: '40px', overflowY: 'auto', height: 'calc(100vh - 70px)' }}>
                    {/* Video / Graphic Placeholder */}
                    <div style={{ width: '100%', aspectRatio: '16/9', background: '#0b1219', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', marginBottom: '40px' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), transparent)', opacity: 0.5 }}></div>
                        <PlayCircle size={64} color="var(--accent-blue)" style={{ cursor: 'pointer', zIndex: 2 }} className="hover-lift" />
                        <span style={{ marginTop: '16px', fontWeight: 600, color: 'var(--text-secondary)', zIndex: 2 }}>Module 2: Data Types (12:45)</span>
                    </div>

                    <div style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>Module 2: Understanding Variables & Data Types</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                            In this lesson, we will dive deep into how Python handles data in memory. You'll learn the difference between primitive types, how dynamic typing works, and best practices for naming your variables.
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Course Contents</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                { title: '1. Introduction to Python', type: 'video', duration: '5:00', completed: true },
                                { title: '2. Understanding Variables & Data Types', type: 'video', duration: '12:45', active: true },
                                { title: 'Quiz: Data Types', type: 'quiz', duration: '5 mins', locked: true },
                                { title: '3. Control Flow', type: 'video', duration: '18:20', locked: true },
                                { title: 'Practice Sandbox: If/Else', type: 'code', duration: '15 mins', locked: true },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '12px',
                                    background: item.active ? 'rgba(56, 189, 248, 0.1)' : 'rgba(255,255,255,0.02)',
                                    border: item.active ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                                    opacity: item.locked ? 0.5 : 1,
                                    cursor: item.locked ? 'not-allowed' : 'pointer'
                                }} className={!item.locked ? 'hover-lift' : ''}>
                                    <div style={{ color: item.completed ? 'var(--accent-green)' : (item.active ? 'var(--accent-blue)' : 'var(--text-secondary)') }}>
                                        {item.completed ? <CheckCircle2 size={20} /> : (item.type === 'video' ? <PlayCircle size={20} /> : <Code2 size={20} />)}
                                    </div>
                                    <div style={{ flex: 1, fontWeight: item.active ? 700 : 500, color: item.active ? 'white' : (item.locked ? 'var(--text-secondary)' : 'white') }}>
                                        {item.title}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.duration}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <aside style={{ background: '#0b1219', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 70px)' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <button onClick={() => setActiveTab('Docs')} style={{ flex: 1, padding: '16px 0', background: 'transparent', border: 'none', borderBottom: activeTab === 'Docs' ? '2px solid var(--accent-blue)' : '2px solid transparent', color: activeTab === 'Docs' ? 'var(--accent-blue)' : 'var(--text-secondary)', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s' }}>
                            <FileText size={16} /> Docs
                        </button>
                        <button onClick={() => setActiveTab('Blogs')} style={{ flex: 1, padding: '16px 0', background: 'transparent', border: 'none', borderBottom: activeTab === 'Blogs' ? '2px solid var(--accent-blue)' : '2px solid transparent', color: activeTab === 'Blogs' ? 'var(--accent-blue)' : 'var(--text-secondary)', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s' }}>
                            <MessageSquare size={16} /> Blogs
                        </button>
                    </div>

                    <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
                        {activeTab === 'Docs' ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Reference Documentation</h3>

                                <div className="card-3d glass" style={{ padding: '16px', paddingBottom: '8px' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: '#38bdf8', marginBottom: '8px' }}>Primitive Types</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                        Python has four main primitive types: Integers, Floats, Strings, and Booleans. They are dynamically assigned upon initialization.
                                    </p>
                                    <pre style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', fontSize: '0.8rem', color: '#cbd5e1', overflowX: 'auto', marginTop: '12px' }}>
                                        {`age = 25        # int
price = 19.99   # float
name = "Alex"   # str
is_pro = True   # bool`}
                                    </pre>
                                </div>
                                <div className="card-3d glass" style={{ padding: '16px' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: '#38bdf8', marginBottom: '8px' }}>Type Checking</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                                        Use the built-in <code>type()</code> function to determine the type of an object in memory during runtime.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, marginBottom: '8px' }}>Community Blogs</h3>
                                {[
                                    { title: "Why Python's dynamic typing is awesome (and dangerous)", author: "SarahDev", likes: 124 },
                                    { title: "Understanding memory reference in Python", author: "CodeNinja", likes: 89 },
                                    { title: "10 beginner mistakes with strings", author: "PythonMaster", likes: 256 },
                                    { title: "Setting up your local environment vs Playgrounds", author: "MenticodeTeam", likes: 450 }
                                ].map((blog, i) => (
                                    <div key={i} className="card-3d glass hover-lift" style={{ padding: '16px', cursor: 'pointer' }}>
                                        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px', lineHeight: 1.4 }}>{blog.title}</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                            <span>By @{blog.author}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Flame size={12} color="#f97316" /> {blog.likes}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default CourseDetailsPage;
