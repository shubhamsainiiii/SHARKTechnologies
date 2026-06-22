/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FiArrowLeft, FiArrowRight,
    FiCheckCircle, FiMessageSquare,
    FiLayers, FiZap, FiCpu,
} from 'react-icons/fi';
import CtaBanner from '../components/home/CtaBanner';

/* ─── Skeleton loader ─────────────────────────────────────────── */
function Skeleton({ w = '100%', h = '18px', r = '8px', mb = '0' }) {
    return (
        <div style={{
            width: w, height: h, borderRadius: r, marginBottom: mb,
            background: 'linear-gradient(90deg, var(--bg-card) 25%, var(--border) 50%, var(--bg-card) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.4s infinite',
        }} />
    );
}

/* ─── Section heading pill ────────────────────────────────────── */
function SectionPill({ label, accent, bg, border, color }) {
    return (
        <div style={{
            display: 'inline-flex', marginBottom: '18px',
            padding: '4px 12px',
            background: bg || `${accent}10`,
            border: `1px solid ${border || accent + '28'}`,
            borderRadius: '6px', color: color || accent,
            fontFamily: 'Syne, sans-serif', fontWeight: '700',
            fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
            {label}
        </div>
    );
}

/* ─── Main component ──────────────────────────────────────────── */
export default function ServiceDetailPage() {
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios
            .get(`${import.meta.env.VITE_API_URL}/services/slug/${slug}`)
            .then(res => setService(res.data.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [slug]);

    /* ── Loading ── */
    if (loading) {
        return (
            <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-primary)' }}>
                <div className="container-custom">
                    <Skeleton w="120px" h="14px" mb="36px" />
                    <div className="sdp-hero-grid">
                        <div>
                            <Skeleton w="200px" h="20px" mb="18px" />
                            <Skeleton w="80%" h="40px" mb="10px" />
                            <Skeleton w="60%" h="40px" mb="22px" />
                            <Skeleton h="14px" mb="8px" />
                            <Skeleton h="14px" mb="8px" />
                            <Skeleton w="70%" h="14px" mb="28px" />
                            <Skeleton w="160px" h="44px" r="11px" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[1, 2, 3].map(i => <Skeleton key={i} h="56px" r="14px" />)}
                        </div>
                    </div>
                </div>
                <style>{`@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>
            </section>
        );
    }

    /* ── Error / not found ── */
    if (error || !service) {
        return (
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
                    <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
                        Service Not Found
                    </h2>
                    <Link to="/services" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: '600' }}>
                        ← Back to Services
                    </Link>
                </div>
            </section>
        );
    }

    /* ── Destructure with safe defaults (all schema fields) ── */
    const {
        title = '',
        icon = '🌐',
        tagline = '',
        overview = '',
        shortDesc = '',
        longDesc = '',
        accent = '#00d4ff',
        accent2 = '#00ffcc',
        results = [],
        whatWeDeliver = [],
        features = [],
        process = [],
        techStack = [],
    } = service;

    // Use overview → shortDesc → longDesc as fallback for hero paragraph
    const heroPara = overview || shortDesc || '';

    return (
        <>
            {/* ══════════════════ HERO ══════════════════ */}
            <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>

                {/* Subtle grid background */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${accent}04 1px, transparent 1px), linear-gradient(90deg, ${accent}04 1px, transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />
                {/* Corner glow */}
                <div style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px', background: `radial-gradient(ellipse at 80% 20%, ${accent}0b 0%, transparent 65%)`, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '300px', height: '300px', background: `radial-gradient(ellipse at 20% 80%, ${accent2}07 0%, transparent 65%)`, pointerEvents: 'none' }} />

                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>

                    {/* Back link */}
                    <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                        <Link
                            to="/services"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.84rem', marginBottom: '36px', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = accent}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FiArrowLeft /> Back to Services
                        </Link>
                    </motion.div>

                    <div className="sdp-hero-grid">

                        {/* Left — title + overview */}
                        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

                            {/* Icon + tagline badge */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px', flexWrap: 'wrap' }}>
                                <div style={{
                                    width: '54px', height: '54px',
                                    background: `${accent}15`, border: `1px solid ${accent}30`,
                                    borderRadius: '14px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontSize: '26px',
                                }}>
                                    {icon}
                                </div>
                                {tagline && (
                                    <span style={{
                                        padding: '5px 14px',
                                        background: `${accent}12`, border: `1px solid ${accent}28`,
                                        borderRadius: '20px', fontSize: '0.7rem',
                                        fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                        letterSpacing: '0.1em', textTransform: 'uppercase', color: accent,
                                    }}>
                                        {tagline}
                                    </span>
                                )}
                            </div>

                            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: '1.08', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '18px' }}>
                                {title}
                            </h1>

                            {heroPara && (
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.78', maxWidth: '520px', marginBottom: '28px' }}>
                                    {heroPara}
                                </p>
                            )}

                            <Link
                                to="/contact"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 26px', background: `linear-gradient(135deg, ${accent}, ${accent2})`, borderRadius: '11px', color: '#000', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem', boxShadow: `0 4px 24px ${accent}28` }}
                            >
                                <FiMessageSquare style={{ fontSize: '14px' }} /> Get a Free Quote
                            </Link>
                        </motion.div>

                        {/* Right — results checklist */}
                        {results.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                            >
                                {results.map((r, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--bg-card)', border: `1px solid ${accent}18`, borderRadius: '14px', padding: '16px 18px' }}>
                                        <FiCheckCircle style={{ color: accent, fontSize: '17px', flexShrink: 0, marginTop: '1px' }} />
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>{r}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* ══════════════════ FEATURES (generic list) ══════════════════ */}
            {features.length > 0 && (
                <section className="section-padding" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        >
                            <SectionPill label="Features" accent={accent} />
                            <div className="sdp-features-grid">
                                {features.map((f, i) => (
                                    <div key={i} style={{
                                        display: 'flex', alignItems: 'flex-start', gap: '12px',
                                        background: 'var(--bg-card)', border: `1px solid var(--border)`,
                                        borderRadius: '14px', padding: '18px',
                                        transition: 'border-color 0.2s',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.borderColor = `${accent}40`}
                                        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                                    >
                                        <FiZap style={{ color: accent, fontSize: '16px', flexShrink: 0, marginTop: '2px' }} />
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* ══════════════════ DELIVER + PROCESS ══════════════════ */}
            {(whatWeDeliver.length > 0 || process.length > 0) && (
                <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="container-custom">
                        <div className="sdp-two-col" style={{ marginBottom: techStack.length > 0 ? '20px' : '0' }}>

                            {/* What We Deliver */}
                            {whatWeDeliver.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px' }}
                                >
                                    <SectionPill label="What We Deliver" accent={accent} />
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {whatWeDeliver.map((d, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: accent, flexShrink: 0, marginTop: '8px' }} />
                                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.65' }}>{d}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Process */}
                            {process.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px' }}
                                >
                                    <SectionPill
                                        label="Our Process"
                                        accent="var(--accent-warm)"
                                        bg="rgba(255,107,53,0.1)"
                                        border="rgba(255,107,53,0.2)"
                                        color="var(--accent-warm)"
                                    />
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                        {process.map((p, i) => (
                                            <div key={p.step} style={{ display: 'flex', gap: '14px', position: 'relative', paddingBottom: i < process.length - 1 ? '18px' : '0' }}>
                                                {i < process.length - 1 && (
                                                    <div style={{ position: 'absolute', left: '15px', top: '32px', bottom: 0, width: '1px', background: 'var(--border)' }} />
                                                )}
                                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0, background: `${accent}12`, border: `1px solid ${accent}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: '0.62rem', color: accent, zIndex: 1 }}>
                                                    {p.step}
                                                </div>
                                                <div style={{ paddingTop: '4px' }}>
                                                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '3px' }}>{p.title}</div>
                                                    {p.desc && (
                                                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.6' }}>{p.desc}</div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Tech Stack */}
                        {techStack.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <FiCpu style={{ color: 'var(--text-muted)', fontSize: '14px' }} />
                                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                                        Tech Stack
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {techStack.map(t => (
                                        <span key={t} style={{ padding: '6px 14px', background: `${accent}0d`, border: `1px solid ${accent}22`, borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'Syne, sans-serif', fontWeight: '600', color: accent }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </section>
            )}

            {/* ══════════════════ LONG DESC (SEO / Extended) ══════════════════ */}
            {longDesc && (
                <section className="section-padding" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{ maxWidth: '760px', margin: '0 auto' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                                <FiLayers style={{ color: accent, fontSize: '16px' }} />
                                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                                    Deep Dive
                                </span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.85', whiteSpace: 'pre-line' }}>
                                {longDesc}
                            </p>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* ══════════════════ EXPLORE MORE ══════════════════ */}
            <section style={{ padding: '60px 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
                <div className="container-custom">
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        Explore More
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                            See all our services
                        </h3>
                        <Link
                            to="/services"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '11px 24px', background: `linear-gradient(135deg, ${accent}, ${accent2})`, borderRadius: '11px', color: '#000', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem', boxShadow: `0 4px 20px ${accent}22` }}
                        >
                            All Services <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            <CtaBanner />

            <style>{`
                .sdp-hero-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 28px;
                }
                .sdp-two-col {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 16px;
                }
                .sdp-features-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 10px;
                }
                @media (min-width: 640px) {
                    .sdp-features-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (min-width: 768px) {
                    .sdp-hero-grid    { grid-template-columns: 1fr 1fr; align-items: start; gap: 40px; }
                    .sdp-two-col      { grid-template-columns: 1fr 1fr; gap: 20px; }
                    .sdp-features-grid { grid-template-columns: 1fr 1fr 1fr; }
                }
                @keyframes shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </>
    );
}