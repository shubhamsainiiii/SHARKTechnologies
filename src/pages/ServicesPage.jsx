// import { motion } from 'framer-motion';
// import { FiGlobe, FiSmartphone, FiLayout, FiServer, FiCloud, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import { SectionTitle } from '../components/common/index.jsx';
// import { techCategories } from '../constants/techStack';
// import CtaBanner from '../components/home/CtaBanner';

// // Tech icons — inline SVG logos as data URIs / simple colored icons
// const techIcons = {
//     // Frontend
//     'React': { bg: '#61DAFB22', color: '#61DAFB', letter: 'R', symbol: '⚛' },
//     'Next.js': { bg: '#ffffff15', color: '#ffffff', letter: 'N', symbol: 'N' },
//     'Vue.js': { bg: '#42b88322', color: '#42b883', letter: 'V', symbol: '◈' },
//     'TypeScript': { bg: '#3178c622', color: '#3178c6', letter: 'T', symbol: 'TS' },
//     'Tailwind CSS': { bg: '#06B6D422', color: '#06B6D4', letter: 'T', symbol: '~' },
//     'Framer Motion': { bg: '#FF0080' + '22', color: '#FF0080', letter: 'F', symbol: '◉' },
//     // Backend
//     'Node.js': { bg: '#68A06322', color: '#68A063', letter: 'N', symbol: '⬡' },
//     'Express.js': { bg: '#ffffff12', color: '#aaaaaa', letter: 'E', symbol: '✦' },
//     'NestJS': { bg: '#E0234E22', color: '#E0234E', letter: 'N', symbol: '△' },
//     'Python': { bg: '#3776AB22', color: '#3776AB', letter: 'P', symbol: '🐍' },
//     'Django': { bg: '#09241522', color: '#0C4B33', letter: 'D', symbol: '♦' },
//     'FastAPI': { bg: '#05998022', color: '#059980', letter: 'F', symbol: '⚡' },
//     // Database
//     'MongoDB': { bg: '#47A24822', color: '#47A248', letter: 'M', symbol: '🍃' },
//     'PostgreSQL': { bg: '#33679122', color: '#336791', letter: 'P', symbol: '🐘' },
//     'MySQL': { bg: '#4479A122', color: '#4479A1', letter: 'M', symbol: '◎' },
//     'Redis': { bg: '#DC382D22', color: '#DC382D', letter: 'R', symbol: '◈' },
//     'Firebase': { bg: '#FFCA2822', color: '#FFCA28', letter: 'F', symbol: '🔥' },
//     'Supabase': { bg: '#3ECF8E22', color: '#3ECF8E', letter: 'S', symbol: '⚡' },
//     // DevOps
//     'AWS': { bg: '#FF980022', color: '#FF9800', letter: 'A', symbol: '☁' },
//     'Docker': { bg: '#2496ED22', color: '#2496ED', letter: 'D', symbol: '🐳' },
//     'Kubernetes': { bg: '#326CE522', color: '#326CE5', letter: 'K', symbol: '⎈' },
//     'Vercel': { bg: '#ffffff15', color: '#ffffff', letter: 'V', symbol: '▲' },
//     'Netlify': { bg: '#00C7B722', color: '#00C7B7', letter: 'N', symbol: '◆' },
//     'CI/CD': { bg: '#FF6B3522', color: '#FF6B35', letter: 'C', symbol: '↻' },
//     // Mobile
//     'React Native': { bg: '#61DAFB22', color: '#61DAFB', letter: 'R', symbol: '⚛' },
//     'Flutter': { bg: '#54C5F822', color: '#54C5F8', letter: 'F', symbol: '◇' },
//     'Expo': { bg: '#ffffff15', color: '#aaaaaa', letter: 'E', symbol: '○' },
//     'iOS': { bg: '#999aaa22', color: '#aaaaaa', letter: 'i', symbol: '' },
//     'Android': { bg: '#3DDC8422', color: '#3DDC84', letter: 'A', symbol: '🤖' },
// };

// const categoryIcons = {
//     'Frontend': '🖥',
//     'Backend': '⚙',
//     'Database': '🗄',
//     'DevOps & Cloud': '☁',
//     'Mobile': '📱',
// };

