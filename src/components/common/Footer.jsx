/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUpRight } from 'react-icons/fi';
import { navLinks } from '../../constants/navLinks';
import logo from '../../assets/images/logoo.png';
import FloatingButtons from './FloatingButtons'; 

const PHONE = '+917727922769';

const services = [
    'Web & App Development',
    'Cyber Solutions',
    'UI/UX Design',
    'API Development',
    'Cloud Solutions',
    'SEO & Performance',
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <FloatingButtons />

            <footer style={{
                background: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border)',
                paddingTop: '80px',
                position: 'relative',
                overflow: 'hidden',
            }}>
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
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '48px',
                        paddingBottom: '64px',
                        borderBottom: '1px solid var(--border)',
                    }}>
                        {/* Brand */}
                        <div>
                            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                <img src={logo} alt="Shark Technologies Logo" style={{ width: '42px', height: '42px', objectFit: 'contain', filter: 'brightness(7)' }} />
                                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>SHARK</span>
                            </Link>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', maxWidth: '240px' }}>
                                Building exceptional digital products that drive real results for ambitious businesses.
                            </p>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
                                {[
                                    { Icon: FiGithub, url: 'https://github.com' },
                                    { Icon: FiLinkedin, url: 'https://linkedin.com' },
                                    { Icon: FiTwitter, url: 'https://twitter.com' },
                                    { Icon: FiInstagram, url: 'https://instagram.com' },
                                ].map(({ Icon, url }, i) => (
                                    <motion.a key={i} href={url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2, scale: 1.05 }}
                                        style={{ width: '36px', height: '36px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s, border-color 0.2s' }}
                                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                                    ><Icon /></motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Pages */}
                        <div>
                            <h4
                                style={{
                                    fontFamily: 'Syne, sans-serif',
                                    fontWeight: '700',
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-muted)',
                                    marginBottom: '20px',
                                }}
                            >
                                Pages
                            </h4>

                            <ul
                                style={{
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            style={{
                                                textDecoration: 'none',
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.875rem',
                                                transition: 'all 0.3s ease',
                                                display: 'inline-block',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'var(--accent)';
                                                e.currentTarget.style.transform = 'translateX(8px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--text-secondary)';
                                                e.currentTarget.style.transform = 'translateX(0)';
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4
                                style={{
                                    fontFamily: 'Syne, sans-serif',
                                    fontWeight: '700',
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-muted)',
                                    marginBottom: '20px',
                                }}
                            >
                                Services
                            </h4>

                            <ul
                                style={{
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                {services.map((s) => (
                                    <li key={s}>
                                        <span
                                            style={{
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.875rem',
                                                display: 'inline-block',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'var(--accent)';
                                                e.currentTarget.style.transform = 'translateX(8px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--text-secondary)';
                                                e.currentTarget.style.transform = 'translateX(0)';
                                            }}
                                        >
                                            {s}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '20px' }}>Get In Touch</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <a href="mailto:sharktechinnovations@outlook.com" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                                >sharktechinnovations@outlook.com</a>
                                <a href={`tel:${PHONE}`} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                                >+91 7727922769</a>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>India — Remote Worldwide</span>
                            </div>
                            <motion.a href="/contact" whileHover={{ x: 3 }}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '20px', padding: '10px 18px', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '8px', color: 'var(--accent)', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'Syne, sans-serif', fontWeight: '600' }}
                            >Start a Project <FiArrowUpRight /></motion.a>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '24px 0', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        <span>© {year} SHARK. All rights reserved.</span>
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
        </>
    );
}