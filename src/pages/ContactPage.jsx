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




// // / ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
// import ContactForm from '../components/contact/ContactForm';
// import { motion } from 'framer-motion';
// import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

// const whyUs = [
//     { emoji: '⚡', title: 'Fast Turnaround', desc: 'Most projects kick off within 48 hours of our first call.' },
//     { emoji: '🔒', title: 'NDA Protected', desc: 'Your idea stays yours. We sign NDAs before any discussion.' },
//     { emoji: '🌍', title: 'Remote-First', desc: 'We work seamlessly across timezones with async communication.' },
//     { emoji: '📦', title: 'Full Ownership', desc: 'You get 100% source code and IP rights on delivery.' },
// ];

// export function ContactPage() {
//     const info = [
//         { icon: FiMail, label: 'Email Us', value: 'hello@nexora.dev', href: 'mailto:hello@nexora.dev' },
//         { icon: FiPhone, label: 'Call Us', value: '+91 99999 99999', href: 'tel:+919999999999' },
//         { icon: FiMapPin, label: 'Location', value: 'India — Remote Worldwide', href: null },
//     ];

//     return (
//         <>
//             <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'var(--bg-primary)' }} className="grid-bg">
//                 <div className="container-custom">

//                     {/* Heading */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
//                         style={{ marginBottom: '48px' }}
//                     >
//                         <span style={{
//                             display: 'block', width: 'fit-content',
//                             background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
//                             borderRadius: '50px', padding: '6px 16px', marginBottom: '18px',
//                             fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
//                             letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
//                         }}>Get In Touch</span>
//                         <h1 style={{
//                             fontFamily: 'Syne, sans-serif', fontWeight: '800',
//                             fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
//                             lineHeight: '1.1', letterSpacing: '-0.03em',
//                             color: 'var(--text-primary)', marginBottom: '14px',
//                         }}>
//                             Let's Build Something<br />
//                             <span style={{ color: 'var(--accent)' }}>Amazing Together</span>
//                         </h1>
//                         <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '480px' }}>
//                             Have a project in mind? Drop us a message. We typically respond within a few hours.
//                         </p>
//                     </motion.div>

//                     {/* Responsive grid */}
//                     <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '32px' }} className="contact-grid">

//                         {/* ── LEFT SIDE ── */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.7, delay: 0.2 }}
//                             style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
//                         >
//                             {/* Contact info cards */}
//                             {info.map(item => {
//                                 const Icon = item.icon;
//                                 return (
//                                     <div key={item.label} style={{
//                                         display: 'flex', alignItems: 'center', gap: '14px',
//                                         background: 'var(--bg-card)', border: '1px solid var(--border)',
//                                         borderRadius: '14px', padding: '16px 18px',
//                                     }}>
//                                         <div style={{
//                                             width: '38px', height: '38px', flexShrink: 0,
//                                             background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)',
//                                             borderRadius: '10px', display: 'flex', alignItems: 'center',
//                                             justifyContent: 'center', color: 'var(--accent)', fontSize: '16px',
//                                         }}><Icon /></div>
//                                         <div style={{ minWidth: 0 }}>
//                                             <div style={{
//                                                 fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.68rem',
//                                                 letterSpacing: '0.08em', textTransform: 'uppercase',
//                                                 color: 'var(--text-muted)', marginBottom: '2px',
//                                             }}>{item.label}</div>
//                                             {item.href ? (
//                                                 <a href={item.href} style={{
//                                                     color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.875rem',
//                                                     transition: 'color 0.2s', display: 'block', overflow: 'hidden',
//                                                     textOverflow: 'ellipsis', whiteSpace: 'nowrap',
//                                                 }}
//                                                     onMouseEnter={e => e.target.style.color = 'var(--accent)'}
//                                                     onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
//                                                 >{item.value}</a>
//                                             ) : (
//                                                 <span style={{ color: 'var(--text-primary)', fontSize: '0.875rem' }}>{item.value}</span>
//                                             )}
//                                         </div>
//                                     </div>
//                                 );
//                             })}

//                             {/* Response badge */}
//                             <div style={{
//                                 background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)',
//                                 borderRadius: '14px', padding: '16px 18px',
//                                 display: 'flex', alignItems: 'center', gap: '12px',
//                             }}>
//                                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)', flexShrink: 0 }} className="pulse-dot" />
//                                 <div>
//                                     <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '2px' }}>We respond fast</div>
//                                     <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>Average response time: under 3 hours</div>
//                                 </div>
//                             </div>

