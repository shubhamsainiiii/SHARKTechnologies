import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useRef, useState, useEffect } from 'react';

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};


// Fake browser screen content
function BrowserMockup() {
    return (
        <div style={{
            width: '100%', height: '100%',
            background: '#0d1320',
            borderRadius: '0 0 10px 10px',
            overflow: 'hidden',
            position: 'relative',
        }}>
            {/* Sidebar */}
            <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '52px',
                background: '#080c14',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                paddingTop: '16px', gap: '14px',
            }}>
                {['#00d4ff', '#ff6b35', '#00ff88', '#a78bfa', '#fbbf24'].map((c, i) => (
                    <div key={i} style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${c}18`, border: `1px solid ${c}30` }} />
                ))}
            </div>

            {/* Main area */}
            <div style={{ marginLeft: '52px', padding: '14px 16px' }}>
                {/* Top bar */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', alignItems: 'center' }}>
                    <div style={{ height: '6px', borderRadius: '3px', width: '60px', background: 'rgba(0,212,255,0.2)' }} />
                    <div style={{ height: '6px', borderRadius: '3px', width: '40px', background: 'rgba(255,255,255,0.06)' }} />
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
                        {['#00ff88', '#fbbf24', '#f472b6'].map((c, i) => (
                            <div key={i} style={{ width: '18px', height: '18px', borderRadius: '5px', background: `${c}20`, border: `1px solid ${c}40` }} />
                        ))}
                    </div>
                </div>

                {/* Chart area */}
                <div style={{
                    height: '80px', background: 'rgba(0,212,255,0.04)',
                    border: '1px solid rgba(0,212,255,0.1)', borderRadius: '8px',
                    marginBottom: '10px', display: 'flex', alignItems: 'flex-end',
                    padding: '8px 10px', gap: '5px', overflow: 'hidden',
                }}>
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                        <motion.div key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 1.2 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                            style={{
                                flex: 1, borderRadius: '3px 3px 0 0',
                                background: i === 11
                                    ? 'linear-gradient(to top, #00d4ff, #00ffcc)'
                                    : `rgba(0,212,255,${0.15 + i * 0.02})`,
                            }}
                        />
                    ))}
                </div>

                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                    {[
                        { label: 'Revenue', val: '₹2.4L', color: '#00d4ff' },
                        { label: 'Users', val: '1,284', color: '#00ff88' },
                        { label: 'Uptime', val: '99.9%', color: '#a78bfa' },
                    ].map(s => (
                        <div key={s.label} style={{
                            background: `${s.color}08`, border: `1px solid ${s.color}20`,
                            borderRadius: '7px', padding: '8px',
                        }}>
                            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', marginBottom: '2px', fontFamily: 'monospace' }}>{s.label}</div>
                            <div style={{ fontSize: '0.78rem', fontWeight: '700', color: s.color, fontFamily: 'Syne, sans-serif' }}>{s.val}</div>
                        </div>
                    ))}
                </div>

                {/* Code lines */}
                <div style={{
                    background: '#080c14', border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '7px', padding: '10px 12px',
                }}>
                    {[
                        { parts: [{ t: 'const ', c: '#a78bfa' }, { t: 'app ', c: '#00d4ff' }, { t: '= ', c: '#fff' }, { t: 'express()', c: '#00ff88' }] },
                        { parts: [{ t: 'app.', c: '#fff' }, { t: 'listen', c: '#fbbf24' }, { t: '(3000)', c: '#ff6b35' }] },
                        { parts: [{ t: '// ✓ Server running', c: 'rgba(255,255,255,0.25)' }] },
                    ].map((line, i) => (
                        <div key={i} style={{ display: 'flex', gap: '4px', marginBottom: i < 2 ? '4px' : 0 }}>
                            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.6rem', fontFamily: 'monospace', marginRight: '6px', width: '10px' }}>{i + 1}</span>
                            {line.parts.map((p, j) => (
                                <span key={j} style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: p.c }}>{p.t}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Glow overlay */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                background: 'radial-gradient(ellipse at 70% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
        </div>
    );
}

// Phone mockup content
function PhoneMockup() {
    return (
        <div style={{
            width: '100%', height: '100%',
            background: '#0d1320',
            borderRadius: '0 0 20px 20px',
            overflow: 'hidden',
            padding: '10px 8px',
            display: 'flex', flexDirection: 'column', gap: '8px',
        }}>
            {/* Status bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '4px' }}>
                <div style={{ width: '30px', height: '4px', borderRadius: '2px', background: 'rgba(0,212,255,0.3)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }} />
                <div style={{ width: '20px', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.1)' }} />
            </div>

            {/* App header */}
            <div style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '8px', padding: '8px' }}>
                <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace', marginBottom: '2px' }}>Dashboard</div>
                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#00d4ff', fontFamily: 'Syne, sans-serif' }}>₹48,200</div>
            </div>

            {/* Mini chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '36px', padding: '0 2px' }}>
                {[30, 55, 40, 70, 50, 85, 65, 90].map((h, i) => (
                    <motion.div key={i}
                        initial={{ height: 0 }} animate={{ height: `${h}%` }}
                        transition={{ delay: 1.4 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                        style={{
                            flex: 1, borderRadius: '2px 2px 0 0',
                            background: i === 7 ? '#00d4ff' : 'rgba(0,212,255,0.2)',
                        }}
                    />
                ))}
            </div>

            {/* List items */}
            {[
                { label: 'Web App', status: 'Live', color: '#00ff88' },
                { label: 'Mobile', status: 'Build', color: '#fbbf24' },
                { label: 'API', status: 'Deploy', color: '#00d4ff' },
            ].map(r => (
                <div key={r.label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: 'rgba(255,255,255,0.03)', borderRadius: '6px', padding: '6px 8px',
                }}>
                    <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Syne, sans-serif' }}>{r.label}</span>
                    <span style={{ fontSize: '0.5rem', color: r.color, fontFamily: 'Syne, sans-serif', fontWeight: '700', background: `${r.color}15`, padding: '2px 6px', borderRadius: '4px' }}>{r.status}</span>
                </div>
            ))}
        </div>
    );
}

function DeviceMockup({ isMobile }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-150, 150], [18, -18]), { stiffness: 120, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-150, 150], [-18, 18]), { stiffness: 120, damping: 20 });
    const phoneRotY = useSpring(useTransform(x, [-150, 150], [-12, 12]), { stiffness: 120, damping: 20 });

    const handleMouse = (e) => {
        if (isMobile) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    };
    const resetTilt = () => { x.set(0); y.set(0); };

    // Mobile: scale down the whole mockup group instead of individual sizing
    const laptopW = 240;
    const screenH = isMobile ? 140 : 185;
    const phoneW = isMobile ? 80 : 90;
    const phoneH = isMobile ? 155 : 175;
    const phoneInnerH = isMobile ? 139 : 159;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={resetTilt}
            style={{
                perspective: 900,
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
        >
            {/* Scale wrapper — shrinks on mobile to fit screen */}
            <div style={{
                display: 'flex', alignItems: 'center',
                gap: isMobile ? '12px' : '28px',
                transform: isMobile ? 'scale(0.72)' : 'scale(1)',
                transformOrigin: 'center center',
            }}>
                {/* Laptop */}
                <motion.div
                    style={isMobile ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div style={{
                        width: laptopW,
                        background: '#111827',
                        border: '1.5px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px 10px 0 0',
                        overflow: 'hidden',
                        boxShadow: '0 0 0 1px rgba(0,212,255,0.08), 0 20px 50px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.07)',
                    }}>
                        <div style={{
                            background: '#080c14', padding: '6px 10px',
                            display: 'flex', alignItems: 'center', gap: '5px',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            {['#f472b6', '#fbbf24', '#00ff88'].map((c, i) => (
                                <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: c }} />
                            ))}
                            <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginLeft: '5px' }} />
                        </div>
                        <div style={{ height: screenH }}><BrowserMockup /></div>
                    </div>
                    <div style={{
                        width: '100%', height: '8px', marginLeft: '-1.5%', width: '103%',
                        background: 'linear-gradient(to bottom, #1a2232, #111827)',
                        borderRadius: '0 0 4px 4px',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }} />
                    <div style={{
                        width: '60px', height: '4px', margin: '0 auto',
                        background: '#0a0f1a', borderRadius: '0 0 5px 5px',
                        border: '1px solid rgba(255,255,255,0.04)',
                    }} />
                </motion.div>

                {/* Phone */}
                <motion.div
                    style={isMobile ? {} : { rotateX, rotateY: phoneRotY, transformStyle: 'preserve-3d' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: isMobile ? 10 : 18 }}
                    transition={{ delay: 0.65, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div style={{
                        width: phoneW, height: phoneH,
                        background: '#111827',
                        border: '1.5px solid rgba(255,255,255,0.1)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 0 0 1px rgba(167,139,250,0.08), 0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(167,139,250,0.07)',
                    }}>
                        <div style={{
                            height: '14px', background: '#080c14',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                        }}>
                            <div style={{ width: '20px', height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.08)' }} />
                        </div>
                        <div style={{ height: phoneInnerH }}><PhoneMockup /></div>
                    </div>
                </motion.div>

            </div>{/* end scale wrapper */}

            {/* Floating badges — desktop only, outside scale wrapper so they stay in place */}
            {!isMobile && <>
                <motion.div
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="badge-float"
                    style={{
                        position: 'absolute', top: '10%', left: '6%',
                        background: 'var(--bg-card)', border: '1px solid rgba(0,255,136,0.25)',
                        borderRadius: '12px', padding: '10px 14px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                        display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10,
                    }}
                >
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00ff88', flexShrink: 0 }} className="pulse-dot" />
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.7rem', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>All Systems Live</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="badge-float"
                    style={{
                        position: 'absolute', bottom: '12%', right: '3%',
                        background: 'var(--bg-card)', border: '1px solid rgba(0,212,255,0.2)',
                        borderRadius: '12px', padding: '10px 14px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)', zIndex: 10,
                    }}
                >
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontFamily: 'Syne, sans-serif', marginBottom: '3px' }}>Latest Deploy</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00d4ff' }} />
                        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', color: 'var(--text-primary)' }}>v2.4.1 · 2 min ago</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="badge-float"
                    style={{
                        position: 'absolute', bottom: '12%', left: '4%',
                        background: 'var(--bg-card)', border: '1px solid rgba(255,107,53,0.2)',
                        borderRadius: '12px', padding: '10px 14px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)', zIndex: 10,
                    }}
                >
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontFamily: 'Syne, sans-serif', marginBottom: '3px' }}>Performance</div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', color: '#ff6b35' }}>98 / 100 ⚡</div>
                </motion.div>
            </>}
        </motion.div>
    );
}

export default function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                paddingTop: '110px',
                paddingBottom: '80px',
            }}
            className="grid-bg mesh-gradient"
        >
            {/* Orbs — desktop only for perf */}
            {!isMobile && (
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                    <motion.div
                        animate={{ x: [0, 25, 0], y: [0, -18, 0], scale: [1, 1.06, 1] }}
                        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute', top: '10%', right: '5%',
                            width: '520px', height: '520px',
                            background: 'radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 68%)',
                            borderRadius: '50%', filter: 'blur(2px)',
                        }}
                    />
                    <motion.div
                        animate={{ x: [0, -18, 0], y: [0, 25, 0] }}
                        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                        style={{
                            position: 'absolute', bottom: '5%', left: '3%',
                            width: '380px', height: '380px',
                            background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 68%)',
                            borderRadius: '50%',
                        }}
                    />
                </div>
            )}

            {/* ── LAYOUT ── */}
            <div className="container-custom" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                <div className="hero-layout">

                    {/* LEFT: Text */}
                    <motion.div variants={container} initial="hidden" animate="show">

                        <motion.div variants={item} style={{ marginBottom: '22px' }}>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.18)',
                                borderRadius: '50px', padding: '7px 16px',
                                fontSize: '0.72rem', fontFamily: 'Syne, sans-serif',
                                fontWeight: '700', letterSpacing: '0.12em',
                                textTransform: 'uppercase', color: 'var(--accent)',
                            }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} className="pulse-dot" />
                                Your Complete Digital Solutions Partner
                            </span>
                        </motion.div>

                        <motion.h1 variants={item} style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                            lineHeight: '1.06', letterSpacing: '-0.03em',
                            color: 'var(--text-primary)', marginBottom: '20px',
                        }}>
                            We Build{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--accent) 0%, #00ffcc 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>Digital</span>{' '}Products
                            <br />That Actually{' '}
                            <span style={{ color: 'var(--accent-warm)' }}>Matter</span>
                        </motion.h1>

                        <motion.p variants={item} style={{
                            color: 'var(--text-secondary)',
                            fontSize: 'clamp(0.92rem, 1.6vw, 1.05rem)',
                            lineHeight: '1.78', maxWidth: '480px', marginBottom: '32px',
                        }}>
                            From pixel-perfect UI to rock-solid backends — we handle web apps, mobile, design, APIs, DevOps, and cybersecurity so you never need to juggle vendors again.
                        </motion.p>

                        <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '44px' }}>
                            <Link to="/contact" className="btn-primary" style={{
                                padding: '13px 28px', borderRadius: '12px', fontSize: '0.9rem',
                                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                            }}>
                                <span>Start Your Project <FiArrowRight /></span> 
                            </Link>
                            <Link to="/services" style={{
                                padding: '13px 28px', borderRadius: '12px', fontSize: '0.9rem',
                                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
                                color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif', fontWeight: '600',
                                transition: 'all 0.25s ease',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                            >
                                Explore Services
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Device mockup */}
                    <div className="hero-device" style={{ position: 'relative', height: isMobile ? '210px' : '340px', overflow: 'hidden' }}>
                        <DeviceMockup isMobile={isMobile} />
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px',
                background: 'linear-gradient(to bottom, transparent, var(--bg-primary))',
                pointerEvents: 'none',
            }} />

            <style>{`
                .hero-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 32px;
                    align-items: center;
                }
                .hero-device { display: block; }
                @media (min-width: 1024px) {
                    .hero-layout { grid-template-columns: 1fr 1fr; gap: 48px; }
                }
            `}</style>
        </section>
    );
}