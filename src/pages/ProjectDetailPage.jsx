import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub, FiCalendar, FiUsers, FiClock, FiCheckCircle } from 'react-icons/fi';
import CtaBanner from '../components/home/CtaBanner';


const projects = [
    {
        slug: 'fintrack-dashboard',
        title: 'FinTrack Dashboard',
        category: 'Web App',
        color: '#00d4ff',
        duration: '8 weeks',
        team: '3 members',
        year: '2024',
        client: 'FinTech Startup, Mumbai',
        liveUrl: '#',
        githubUrl: '#',
        overview: `FinTrack is a real-time financial analytics platform built for a Mumbai-based fintech startup. The product needed to handle live data streams, complex charting, and a multi-role access system — all with a clean, fast interface that non-technical finance teams could use daily.`,
        challenge: `The client's existing Excel-based workflow was creating bottlenecks. They needed a centralized dashboard that could pull data from 3 different banking APIs, display live P&L charts, and restrict data access based on user roles — all while staying performant on slower office networks.`,
        solution: `We built a React + Node.js SPA with Socket.io for real-time data streaming. We used MongoDB aggregation pipelines for fast analytics queries and implemented JWT-based RBAC with 4 permission levels. The UI was designed around their finance team's mental model — minimal clicks, maximum data visibility.`,
        results: [
            'Reduced reporting time from 4 hours to 15 minutes daily',
            '40% faster decision-making reported by management',
            'Zero downtime in first 6 months of production',
            'Onboarded 3 additional enterprise clients after launch',
        ],
        tech: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Chart.js', 'JWT Auth', 'AWS EC2'],
        features: [
            'Real-time P&L charts with WebSocket updates',
            'Role-based access control (4 levels)',
            'Multi-bank API aggregation',
            'Custom date-range reporting',
            'CSV/PDF export functionality',
            'Mobile-responsive dashboard',
        ],
        color2: '#0099bb',
    },
    {
        slug: 'shopnest',
        title: 'ShopNest E-Commerce',
        category: 'Full-Stack',
        color: '#ff6b35',
        duration: '12 weeks',
        team: '4 members',
        year: '2024',
        client: 'D2C Brand, Delhi',
        liveUrl: '#',
        githubUrl: '#',
        overview: `ShopNest is a full-featured e-commerce platform built for a Delhi-based D2C brand selling handcrafted home decor. The platform needed a beautiful storefront, a smooth checkout experience, and a powerful seller dashboard for managing inventory.`,
        challenge: `The client was running on a generic Shopify store with heavy customization limitations. They needed ownership over their tech stack, custom product configurators, and a seller panel that their non-technical team could manage without developer help.`,
        solution: `We built a Next.js storefront with server-side rendering for SEO, integrated Stripe + Razorpay for payments, and developed a custom CMS-like admin panel using React. Inventory management, order tracking, and automated email flows were all built in-house.`,
        results: [
            'Conversion rate improved from 1.2% to 3.8% post-launch',
            'Page load time under 1.2s on mobile',
            'Processing 500+ orders/month within 60 days',
            '98% Lighthouse performance score',
        ],
        tech: ['Next.js 14', 'TypeScript', 'Stripe', 'Razorpay', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel'],
        features: [
            'SSR product pages for SEO',
            'Dual payment gateway (Stripe + Razorpay)',
            'Real-time inventory management',
            'Automated order email flows',
            'Custom product configurator',
            'Seller analytics dashboard',
        ],
        color2: '#cc4400',
    },
    {
        slug: 'wellness-app',
        title: 'Wellness Mobile App',
        category: 'Mobile',
        color: '#00ff88',
        duration: '10 weeks',
        team: '3 members',
        year: '2023',
        client: 'HealthTech Startup, Bangalore',
        liveUrl: '#',
        githubUrl: '#',
        overview: `A cross-platform health and wellness tracking app for iOS and Android. The app uses AI-powered insights to give users personalized daily recommendations based on their sleep, activity, and nutrition data.`,
        challenge: `Building a performant cross-platform app that could sync with Apple Health, Google Fit, and Fitbit — while maintaining battery efficiency and working offline for users in low-connectivity areas.`,
        solution: `We built with React Native + Expo for cross-platform reach. A FastAPI backend handled the AI recommendation engine, and Redis was used for session caching. We implemented background sync with conflict resolution for offline-first data handling.`,
        results: [
            '4.7 star rating on App Store (1200+ reviews)',
            '45% user retention at 30 days (industry avg: 25%)',
            '10,000+ downloads in first month',
            'Featured in "New Apps We Love" on App Store',
        ],
        tech: ['React Native', 'Expo', 'FastAPI', 'Python', 'Redis', 'PostgreSQL', 'TensorFlow Lite', 'Firebase'],
        features: [
            'Apple Health & Google Fit sync',
            'AI-powered daily recommendations',
            'Offline-first data sync',
            'Push notification system',
            'Wearable device integration',
            'Progress charts & insights',
        ],
        color2: '#00cc66',
    },
    {
        slug: 'propfinder',
        title: 'PropFinder Platform',
        category: 'Web App',
        color: '#a78bfa',
        duration: '14 weeks',
        team: '4 members',
        year: '2023',
        client: 'Real Estate Agency, Pune',
        liveUrl: '#',
        githubUrl: '#',
        overview: `A comprehensive real estate listing and search platform with map-based property discovery, virtual tours, and an agent management portal.`,
        challenge: `Building a fast, filterable property search across 50,000+ listings with map integration, while giving agents a portal to manage their listings without technical knowledge.`,
        solution: `We implemented Elasticsearch for lightning-fast property search with complex filters. Google Maps API was integrated for map-based discovery. The agent portal was built with role-based access and a drag-drop listing editor.`,
        results: [
            'Search results in under 200ms for 50k+ listings',
            '3x more lead inquiries vs previous website',
            '120+ agents onboarded in first quarter',
            'Mobile traffic increased by 80%',
        ],
        tech: ['React', 'Express', 'MongoDB', 'Elasticsearch', 'Google Maps API', 'AWS S3', 'Cloudinary', 'Node.js'],
        features: [
            'Map-based property discovery',
            'Advanced search with 20+ filters',
            'Virtual tour integration',
            'Agent management portal',
            'Lead tracking system',
            'Automated property alerts',
        ],
        color2: '#7c3aed',
    },
    {
        slug: 'edulearn',
        title: 'EduLearn LMS',
        category: 'Full-Stack',
        color: '#fbbf24',
        duration: '16 weeks',
        team: '5 members',
        year: '2023',
        client: 'EdTech Company, Chennai',
        liveUrl: '#',
        githubUrl: '#',
        overview: `A full-featured Learning Management System with video streaming, interactive quizzes, progress tracking, and instructor dashboards.`,
        challenge: `Delivering high-quality video content to students in Tier 2/3 cities with inconsistent internet. Building a quiz engine that supports multiple question types and auto-grading.`,
        solution: `We used adaptive bitrate video streaming via AWS CloudFront, implemented offline video downloads, and built a custom quiz engine with 8 question types. NestJS handled the complex business logic with clean module separation.`,
        results: [
            '50,000+ students enrolled in 6 months',
            '92% course completion rate',
            'Video buffering reduced by 70% with adaptive streaming',
            'Instructor revenue increased 3x',
        ],
        tech: ['Next.js', 'NestJS', 'PostgreSQL', 'AWS CloudFront', 'FFmpeg', 'Redis', 'Stripe', 'Docker'],
        features: [
            'Adaptive bitrate video streaming',
            'Offline video downloads',
            'Multi-type quiz engine with auto-grading',
            'Live session support',
            'Certificate generation',
            'Instructor analytics dashboard',
        ],
        color2: '#d97706',
    },
    {
        slug: 'logitrack',
        title: 'LogiTrack App',
        category: 'Mobile',
        color: '#f472b6',
        duration: '9 weeks',
        team: '3 members',
        year: '2024',
        client: 'Logistics Company, Hyderabad',
        liveUrl: '#',
        githubUrl: '#',
        overview: `A real-time logistics and delivery management mobile app for both drivers and dispatchers, with live GPS tracking, route optimization, and proof-of-delivery capture.`,
        challenge: `Building a battery-efficient GPS tracking system that works in areas with poor connectivity, while giving dispatchers a real-time overview of 200+ active deliveries simultaneously.`,
        solution: `Flutter was chosen for its native GPS performance. We implemented geofencing with background location tracking optimized for battery life. A Node.js WebSocket server handled real-time updates to the dispatcher dashboard.`,
        results: [
            'Delivery time reduced by 28%',
            'Fuel costs down 15% with route optimization',
            'Zero lost packages in pilot quarter',
            'Dispatcher productivity up 60%',
        ],
        tech: ['Flutter', 'Firebase', 'Node.js', 'Google Maps SDK', 'WebSocket', 'MongoDB', 'FCM', 'AWS'],
        features: [
            'Real-time GPS tracking',
            'Route optimization engine',
            'Geofencing & alerts',
            'Proof-of-delivery capture',
            'Offline mode support',
            'Dispatcher live dashboard',
        ],
        color2: '#db2777',
    },
];

export default function ProjectDetailPage() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Project Not Found</h2>
                    <Link to="/projects" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: '600' }}>← Back to Projects</Link>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Hero */}
            <section style={{
                paddingTop: '140px', paddingBottom: '80px',
                background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden',
            }}>
                {/* Background glow */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: `radial-gradient(ellipse 70% 60% at 60% 30%, ${project.color}08 0%, transparent 70%)`,
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `linear-gradient(${project.color}05 1px, transparent 1px), linear-gradient(90deg, ${project.color}05 1px, transparent 1px)`,
                    backgroundSize: '60px 60px', pointerEvents: 'none',
                }} />

                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Back link */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <Link to="/projects" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            color: 'var(--text-secondary)', textDecoration: 'none',
                            fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.85rem',
                            marginBottom: '40px', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = project.color}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FiArrowLeft /> Back to Projects
                        </Link>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'flex-start' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            {/* Category badge */}
                            <span style={{
                                display: 'inline-block', marginBottom: '20px',
                                padding: '5px 14px', background: `${project.color}15`,
                                border: `1px solid ${project.color}35`, borderRadius: '20px',
                                fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                letterSpacing: '0.1em', textTransform: 'uppercase', color: project.color,
                            }}>{project.category}</span>

                            <h1 style={{
                                fontFamily: 'Syne, sans-serif', fontWeight: '800',
                                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                                lineHeight: '1.1', letterSpacing: '-0.03em',
                                color: 'var(--text-primary)', marginBottom: '20px',
                            }}>{project.title}</h1>

                            <p style={{
                                color: 'var(--text-secondary)', fontSize: '1.05rem',
                                lineHeight: '1.75', maxWidth: '580px',
                            }}>{project.overview}</p>

                            {/* Action buttons */}
                            <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    padding: '12px 24px', background: `linear-gradient(135deg, ${project.color}, ${project.color2})`,
                                    borderRadius: '10px', color: '#000', textDecoration: 'none',
                                    fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.875rem',
                                }}>
                                    <FiExternalLink /> Live Site
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    padding: '12px 24px', background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border)', borderRadius: '10px',
                                    color: 'var(--text-secondary)', textDecoration: 'none',
                                    fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.875rem',
                                    transition: 'all 0.2s',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                                >
                                    <FiGithub /> GitHub
                                </a>
                            </div>
                        </motion.div>

                        {/* Meta info card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                            style={{
                                background: 'var(--bg-card)', border: '1px solid var(--border)',
                                borderRadius: '20px', padding: '28px', minWidth: '220px',
                                display: 'flex', flexDirection: 'column', gap: '20px',
                            }}
                            className="meta-card"
                        >
                            {[
                                { icon: FiCalendar, label: 'Year', value: project.year },
                                { icon: FiClock, label: 'Duration', value: project.duration },
                                { icon: FiUsers, label: 'Team Size', value: project.team },
                            ].map(item => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                            <Icon style={{ color: project.color, fontSize: '14px' }} />
                                            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{item.label}</span>
                                        </div>
                                        <div style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.9rem' }}>{item.value}</div>
                                    </div>
                                );
                            })}

                            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>Client</div>
                                <div style={{ color: 'var(--text-primary)', fontSize: '0.85rem', lineHeight: '1.5' }}>{project.client}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project image placeholder */}
            <div style={{
                height: '400px',
                background: `linear-gradient(135deg, ${project.color}18 0%, var(--bg-secondary) 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
                borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `linear-gradient(${project.color}10 1px, transparent 1px), linear-gradient(90deg, ${project.color}10 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }} />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        width: '120px', height: '120px',
                        background: `${project.color}20`, border: `3px solid ${project.color}40`,
                        borderRadius: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: '3rem',
                        color: project.color, position: 'relative', zIndex: 1,
                    }}
                >
                    {project.title.charAt(0)}
                </motion.div>
                <p style={{
                    position: 'absolute', bottom: '20px', right: '24px',
                    color: 'var(--text-muted)', fontSize: '0.78rem',
                    fontFamily: 'Syne, sans-serif', fontStyle: 'italic',
                }}>
                    Project screenshots — replace with actual images
                </p>
            </div>

            {/* Content sections */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>

                        {/* Challenge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px' }}
                        >
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                marginBottom: '18px', padding: '4px 12px',
                                background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.2)',
                                borderRadius: '6px', color: 'var(--accent-warm)',
                                fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.68rem',
                                letterSpacing: '0.12em', textTransform: 'uppercase',
                            }}>
                                The Challenge
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                                {project.challenge}
                            </p>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px' }}
                        >
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                marginBottom: '18px', padding: '4px 12px',
                                background: `${project.color}10`, border: `1px solid ${project.color}25`,
                                borderRadius: '6px', color: project.color,
                                fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.68rem',
                                letterSpacing: '0.12em', textTransform: 'uppercase',
                            }}>
                                Our Solution
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{
                            marginTop: '24px', background: 'var(--bg-card)',
                            border: `1px solid ${project.color}25`, borderRadius: '20px', padding: '40px',
                            position: 'relative', overflow: 'hidden',
                        }}
                    >
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                            background: `linear-gradient(90deg, ${project.color}, ${project.color2})`,
                        }} />

                        <h3 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: '1.3rem',
                            color: 'var(--text-primary)', marginBottom: '28px',
                            display: 'flex', alignItems: 'center', gap: '10px',
                        }}>
                            <span style={{ color: project.color }}>📈</span> Results & Impact
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
                            {project.results.map((result, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                                >
                                    <FiCheckCircle style={{ color: project.color, fontSize: '18px', flexShrink: 0, marginTop: '1px' }} />
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{result}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Features + Tech Stack */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>

                        {/* Key Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px' }}
                        >
                            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '22px' }}>
                                Key Features
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {project.features.map((f, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.color, flexShrink: 0 }} />
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '36px' }}
                        >
                            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '22px' }}>
                                Tech Stack
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{
                                        padding: '7px 14px',
                                        background: `${project.color}10`,
                                        border: `1px solid ${project.color}25`,
                                        borderRadius: '8px',
                                        fontSize: '0.8rem',
                                        fontFamily: 'Syne, sans-serif',
                                        fontWeight: '600',
                                        color: project.color,
                                    }}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* More Projects */}
            <section style={{ padding: '80px 0', background: 'var(--bg-primary)' }}>
                <div className="container-custom" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                        Want to see more?
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '0.9rem' }}>
                        Explore our full portfolio of projects.
                    </p>
                    <Link to="/projects" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '13px 28px',
                        background: `linear-gradient(135deg, ${project.color}, ${project.color2})`,
                        borderRadius: '12px', color: '#000',
                        textDecoration: 'none',
                        fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.9rem',
                    }}>
                        ← All Projects
                    </Link>
                </div>
            </section>

            <CtaBanner />

            <style>{`
        @media (max-width: 767px) {
          .meta-card { display: none !important; }
        }
      `}</style>
        </>
    );
}