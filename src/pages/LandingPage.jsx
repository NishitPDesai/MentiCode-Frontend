import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Play, Code, Database, Layout, ArrowRight, Github, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'white' }}>
          <div className="glass" style={{ width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifySelf: 'center', background: 'var(--accent-blue)', color: 'white', justifyContent: 'center' }}>
            <Code size={24} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>Mentic Code</span>
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#courses" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Courses</a>
          <a href="#analyzer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Analyzer</a>
          <a href="#playground" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Playground</a>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="btn-pill btn-pill-primary">Go to Dashboard</Link>
              <Link to="/profile" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', textDecoration: 'none' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, #fde68a, #f59e0b)', borderRadius: '50%' }}></div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth" className="btn-pill btn-pill-secondary">Log In</Link>
              <Link to="/auth" className="btn-pill btn-pill-primary">Get Started</Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '160px 20px 100px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass" style={{ display: 'inline-flex', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            <Rocket size={14} style={{ marginRight: '8px' }} /> Level up your career
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1 }}>
            Master Coding <br />
            <span style={{ color: 'var(--accent-blue)' }}>Through Play.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            The beginner-friendly platform that turns complex syntax into an engaging journey. Start your career with gamified lessons and real-time code analysis.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/auth" className="btn-pill btn-pill-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Start Learning Free
            </Link>
            <button className="btn-pill btn-pill-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              <Play size={20} fill="currentColor" /> Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Hero Code Snippet Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass"
          style={{ marginTop: '80px', borderRadius: '16px', padding: '24px', textAlign: 'left', maxWidth: '800px', margin: '80px auto 0', border: '1px solid var(--border-color)', background: 'rgba(15, 23, 42, 0.6)' }}
        >
          <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
          </div>
          <pre style={{ fontFamily: 'monospace', color: '#818cf8', fontSize: '1rem', lineHeight: 1.5 }}>
            <code>{`function startJourney() {
  const status = "Learning";
  if (status === "Learning") {
    // You are leveling up!
    unlockNewSkill('Menti Code');
  }
}`}</code>
          </pre>
        </motion.div>
      </section>

      {/* Path to Mastery */}
      <section id="courses" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Your Path to Mastery</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
              Structured curriculums designed by experts to take you from absolute zero to job-ready developer.
            </p>
          </div>
          <a href="#" style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            View all paths <ArrowRight size={20} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { title: 'HTML Foundation', desc: 'Master the structural language of the web. Learn semantics, SEO, and accessibility.', icon: <Layout className="text-orange-500" />, time: '12 Hours', level: 'Beginner', color: '#f97316' },
            { title: 'JavaScript Core', desc: 'Bring your sites to life. Learn logic, DOM manipulation, and modern ES6+ features.', icon: <Code className="text-yellow-400" />, time: '24 Hours', level: 'Intermediate', color: '#fbbf24' },
            { title: 'Python Logic', desc: 'The power of logic. Dive into data structures, automation, and backend basics.', icon: <Database className="text-blue-400" />, time: '18 Hours', level: 'Intermediate', color: '#60a5fa' }
          ].map((item, i) => (
            <Link to={`/course/${i + 1}`} key={i} className="card-3d cursor-pointer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${item.color}20`, color: item.color, marginBottom: '20px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span>⏱ {item.time}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }}></div> {item.level}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GitHub Analyzer Section */}
      <section id="analyzer" style={{ padding: '100px 20px', background: 'rgba(59, 130, 246, 0.03)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="card-3d glass" style={{ padding: '40px', border: '1px solid var(--accent-blue-glow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div className="glass" style={{ width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Github size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Repo Analysis</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>mentic-labs/core-api</p>
                </div>
              </div>
              <div style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', padding: '4px 8px', borderRadius: '12px', height: 'fit-content', fontWeight: 700 }}>EXCELLENT</div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem' }}>
                <span>Clean Code Score</span>
                <span style={{ fontWeight: 700 }}>94%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}></div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div className="glass" style={{ padding: '20px', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Complexity</p>
                <p style={{ fontWeight: 700 }}>Low</p>
              </div>
              <div className="glass" style={{ padding: '20px', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Stability</p>
                <p style={{ fontWeight: 700 }}>High</p>
              </div>
            </div>

            <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontStyle: 'italic', background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '8px' }}>
              "*Suggested: Consider refactoring lines 24-38 in database.js to reduce cyclomatic complexity."
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px', lineHeight: 1.2 }}>GitHub Analyzer: <br /><span style={{ color: 'var(--accent-blue)' }}>Insights for Evolution.</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.6 }}>
              Connect your GitHub repositories and let Menti AI analyze your actual projects. We provide personalized learning paths based on the real-world mistakes you're making in your own code.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '40px' }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={12} fill="white" />
                </div>
                <span style={{ fontWeight: 600 }}>Automated Code Reviews</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={12} fill="white" />
                </div>
                <span style={{ fontWeight: 600 }}>Skill Gap Detection</span>
              </li>
            </ul>
            <Link to="/analyzer" className="btn-pill btn-pill-primary" style={{ padding: '16px 32px', display: 'inline-flex', textDecoration: 'none' }}>
              Connect Repository <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Playgrounds Promo Section */}
      <section id="playground" style={{ padding: '100px 20px', background: 'var(--bg-dark)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="glass" style={{ width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent-blue)', color: 'white', marginBottom: '24px' }}>
            <Terminal size={32} />
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '24px', lineHeight: 1.2 }}>
            Ephemeral Sandboxes: <br />
            <span style={{ color: 'var(--accent-blue)' }}>Code Without Limits.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', marginBottom: '48px', lineHeight: 1.6 }}>
            Spin up a full-featured development environment in seconds directly in your browser. Practice the skills you learn in our courses, experiment with new libraries, and execute code instantly, with no setup required.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', width: '100%', marginBottom: '48px', textAlign: 'left' }}>
            <div className="card-3d glass" style={{ padding: '32px', borderRadius: '16px' }}>
              <Terminal className="text-blue-400" size={24} style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Interactive Editor</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Full VS Code-like experience with syntax highlighting and autocomplete.</p>
            </div>
            <div className="card-3d glass" style={{ padding: '32px', borderRadius: '16px' }}>
              <Play className="text-green-400" size={24} style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Instant Execution</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Run your code securely on our servers and see the output immediately.</p>
            </div>
            <div className="card-3d glass" style={{ padding: '32px', borderRadius: '16px' }}>
              <Database className="text-orange-400" size={24} style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Multi-Language</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Support for JavaScript, Python, C++, and more out of the box.</p>
            </div>
          </div>
          <Link to="/auth" className="btn-pill btn-pill-primary" style={{ padding: '16px 32px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            Try Playgrounds Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 20px', borderTop: '1px solid var(--border-color)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div className="glass" style={{ width: '32px', height: '32px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifySelf: 'center', background: 'var(--accent-blue)', color: 'white', justifyContent: 'center' }}>
                <Code size={18} />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>Mentic Code</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Revolutionizing how the world learns to code through gamification, real-time analysis, and community.
            </p>
          </div>
          <div>
            <h5 style={{ fontWeight: 700, marginBottom: '20px' }}>Platform</h5>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li>Courses</li>
              <li>Analyzer</li>
              <li>Playground</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontWeight: 700, marginBottom: '20px' }}>Company</h5>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontWeight: 700, marginBottom: '20px' }}>Resources</h5>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Community</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '80px', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
          <p>© 2024 Menti Code Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