// function TechStackSection() {
//     return (
//         <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
//             <div className="container-custom">
//                 <SectionTitle
//                     eyebrow="Tech Stack"
//                     title="Technologies We Master"
//                     subtitle="We pick the right tool for every job. Here's what powers our solutions."
//                 />
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
//                     {techCategories.map((cat, catIdx) => (
//                         <motion.div
//                             key={cat.category}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: catIdx * 0.08 }}
//                         >
//                             {/* Category header */}
//                             <div style={{
//                                 display: 'flex', alignItems: 'center', gap: '10px',
//                                 marginBottom: '14px',
//                             }}>
//                                 <span style={{
//                                     width: '30px', height: '30px',
//                                     background: `${cat.color}15`,
//                                     border: `1px solid ${cat.color}30`,
//                                     borderRadius: '8px',
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     fontSize: '14px',
//                                 }}>{categoryIcons[cat.category]}</span>
//                                 <span style={{
//                                     fontFamily: 'Syne, sans-serif', fontWeight: '700',
//                                     fontSize: '0.78rem', letterSpacing: '0.12em',
//                                     textTransform: 'uppercase', color: cat.color,
//                                 }}>{cat.category}</span>
//                                 <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${cat.color}30, transparent)` }} />
//                             </div>

//                             {/* Tech cards */}
//                             <div style={{
//                                 display: 'grid',
//                                 gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
//                                 gap: '10px',
//                             }}>
//                                 {cat.techs.map((tech, techIdx) => {
//                                     const icon = techIcons[tech] || { bg: `${cat.color}15`, color: cat.color, symbol: tech[0] };
//                                     return (
//                                         <motion.div
//                                             key={tech}
//                                             initial={{ opacity: 0, scale: 0.9 }}
//                                             whileInView={{ opacity: 1, scale: 1 }}
//                                             viewport={{ once: true }}
//                                             transition={{ delay: catIdx * 0.05 + techIdx * 0.04 }}
//                                             whileHover={{ y: -3, transition: { duration: 0.15 } }}
//                                             style={{
//                                                 background: 'var(--bg-card)',
//                                                 border: '1px solid var(--border)',
//                                                 borderRadius: '12px',
//                                                 padding: '14px 12px',
//                                                 display: 'flex', flexDirection: 'column',
//                                                 alignItems: 'center', gap: '8px',
//                                                 cursor: 'default',
//                                                 transition: 'border-color 0.2s',
//                                             }}
//                                             onMouseEnter={e => e.currentTarget.style.borderColor = `${cat.color}40`}
//                                             onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
//                                         >
//                                             {/* Icon box */}
//                                             <div style={{
//                                                 width: '38px', height: '38px',
//                                                 background: icon.bg,
//                                                 border: `1px solid ${icon.color}25`,
//                                                 borderRadius: '10px',
//                                                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                                 fontSize: icon.symbol.length <= 2 ? '1rem' : '1.2rem',
//                                                 color: icon.color,
//                                                 fontFamily: 'Syne, sans-serif',
//                                                 fontWeight: '800',
//                                             }}>
//                                                 {icon.symbol}
//                                             </div>
//                                             {/* Name */}
//                                             <span style={{
//                                                 fontFamily: 'DM Sans, sans-serif',
//                                                 fontSize: '0.72rem',
//                                                 fontWeight: '500',
//                                                 color: 'var(--text-secondary)',
//                                                 textAlign: 'center',
//                                                 lineHeight: '1.3',
//                                             }}>{tech}</span>
//                                         </motion.div>
//                                     );
//                                 })}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// const services = [
//     {
//         slug: 'web-development',
//         icon: FiGlobe,
//         title: 'Web Development',
//         tagline: 'Scalable web apps that convert',
//         desc: 'Production-grade web apps with React, Next.js, and modern full-stack architectures.',
//         features: ['Custom CMS Integration', 'SEO-optimized Structure', 'Progressive Web Apps', 'Real-time Features', 'Payment Integration', 'Multi-language Support'],
//         accent: '#00d4ff',
//     },
//     {
//         slug: 'mobile-development',
//         icon: FiSmartphone,
//         title: 'Mobile Apps',
//         tagline: 'Native feel, cross-platform speed',
//         desc: 'iOS and Android apps built with React Native or Flutter. Native performance, beautiful UX.',
//         features: ['Cross-platform (iOS + Android)', 'Push Notifications', 'Offline Support', 'App Store Deployment', 'In-app Purchases', 'Analytics Integration'],
//         accent: '#ff6b35',
//     },
//     {
//         slug: 'ui-ux-design',
//         icon: FiLayout,
//         title: 'UI/UX Design',
//         tagline: 'Design that drives decisions',
//         desc: 'From research to pixel — intuitive, accessible, and visually stunning interfaces.',
//         features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Figma Handoff', 'Usability Testing', 'Brand Identity'],
//         accent: '#a78bfa',
//     },
//     {
//         slug: 'api-backend',
//         icon: FiServer,
//         title: 'API & Backend',
//         tagline: 'Solid foundation, infinite scale',
//         desc: 'Scalable REST and GraphQL APIs, microservices, and database architecture.',
//         features: ['RESTful API Design', 'GraphQL Services', 'Microservices', 'Database Optimization', 'Authentication Systems', 'Webhook Integrations'],
//         accent: '#00ff88',
//     },
//     {
//         slug: 'cloud-devops',
//         icon: FiCloud,
//         title: 'Cloud & DevOps',
//         tagline: 'Ship faster, fail less',
//         desc: 'Full infra on AWS, GCP or Azure. CI/CD, Docker, Kubernetes, monitoring.',
//         features: ['AWS / GCP / Azure Setup', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Auto-scaling', 'Monitoring & Alerts', 'Cost Optimization'],
//         accent: '#fbbf24',
//     },
//     {
//         slug: 'performance-seo',
//         icon: FiTrendingUp,
//         title: 'Performance & SEO',
//         tagline: 'Faster sites, higher rankings',
//         desc: 'Audit, optimize, and fix performance bottlenecks for maximum Core Web Vitals.',
//         features: ['Core Web Vitals Audit', 'Image & Bundle Optimization', 'Server-side Rendering', 'Technical SEO', 'Structured Data', 'Lighthouse 90+ Scores'],
//         accent: '#f472b6',
//     },
// ];

