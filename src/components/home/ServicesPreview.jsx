// /* eslint-disable no-unused-vars */
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FiArrowRight, FiGlobe, FiSmartphone, FiLayout, FiServer, FiCloud, FiTrendingUp } from 'react-icons/fi';
// import { SectionTitle } from '../common/index.jsx';

// export default function ServicesPreview() {
//     return (
//         <section className="section-padding" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
//             <div className="container-custom">
//                 <SectionTitle
//                     eyebrow="What We Do"
//                     title="Services Built for Modern Businesses"
//                     subtitle="End-to-end digital solutions — from idea to launch and beyond."
//                 />

//                 <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
//                     gap: '20px',
//                 }}>
//                     {services.map((service, i) => {
//                         const Icon = service.icon;
//                         return (
//                             <motion.div
//                                 key={service.title}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.08, duration: 0.6 }}
//                                 className="card-hover"
//                                 style={{
//                                     background: 'var(--bg-card)',
//                                     border: '1px solid var(--border)',
//                                     borderRadius: '20px',
//                                     padding: '36px 32px',
//                                     cursor: 'default',
//                                     position: 'relative',
//                                     overflow: 'hidden',
//                                 }}
//                             >
//                                 {/* Accent corner glow */}
//                                 <div style={{
//                                     position: 'absolute',
//                                     top: 0,
//                                     right: 0,
//                                     width: '150px',
//                                     height: '150px',
//                                     background: `radial-gradient(circle at top right, ${service.accent}12 0%, transparent 70%)`,
//                                     pointerEvents: 'none',
//                                 }} />

//                                 {/* Icon */}
//                                 <div style={{
//                                     width: '52px',
//                                     height: '52px',
//                                     background: `${service.accent}15`,
//                                     border: `1px solid ${service.accent}30`,
//                                     borderRadius: '14px',
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     marginBottom: '22px',
//                                     fontSize: '22px',
//                                     color: service.accent,
//                                 }}>
//                                     <Icon />
//                                 </div>

//                                 <h3 style={{
//                                     fontFamily: 'Syne, sans-serif',
//                                     fontWeight: '700',
//                                     fontSize: '1.15rem',
//                                     color: 'var(--text-primary)',
//                                     marginBottom: '12px',
//                                     letterSpacing: '-0.01em',
//                                 }}>
//                                     {service.title}
//                                 </h3>

//                                 <p style={{
//                                     color: 'var(--text-secondary)',
//                                     fontSize: '0.875rem',
//                                     lineHeight: '1.7',
//                                     marginBottom: '24px',
//                                 }}>
//                                     {service.desc}
//                                 </p>

//                                 {/* Tags */}
//                                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//                                     {service.tags.map(tag => (
//                                         <span
//                                             key={tag}
//                                             style={{
//                                                 padding: '4px 10px',
//                                                 background: `${service.accent}10`,
//                                                 border: `1px solid ${service.accent}25`,
//                                                 borderRadius: '6px',
//                                                 fontSize: '0.7rem',
//                                                 fontFamily: 'Syne, sans-serif',
//                                                 fontWeight: '600',
//                                                 letterSpacing: '0.05em',
//                                                 color: service.accent,
//                                                 textTransform: 'uppercase',
//                                             }}
//                                         >
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>

//                 {/* CTA */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 }}
//                     style={{ textAlign: 'center', marginTop: '56px' }}
//                 >
//                     <Link
//                         to="/services"
//                         style={{
//                             display: 'inline-flex',
//                             alignItems: 'center',
//                             gap: '8px',
//                             padding: '14px 32px',
//                             background: 'transparent',
//                             border: '1px solid var(--border-accent)',
//                             borderRadius: '12px',
//                             color: 'var(--accent)',
//                             textDecoration: 'none',
//                             fontFamily: 'Syne, sans-serif',
//                             fontWeight: '600',
//                             fontSize: '0.9rem',
//                             transition: 'all 0.3s ease',
//                         }}
//                         onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.08)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.1)'; }}
//                         onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
//                     >
//                         Explore All Services <FiArrowRight />
//                     </Link>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiGlobe,
    FiSmartphone,
    FiLayout,
    FiServer,
    FiCloud,
    FiTrendingUp,
} from "react-icons/fi";
import { SectionTitle } from "../common/index.jsx";

const API_URL = import.meta.env.VITE_API_URL;

// Backend icon -> React Icon mapping
const iconMap = {
    Globe: FiGlobe,
    Smartphone: FiSmartphone,
    Layout: FiLayout,
    Server: FiServer,
    Cloud: FiCloud,
    TrendingUp: FiTrendingUp,
};

