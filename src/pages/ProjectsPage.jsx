import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import CtaBanner from '../components/home/CtaBanner';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const categories = ['All', 'Web App', 'Full-Stack', 'Mobile', 'E-Commerce', 'UI/UX', 'API'];

const COLORS = ['#00d4ff', '#ff6b35', '#00ff88', '#a78bfa', '#fbbf24', '#f472b6'];

export default function ProjectsPage() {
    const [active, setActive] = useState('All');
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${API_URL}/projects?status=Live&limit=100`)
            .then(r => r.json())
            .then(res => {
                if (res.success) setProjects(res.data || []);
                else setError('Failed to load projects');
            })
            .catch(() => setError('Cannot connect to server'))
            .finally(() => setLoading(false));
    }, []);

    const filtered = active === 'All'
        ? projects
        : projects.filter(p => p.category === active);

    // Assign color based on index if no color in DB
    const getColor = (project, i) =>
        project.color || COLORS[i % COLORS.length];

    return (
        <>
            {/* Hero */}
            <section style={{ paddingTop: '160px', paddingBottom: '60px', background: 'var(--bg-primary)' }} className="grid-bg">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span style={{
                            display: 'block', width: 'fit-content',
                            background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.2)',
                            borderRadius: '50px', padding: '6px 16px', marginBottom: '22px',
                            fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-warm)',
                        }}>Our Portfolio</span>
                        <h1 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                            lineHeight: '1.08', letterSpacing: '-0.03em',
                            color: 'var(--text-primary)', marginBottom: '20px',
                        }}>
                            Work That Speaks<br />
                            <span style={{ color: 'var(--accent-warm)' }}>For Itself</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '500px' }}>
                            A collection of projects we're proud of — each built with precision, creativity, and purpose.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)', paddingTop: '40px' }}>
                <div className="container-custom">

                    {/* Filter tabs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                style={{
                                    padding: '9px 20px', borderRadius: '10px',
                                    fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.85rem',
                                    cursor: 'pointer', transition: 'all 0.2s',
                                    border: active === cat ? '1px solid rgba(0,212,255,0.4)' : '1px solid var(--border)',
                                    background: active === cat ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.03)',
                                    color: active === cat ? 'var(--accent)' : 'var(--text-secondary)',
                                }}
                            >{cat}</button>
                        ))}
                    </div>

                    {/* Loading */}
                    {loading && (
                        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)', fontFamily: 'Syne,sans-serif' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⏳</div>
                            Loading projects...
                        </div>
                    )}

                    {/* Error */}
                    {!loading && error && (
                        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)', fontFamily: 'Syne,sans-serif' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⚠️</div>
                            {error}
                        </div>
                    )}

                    {/* Empty */}
                    {!loading && !error && filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)', fontFamily: 'Syne,sans-serif' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📂</div>
                            No projects found in this category.
                        </div>
                    )}

                    {/* Grid */}
                    {!loading && !error && (
                        <motion.div
                            layout
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}
                        >
                            <AnimatePresence mode="popLayout">
                                {filtered.map((project, i) => {
                                    const color = getColor(project, i);
                                    const techArr = Array.isArray(project.tech) ? project.tech : [];

                                    return (
                                        <motion.div
                                            key={project._id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4, delay: i * 0.06 }}
                                            className="card-hover"
                                            style={{
                                                background: 'var(--bg-card)',
                                                border: '1px solid var(--border)',
                                                borderRadius: '20px', overflow: 'hidden',
                                            }}
                                        >
                                            {/* Image or placeholder */}
                                            <div style={{
                                                height: '180px', position: 'relative',
                                                borderBottom: '1px solid var(--border)', overflow: 'hidden',
                                            }}>
                                                {project.coverImage ? (
                                                    <img
                                                        src={project.coverImage}
                                                        alt={project.title}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                ) : (
                                                    <div style={{
                                                        width: '100%', height: '100%',
                                                        background: `linear-gradient(135deg, ${color}20 0%, ${color}05 100%)`,
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    }}>
                                                        <div style={{
                                                            position: 'absolute', inset: 0,
                                                            backgroundImage: `linear-gradient(${color}12 1px, transparent 1px), linear-gradient(90deg, ${color}12 1px, transparent 1px)`,
                                                            backgroundSize: '28px 28px',
                                                        }} />
                                                        <div style={{
                                                            width: '64px', height: '64px',
                                                            background: `${color}20`, border: `2px solid ${color}40`,
                                                            borderRadius: '16px', display: 'flex', alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                                                            fontSize: '1.4rem', color, position: 'relative', zIndex: 1,
                                                        }}>
                                                            {project.title.charAt(0)}
                                                        </div>
                                                    </div>
                                                )}
                                                <span style={{
                                                    position: 'absolute', top: '14px', left: '14px',
                                                    padding: '4px 10px', background: `${color}20`,
                                                    border: `1px solid ${color}35`, borderRadius: '20px',
                                                    fontSize: '0.68rem', fontFamily: 'Syne, sans-serif',
                                                    fontWeight: '700', letterSpacing: '0.08em',
                                                    textTransform: 'uppercase', color, zIndex: 1,
                                                }}>{project.category}</span>
                                            </div>

                                            {/* Content */}
                                            <div style={{ padding: '24px' }}>
                                                <h3 style={{
                                                    fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                                    fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '8px',
                                                }}>{project.title}</h3>
                                                <p style={{
                                                    color: 'var(--text-secondary)', fontSize: '0.84rem',
                                                    lineHeight: '1.65', marginBottom: '18px',
                                                }}>{project.shortDesc}</p>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                                                    {techArr.slice(0, 4).map(t => (
                                                        <span key={t} style={{
                                                            padding: '3px 8px',
                                                            background: 'rgba(255,255,255,0.04)',
                                                            border: '1px solid var(--border)',
                                                            borderRadius: '5px', fontSize: '0.7rem',
                                                            color: 'var(--text-muted)',
                                                        }}>{t}</span>
                                                    ))}
                                                </div>
                                                <Link
                                                    to={`/projects/${project.slug}`}
                                                    style={{
                                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                                        color, textDecoration: 'none',
                                                        fontFamily: 'Syne, sans-serif', fontWeight: '600',
                                                        fontSize: '0.82rem', transition: 'gap 0.2s',
                                                    }}
                                                    onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                                                    onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                                                >
                                                    View Details <FiArrowRight />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </section>

            <CtaBanner />
        </>
    );
}