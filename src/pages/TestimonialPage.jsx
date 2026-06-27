/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { SectionTitle } from '../components/common/index.jsx';
import CtaBanner from '../components/home/CtaBanner';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const ACCENT_COLORS = ['#00d4ff', '#ff6b35', '#a78bfa', '#00ff88', '#fbbf24', '#f472b6'];

// ── Star Rating ──
function StarRating({ rating }) {
    return (
        <div style={{ display: 'flex', gap: '3px' }}>
            {[1, 2, 3, 4, 5].map(star => (
                <svg key={star} width="13" height="13" viewBox="0 0 20 20" fill={star <= rating ? '#fbbf24' : 'var(--border)'}
                    style={{ flexShrink: 0 }}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

// ── Skeleton Card ──
function SkeletonCard() {
    return (
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--bg-secondary)' }} />
            {['90%', '100%', '70%'].map((w, i) => (
                <div key={i} style={{ height: '12px', width: w, borderRadius: '6px', background: 'var(--bg-secondary)', opacity: 0.6 }} />
            ))}
            <div style={{ display: 'flex', gap: '3px', marginTop: '4px' }}>
                {[...Array(5)].map((_, i) => <div key={i} style={{ width: '13px', height: '13px', borderRadius: '3px', background: 'var(--bg-secondary)' }} />)}
            </div>
            <div style={{ height: '1px', background: 'var(--border)', marginTop: '4px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--bg-secondary)', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                    <div style={{ height: '11px', width: '100px', borderRadius: '5px', background: 'var(--bg-secondary)' }} />
                    <div style={{ height: '10px', width: '70px', borderRadius: '5px', background: 'var(--bg-secondary)', opacity: 0.5 }} />
                </div>
            </div>
        </div>
    );
}

// ── Testimonial Card ──
function TestimonialCard({ t, index }) {
    const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
        >
            {/* Top accent bar */}
            <div style={{ position: 'absolute', top: 0, left: '28px', right: '28px', height: '2px', background: `linear-gradient(90deg, ${accent}, transparent)`, borderRadius: '0 0 2px 2px' }} />

            {/* Quote icon */}
            <div style={{ width: '36px', height: '36px', background: `${accent}12`, border: `1px solid ${accent}28`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 32 32" fill={accent}>
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5c0-1.38 1.12-2.5 2.5-2.5V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.38 1.12-2.5 2.5-2.5V8z" />
                </svg>
            </div>

            {/* Message */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.75', flex: 1, marginBottom: '16px' }}>
                "{t.message}"
            </p>

            {/* Rating + project */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <StarRating rating={t.rating} />
                {t.project && (
                    <span style={{ padding: '3px 9px', background: `${accent}0d`, border: `1px solid ${accent}20`, borderRadius: '20px', fontSize: '0.68rem', color: accent, fontFamily: 'Syne,sans-serif', fontWeight: '600', letterSpacing: '0.04em' }}>
                        {t.project}
                    </span>
                )}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '16px' }} />

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {t.avatar ? (
                    <img
                        src={t.avatar}
                        alt={t.name}
                        style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: `2px solid ${accent}40`,
                            flexShrink: 0,
                            boxShadow: `0 8px 20px ${accent}20`,
                        }}
                    />
                ) : (
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: `${accent}12`, border: `1px solid ${accent}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne,sans-serif', fontWeight: '700', fontSize: '0.95rem', color: accent, flexShrink: 0 }}>
                        {t.name?.charAt(0).toUpperCase()}
                    </div>
                )}
                <div>
                    <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{t.name}</p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'DM Sans,sans-serif' }}>
                        {t.role}{t.role && t.company ? ' · ' : ''}{t.company}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

// ── Main TestimonialPage ──
export default function TestimonialPage() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetch(`${API_URL}/testimonials?status=Published&limit=50`)
            .then(r => r.json())
            .then(res => {
                console.log('Full response:', res); // pura response dekho

                // Backend se jo bhi structure aaye handle karo
                const list =
                    res.data?.items ||
                    res.data?.data ||
                    res.data ||
                    res.items ||
                    [];

                if (Array.isArray(list)) {
                    setTestimonials(list);
                }
            })
            .catch((err) => console.error('Fetch error:', err))
            .finally(() => setLoading(false));
    }, []);

    const filtered = filter === 'All'
        ? testimonials
        : testimonials.filter(t => t.rating === Number(filter));

    const avgRating = testimonials.length
        ? (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)
        : null;

    return (
        <>
            {/* ── Hero ── */}
            <section style={{ paddingTop: '140px', paddingBottom: '60px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }} className="grid-bg">
                <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(20px)' }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: 'center' }}>

                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '50px', padding: '6px 16px', marginBottom: '20px', fontSize: '0.72rem', fontFamily: 'Syne,sans-serif', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                            Client Testimonials
                        </span>

                        <h1 style={{ fontFamily: 'Syne,sans-serif', fontWeight: '800', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.08', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '16px' }}>
                            What Our Clients{' '}
                            <span style={{ background: 'linear-gradient(135deg, var(--accent), #00ffcc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Say About Us</span>
                        </h1>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '460px', margin: '0 auto 36px' }}>
                            Real feedback from businesses we've helped grow digitally.
                        </p>

                        {/* Stats */}
                        {!loading && testimonials.length > 0 && (
                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                style={{ display: 'inline-flex', gap: '40px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px 36px' }}>
                                {[
                                    { value: `${avgRating}★`, label: 'Avg Rating' },
                                    { value: `${testimonials.length}+`, label: 'Reviews' },
                                ].map((stat, i) => (
                                    <div key={i} style={{ textAlign: 'center' }}>
                                        <p style={{ fontFamily: 'Syne,sans-serif', fontWeight: '800', fontSize: '1.6rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '4px' }}>{stat.value}</p>
                                        <p style={{ fontSize: '0.68rem', fontFamily: 'Syne,sans-serif', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{stat.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ── Testimonials Grid ── */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)', paddingTop: '40px' }}>
                <div className="container-custom">

                    {/* Filter bar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
                        <span style={{ fontSize: '0.68rem', fontFamily: 'Syne,sans-serif', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginRight: '4px' }}>Filter</span>
                        {['All', '5', '4', '3'].map(r => {
                            const active = filter === r;
                            return (
                                <button key={r} onClick={() => setFilter(r)}
                                    style={{ padding: '6px 16px', borderRadius: '50px', fontFamily: 'Syne,sans-serif', fontWeight: '600', fontSize: '0.75rem', letterSpacing: '0.04em', cursor: 'pointer', transition: 'all 0.2s', border: active ? '1px solid var(--accent)' : '1px solid var(--border)', background: active ? 'rgba(0,212,255,0.12)' : 'transparent', color: active ? 'var(--accent)' : 'var(--text-secondary)' }}
                                    onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; e.currentTarget.style.color = 'var(--text-primary)'; } }}
                                    onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; } }}
                                >
                                    {r === 'All' ? 'All' : `${r} Stars`}
                                </button>
                            );
                        })}
                        <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'DM Sans,sans-serif' }}>
                            {filtered.length} review{filtered.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    {/* Loading */}
                    {loading && (
                        <div className="testimonials-grid">
                            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
                        </div>
                    )}

                    {/* Empty */}
                    {!loading && filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)', fontFamily: 'Syne,sans-serif' }}>
                            No testimonials found.
                        </div>
                    )}

                    {/* Grid */}
                    {!loading && filtered.length > 0 && (
                        <div className="testimonials-grid">
                            {filtered.map((t, i) => <TestimonialCard key={t._id} t={t} index={i} />)}
                        </div>
                    )}
                </div>
            </section>

            <CtaBanner />

            <style>{`
                .testimonials-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
                @media (min-width: 640px)  { .testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (min-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(3, 1fr); } }
            `}</style>
        </>
    );
}