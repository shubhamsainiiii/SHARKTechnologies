// import { motion } from 'framer-motion';
// import { FiGlobe, FiSmartphone, FiLayout, FiServer, FiCloud, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import { SectionTitle } from '../components/common/index.jsx';
// import { techCategories } from '../constants/techStack';
// import CtaBanner from '../components/home/CtaBanner';

// const services = [
//     {
//         icon: FiGlobe,
//         title: 'Web Development',
//         desc: 'We build production-grade web applications with React, Next.js, and modern full-stack architectures. From SaaS platforms to enterprise portals, we cover it all.',
//         features: ['Custom CMS Integration', 'SEO-optimized Structure', 'Progressive Web Apps', 'Real-time Features', 'Payment Integration', 'Multi-language Support'],
//         accent: '#00d4ff',
//     },
//     {
//         icon: FiSmartphone,
//         title: 'Mobile App Development',
//         desc: 'iOS and Android apps built with React Native or Flutter. We deliver native performance, beautiful UX, and seamless API integrations.',
//         features: ['Cross-platform (iOS + Android)', 'Push Notifications', 'Offline Support', 'App Store Deployment', 'In-app Purchases', 'Analytics Integration'],
//         accent: '#ff6b35',
//     },
//     {
//         icon: FiLayout,
//         title: 'UI/UX Design',
//         desc: 'From user research to final pixel — we design interfaces that are intuitive, accessible, and visually stunning. Every design decision is backed by data.',
//         features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Figma Handoff', 'Usability Testing', 'Brand Identity'],
//         accent: '#a78bfa',
//     },
//     {
//         icon: FiServer,
//         title: 'API & Backend Development',
//         desc: 'Scalable REST and GraphQL APIs, microservices, database architecture, and third-party integrations for any complexity level.',
//         features: ['RESTful API Design', 'GraphQL Services', 'Microservices', 'Database Optimization', 'Authentication Systems', 'Webhook Integrations'],
//         accent: '#00ff88',
//     },
//     {
//         icon: FiCloud,
//         title: 'Cloud & DevOps',
//         desc: 'Full infrastructure setup on AWS, GCP or Azure. CI/CD pipelines, Docker, Kubernetes, monitoring, and auto-scaling for production workloads.',
//         features: ['AWS / GCP / Azure Setup', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Auto-scaling', 'Monitoring & Alerts', 'Cost Optimization'],
//         accent: '#fbbf24',
//     },
//     {
//         icon: FiTrendingUp,
//         title: 'Performance & SEO',
//         desc: 'Speed up your existing apps and rank higher. We audit, optimize, and fix performance bottlenecks for maximum Core Web Vitals scores.',
//         features: ['Core Web Vitals Audit', 'Image & Bundle Optimization', 'Server-side Rendering', 'Technical SEO', 'Structured Data', 'Lighthouse 90+ Scores'],
//         accent: '#f472b6',
//     },
// ];

// export default function ServicesPage() {
//     return (
//         <>
//             {/* Hero */}
//             <section style={{ paddingTop: '160px', paddingBottom: '80px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }} className="grid-bg">
//                 <div style={{
//                     position: 'absolute', top: '30%', right: '10%',
//                     width: '400px', height: '400px',
//                     background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
//                     pointerEvents: 'none',
//                 }} />
//                 <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
//                     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
//                         <span style={{
//                             display: 'inline-flex', alignItems: 'center', gap: '8px',
//                             background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
//                             borderRadius: '50px', padding: '6px 16px',
//                             fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
//                             letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
//                             marginBottom: '22px',
//                         }}>
//                             What We Offer
//                         </span>
//                         <h1 style={{
//                             fontFamily: 'Syne, sans-serif', fontWeight: '800',
//                             fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
//                             lineHeight: '1.08', letterSpacing: '-0.03em',
//                             color: 'var(--text-primary)', marginBottom: '20px', maxWidth: '700px',
//                         }}>
//                             Services That Drive{' '}
//                             <span style={{
//                                 background: 'linear-gradient(135deg, var(--accent), #00ffcc)',
//                                 WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//                             }}>Real Results</span>
//                         </h1>
//                         <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '520px' }}>
//                             A full spectrum of digital services — from design to deployment. We own every layer of your product.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Services list */}
//             <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
//                 <div className="container-custom">
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
//                         {services.map((service, i) => {
//                             const Icon = service.icon;
//                             return (
//                                 <motion.div
//                                     key={service.title}
//                                     initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                                     className="card-hover"
//                                     style={{
//                                         background: 'var(--bg-card)',
//                                         border: '1px solid var(--border)',
//                                         borderRadius: '20px',
//                                         padding: '40px',
//                                         display: 'grid',
//                                         gridTemplateColumns: '1fr 1fr',
//                                         gap: '40px',
//                                         alignItems: 'center',
//                                         position: 'relative',
//                                         overflow: 'hidden',
//                                     }}
//                                 >
//                                     <div style={{
//                                         position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px',
//                                         background: `linear-gradient(to bottom, ${service.accent}, transparent)`,
//                                         borderRadius: '20px 0 0 20px',
//                                     }} />

