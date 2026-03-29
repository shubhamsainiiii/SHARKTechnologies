/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const COLORS = ['#00d4ff', '#ff6b35', '#00ff88', '#a78bfa', '#fbbf24', '#f472b6'];

export default function FeaturedProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/projects?status=Live&limit=6`)
            .then(r => r.json())
            .then(res => {
                if (res.success) {
                    // featured projects pehle, phir baaki
                    const sorted = [...(res.data || [])].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                    setProjects(sorted.slice(0, 3));
                }
            })
            .catch(() => { })
            .finally(() => setLoading(false));
    }, []);

    const getColor = (project, i) => project.color || COLORS[i % COLORS.length];

    if (loading) return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container-custom" style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)', fontFamily: 'Syne,sans-serif' }}>
                Loading projects...
            </div>
        </section>
    );

    if (!projects.length) return null;

    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute', top: '50%', right: '-200px',
                transform: 'translateY(-50%)', width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container-custom">
                {/* Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '56px' }}>
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                color: 'var(--accent)', fontSize: '0.7rem',
                                fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '14px',
                            }}
                        >
                            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
                            Our Work
                            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{
                                fontFamily: 'Syne, sans-serif', fontWeight: '800',
                                fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                                letterSpacing: '-0.02em', lineHeight: '1.15', color: 'var(--text-primary)',
                            }}
                        >Featured Projects</motion.h2>
                    </div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <Link to="/projects" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            color: 'var(--text-secondary)', textDecoration: 'none',
                            fontSize: '0.875rem', fontFamily: 'Syne, sans-serif', fontWeight: '600', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >View All Projects <FiArrowRight /></Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                    {projects.map((project, i) => {
                        const color = getColor(project, i);
                        const techArr = Array.isArray(project.tech) ? project.tech : [];

                        return (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="card-hover"
                                style={{
                                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                                    borderRadius: '20px', overflow: 'hidden', position: 'relative',
                                }}
                            >
                                {/* Image or placeholder */}
                                <div style={{
                                    height: '200px', position: 'relative',
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
                                                backgroundImage: `linear-gradient(${color}15 1px, transparent 1px), linear-gradient(90deg, ${color}15 1px, transparent 1px)`,
                                                backgroundSize: '30px 30px',
                                            }} />
                                            <div style={{
                                                width: '80px', height: '80px',
                                                background: `${color}20`, border: `2px solid ${color}40`,
                                                borderRadius: '20px', display: 'flex', alignItems: 'center',
                                                justifyContent: 'center', fontFamily: 'Syne, sans-serif',
                                                fontWeight: '800', fontSize: '1.5rem', color, position: 'relative', zIndex: 1,
                                            }}>{project.title.charAt(0)}</div>
                                        </div>
                                    )}

                                    {/* Category badge */}
                                    <span style={{
                                        position: 'absolute', top: '16px', left: '16px',
                                        padding: '4px 10px', background: `${color}20`,
                                        border: `1px solid ${color}40`, borderRadius: '20px',
                                        fontSize: '0.68rem', fontFamily: 'Syne, sans-serif',
                                        fontWeight: '700', letterSpacing: '0.08em',
                                        textTransform: 'uppercase', color, zIndex: 1,
                                    }}>{project.category}</span>

                                    {/* Featured badge */}
                                    {project.featured && (
                                        <span style={{
                                            position: 'absolute', top: '16px', right: '16px',
                                            padding: '4px 10px',
                                            background: 'rgba(0,212,255,0.15)',
                                            border: '1px solid rgba(0,212,255,0.3)',
                                            borderRadius: '20px', fontSize: '0.62rem',
                                            fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                            letterSpacing: '0.08em', textTransform: 'uppercase',
                                            color: 'var(--accent)', zIndex: 1,
                                        }}>⭐ Featured</span>
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{ padding: '28px' }}>
                                    <h3 style={{
                                        fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                        fontSize: '1.15rem', color: 'var(--text-primary)',
                                        marginBottom: '10px', letterSpacing: '-0.01em',
                                    }}>{project.title}</h3>
                                    <p style={{
                                        color: 'var(--text-secondary)', fontSize: '0.85rem',
                                        lineHeight: '1.7', marginBottom: '20px',
                                    }}>{project.shortDesc}</p>

                                    {/* Tech tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                                        {techArr.slice(0, 4).map(t => (
                                            <span key={t} style={{
                                                padding: '3px 8px', background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid var(--border)', borderRadius: '5px',
                                                fontSize: '0.7rem', color: 'var(--text-muted)',
                                            }}>{t}</span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <Link to={`/projects/${project.slug}`} style={{
                                            flex: 1, display: 'inline-flex', alignItems: 'center',
                                            justifyContent: 'center', gap: '6px', padding: '10px 16px',
                                            background: `${color}12`, border: `1px solid ${color}25`,
                                            borderRadius: '8px', color, textDecoration: 'none',
                                            fontSize: '0.8rem', fontFamily: 'Syne, sans-serif',
                                            fontWeight: '600', transition: 'all 0.2s',
                                        }}
                                            onMouseEnter={e => e.currentTarget.style.background = `${color}20`}
                                            onMouseLeave={e => e.currentTarget.style.background = `${color}12`}
                                        >View Details <FiArrowRight /></Link>

                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                                                width: '40px', height: '40px', display: 'flex',
                                                alignItems: 'center', justifyContent: 'center',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid var(--border)', borderRadius: '8px',
                                                color: 'var(--text-muted)', textDecoration: 'none',
                                                fontSize: '15px', transition: 'all 0.2s',
                                            }}
                                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                                            ><FiExternalLink /></a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.5 }}
                    style={{ textAlign: 'center', marginTop: '56px' }}
                >
                    <Link to="/projects" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '14px 32px', background: 'transparent',
                        border: '1px solid var(--border-accent)', borderRadius: '12px',
                        color: 'var(--accent)', textDecoration: 'none',
                        fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.08)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.1)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
                    >Explore All Projects <FiArrowRight /></Link>
                </motion.div>
            </div>
        </section>
    );
}