// export { services };

// export default function ServicesPage() {
//     return (
//         <>
//             {/* Hero */}
//             <section style={{ paddingTop: '140px', paddingBottom: '60px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }} className="grid-bg">
//                 <div style={{
//                     position: 'absolute', top: '20%', right: '10%',
//                     width: '360px', height: '360px',
//                     background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
//                     pointerEvents: 'none',
//                 }} />
//                 <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
//                     <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
//                         <span style={{
//                             display: 'inline-flex', alignItems: 'center', gap: '8px',
//                             background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
//                             borderRadius: '50px', padding: '6px 16px', marginBottom: '20px',
//                             fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
//                             letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
//                         }}>What We Offer</span>
//                         <h1 style={{
//                             fontFamily: 'Syne, sans-serif', fontWeight: '800',
//                             fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
//                             lineHeight: '1.08', letterSpacing: '-0.03em',
//                             color: 'var(--text-primary)', marginBottom: '16px', maxWidth: '640px',
//                         }}>
//                             Services That Drive{' '}
//                             <span style={{
//                                 background: 'linear-gradient(135deg, var(--accent), #00ffcc)',
//                                 WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//                             }}>Real Results</span>
//                         </h1>
//                         <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '480px' }}>
//                             A full spectrum of digital services — from design to deployment. We own every layer of your product.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Services Grid — 3 per row */}
//             <section className="section-padding" style={{ background: 'var(--bg-secondary)', paddingTop: '40px' }}>
//                 <div className="container-custom">
//                     <div className="services-grid">
//                         {services.map((service, i) => {
//                             const Icon = service.icon;
//                             return (
//                                 <motion.div
//                                     key={service.slug}
//                                     initial={{ opacity: 0, y: 24 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                                     className="card-hover"
//                                     style={{
//                                         background: 'var(--bg-card)',
//                                         border: '1px solid var(--border)',
//                                         borderRadius: '20px',
//                                         padding: '28px',
//                                         display: 'flex', flexDirection: 'column',
//                                         position: 'relative', overflow: 'hidden',
//                                     }}
//                                 >
//                                     {/* Top accent bar */}
//                                     <div style={{
//                                         position: 'absolute', top: 0, left: '28px', right: '28px', height: '2px',
//                                         background: `linear-gradient(90deg, ${service.accent}, transparent)`,
//                                         borderRadius: '0 0 2px 2px',
//                                     }} />

