// // ContactPage.jsx
// import ContactForm from '../components/contact/ContactForm';
// import { motion } from 'framer-motion';
// import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

// export function ContactPage() {
//     const info = [
//         { icon: FiMail, label: 'Email Us', value: 'hello@nexora.dev', href: 'mailto:hello@nexora.dev' },
//         { icon: FiPhone, label: 'Call Us', value: '+91 99999 99999', href: 'tel:+919999999999' },
//         { icon: FiMapPin, label: 'Location', value: 'India — Remote Worldwide', href: null },
//     ];

//     return (
//         <>
//             <section style={{ paddingTop: '160px', paddingBottom: '80px', background: 'var(--bg-primary)' }} className="grid-bg">
//                 <div className="container-custom">
//                     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ marginBottom: '64px' }}>
//                         <span style={{
//                             display: 'block', width: 'fit-content',
//                             background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
//                             borderRadius: '50px', padding: '6px 16px', marginBottom: '22px',
//                             fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
//                             letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
//                         }}>Get In Touch</span>
//                         <h1 style={{
//                             fontFamily: 'Syne, sans-serif', fontWeight: '800',
//                             fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
//                             lineHeight: '1.08', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '18px',
//                         }}>
//                             Let's Build Something<br />
//                             <span style={{ color: 'var(--accent)' }}>Amazing Together</span>
//                         </h1>
//                         <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '480px' }}>
//                             Have a project in mind? Drop us a message. We typically respond within a few hours.
//                         </p>
//                     </motion.div>

//                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'start' }}>
//                         {/* Left: Info */}
//                         <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
//                                 {info.map(item => {
//                                     const Icon = item.icon;
//                                     return (
//                                         <div key={item.label} style={{
//                                             display: 'flex', alignItems: 'center', gap: '16px',
//                                             background: 'var(--bg-card)', border: '1px solid var(--border)',
//                                             borderRadius: '14px', padding: '20px 22px',
//                                         }}>
//                                             <div style={{ width: '40px', height: '40px', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '17px', flexShrink: 0 }}>
//                                                 <Icon />
//                                             </div>
//                                             <div>
//                                                 <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '3px' }}>{item.label}</div>
//                                                 {item.href ? (
//                                                     <a href={item.href} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
//                                                         onMouseEnter={e => e.target.style.color = 'var(--accent)'}
//                                                         onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
//                                                     >{item.value}</a>
//                                                 ) : (
//                                                     <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{item.value}</span>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>

//                             {/* Response time badge */}
//                             <div style={{
//                                 background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)',
//                                 borderRadius: '14px', padding: '20px 22px',
//                                 display: 'flex', alignItems: 'center', gap: '12px',
//                             }}>
//                                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)', flexShrink: 0 }} className="pulse-dot" />
//                                 <div>
//                                     <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '2px' }}>We respond fast</div>
//                                     <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Average response time: under 3 hours</div>
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Right: Form */}
//                         <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
//                             <ContactForm />
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }




// / ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export function ContactPage() {
    const info = [
        { icon: FiMail, label: 'Email Us', value: 'hello@nexora.dev', href: 'mailto:hello@nexora.dev' },
        { icon: FiPhone, label: 'Call Us', value: '+91 99999 99999', href: 'tel:+919999999999' },
        { icon: FiMapPin, label: 'Location', value: 'India — Remote Worldwide', href: null },
    ];

    return (
        <>
            <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'var(--bg-primary)' }} className="grid-bg">
                <div className="container-custom">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                        style={{ marginBottom: '48px' }}
                    >
                        <span style={{
                            display: 'block', width: 'fit-content',
                            background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
                            borderRadius: '50px', padding: '6px 16px', marginBottom: '18px',
                            fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
                        }}>Get In Touch</span>
                        <h1 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                            lineHeight: '1.1', letterSpacing: '-0.03em',
                            color: 'var(--text-primary)', marginBottom: '14px',
                        }}>
                            Let's Build Something<br />
                            <span style={{ color: 'var(--accent)' }}>Amazing Together</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '480px' }}>
                            Have a project in mind? Drop us a message. We typically respond within a few hours.
                        </p>
                    </motion.div>

                    {/* Responsive grid — stacks on mobile */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr)',  /* mobile: single column */
                        gap: '32px',
                    }}
                        className="contact-grid"
                    >
                        {/* Left: Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                                {info.map(item => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.label} style={{
                                            display: 'flex', alignItems: 'center', gap: '14px',
                                            background: 'var(--bg-card)', border: '1px solid var(--border)',
                                            borderRadius: '14px', padding: '16px 18px',
                                        }}>
                                            <div style={{
                                                width: '38px', height: '38px', flexShrink: 0,
                                                background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)',
                                                borderRadius: '10px', display: 'flex', alignItems: 'center',
                                                justifyContent: 'center', color: 'var(--accent)', fontSize: '16px',
                                            }}>
                                                <Icon />
                                            </div>
                                            <div style={{ minWidth: 0 }}>
                                                <div style={{
                                                    fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.68rem',
                                                    letterSpacing: '0.08em', textTransform: 'uppercase',
                                                    color: 'var(--text-muted)', marginBottom: '2px',
                                                }}>{item.label}</div>
                                                {item.href ? (
                                                    <a href={item.href} style={{
                                                        color: 'var(--text-primary)', textDecoration: 'none',
                                                        fontSize: '0.875rem', transition: 'color 0.2s',
                                                        display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                                    }}
                                                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                                        onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                                                    >{item.value}</a>
                                                ) : (
                                                    <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>{item.value}</span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Response badge */}
                            <div style={{
                                background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)',
                                borderRadius: '14px', padding: '16px 18px',
                                display: 'flex', alignItems: 'center', gap: '12px',
                            }}>
                                <div style={{
                                    width: '8px', height: '8px', borderRadius: '50%',
                                    background: 'var(--accent-green)', flexShrink: 0,
                                }} className="pulse-dot" />
                                <div>
                                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                                        We respond fast
                                    </div>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
                                        Average response time: under 3 hours
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Responsive style — desktop: 2 columns */}
            <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1.4fr !important;
            align-items: start;
          }
        }
      `}</style>
        </>
    );
}