//                             {/* Why work with us */}
//                             <div style={{
//                                 background: 'var(--bg-card)', border: '1px solid var(--border)',
//                                 borderRadius: '16px', padding: '22px',
//                             }}>
//                                 <p style={{
//                                     fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem',
//                                     letterSpacing: '0.12em', textTransform: 'uppercase',
//                                     color: 'var(--text-muted)', marginBottom: '16px',
//                                 }}>Why Work With Us</p>
//                                 <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
//                                     {whyUs.map((item) => (
//                                         <div key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
//                                             <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>{item.emoji}</span>
//                                             <div>
//                                                 <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{item.title}</div>
//                                                 <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', lineHeight: '1.6' }}>{item.desc}</div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Process steps */}
//                             <div style={{
//                                 background: 'var(--bg-card)', border: '1px solid var(--border)',
//                                 borderRadius: '16px', padding: '22px',
//                             }}>
//                                 <p style={{
//                                     fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem',
//                                     letterSpacing: '0.12em', textTransform: 'uppercase',
//                                     color: 'var(--text-muted)', marginBottom: '16px',
//                                 }}>How It Works</p>
//                                 {[
//                                     { step: '01', label: 'Send us a message', desc: 'Fill the form or email us directly.' },
//                                     { step: '02', label: 'Free discovery call', desc: 'We understand your requirements in depth.' },
//                                     { step: '03', label: 'Proposal & timeline', desc: 'You get a detailed plan and fixed quote.' },
//                                     { step: '04', label: 'We build & deliver', desc: 'Regular updates, clean code, on time.' },
//                                 ].map((s, i, arr) => (
//                                     <div key={s.step} style={{ display: 'flex', gap: '14px', position: 'relative', paddingBottom: i < arr.length - 1 ? '16px' : '0' }}>
//                                         {/* Vertical line */}
//                                         {i < arr.length - 1 && (
//                                             <div style={{
//                                                 position: 'absolute', left: '15px', top: '28px', bottom: '0',
//                                                 width: '1px', background: 'var(--border)',
//                                             }} />
//                                         )}
//                                         <div style={{
//                                             width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
//                                             background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)',
//                                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                             fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: '0.65rem',
//                                             color: 'var(--accent)', zIndex: 1,
//                                         }}>{s.step}</div>
//                                         <div style={{ paddingTop: '4px' }}>
//                                             <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{s.label}</div>
//                                             <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', lineHeight: '1.5' }}>{s.desc}</div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                         </motion.div>

//                         {/* ── RIGHT: Form ── */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.7, delay: 0.3 }}
//                         >
//                             <ContactForm />
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             <style>{`
//         @media (min-width: 768px) {
//           .contact-grid {
//             grid-template-columns: 1fr 1.4fr !important;
//             align-items: start;
//           }
//         }
//       `}</style>
//         </>
//     );
// }



import ContactForm from "../components/contact/ContactForm";
import { motion } from "framer-motion";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiSend,
    FiUsers,
    FiFileText,
    FiCode
} from "react-icons/fi";

const whyUs = [
    { emoji: "⚡", title: "Fast Turnaround", desc: "Most projects kick off within 48 hours of our first call." },
    { emoji: "🔒", title: "NDA Protected", desc: "Your idea stays yours. We sign NDAs before any discussion." },
    { emoji: "🌍", title: "Remote-First", desc: "We work seamlessly across timezones with async communication." },
    { emoji: "📦", title: "Full Ownership", desc: "You get 100% source code and IP rights on delivery." },
];

const steps = [
    { icon: FiSend, label: "Send us a message", desc: "Fill the form or email us directly." },
    { icon: FiUsers, label: "Free discovery call", desc: "We understand your requirements in depth." },
    { icon: FiFileText, label: "Proposal & timeline", desc: "You get a detailed plan and fixed quote." },
    { icon: FiCode, label: "We build & deliver", desc: "Regular updates, clean code, on time." },
];