//                                     {/* Icon */}
//                                     <div style={{
//                                         width: '46px', height: '46px',
//                                         background: `${service.accent}12`,
//                                         border: `1px solid ${service.accent}28`,
//                                         borderRadius: '12px',
//                                         display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                         fontSize: '20px', color: service.accent,
//                                         marginBottom: '16px',
//                                     }}>
//                                         <Icon />
//                                     </div>

//                                     {/* Title + tagline */}
//                                     <h3 style={{
//                                         fontFamily: 'Syne, sans-serif', fontWeight: '700',
//                                         fontSize: '1.05rem', color: 'var(--text-primary)',
//                                         marginBottom: '4px', letterSpacing: '-0.01em',
//                                     }}>{service.title}</h3>
//                                     <p style={{
//                                         fontSize: '0.72rem', fontFamily: 'Syne, sans-serif',
//                                         color: service.accent, fontWeight: '600',
//                                         letterSpacing: '0.04em', marginBottom: '10px',
//                                     }}>{service.tagline}</p>

//                                     {/* Desc */}
//                                     <p style={{
//                                         color: 'var(--text-secondary)', fontSize: '0.82rem',
//                                         lineHeight: '1.7', marginBottom: '16px', flex: 1,
//                                     }}>{service.desc}</p>

//                                     {/* Feature pills */}
//                                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
//                                         {service.features.slice(0, 4).map(f => (
//                                             <span key={f} style={{
//                                                 padding: '3px 9px',
//                                                 background: `${service.accent}0d`,
//                                                 border: `1px solid ${service.accent}20`,
//                                                 borderRadius: '20px',
//                                                 fontSize: '0.68rem',
//                                                 color: 'var(--text-secondary)',
//                                                 fontFamily: 'DM Sans, sans-serif',
//                                             }}>{f}</span>
//                                         ))}
//                                         {service.features.length > 4 && (
//                                             <span style={{
//                                                 padding: '3px 9px',
//                                                 background: 'rgba(255,255,255,0.04)',
//                                                 border: '1px solid var(--border)',
//                                                 borderRadius: '20px',
//                                                 fontSize: '0.68rem',
//                                                 color: 'var(--text-muted)',
//                                             }}>+{service.features.length - 4} more</span>
//                                         )}
//                                     </div>

//                                     {/* CTA button */}
//                                     <Link
//                                         to={`/services/${service.slug}`}
//                                         style={{
//                                             display: 'inline-flex', alignItems: 'center', gap: '6px',
//                                             padding: '9px 16px',
//                                             background: `${service.accent}12`,
//                                             border: `1px solid ${service.accent}28`,
//                                             borderRadius: '10px',
//                                             color: service.accent,
//                                             textDecoration: 'none',
//                                             fontFamily: 'Syne, sans-serif',
//                                             fontWeight: '600', fontSize: '0.78rem',
//                                             transition: 'all 0.2s',
//                                             alignSelf: 'flex-start',
//                                         }}
//                                         onMouseEnter={e => { e.currentTarget.style.background = `${service.accent}20`; e.currentTarget.style.borderColor = `${service.accent}50`; }}
//                                         onMouseLeave={e => { e.currentTarget.style.background = `${service.accent}12`; e.currentTarget.style.borderColor = `${service.accent}28`; }}
//                                     >
//                                         Learn More <FiArrowRight style={{ fontSize: '12px' }} />
//                                     </Link>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>

//             {/* Tech Stack */}
//             <TechStackSection />

//             <CtaBanner />

