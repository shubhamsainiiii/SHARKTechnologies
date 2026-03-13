import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUpRight } from 'react-icons/fi';
import { navLinks } from '../../constants/navLinks';

const socialIcons = {
    FiGithub, FiLinkedin, FiTwitter, FiInstagram,
};

const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'API Development',
    'Cloud Solutions',
    'SEO & Performance',
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border)',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '300px',
                background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container-custom">
                {/* Top section */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '48px',
                    paddingBottom: '64px',
                    borderBottom: '1px solid var(--border)',
                }}>
                    {/* Brand */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <div style={{
                                width: '36px', height: '36px',
                                background: 'linear-gradient(135deg, var(--accent), #0077aa)',
                                borderRadius: '10px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '14px', fontWeight: '800',
                                fontFamily: 'Syne, sans-serif', color: '#000',
                            }}>NX</div>
                            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                                Nexora<span style={{ color: 'var(--accent)' }}>.</span>
                            </span>
                        </Link>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', maxWidth: '240px' }}>
                            Building exceptional digital products that drive real results for ambitious businesses.
                        </p>

                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
                            {[
                                { icon: FiGithub, url: 'https://github.com' },
                                { icon: FiLinkedin, url: 'https://linkedin.com' },
                                { icon: FiTwitter, url: 'https://twitter.com' },
                                { icon: FiInstagram, url: 'https://instagram.com' },
                            ].map(({ icon: Icon, url }, i) => (
                                <motion.a
                                    key={i}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    style={{
                                        width: '36px', height: '36px',
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '8px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--text-secondary)',
                                        transition: 'all 0.2s',
                                        textDecoration: 'none',
                                        fontSize: '15px',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '20px' }}>
                            Pages
                        </h4>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.875rem',
                                            transition: 'color 0.2s',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '20px' }}>
                            Services
                        </h4>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {services.map(s => (
                                <li key={s}>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '20px' }}>
                            Get In Touch
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <a href="mailto:hello@nexora.dev" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                            >
                                sharktechnologies@gmail.com
                            </a>
                            <a href="tel:+919999999999" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                            >
                                +91 7691888950
                            </a>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                                India — Remote Worldwide
                            </p>
                        </div>

                        <motion.a
                            href="/contact"
                            whileHover={{ x: 3 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                marginTop: '20px',
                                padding: '10px 18px',
                                background: 'rgba(0,212,255,0.08)',
                                border: '1px solid rgba(0,212,255,0.2)',
                                borderRadius: '8px',
                                color: 'var(--accent)',
                                textDecoration: 'none',
                                fontSize: '0.8rem',
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: '600',
                                letterSpacing: '0.02em',
                            }}
                        >
                            Start a Project <FiArrowUpRight />
                        </motion.a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    padding: '24px 0',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                }}>
                    <span>© {year} Nexora. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link to="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                        >Privacy Policy</Link>
                        <Link to="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                        >Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}