export default function ServicesPreview() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch(`${API_URL}/services`);
                const data = await res.json();

                console.log("Services:", data);

                if (data.success) {
                    const activeServices = data.data.filter(
                        (service) => service.status === "Active"
                    );

                    setServices(activeServices);
                }
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <section
            className="section-padding"
            style={{
                background: "var(--bg-primary)",
                position: "relative",
            }}
        >
            <div className="container-custom">
                <SectionTitle
                    eyebrow="What We Do"
                    title="Services Built for Modern Businesses"
                    subtitle="End-to-end digital solutions — from idea to launch and beyond."
                />

                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "60px 0",
                            color: "var(--text-secondary)",
                            fontSize: "1rem",
                        }}
                    >
                        Loading services...
                    </div>
                ) : services.length === 0 ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "60px 0",
                            color: "var(--text-secondary)",
                            fontSize: "1rem",
                        }}
                    >
                        No services found.
                    </div>
                ) : (
                    <>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(340px, 1fr))",
                                gap: "20px",
                            }}
                        >
                            {services.map((service, i) => {
                                const Icon =
                                    iconMap[service.icon] || FiGlobe;

                                return (
                                    <motion.div
                                        key={service._id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: i * 0.08,
                                            duration: 0.6,
                                        }}
                                        whileHover={{
                                            y: -8,
                                            transition: {
                                                duration: 0.3,
                                            },
                                        }}
                                        className="card-hover"
                                        style={{
                                            background:
                                                "var(--bg-card)",
                                            border:
                                                "1px solid var(--border)",
                                            borderRadius: "20px",
                                            padding: "36px 32px",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Accent Glow */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                right: 0,
                                                width: "150px",
                                                height: "150px",
                                                background: `radial-gradient(circle at top right, ${service.accent ||
                                                    "#00d4ff"
                                                    }15 0%, transparent 70%)`,
                                                pointerEvents: "none",
                                            }}
                                        />

                                        {/* Icon */}
                                        <div
                                            style={{
                                                width: "52px",
                                                height: "52px",
                                                background: `${service.accent ||
                                                    "#00d4ff"
                                                    }15`,
                                                border: `1px solid ${service.accent ||
                                                    "#00d4ff"
                                                    }30`,
                                                borderRadius: "14px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent:
                                                    "center",
                                                marginBottom: "22px",
                                                fontSize: "22px",
                                                color:
                                                    service.accent ||
                                                    "#00d4ff",
                                            }}
                                        >
                                            <Icon />
                                        </div>

                                        <h3
                                            style={{
                                                fontFamily:
                                                    "Syne, sans-serif",
                                                fontWeight: "700",
                                                fontSize: "1.15rem",
                                                color:
                                                    "var(--text-primary)",
                                                marginBottom: "12px",
                                                letterSpacing:
                                                    "-0.01em",
                                            }}
                                        >
                                            {service.title}
                                        </h3>

                                        <p
                                            style={{
                                                color:
                                                    "var(--text-secondary)",
                                                fontSize: "0.875rem",
                                                lineHeight: "1.7",
                                                marginBottom: "24px",
                                            }}
                                        >
                                            {service.shortDesc}
                                        </p>

                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: "8px",
                                            }}
                                        >
                                            {service.techStack
                                                ?.slice(0, 4)
                                                .map((tag) => (
                                                    <span
                                                        key={tag}
                                                        style={{
                                                            padding:
                                                                "4px 10px",
                                                            background: `${service.accent ||
                                                                "#00d4ff"
                                                                }10`,
                                                            border: `1px solid ${service.accent ||
                                                                "#00d4ff"
                                                                }25`,
                                                            borderRadius:
                                                                "6px",
                                                            fontSize:
                                                                "0.7rem",
                                                            fontFamily:
                                                                "Syne, sans-serif",
                                                            fontWeight:
                                                                "600",
                                                            letterSpacing:
                                                                "0.05em",
                                                            color:
                                                                service.accent ||
                                                                "#00d4ff",
                                                            textTransform:
                                                                "uppercase",
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </>
                )}

                {/* CTA */}
                {!loading && services.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        style={{
                            textAlign: "center",
                            marginTop: "56px",
                        }}
                    >
                        <Link
                            to="/services"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "14px 32px",
                                background: "transparent",
                                border: "1px solid var(--border-accent)",
                                borderRadius: "12px",
                                color: "var(--accent)",
                                textDecoration: "none",
                                fontFamily: "Syne, sans-serif",
                                fontWeight: "600",
                                fontSize: "0.9rem",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background =
                                    "rgba(0,212,255,0.08)";
                                e.currentTarget.style.boxShadow =
                                    "0 0 30px rgba(0,212,255,0.12)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background =
                                    "transparent";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            Explore All Services
                            <FiArrowRight />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}