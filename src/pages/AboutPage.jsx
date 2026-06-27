/* eslint-disable no-unused-vars */
// AboutPage.jsx

import { FiTarget, FiHeart, FiZap } from 'react-icons/fi';
import StatsSection from '../components/home/StatsSection';
import { motion } from 'framer-motion';
import CtaBanner from '../components/home/CtaBanner';

const team = [
    {
        name: 'Ravikant Indora',
        role: 'Founder',
        avatar: 'RI',
        color: '#00d4ff',
        bio: 'Visionary behind SharkTech Innovations, driving digital excellence and building products that make an impact.',
    },
    {
        name: 'Shubham Saini',
        role: 'Co-Founder',
        avatar: 'SS',
        color: '#a78bfa',
        bio: 'Tech strategist and builder focused on delivering scalable, high-performance digital solutions.',
    },
];

const values = [
    { icon: FiTarget, title: 'Outcome-Focused', desc: 'We measure success by your results, not hours billed. Every decision is made with your goals in mind.', color: '#00d4ff' },
    { icon: FiHeart, title: 'Genuinely Caring', desc: 'Your project matters to us. We treat every client like a long-term partner, not just a contract.', color: '#ff6b35' },
    { icon: FiZap, title: 'Built to Ship', desc: 'We move fast without breaking things. Rapid iteration, clean code, and production-ready deliverables.', color: '#00ff88' },
];

export function AboutPage() {
    return (
        <>
            <section style={{ paddingTop: '160px', paddingBottom: '60px', background: 'var(--bg-primary)' }} className="grid-bg mesh-gradient">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ maxWidth: '700px' }}>
                        <span style={{
                            display: 'block', width: 'fit-content',
                            background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)',
                            borderRadius: '50px', padding: '6px 16px', marginBottom: '22px',
                            fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-green)',
                        }}>Who We Are</span>
                        <h1 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                            lineHeight: '1.08', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '24px',
                        }}>
                            A Team That Builds<br />
                            <span style={{ color: 'var(--accent-green)' }}>Things That Last</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '16px' }}>
                            SHARK is a small, focused digital agency founded in 2020. We've worked with 30+ clients across India, the US, and Europe — from seed-stage startups to established enterprises.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.75' }}>
                            We're not a factory. We're a craft shop. Every project gets our full attention and best thinking.
                        </p>
                    </motion.div>
                </div>
            </section>

            <StatsSection />

            {/* Values */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{ fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                            How We Work
                        </motion.h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div key={v.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '20px',
                                        padding: '36px 32px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        cursor: 'default',
                                        transition: 'border-color 0.3s',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = `${v.color}40`;
                                        e.currentTarget.querySelector('.icon-box').style.background = `${v.color}25`;
                                        e.currentTarget.querySelector('.icon-box').style.borderColor = `${v.color}60`;
                                        e.currentTarget.querySelector('.val-glow').style.opacity = '1';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                        e.currentTarget.querySelector('.icon-box').style.background = `${v.color}15`;
                                        e.currentTarget.querySelector('.icon-box').style.borderColor = `${v.color}30`;
                                        e.currentTarget.querySelector('.val-glow').style.opacity = '0';
                                    }}
                                >
                                    {/* Glow blob */}
                                    <div className="val-glow" style={{
                                        position: 'absolute',
                                        top: '-40px', left: '-40px',
                                        width: '160px', height: '160px',
                                        background: `radial-gradient(circle, ${v.color}12 0%, transparent 70%)`,
                                        pointerEvents: 'none',
                                        opacity: 0,
                                        transition: 'opacity 0.4s',
                                    }} />

                                    <div className="icon-box" style={{
                                        width: '48px', height: '48px',
                                        background: `${v.color}15`,
                                        border: `1px solid ${v.color}30`,
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '20px', color: v.color,
                                        marginBottom: '20px',
                                        transition: 'background 0.3s, border-color 0.3s',
                                        position: 'relative', zIndex: 1,
                                    }}>
                                        <Icon />
                                    </div>

                                    <h3 style={{
                                        fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                        fontSize: '1.1rem', color: 'var(--text-primary)',
                                        marginBottom: '10px', position: 'relative', zIndex: 1,
                                    }}>
                                        {v.title}
                                    </h3>

                                    <p style={{
                                        color: 'var(--text-secondary)', fontSize: '0.875rem',
                                        lineHeight: '1.7', position: 'relative', zIndex: 1,
                                    }}>
                                        {v.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{ fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                            The Minds Behind{' '} <span style={{
                                background: 'linear-gradient(135deg, var(--accent) 0%, #00ffcc 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>SHARK</span>
                        </motion.h2>
                    </div>
                    <div style={{
                        display: 'grid', // Team grid mein
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        maxWidth: '680px',
                        margin: '0 auto', gap: '20px'
                    }}>
                        {team.map((member, i) => (
                            <motion.div key={member.name}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="card-hover"
                                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px', textAlign: 'center' }}>
                                <div style={{
                                    width: '72px', height: '72px',
                                    background: `${member.color}15`, border: `2px solid ${member.color}40`,
                                    borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: '1.2rem', color: member.color,
                                    margin: '0 auto 18px',
                                }}>{member.avatar}</div>
                                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{member.name}</h3>
                                <p style={{ color: member.color, fontSize: '0.78rem', fontFamily: 'Syne, sans-serif', fontWeight: '600', letterSpacing: '0.04em', marginBottom: '12px' }}>{member.role}</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.6' }}>{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
}

