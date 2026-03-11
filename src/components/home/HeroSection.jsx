import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const clients = ['Startup A', 'Corp B', 'Brand C', 'Firm D', 'Tech E'];

export default function HeroSection() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '100px',
                paddingBottom: '80px',
            }}
            className="grid-bg mesh-gradient"
        >
            {/* Animated orbs */}
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '15%',
                    right: '8%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    filter: 'blur(1px)',
                }}
            />
            <motion.div
                animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '350px',
                    height: '350px',
                    background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                }}
            />

            {/* Floating badges */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="float"
                style={{
                    position: 'absolute',
                    top: '22%',
                    right: '12%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    zIndex: 5,
                }}
                className="hidden-on-mobile"
            >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)' }} className="pulse-dot" />
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                    Available for Projects
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                style={{
                    position: 'absolute',
                    bottom: '28%',
                    right: '6%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    zIndex: 5,
                }}
                className="hidden-on-mobile"
            >
                <div style={{ display: 'flex', gap: '-8px', marginBottom: '8px' }}>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} style={{
                            width: '28px', height: '28px',
                            borderRadius: '50%',
                            background: `hsl(${i * 40 + 180}, 70%, 50%)`,
                            border: '2px solid var(--bg-card)',
                            marginLeft: i > 1 ? '-8px' : '0',
                        }} />
                    ))}
                </div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>30+</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.72rem' }}>Happy Clients</div>
            </motion.div>

            {/* Main content */}
            <div className="container-custom" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    style={{ maxWidth: '780px' }}
                >
                    {/* Eyebrow */}
                    <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(0,212,255,0.08)',
                            border: '1px solid rgba(0,212,255,0.2)',
                            borderRadius: '50px',
                            padding: '6px 14px',
                            fontSize: '0.75rem',
                            fontFamily: 'Syne, sans-serif',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--accent)',
                        }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} className="pulse-dot" />
                            Full-Stack Digital Agency
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={item}
                        style={{
                            fontFamily: 'Syne, sans-serif',
                            fontWeight: '800',
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            lineHeight: '1.05',
                            letterSpacing: '-0.03em',
                            color: 'var(--text-primary)',
                            marginBottom: '28px',
                        }}
                    >
                        We Build{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, var(--accent) 0%, #00ffcc 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Digital
                        </span>
                        {' '}Products
                        <br />
                        That Actually{' '}
                        <span style={{ color: 'var(--accent-warm)' }}>Matter</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={item}
                        style={{
                            color: 'var(--text-secondary)',
                            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                            lineHeight: '1.75',
                            maxWidth: '520px',
                            marginBottom: '44px',
                        }}
                    >
                        From concept to deployment — we craft high-performance web apps, mobile solutions,
                        and scalable backends for startups and enterprises worldwide.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '64px' }}>
                        <Link
                            to="/contact"
                            className="btn-primary"
                            style={{
                                padding: '14px 32px',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <span>Start Your Project</span>
                            <FiArrowRight />
                        </Link>
                        <Link
                            to="/projects"
                            style={{
                                padding: '14px 32px',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                color: 'var(--text-primary)',
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                        >
                            <FiPlay style={{ fontSize: '13px' }} />
                            View Our Work
                        </Link>
                    </motion.div>

                    {/* Trusted by */}
                    <motion.div variants={item}>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.72rem',
                            fontFamily: 'Syne, sans-serif',
                            fontWeight: '700',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                        }}>
                            Trusted by teams at
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                            {clients.map((client, i) => (
                                <motion.span
                                    key={client}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + i * 0.1 }}
                                    style={{
                                        padding: '6px 14px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '6px',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.78rem',
                                        fontFamily: 'Syne, sans-serif',
                                        fontWeight: '600',
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {client}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '200px',
                background: 'linear-gradient(to bottom, transparent, var(--bg-primary))',
                pointerEvents: 'none',
            }} />

            <style>{`
        @media (max-width: 767px) { .hidden-on-mobile { display: none !important; } }
      `}</style>
        </section>
    );
}