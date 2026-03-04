import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Mail, Lock, User, ArrowRight, Chrome } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleAuth = (e) => {
        e.preventDefault();
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/courses');
    };

    return (
        <div style={{ minHeight: '100vh', width: '100%', background: 'var(--bg-dark)', display: 'grid', placeItems: 'center', padding: '40px 20px' }}>
            <div style={{ width: '100%', maxWidth: '440px', display: 'flex', flexDirection: 'column' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white', marginBottom: '40px', alignSelf: 'center' }}>
                    <div className="glass" style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-blue)' }}>
                        <Code2 size={24} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>Mentic Code</span>
                </Link>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isLogin ? 'login' : 'signup'}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="card-3d glass"
                        style={{ width: '100%', maxWidth: '440px', padding: '40px', border: '1px solid var(--border-color)', background: 'rgba(17, 24, 39, 0.6)' }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {isLogin ? 'Continue your coding journey' : 'Start your coding journey today'}
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                            <button className="btn-pill btn-pill-secondary" style={{ width: '100%', gap: '12px', justifyContent: 'center' }}>
                                <Chrome size={20} /> Continue with Google
                            </button>
                            <button className="btn-pill btn-pill-secondary" style={{ width: '100%', gap: '12px', justifyContent: 'center' }}>
                                <Github size={20} /> Continue with GitHub
                            </button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>OR</span>
                            <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
                        </div>

                        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {!isLogin && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Full Name</label>
                                    <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px' }}>
                                        <User size={18} color="var(--text-secondary)" />
                                        <input type="text" placeholder="John Doe" required style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }} />
                                    </div>
                                </div>
                            )}

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email Address</label>
                                <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px' }}>
                                    <Mail size={18} color="var(--text-secondary)" />
                                    <input type="email" placeholder="name@example.com" required style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Password</label>
                                    {isLogin && <a href="#" style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', textDecoration: 'none' }}>Forgot?</a>}
                                </div>
                                <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px' }}>
                                    <Lock size={18} color="var(--text-secondary)" />
                                    <input type="password" placeholder="••••••••" required style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }} />
                                </div>
                            </div>

                            <button type="submit" className="btn-pill btn-pill-primary" style={{ width: '100%', padding: '16px', marginTop: '12px', justifyContent: 'center' }}>
                                {isLogin ? 'Log In' : 'Create Account'} <ArrowRight size={20} />
                            </button>
                        </form>

                        <div style={{ textAlign: 'center', marginTop: '32px' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', fontWeight: 600, cursor: 'pointer', outline: 'none' }}
                                >
                                    {isLogin ? 'Sign Up' : 'Log In'}
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AuthPage;
