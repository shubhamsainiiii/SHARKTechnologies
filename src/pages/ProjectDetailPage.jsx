/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub,
    FiCalendar, FiTag, FiCheckCircle, FiCode,
} from 'react-icons/fi';
import CtaBanner from '../components/home/CtaBanner';

/* ─── Skeleton ────────────────────────────────────────────────── */
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

/* ─── Main ────────────────────────────────────────────────────── */
export default function ProjectDetailPage() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios
            .get(`${import.meta.env.VITE_API_URL}/projects/slug/${slug}`)
            .then(res => setProject(res.data.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [slug]);

    /* ── Loading ── */
    if (loading) {
        return (
            <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-primary)' }}>
                <div className="container-custom">
                    <Skeleton w="130px" h="14px" mb="32px" />
                    <div className="pdp-hero-grid">
                        <div>
                            <Skeleton w="100px" h="24px" r="20px" mb="20px" />
                            <Skeleton w="80%" h="44px" mb="10px" />
                            <Skeleton w="55%" h="44px" mb="22px" />
                            <Skeleton h="14px" mb="8px" />
                            <Skeleton w="75%" h="14px" mb="28px" />
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Skeleton w="120px" h="42px" r="10px" />
                                <Skeleton w="110px" h="42px" r="10px" />
                            </div>
                        </div>
                        <Skeleton h="180px" r="20px" />
                    </div>
                </div>
                <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
            </section>
        );
    }

    /* ── Error ── */
    if (error || !project) {
        return (
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
                    <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
                        Project Not Found
                    </h2>
                    <Link to="/projects" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: '600' }}>
                        ← Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    /* ── Destructure (exact schema fields only) ── */
    const {
        title = '',
        category = '',
        status = '',
        shortDesc = '',
        longDesc = '',
        tech = [],
        coverImage = '',
        images = [],
        liveUrl = '',
        githubUrl = '',
        year = '',
        results = [],
        color = '#00d4ff',
    } = project;

    // Derive a second gradient colour by nudging hue
    const accent = color || '#00d4ff';

    return (
        <>
            {/* ══════════════════ HERO ══════════════════ */}
            <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 70% 60% at 60% 30%, ${accent}09 0%, transparent 70%)`, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${accent}05 1px, transparent 1px), linear-gradient(90deg, ${accent}05 1px, transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />

                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>

                    {/* Back link */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                        <Link to="/projects" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            color: 'var(--text-secondary)', textDecoration: 'none',
                            fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.85rem',
                            marginBottom: '32px', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = accent}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FiArrowLeft /> Back to Projects
                        </Link>
                    </motion.div>

                    <div className="pdp-hero-grid">

                        {/* Left */}
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

                            {/* Category badge */}
                            {category && (
                                <span style={{
                                    display: 'inline-block', marginBottom: '16px',
                                    padding: '5px 14px', background: `${accent}15`,
                                    border: `1px solid ${accent}35`, borderRadius: '20px',
                                    fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                    letterSpacing: '0.1em', textTransform: 'uppercase', color: accent,
                                }}>{category}</span>
                            )}

                            <h1 style={{
                                fontFamily: 'Syne, sans-serif', fontWeight: '800',
                                fontSize: 'clamp(1.7rem, 4vw, 3.2rem)',
                                lineHeight: '1.1', letterSpacing: '-0.03em',
                                color: 'var(--text-primary)', marginBottom: '16px',
                            }}>{title}</h1>

                            {shortDesc && (
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '28px', maxWidth: '520px' }}>
                                    {shortDesc}
                                </p>
                            )}

                            {/* CTA buttons — only render if URLs exist */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {liveUrl && (
                                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        padding: '11px 22px', background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
                                        borderRadius: '10px', color: '#000', textDecoration: 'none',
                                        fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.85rem',
                                        boxShadow: `0 4px 20px ${accent}28`,
                                    }}>
                                        <FiExternalLink /> Live Site
                                    </a>
                                )}
                                {githubUrl && (
                                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        padding: '11px 22px', background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid var(--border)', borderRadius: '10px',
                                        color: 'var(--text-secondary)', textDecoration: 'none',
                                        fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.85rem', transition: 'all 0.2s',
                                    }}
                                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = `${accent}40`; }}
                                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                                    >
                                        <FiGithub /> GitHub
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        {/* Right — meta card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                            style={{
                                background: 'var(--bg-card)', border: '1px solid var(--border)',
                                borderRadius: '20px', padding: '24px',
                                display: 'flex', flexDirection: 'column', gap: '18px',
                                alignSelf: 'start',
                            }}
                        >
                            {year && (
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '3px' }}>
                                        <FiCalendar style={{ color: accent, fontSize: '13px' }} />
                                        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Year</span>
                                    </div>
                                    <div style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.875rem' }}>{year}</div>
                                </div>
                            )}

                            {category && (
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '3px' }}>
                                        <FiTag style={{ color: accent, fontSize: '13px' }} />
                                        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Category</span>
                                    </div>
                                    <div style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.875rem' }}>{category}</div>
                                </div>
                            )}

                            {status && status !== 'Draft' && (
                                <div>
                                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px' }}>Status</div>
                                    <span style={{
                                        padding: '4px 10px',
                                        background: status === 'Live' ? 'rgba(0,255,150,0.1)' : 'rgba(255,200,0,0.1)',
                                        border: `1px solid ${status === 'Live' ? 'rgba(0,255,150,0.25)' : 'rgba(255,200,0,0.25)'}`,
                                        borderRadius: '6px', fontSize: '0.72rem',
                                        fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                        color: status === 'Live' ? '#00ff96' : '#ffc800',
                                    }}>{status}</span>
                                </div>
                            )}

                            {tech.length > 0 && (
                                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
                                        <FiCode style={{ color: accent, fontSize: '13px' }} />
                                        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Tech Stack</span>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {tech.map(t => (
                                            <span key={t} style={{
                                                padding: '4px 10px', background: `${accent}0d`,
                                                border: `1px solid ${accent}22`, borderRadius: '6px',
                                                fontSize: '0.75rem', fontFamily: 'Syne, sans-serif',
                                                fontWeight: '600', color: accent,
                                            }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════ COVER IMAGE ══════════════════ */}
            {coverImage ? (
                <div style={{
                    borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
                    overflow: 'hidden', maxHeight: '480px',
                }}>
                    <img
                        src={coverImage} alt={title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
            ) : (
                /* Placeholder when no image */
                <div style={{
                    height: '240px',
                    background: `linear-gradient(135deg, ${accent}12 0%, var(--bg-secondary) 100%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
                    position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${accent}08 1px, transparent 1px), linear-gradient(90deg, ${accent}08 1px, transparent 1px)`, backgroundSize: '36px 36px' }} />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                        style={{
                            width: '72px', height: '72px', background: `${accent}18`,
                            border: `2px solid ${accent}35`, borderRadius: '18px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: '1.8rem',
                            color: accent, position: 'relative', zIndex: 1,
                        }}
                    >{title.charAt(0)}</motion.div>
                </div>
            )}

            {/* ══════════════════ EXTRA IMAGES ══════════════════ */}
            {images.length > 0 && (
                <section style={{ background: 'var(--bg-secondary)', padding: '32px 0', borderBottom: '1px solid var(--border)' }}>
                    <div className="container-custom">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
                            {images.map((src, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                    style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '16/9' }}
                                >
                                    <img src={src} alt={`${title} screenshot ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ══════════════════ LONG DESC + RESULTS ══════════════════ */}
            {(longDesc || results.length > 0) && (
                <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="container-custom">
                        <div className={longDesc && results.length > 0 ? 'pdp-two-col' : ''}>

                            {/* Long description */}
                            {longDesc && (
                                <motion.div
                                    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px' }}
                                >
                                    <div style={{ display: 'inline-flex', marginBottom: '16px', padding: '4px 12px', background: `${accent}10`, border: `1px solid ${accent}25`, borderRadius: '6px', color: accent, fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                                        About This Project
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.85', whiteSpace: 'pre-line' }}>
                                        {longDesc}
                                    </p>
                                </motion.div>
                            )}

                            {/* Results */}
                            {results.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                                    style={{
                                        background: 'var(--bg-card)', border: `1px solid ${accent}25`,
                                        borderRadius: '20px', padding: '28px',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                >
                                    {/* Top accent bar */}
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${accent}, ${accent}55)` }} />
                                    <div style={{ display: 'inline-flex', marginBottom: '16px', padding: '4px 12px', background: `${accent}10`, border: `1px solid ${accent}25`, borderRadius: '6px', color: accent, fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                                        Results & Impact
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {results.map((r, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                                            >
                                                <FiCheckCircle style={{ color: accent, fontSize: '16px', flexShrink: 0, marginTop: '2px' }} />
                                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.55' }}>{r}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ══════════════════ MORE PROJECTS ══════════════════ */}
            <section style={{ padding: '60px 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
                <div className="container-custom">
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        Explore More
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                            See our full portfolio
                        </h3>
                        <Link to="/projects" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '11px 24px', background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
                            borderRadius: '11px', color: '#000', textDecoration: 'none',
                            fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem',
                            boxShadow: `0 4px 20px ${accent}22`,
                        }}>
                            All Projects <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            <CtaBanner />

            <style>{`
                .pdp-hero-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 24px;
                }
                .pdp-two-col {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 16px;
                }
                @media (min-width: 768px) {
                    .pdp-hero-grid {
                        grid-template-columns: 1fr auto;
                        align-items: flex-start;
                        gap: 40px;
                    }
                    .pdp-two-col {
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                    }
                }
                @keyframes shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </>
    );
}