//             <style>{`
//                 .services-grid {
//                     display: grid;
//                     grid-template-columns: 1fr;
//                     gap: 16px;
//                 }
//                 @media (min-width: 640px) {
//                     .services-grid { grid-template-columns: repeat(2, 1fr); }
//                 }
//                 @media (min-width: 1024px) {
//                     .services-grid { grid-template-columns: repeat(3, 1fr); }
//                 }
//             `}</style>
//         </>
//     );
// }

import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiLayout, FiServer, FiCloud, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/index.jsx';
import { techCategories } from '../constants/techStack';
import CtaBanner from '../components/home/CtaBanner';

import {
    SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss, SiFramer,
    SiNodedotjs, SiExpress, SiNestjs, SiPython, SiDjango, SiFastapi,
    SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase, SiSupabase,
    SiCloudflare , SiDocker, SiKubernetes, SiVercel, SiNetlify,
    SiReact as SiReactNative, SiFlutter, SiExpo, SiAndroid, SiApple,
    SiGithubactions,
} from 'react-icons/si';

const techIcons = {
    'React': { Icon: SiReact, color: '#61DAFB' },
    'Next.js': { Icon: SiNextdotjs, color: '#ffffff' },
    'Vue.js': { Icon: SiVuedotjs, color: '#42b883' },
    'TypeScript': { Icon: SiTypescript, color: '#3178c6' },
    'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
    'Framer Motion': { Icon: SiFramer, color: '#FF0080' },
    'Node.js': { Icon: SiNodedotjs, color: '#68A063' },
    'Express.js': { Icon: SiExpress, color: '#aaaaaa' },
    'NestJS': { Icon: SiNestjs, color: '#E0234E' },
    'Python': { Icon: SiPython, color: '#3776AB' },
    'Django': { Icon: SiDjango, color: '#0C4B33' },
    'FastAPI': { Icon: SiFastapi, color: '#059980' },
    'MongoDB': { Icon: SiMongodb, color: '#47A248' },
    'PostgreSQL': { Icon: SiPostgresql, color: '#336791' },
    'MySQL': { Icon: SiMysql, color: '#4479A1' },
    'Redis': { Icon: SiRedis, color: '#DC382D' },
    'Firebase': { Icon: SiFirebase, color: '#FFCA28' },
    'Supabase': { Icon: SiSupabase, color: '#3ECF8E' },
    'AWS': { Icon: SiCloudflare , color: '#FF9800' },
    'Docker': { Icon: SiDocker, color: '#2496ED' },
    'Kubernetes': { Icon: SiKubernetes, color: '#326CE5' },
    'Vercel': { Icon: SiVercel, color: '#ffffff' },
    'Netlify': { Icon: SiNetlify, color: '#00C7B7' },
    'CI/CD': { Icon: SiGithubactions, color: '#2088FF' },
    'React Native': { Icon: SiReactNative, color: '#61DAFB' },
    'Flutter': { Icon: SiFlutter, color: '#54C5F8' },
    'Expo': { Icon: SiExpo, color: '#aaaaaa' },
    'iOS': { Icon: SiApple, color: '#aaaaaa' },
    'Android': { Icon: SiAndroid, color: '#3DDC84' },
};

const categoryIcons = {
    'Frontend': '🖥',
    'Backend': '⚙',
    'Database': '🗄',
    'DevOps & Cloud': '☁',
    'Mobile': '📱',
};