//                                     <div style={{ paddingLeft: '12px' }}>
//                                         <div style={{
//                                             width: '52px', height: '52px',
//                                             background: `${service.accent}15`,
//                                             border: `1px solid ${service.accent}30`,
//                                             borderRadius: '14px',
//                                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                             fontSize: '22px', color: service.accent, marginBottom: '20px',
//                                         }}>
//                                             <Icon />
//                                         </div>
//                                         <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
//                                             {service.title}
//                                         </h3>
//                                         <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.75' }}>
//                                             {service.desc}
//                                         </p>
//                                     </div>

//                                     <div>
//                                         <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '14px' }}>
//                                             What's Included
//                                         </p>
//                                         <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                                             {service.features.map(f => (
//                                                 <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                                                     <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: service.accent, flexShrink: 0 }} />
//                                                     <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{f}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     <style>{`@media(max-width:767px){.service-grid{grid-template-columns:1fr !important;}}`}</style>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* Tech Stack */}
//             <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
//                 <div className="container-custom">
//                     <SectionTitle eyebrow="Tech Stack" title="Technologies We Master" subtitle="We pick the right tool for every job. Here's what powers our solutions." />
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
//                         {techCategories.map((cat, i) => (
//                             <motion.div
//                                 key={cat.category}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.07 }}
//                                 style={{
//                                     background: 'var(--bg-card)', border: '1px solid var(--border)',
//                                     borderRadius: '16px', padding: '24px',
//                                 }}
//                             >
//                                 <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: cat.color, marginBottom: '14px' }}>
//                                     {cat.category}
//                                 </div>
//                                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//                                     {cat.techs.map(tech => (
//                                         <span key={tech} style={{
//                                             padding: '4px 10px',
//                                             background: `${cat.color}10`,
//                                             border: `1px solid ${cat.color}20`,
//                                             borderRadius: '6px',
//                                             fontSize: '0.78rem',
//                                             color: 'var(--text-secondary)',
//                                             fontFamily: 'DM Sans, sans-serif',
//                                         }}>{tech}</span>
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <CtaBanner />
//         </>
//     );
// }