export function ContactPage() {

    const info = [
        { icon: FiMail, label: "Email Us", value: "hello@nexora.dev", href: "mailto:hello@nexora.dev" },
        { icon: FiPhone, label: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999" },
        { icon: FiMapPin, label: "Location", value: "India — Remote Worldwide", href: null },
    ];

    return (
        <>
            <section
                style={{
                    paddingTop: "140px",
                    paddingBottom: "80px",
                    background: "var(--bg-primary)"
                }}
                className="grid-bg"
            >
                <div className="container-custom">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ marginBottom: "48px" }}
                    >
                        <span
                            style={{
                                display: "block",
                                width: "fit-content",
                                background: "rgba(0,212,255,0.08)",
                                border: "1px solid rgba(0,212,255,0.2)",
                                borderRadius: "50px",
                                padding: "6px 16px",
                                marginBottom: "18px",
                                fontSize: "0.72rem",
                                fontFamily: "Syne, sans-serif",
                                fontWeight: "700",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "var(--accent)"
                            }}
                        >
                            Get In Touch
                        </span>

                        <h1
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontWeight: "800",
                                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                                lineHeight: "1.1",
                                letterSpacing: "-0.03em",
                                color: "var(--text-primary)",
                                marginBottom: "14px"
                            }}
                        >
                            Let's Build Something <br />
                            <span style={{ color: "var(--accent)" }}>Amazing Together</span>
                        </h1>

                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "1rem",
                                lineHeight: "1.7",
                                maxWidth: "480px"
                            }}
                        >
                            Have a project in mind? Drop us a message. We typically respond within a few hours.
                        </p>
                    </motion.div>

                    {/* GRID */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "minmax(0,1fr)",
                            gap: "32px"
                        }}
                        className="contact-grid"
                    >

                        {/* LEFT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                        >

                            {info.map(item => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "14px",
                                            background: "var(--bg-card)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "14px",
                                            padding: "16px 18px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                                background: "rgba(0,212,255,0.1)",
                                                border: "1px solid rgba(0,212,255,0.2)",
                                                borderRadius: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--accent)"
                                            }}
                                        >
                                            <Icon />
                                        </div>

                                        <div>
                                            <div
                                                style={{
                                                    fontFamily: "Syne",
                                                    fontWeight: "700",
                                                    fontSize: "0.7rem",
                                                    color: "var(--text-muted)"
                                                }}
                                            >
                                                {item.label}
                                            </div>

                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    style={{
                                                        color: "var(--text-primary)",
                                                        textDecoration: "none"
                                                    }}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span>{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Why Work With Us */}
                            <div
                                style={{
                                    background: "var(--bg-card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "16px",
                                    padding: "22px"
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "Syne",
                                        fontWeight: "700",
                                        fontSize: "0.75rem",
                                        color: "var(--text-muted)",
                                        marginBottom: "16px"
                                    }}
                                >
                                    Why Work With Us
                                </p>

                                {whyUs.map(item => (
                                    <div
                                        key={item.title}
                                        style={{ display: "flex", gap: "10px", marginBottom: "12px" }}
                                    >
                                        <span>{item.emoji}</span>
                                        <div>
                                            <div style={{ fontWeight: "700", color: "var(--text-primary)" }}>
                                                {item.title}
                                            </div>
                                            <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </motion.div>

                        {/* RIGHT SIDE FORM */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <ContactForm />
                        </motion.div>

                    </div>

                    {/* FULL WIDTH HOW IT WORKS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{
                            marginTop: "60px",
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            borderRadius: "16px",
                            padding: "28px"
                        }}
                    >
                        <p
                            style={{
                                textAlign: "center",
                                fontFamily: "Syne",
                                fontWeight: "700",
                                marginBottom: "28px",
                                color: "var(--text-muted)"
                            }}
                        >
                            How It Works
                        </p>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                                gap: "28px"
                            }}
                        >
                            {steps.map((step, i) => {
                                const Icon = step.icon;

                                return (
                                    <div key={i} style={{ textAlign: "center" }}>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                margin: "0 auto 14px",
                                                background: "rgba(0,212,255,0.1)",
                                                border: "1px solid rgba(0,212,255,0.25)",
                                                borderRadius: "12px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--accent)",
                                                fontSize: "20px"
                                            }}
                                        >
                                            <Icon />
                                        </div>

                                        <h4 style={{ fontWeight: "700", marginBottom: "6px" }}>
                                            {step.label}
                                        </h4>

                                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </section>

            <style>{`
        @media (min-width:768px){
          .contact-grid{
            grid-template-columns:1fr 1.4fr !important;
          }
        }
      `}</style>
        </>
    );
}