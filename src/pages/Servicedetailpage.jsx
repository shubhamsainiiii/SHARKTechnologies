import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiMessageSquare } from 'react-icons/fi';
import { FiGlobe, FiSmartphone, FiLayout, FiServer, FiCloud, FiTrendingUp } from 'react-icons/fi';
import CtaBanner from '../components/home/CtaBanner';

const servicesData = [
    {
        slug: 'web-development',
        icon: FiGlobe,
        title: 'Web Development',
        tagline: 'Scalable web apps that convert',
        accent: '#00d4ff',
        accent2: '#00ffcc',
        overview: `We build production-grade web applications tailored to your business — from SaaS dashboards and e-commerce platforms to enterprise portals and content-heavy sites. Our stack is chosen for performance, scalability, and long-term maintainability.`,
        whatWeDeliver: [
            'Custom React / Next.js frontend with optimized rendering strategy (SSR, SSG, CSR)',
            'Backend APIs with Node.js, Express, or NestJS — RESTful or GraphQL',
            'Database architecture with MongoDB, PostgreSQL, or MySQL',
            'Auth systems — JWT, OAuth, SSO, role-based access control',
            'Payment gateway integration (Stripe, Razorpay, PayU)',
            'CMS integration (Sanity, Contentful, Strapi) for non-technical editors',
            'Progressive Web App (PWA) support for offline capability',
            'Full deployment on AWS, Vercel, or your preferred cloud',
        ],
        process: [
            { step: '01', title: 'Discovery & Architecture', desc: 'We understand your goals, map user flows, and design a tech architecture that scales.' },
            { step: '02', title: 'UI/UX Design', desc: 'Wireframes, prototypes, and high-fidelity Figma designs before a single line of code.' },
            { step: '03', title: 'Development Sprints', desc: 'Two-week sprints with demos. You see progress every step of the way.' },
            { step: '04', title: 'QA & Launch', desc: 'Cross-browser testing, performance audits, and zero-downtime deployment.' },
            { step: '05', title: 'Post-launch Support', desc: 'Bug fixes, feature additions, and monitoring — we stay with you after go-live.' },
        ],
        techStack: ['React 18', 'Next.js 14', 'TypeScript', 'Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Vercel', 'Tailwind CSS'],
        results: ['Average 98 Lighthouse score on delivered projects', '40% faster load times vs client previous site', '3x conversion rate improvement post-redesign'],
        features: ['Custom CMS Integration', 'SEO-optimized Structure', 'Progressive Web Apps', 'Real-time Features', 'Payment Integration', 'Multi-language Support'],
    },
    {
        slug: 'mobile-development',
        icon: FiSmartphone,
        title: 'Mobile App Development',
        tagline: 'Native feel, cross-platform speed',
        accent: '#ff6b35',
        accent2: '#ff9f35',
        overview: `We build cross-platform mobile apps for iOS and Android using React Native and Flutter. Our apps feel native, perform fast, and integrate seamlessly with your backend — all from a single codebase to minimize cost and time-to-market.`,
        whatWeDeliver: [
            'Cross-platform apps for iOS and Android from one codebase',
            'Native performance with React Native or Flutter',
            'Backend API integration with REST / GraphQL',
            'Push notifications via FCM / APNs',
            'Offline support with local storage and sync',
            'In-app purchases and subscription flows',
            'App Store and Play Store submission',
            'Analytics integration (Mixpanel, Firebase Analytics)',
        ],
        process: [
            { step: '01', title: 'Product Scoping', desc: 'Feature list, user stories, and platform strategy — iOS only, Android only, or both.' },
            { step: '02', title: 'UX Design', desc: 'Mobile-first wireframes and interactive prototypes following platform conventions.' },
            { step: '03', title: 'Development & API Integration', desc: 'Screens, navigation, state management, and backend connections built iteratively.' },
            { step: '04', title: 'Testing on Real Devices', desc: 'Testing on physical iOS and Android devices, not just simulators.' },
            { step: '05', title: 'Store Submission', desc: 'We handle App Store and Play Store submission, review responses, and approvals.' },
        ],
        techStack: ['React Native', 'Flutter', 'Expo', 'Firebase', 'Redux Toolkit', 'React Query', 'FCM', 'Stripe SDK', 'TypeScript', 'Fastlane'],
        results: ['4.7+ average App Store rating on delivered apps', '45% day-30 retention (industry avg 25%)', '10,000+ downloads in first month for wellness app'],
        features: ['Cross-platform (iOS + Android)', 'Push Notifications', 'Offline Support', 'App Store Deployment', 'In-app Purchases', 'Analytics Integration'],
    },
    {
        slug: 'ui-ux-design',
        icon: FiLayout,
        title: 'UI/UX Design',
        tagline: 'Design that drives decisions',
        accent: '#a78bfa',
        accent2: '#c4b5fd',
        overview: `Good design is invisible. Great design drives growth. We design interfaces that are intuitive, beautiful, and built around how your users actually think — backed by research, validated by testing, and delivered with complete Figma handoffs.`,
        whatWeDeliver: [
            'User research, personas, and journey mapping',
            'Information architecture and user flow diagrams',
            'Low-fidelity wireframes for rapid iteration',
            'High-fidelity Figma prototypes with interactions',
            'Complete design system with components, tokens, and guidelines',
            'Developer-ready Figma handoff with specs and assets',
            'Usability testing and heatmap analysis',
            'Brand identity — logo, color palette, typography system',
        ],
        process: [
            { step: '01', title: 'Research & Discovery', desc: 'User interviews, competitor analysis, and heuristic review of existing product.' },
            { step: '02', title: 'Wireframing', desc: 'Low-fidelity sketches and mid-fi wireframes to validate structure before visual design.' },
            { step: '03', title: 'Visual Design', desc: 'High-fidelity screens with animations, micro-interactions, and brand consistency.' },
            { step: '04', title: 'Prototype & Test', desc: 'Interactive Figma prototype tested with real users. Iterate based on feedback.' },
            { step: '05', title: 'Handoff', desc: 'Developer-ready specs, exported assets, and design system documentation.' },
        ],
        techStack: ['Figma', 'FigJam', 'Framer', 'Maze', 'Hotjar', 'Notion', 'Zeroheight', 'Adobe Illustrator'],
        results: ['3x increase in user task completion rate', '60% reduction in support tickets after redesign', 'Design system reduced dev time by 40%'],
        features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Figma Handoff', 'Usability Testing', 'Brand Identity'],
    },
    {
        slug: 'api-backend',
        icon: FiServer,
        title: 'API & Backend Development',
        tagline: 'Solid foundation, infinite scale',
        accent: '#00ff88',
        accent2: '#00cc66',
        overview: `Your frontend is only as good as your backend. We build robust, documented, and scalable APIs that power web apps, mobile apps, and third-party integrations. From simple CRUD to complex event-driven microservices.`,
        whatWeDeliver: [
            'RESTful API design following OpenAPI/Swagger standards',
            'GraphQL services with real-time subscriptions',
            'Microservices architecture with inter-service communication',
            'Database design and optimization (SQL and NoSQL)',
            'Authentication — JWT, OAuth 2.0, API keys, session management',
            'Rate limiting, request validation, and security headers',
            'Webhook system for third-party integrations',
            'API documentation with Postman or Swagger UI',
        ],
        process: [
            { step: '01', title: 'API Design', desc: 'Schema-first design — we define endpoints, data models, and auth flows before coding.' },
            { step: '02', title: 'Database Architecture', desc: 'Entity modeling, indexing strategy, and query optimization for your data patterns.' },
            { step: '03', title: 'Development & Testing', desc: 'Test-driven development with unit, integration, and load tests at every layer.' },
            { step: '04', title: 'Security Review', desc: 'OWASP checklist, penetration testing basics, and secure configuration review.' },
            { step: '05', title: 'Deployment & Docs', desc: 'Containerized deployment with full API documentation for your team.' },
        ],
        techStack: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'Python', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker', 'Swagger'],
        results: ['API response times under 80ms at 1000 req/s', 'Zero downtime migrations for 3 production databases', '99.9% uptime SLA maintained across all deployments'],
        features: ['RESTful API Design', 'GraphQL Services', 'Microservices', 'Database Optimization', 'Authentication Systems', 'Webhook Integrations'],
    },
    {
        slug: 'cloud-devops',
        icon: FiCloud,
        title: 'Cloud & DevOps',
        tagline: 'Ship faster, fail less',
        accent: '#fbbf24',
        accent2: '#f59e0b',
        overview: `Shipping code is only half the story. We set up cloud infrastructure, CI/CD pipelines, and monitoring so your team can deploy confidently multiple times a day — with zero downtime and instant rollback.`,
        whatWeDeliver: [
            'Cloud infrastructure setup on AWS, GCP, or Azure',
            'Docker containerization for consistent environments',
            'Kubernetes orchestration for auto-scaling workloads',
            'CI/CD pipelines with GitHub Actions, GitLab CI, or CircleCI',
            'Infrastructure as Code with Terraform or CloudFormation',
            'Monitoring and alerting with Datadog, Grafana, or CloudWatch',
            'Log aggregation with ELK stack or cloud-native solutions',
            'Cost optimization audits and rightsizing recommendations',
        ],
        process: [
            { step: '01', title: 'Infrastructure Audit', desc: 'Review existing setup, identify bottlenecks, security gaps, and cost inefficiencies.' },
            { step: '02', title: 'Architecture Design', desc: 'Design target state with diagrams, service dependencies, and scaling strategy.' },
            { step: '03', title: 'IaC Setup', desc: 'Infrastructure as Code so every resource is version-controlled and reproducible.' },
            { step: '04', title: 'CI/CD Pipeline', desc: 'Automated build, test, and deploy pipeline with environment-based promotions.' },
            { step: '05', title: 'Monitoring & Handover', desc: 'Dashboards, alerts, runbooks, and training for your team.' },
        ],
        techStack: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Nginx', 'Datadog', 'Grafana', 'ELK Stack', 'Helm'],
        results: ['Deployment frequency increased from weekly to daily', '70% reduction in infrastructure costs post-optimization', 'MTTR reduced from 4 hours to under 15 minutes'],
        features: ['AWS / GCP / Azure Setup', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Auto-scaling', 'Monitoring & Alerts', 'Cost Optimization'],
    },
    {
        slug: 'performance-seo',
        icon: FiTrendingUp,
        title: 'Performance & SEO',
        tagline: 'Faster sites, higher rankings',
        accent: '#f472b6',
        accent2: '#ec4899',
        overview: `Slow pages lose users and rankings. We run deep performance audits, fix the root causes, and implement SEO best practices that get your pages ranking — and keep them there.`,
        whatWeDeliver: [
            'Full Lighthouse and Core Web Vitals audit with prioritized fix list',
            'Image optimization — WebP conversion, lazy loading, responsive images',
            'JavaScript bundle analysis and code splitting',
            'Server-side rendering or static generation for SEO-critical pages',
            'Technical SEO — meta tags, canonical URLs, sitemap, robots.txt',
            'Structured data (JSON-LD) for rich search results',
            'Page speed optimization targeting 90+ Lighthouse scores',
            'Monthly monitoring reports with regression alerts',
        ],
        process: [
            { step: '01', title: 'Baseline Audit', desc: 'Lighthouse, WebPageTest, and manual review to document current state scores.' },
            { step: '02', title: 'Prioritized Fix List', desc: 'Issues ranked by impact vs effort — we tackle high-value wins first.' },
            { step: '03', title: 'Implementation', desc: 'Code changes, CDN config, caching rules, and rendering strategy updates.' },
            { step: '04', title: 'Verification', desc: 'Before/after comparisons, real user monitoring, and Search Console analysis.' },
            { step: '05', title: 'Ongoing Monitoring', desc: 'Automated alerts if scores drop below threshold after new deployments.' },
        ],
        techStack: ['Lighthouse', 'WebPageTest', 'Next.js', 'Cloudflare CDN', 'Sharp', 'webpack', 'Google Search Console', 'Ahrefs', 'Screaming Frog', 'GTmetrix'],
        results: ['Average score improvement: 42 → 96 Lighthouse', 'Organic traffic +180% in 6 months post-SEO', '1.8s → 0.6s LCP on e-commerce client'],
        features: ['Core Web Vitals Audit', 'Image & Bundle Optimization', 'Server-side Rendering', 'Technical SEO', 'Structured Data', 'Lighthouse 90+ Scores'],
    },
];

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return (
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Service Not Found</h2>
                    <Link to="/services" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: '600' }}>← Back to Services</Link>
                </div>
            </section>
        );
    }

    const Icon = service.icon;

    return (
        <>
            {/* Hero */}
            <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${service.accent}04 1px, transparent 1px), linear-gradient(90deg, ${service.accent}04 1px, transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px', background: `radial-gradient(ellipse at 80% 20%, ${service.accent}0b 0%, transparent 65%)`, pointerEvents: 'none' }} />

                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Back */}
                    <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                        <Link to="/services" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '7px',
                            color: 'var(--text-secondary)', textDecoration: 'none',
                            fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.84rem',
                            marginBottom: '36px', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = service.accent}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        ><FiArrowLeft /> Back to Services</Link>
                    </motion.div>

                    <div className="sdp-hero-grid">
                        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            {/* Icon + badge */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                                <div style={{
                                    width: '54px', height: '54px',
                                    background: `${service.accent}15`, border: `1px solid ${service.accent}30`,
                                    borderRadius: '14px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontSize: '24px', color: service.accent,
                                }}><Icon /></div>
                                <span style={{
                                    padding: '5px 14px', background: `${service.accent}12`,
                                    border: `1px solid ${service.accent}28`, borderRadius: '20px',
                                    fontSize: '0.7rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                    letterSpacing: '0.1em', textTransform: 'uppercase', color: service.accent,
                                }}>{service.tagline}</span>
                            </div>

                            <h1 style={{
                                fontFamily: 'Syne, sans-serif', fontWeight: '800',
                                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                                lineHeight: '1.08', letterSpacing: '-0.03em',
                                color: 'var(--text-primary)', marginBottom: '18px',
                            }}>
                                {service.title}
                            </h1>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.78', maxWidth: '520px', marginBottom: '28px' }}>
                                {service.overview}
                            </p>

                            <Link to="/contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '12px 26px',
                                background: `linear-gradient(135deg, ${service.accent}, ${service.accent2})`,
                                borderRadius: '11px', color: '#000', textDecoration: 'none',
                                fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem',
                            }}>
                                <FiMessageSquare style={{ fontSize: '14px' }} /> Get a Free Quote
                            </Link>
                        </motion.div>

                        {/* Right: Quick stats */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {service.results.map((r, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                                    background: 'var(--bg-card)', border: `1px solid ${service.accent}18`,
                                    borderRadius: '14px', padding: '16px 18px',
                                }}>
                                    <FiCheckCircle style={{ color: service.accent, fontSize: '17px', flexShrink: 0, marginTop: '1px' }} />
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>{r}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What we deliver + Process */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container-custom">
                    <div className="sdp-two-col" style={{ marginBottom: '32px' }}>

                        {/* Deliverables */}
                        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px' }}>
                            <div style={{
                                display: 'inline-flex', marginBottom: '18px', padding: '4px 12px',
                                background: `${service.accent}10`, border: `1px solid ${service.accent}25`,
                                borderRadius: '6px', color: service.accent,
                                fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                            }}>What We Deliver</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {service.whatWeDeliver.map((d, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: service.accent, flexShrink: 0, marginTop: '7px' }} />
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.65' }}>{d}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Process */}
                        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px' }}>
                            <div style={{
                                display: 'inline-flex', marginBottom: '18px', padding: '4px 12px',
                                background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.2)',
                                borderRadius: '6px', color: 'var(--accent-warm)',
                                fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                            }}>Our Process</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                {service.process.map((p, i) => (
                                    <div key={p.step} style={{ display: 'flex', gap: '14px', position: 'relative', paddingBottom: i < service.process.length - 1 ? '18px' : '0' }}>
                                        {i < service.process.length - 1 && (
                                            <div style={{ position: 'absolute', left: '15px', top: '32px', bottom: 0, width: '1px', background: 'var(--border)' }} />
                                        )}
                                        <div style={{
                                            width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                                            background: `${service.accent}12`, border: `1px solid ${service.accent}28`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                                            fontSize: '0.62rem', color: service.accent, zIndex: 1,
                                        }}>{p.step}</div>
                                        <div style={{ paddingTop: '4px' }}>
                                            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '3px' }}>{p.title}</div>
                                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: '1.6' }}>{p.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Tech Stack */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px' }}>
                        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>Tech Stack</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {service.techStack.map(t => (
                                <span key={t} style={{
                                    padding: '6px 14px',
                                    background: `${service.accent}0d`, border: `1px solid ${service.accent}22`,
                                    borderRadius: '8px', fontSize: '0.8rem',
                                    fontFamily: 'Syne, sans-serif', fontWeight: '600', color: service.accent,
                                }}>{t}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Other services */}
            <section style={{ padding: '60px 0', background: 'var(--bg-primary)' }}>
                <div className="container-custom">
                    <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Explore More</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)' }}>See all our services</h3>
                        <Link to="/services" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '11px 24px',
                            background: `linear-gradient(135deg, ${service.accent}, ${service.accent2})`,
                            borderRadius: '11px', color: '#000', textDecoration: 'none',
                            fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem',
                        }}>All Services <FiArrowRight /></Link>
                    </div>
                </div>
            </section>

            <CtaBanner />

            <style>{`
                .sdp-hero-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 28px;
                }
                .sdp-two-col {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 16px;
                }
                @media (min-width: 768px) {
                    .sdp-hero-grid { grid-template-columns: 1fr 1fr; align-items: start; gap: 40px; }
                    .sdp-two-col { grid-template-columns: 1fr 1fr; gap: 20px; }
                }
            `}</style>
        </>
    );
}