import { motion } from "framer-motion";
import {
    FiGlobe,
    FiSmartphone,
    FiLayout,
    FiServer,
    FiCloud,
    FiTrendingUp,
    FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { SectionTitle } from "../components/common/index.jsx";
import { techCategories } from "../constants/techStack";
import CtaBanner from "../components/home/CtaBanner";

const services = [
    {
        slug: "web-development",
        icon: FiGlobe,
        title: "Web Development",
        desc: "Production-grade web applications built with React, Next.js, and modern full-stack technologies.",
        features: [
            "Custom CMS",
            "SEO Optimized",
            "PWA Apps",
            "Real-time Features",
            "Payment Integration",
        ],
        accent: "#00d4ff",
    },
    {
        slug: "mobile-app-development",
        icon: FiSmartphone,
        title: "Mobile App Development",
        desc: "Cross-platform mobile apps with React Native and Flutter delivering native performance.",
        features: [
            "iOS + Android",
            "Push Notifications",
            "Offline Mode",
            "App Store Deployment",
            "Analytics",
        ],
        accent: "#ff6b35",
    },
    {
        slug: "ui-ux-design",
        icon: FiLayout,
        title: "UI/UX Design",
        desc: "Data-driven UI/UX design focused on usability, accessibility, and conversion.",
        features: [
            "User Research",
            "Wireframing",
            "Design Systems",
            "Figma Handoff",
            "Usability Testing",
        ],
        accent: "#a78bfa",
    },
    {
        slug: "backend-development",
        icon: FiServer,
        title: "API & Backend",
        desc: "Scalable backend systems with REST APIs, GraphQL, and optimized database architecture.",
        features: [
            "REST APIs",
            "GraphQL",
            "Microservices",
            "Auth Systems",
            "Database Design",
        ],
        accent: "#00ff88",
    },
    {
        slug: "cloud-devops",
        icon: FiCloud,
        title: "Cloud & DevOps",
        desc: "Cloud infrastructure setup, CI/CD pipelines, Docker containers and production monitoring.",
        features: [
            "AWS / GCP",
            "Docker",
            "CI/CD",
            "Auto Scaling",
            "Monitoring",
        ],
        accent: "#fbbf24",
    },
    {
        slug: "performance-seo",
        icon: FiTrendingUp,
        title: "Performance & SEO",
        desc: "Speed optimization and technical SEO improvements for better ranking and Core Web Vitals.",
        features: [
            "SEO Audit",
            "Image Optimization",
            "SSR",
            "Technical SEO",
            "Lighthouse 90+",
        ],
        accent: "#f472b6",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* HERO */}
            <section
                style={{
                    paddingTop: "160px",
                    paddingBottom: "80px",
                    background: "var(--bg-primary)",
                }}
            >
                <div className="container-custom">
                    <SectionTitle
                        eyebrow="What We Offer"
                        title="Services That Drive Real Results"
                        subtitle="A full spectrum of digital services from design to deployment."
                    />
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
                <div className="container-custom">

                    <div className="services-grid">

                        {services.map((service, i) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="service-card"
                                >
                                    {/* ICON */}
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            background: `${service.accent}15`,
                                            border: `1px solid ${service.accent}40`,
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: service.accent,
                                            fontSize: "20px",
                                        }}
                                    >
                                        <Icon />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="service-title">{service.title}</h3>

                                    {/* DESC */}
                                    <p className="service-desc">{service.desc}</p>

                                    {/* FEATURES */}
                                    <div className="service-features">
                                        {service.features.map((f) => (
                                            <span key={f}>{f}</span>
                                        ))}
                                    </div>

                                    {/* BUTTON */}
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="service-btn"
                                        style={{ color: service.accent }}
                                    >
                                        View Details <FiArrowRight />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
                <div className="container-custom">
                    <SectionTitle
                        eyebrow="Tech Stack"
                        title="Technologies We Master"
                        subtitle="We pick the right tool for every job."
                    />

                    <div className="tech-grid">
                        {techCategories.map((cat) => (
                            <div key={cat.category} className="tech-card">
                                <div style={{ color: cat.color }} className="tech-title">
                                    {cat.category}
                                </div>

                                <div className="tech-list">
                                    {cat.techs.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />

            {/* CSS */}
            <style>{`

.services-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:24px;
}

.service-card{
background:var(--bg-card);
border:1px solid var(--border);
border-radius:18px;
padding:28px;
display:flex;
flex-direction:column;
gap:14px;
transition:all .25s ease;
}

.service-card:hover{
transform:translateY(-6px);
border-color:var(--accent);
}

.service-title{
font-family:Syne;
font-size:1.2rem;
font-weight:700;
color:var(--text-primary);
}

.service-desc{
font-size:0.9rem;
line-height:1.7;
color:var(--text-secondary);
}

.service-features{
display:flex;
flex-wrap:wrap;
gap:6px;
}

.service-features span{
font-size:0.75rem;
background:rgba(255,255,255,0.06);
padding:4px 8px;
border-radius:6px;
}

.service-btn{
margin-top:auto;
display:inline-flex;
align-items:center;
gap:6px;
font-weight:600;
font-size:0.85rem;
text-decoration:none;
}

.tech-grid{
display:grid;
grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
gap:16px;
}

.tech-card{
background:var(--bg-card);
border:1px solid var(--border);
border-radius:14px;
padding:20px;
}

.tech-title{
font-family:Syne;
font-weight:700;
font-size:.8rem;
margin-bottom:10px;
}

.tech-list{
display:flex;
flex-wrap:wrap;
gap:6px;
}

.tech-list span{
font-size:.75rem;
padding:4px 8px;
background:rgba(255,255,255,0.06);
border-radius:6px;
}

@media(max-width:1024px){
.services-grid{
grid-template-columns:repeat(2,1fr);
}
}

@media(max-width:640px){
.services-grid{
grid-template-columns:1fr;
}
}

`}</style>
        </>
    );
}