function TechStackSection() {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container-custom">
                <SectionTitle
                    eyebrow="Tech Stack"
                    title="Technologies We Master"
                    subtitle="We pick the right tool for every job. Here's what powers our solutions."
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {techCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.08 }}
                        >
                            {/* Category header */}
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                marginBottom: '14px',
                            }}>
                                <span style={{
                                    width: '30px', height: '30px',
                                    background: `${cat.color}15`,
                                    border: `1px solid ${cat.color}30`,
                                    borderRadius: '8px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '14px',
                                }}>{categoryIcons[cat.category]}</span>
                                <span style={{
                                    fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                    fontSize: '0.78rem', letterSpacing: '0.12em',
                                    textTransform: 'uppercase', color: cat.color,
                                }}>{cat.category}</span>
                                <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${cat.color}30, transparent)` }} />
                            </div>

                            {/* Tech cards */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                                gap: '10px',
                            }}>
                                {cat.techs.map((tech, techIdx) => {
                                    const icon = techIcons[tech] || { Icon: () => <span style={{ fontWeight: 700, fontSize: '0.8rem' }}>{tech[0]}</span>, color: cat.color };
                                    return (
                                        <motion.div
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: catIdx * 0.05 + techIdx * 0.04 }}
                                            whileHover={{ y: -3, transition: { duration: 0.15 } }}
                                            style={{
                                                background: 'var(--bg-card)',
                                                border: '1px solid var(--border)',
                                                borderRadius: '12px',
                                                padding: '14px 12px',
                                                display: 'flex', flexDirection: 'column',
                                                alignItems: 'center', gap: '8px',
                                                cursor: 'default',
                                                transition: 'border-color 0.2s',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.borderColor = `${cat.color}40`}
                                            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                                        >
                                            {/* Icon box */}
                                            <div style={{
                                                width: '38px', height: '38px',
                                                background: `${icon.color}15`,
                                                border: `1px solid ${icon.color}25`,
                                                borderRadius: '10px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '20px',
                                                color: icon.color,
                                            }}>
                                                <icon.Icon />
                                            </div>
                                            {/* Name */}
                                            <span style={{
                                                fontFamily: 'DM Sans, sans-serif',
                                                fontSize: '0.72rem',
                                                fontWeight: '500',
                                                color: 'var(--text-secondary)',
                                                textAlign: 'center',
                                                lineHeight: '1.3',
                                            }}>{tech}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const services = [
    {
        slug: 'web-development',
        icon: FiGlobe,
        title: 'Web Development',
        tagline: 'Scalable web apps that convert',
        desc: 'Production-grade web apps with React, Next.js, and modern full-stack architectures.',
        features: ['Custom CMS Integration', 'SEO-optimized Structure', 'Progressive Web Apps', 'Real-time Features', 'Payment Integration', 'Multi-language Support'],
        accent: '#00d4ff',
    },
    {
        slug: 'mobile-development',
        icon: FiSmartphone,
        title: 'Mobile Apps',
        tagline: 'Native feel, cross-platform speed',
        desc: 'iOS and Android apps built with React Native or Flutter. Native performance, beautiful UX.',
        features: ['Cross-platform (iOS + Android)', 'Push Notifications', 'Offline Support', 'App Store Deployment', 'In-app Purchases', 'Analytics Integration'],
        accent: '#ff6b35',
    },
    {
        slug: 'ui-ux-design',
        icon: FiLayout,
        title: 'UI/UX Design',
        tagline: 'Design that drives decisions',
        desc: 'From research to pixel — intuitive, accessible, and visually stunning interfaces.',
        features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Figma Handoff', 'Usability Testing', 'Brand Identity'],
        accent: '#a78bfa',
    },
    {
        slug: 'api-backend',
        icon: FiServer,
        title: 'API & Backend',
        tagline: 'Solid foundation, infinite scale',
        desc: 'Scalable REST and GraphQL APIs, microservices, and database architecture.',
        features: ['RESTful API Design', 'GraphQL Services', 'Microservices', 'Database Optimization', 'Authentication Systems', 'Webhook Integrations'],
        accent: '#00ff88',
    },
    {
        slug: 'cloud-devops',
        icon: FiCloud,
        title: 'Cloud & DevOps',
        tagline: 'Ship faster, fail less',
        desc: 'Full infra on AWS, GCP or Azure. CI/CD, Docker, Kubernetes, monitoring.',
        features: ['AWS / GCP / Azure Setup', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Auto-scaling', 'Monitoring & Alerts', 'Cost Optimization'],
        accent: '#fbbf24',
    },
    {
        slug: 'performance-seo',
        icon: FiTrendingUp,
        title: 'Performance & SEO',
        tagline: 'Faster sites, higher rankings',
        desc: 'Audit, optimize, and fix performance bottlenecks for maximum Core Web Vitals.',
        features: ['Core Web Vitals Audit', 'Image & Bundle Optimization', 'Server-side Rendering', 'Technical SEO', 'Structured Data', 'Lighthouse 90+ Scores'],
        accent: '#f472b6',
    },
];

export { services };

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ paddingTop: '140px', paddingBottom: '60px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }} className="grid-bg">
                <div style={{
                    position: 'absolute', top: '20%', right: '10%',
                    width: '360px', height: '360px',
                    background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
                            borderRadius: '50px', padding: '6px 16px', marginBottom: '20px',
                            fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
                        }}>What We Offer</span>
                        <h1 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                            lineHeight: '1.08', letterSpacing: '-0.03em',
                            color: 'var(--text-primary)', marginBottom: '16px', maxWidth: '640px',
                        }}>
                            Services That Drive{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--accent), #00ffcc)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>Real Results</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '480px' }}>
                            A full spectrum of digital services — from design to deployment. We own every layer of your product.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid — 3 per row */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)', paddingTop: '40px' }}>
                <div className="container-custom">
                    <div className="services-grid">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="card-hover"
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '20px',
                                        padding: '28px',
                                        display: 'flex', flexDirection: 'column',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                >
                                    {/* Top accent bar */}
                                    <div style={{
                                        position: 'absolute', top: 0, left: '28px', right: '28px', height: '2px',
                                        background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                                        borderRadius: '0 0 2px 2px',
                                    }} />

                                    {/* Icon */}
                                    <div style={{
                                        width: '46px', height: '46px',
                                        background: `${service.accent}12`,
                                        border: `1px solid ${service.accent}28`,
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '20px', color: service.accent,
                                        marginBottom: '16px',
                                    }}>
                                        <Icon />
                                    </div>

                                    {/* Title + tagline */}
                                    <h3 style={{
                                        fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                        fontSize: '1.05rem', color: 'var(--text-primary)',
                                        marginBottom: '4px', letterSpacing: '-0.01em',
                                    }}>{service.title}</h3>
                                    <p style={{
                                        fontSize: '0.72rem', fontFamily: 'Syne, sans-serif',
                                        color: service.accent, fontWeight: '600',
                                        letterSpacing: '0.04em', marginBottom: '10px',
                                    }}>{service.tagline}</p>

                                    {/* Desc */}
                                    <p style={{
                                        color: 'var(--text-secondary)', fontSize: '0.82rem',
                                        lineHeight: '1.7', marginBottom: '16px', flex: 1,
                                    }}>{service.desc}</p>

                                    {/* Feature pills */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                                        {service.features.slice(0, 4).map(f => (
                                            <span key={f} style={{
                                                padding: '3px 9px',
                                                background: `${service.accent}0d`,
                                                border: `1px solid ${service.accent}20`,
                                                borderRadius: '20px',
                                                fontSize: '0.68rem',
                                                color: 'var(--text-secondary)',
                                                fontFamily: 'DM Sans, sans-serif',
                                            }}>{f}</span>
                                        ))}
                                        {service.features.length > 4 && (
                                            <span style={{
                                                padding: '3px 9px',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid var(--border)',
                                                borderRadius: '20px',
                                                fontSize: '0.68rem',
                                                color: 'var(--text-muted)',
                                            }}>+{service.features.length - 4} more</span>
                                        )}
                                    </div>

                                    {/* CTA button */}
                                    <Link
                                        to={`/services/${service.slug}`}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                                            padding: '9px 16px',
                                            background: `${service.accent}12`,
                                            border: `1px solid ${service.accent}28`,
                                            borderRadius: '10px',
                                            color: service.accent,
                                            textDecoration: 'none',
                                            fontFamily: 'Syne, sans-serif',
                                            fontWeight: '600', fontSize: '0.78rem',
                                            transition: 'all 0.2s',
                                            alignSelf: 'flex-start',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.background = `${service.accent}20`; e.currentTarget.style.borderColor = `${service.accent}50`; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = `${service.accent}12`; e.currentTarget.style.borderColor = `${service.accent}28`; }}
                                    >
                                        Learn More <FiArrowRight style={{ fontSize: '12px' }} />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <TechStackSection />

            <CtaBanner />

            <style>{`
                .services-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 16px;
                }
                @media (min-width: 640px) {
                    .services-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (min-width: 1024px) {
                    .services-grid { grid-template-columns: repeat(3, 1fr); }
                }
            `}</style>
        </>
    );
}