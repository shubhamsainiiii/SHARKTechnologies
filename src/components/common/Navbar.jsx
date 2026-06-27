// /* eslint-disable react-hooks/set-state-in-effect */
// /* eslint-disable no-unused-vars */
// import { useState, useEffect, useCallback } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { navLinks } from '../../constants/navLinks';
// import logo from '../../assets/images/logoo.png';

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const location = useLocation();

//     // Optimized scroll handler with requestAnimationFrame
//     useEffect(() => {
//         let ticking = false;
//         const onScroll = () => {
//             if (!ticking) {
//                 requestAnimationFrame(() => {
//                     setScrolled(window.scrollY > 40);
//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         };
//         window.addEventListener('scroll', onScroll, { passive: true });
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     useEffect(() => {
//         setMenuOpen(false);
//     }, [location.pathname]);

//     useEffect(() => {
//         document.body.style.overflow = menuOpen ? 'hidden' : '';
//         return () => { document.body.style.overflow = ''; };
//     }, [menuOpen]);

//     return (
//         <>
//             <nav
//                 style={{
//                     position: 'fixed',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     zIndex: 1000,
//                     // Only transition specific cheap properties — NOT 'all'
//                     transition: 'background 0.3s ease, border-color 0.3s ease, padding 0.3s ease',
//                     background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
//                     backdropFilter: scrolled ? 'blur(16px)' : 'none',
//                     WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
//                     borderBottom: scrolled
//                         ? '1px solid rgba(255,255,255,0.06)'
//                         : '1px solid transparent',
//                     padding: scrolled ? '10px 0' : '16px 0',
//                     // GPU layer hint
//                     willChange: 'background, padding',
//                     transform: 'translateZ(0)',
//                 }}
//             >
//                 <div
//                     className="container-custom"
//                     style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
//                 >
//                     {/* Logo */}
//                     <Link to="/" style={{ textDecoration: 'none' }}>
//                         <img
//                             src={logo}
//                             alt="Shark Web & Cyber Solution"
//                             style={{
//                                 height: scrolled ? '42px' : '50px',
//                                 width: 'auto',
//                                 objectFit: 'contain',
//                                 transition: 'height 0.3s ease',
//                                 filter: 'brightness(7)',
//                                 display: 'block',
//                             }}
//                         />
//                     </Link>

//                     {/* Desktop Nav */}
//                     <ul
//                         className="hidden-mobile"
//                         style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '4px',
//                             listStyle: 'none',
//                             margin: 0,
//                             padding: 0,
//                         }}
//                     >
//                         {navLinks.map((link) => {
//                             const isActive = location.pathname === link.path;
//                             return (
//                                 <li key={link.path}>
//                                     <Link
//                                         to={link.path}
//                                         style={{
//                                             textDecoration: 'none',
//                                             fontFamily: 'DM Sans, sans-serif',
//                                             fontWeight: '500',
//                                             fontSize: '0.9rem',
//                                             color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
//                                             padding: '8px 14px',
//                                             borderRadius: '8px',
//                                             transition: 'color 0.2s ease, background 0.2s ease',
//                                             background: isActive ? 'rgba(0,212,255,0.08)' : 'transparent',
//                                             display: 'block',
//                                         }}
//                                         onMouseEnter={e => {
//                                             if (!isActive) {
//                                                 e.target.style.color = 'var(--text-primary)';
//                                                 e.target.style.background = 'rgba(255,255,255,0.04)';
//                                             }
//                                         }}
//                                         onMouseLeave={e => {
//                                             if (!isActive) {
//                                                 e.target.style.color = 'var(--text-secondary)';
//                                                 e.target.style.background = 'transparent';
//                                             }
//                                         }}
//                                     >
//                                         {link.label}
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>

//                     {/* CTA + Hamburger */}
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//                         <Link
//                             to="/contact"
//                             className="btn-primary hidden-mobile"
//                             style={{
//                                 padding: '10px 22px',
//                                 borderRadius: '10px',
//                                 fontSize: '0.875rem',
//                                 textDecoration: 'none',
//                                 display: 'inline-block',
//                             }}
//                         >
//                             <span>Let's Talk</span>
//                         </Link>

//                         <button
//                             onClick={() => setMenuOpen(!menuOpen)}
//                             className="show-mobile"
//                             style={{
//                                 background: "rgba(255,255,255,0.06)",
//                                 border: "1px solid var(--border)",
//                                 color: "var(--text-primary)",
//                                 width: "42px",
//                                 height: "42px",
//                                 borderRadius: "12px",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 cursor: "pointer",
//                                 overflow: "hidden",
//                             }}
//                         >
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={menuOpen ? "close" : "menu"}
//                                     initial={{
//                                         rotate: -90,
//                                         opacity: 0,
//                                         scale: 0.5,
//                                     }}
//                                     animate={{
//                                         rotate: 0,
//                                         opacity: 1,
//                                         scale: 1,
//                                     }}
//                                     exit={{
//                                         rotate: 90,
//                                         opacity: 0,
//                                         scale: 0.5,
//                                     }}
//                                     transition={{
//                                         duration: 0.25,
//                                     }}
//                                 >
//                                     {menuOpen ? (
//                                         <FiX size={22} />
//                                     ) : (
//                                         <FiMenu size={22} />
//                                     )}
//                                 </motion.div>
//                             </AnimatePresence>
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//                 {menuOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//                         style={{
//                             position: 'fixed',
//                             top: scrolled ? '62px' : '82px',
//                             left: 0,
//                             right: 0,
//                             bottom: 0,
//                             zIndex: 998,
//                             background: 'rgba(8,12,20,0.98)',
//                             backdropFilter: 'blur(20px)',
//                             WebkitBackdropFilter: 'blur(20px)',
//                             borderTop: '1px solid rgba(255,255,255,0.06)',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             padding: '32px 24px 40px',
//                             overflowY: 'auto',
//                         }}
//                     >
//                         <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
//                             {navLinks.map((link, i) => {
//                                 const isActive = location.pathname === link.path;
//                                 return (
//                                     <motion.li
//                                         key={link.path}
//                                         initial={{ opacity: 0, x: 24 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ delay: i * 0.05, duration: 0.3 }}
//                                     >
//                                         <Link
//                                             to={link.path}
//                                             style={{
//                                                 textDecoration: 'none',
//                                                 fontFamily: 'Syne, sans-serif',
//                                                 fontWeight: '700',
//                                                 fontSize: '1.75rem',
//                                                 color: isActive ? 'var(--accent)' : 'var(--text-primary)',
//                                                 display: 'block',
//                                                 padding: '14px 0',
//                                                 borderBottom: '1px solid var(--border)',
//                                                 transition: 'color 0.2s',
//                                             }}
//                                         >
//                                             {link.label}
//                                         </Link>
//                                     </motion.li>
//                                 );
//                             })}
//                         </ul>

//                         <motion.div
//                             initial={{ opacity: 0, y: 16 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3 }}
//                             style={{ marginTop: '32px' }}
//                         >
//                             <Link
//                                 to="/contact"
//                                 className="btn-primary"
//                                 style={{
//                                     padding: '14px 32px',
//                                     borderRadius: '12px',
//                                     fontSize: '1rem',
//                                     textDecoration: 'none',
//                                     display: 'inline-block',
//                                 }}
//                             >
//                                 <span>Let's Talk</span>
//                             </Link>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             <style>{`
//                 @media (min-width: 768px) {
//                     .hidden-mobile { display: flex !important; }
//                     .show-mobile { display: none !important; }
//                 }
//                 @media (max-width: 767px) {
//                     .hidden-mobile { display: none !important; }
//                     .show-mobile { display: flex !important; }
//                 }
//             `}</style>
//         </>
//     );
// }



/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../../constants/navLinks";
import logo from "../../assets/images/logoo.png";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 40);
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition:
                        "background .3s,border-color .3s,padding .3s",
                    background: scrolled
                        ? "rgba(8,12,20,.92)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(16px)" : "none",
                    WebkitBackdropFilter: scrolled
                        ? "blur(16px)"
                        : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,.06)"
                        : "1px solid transparent",
                    padding: scrolled ? "10px 0" : "16px 0",
                }}
            >
                <div
                    className="container-custom"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}

                    <Link to="/">
                        <img
                            src={logo}
                            alt="Shark"
                            style={{
                                height: scrolled ? 42 : 50,
                                transition: ".3s",
                                filter: "brightness(7)",
                            }}
                        />
                    </Link>

                    {/* Desktop Menu */}

                    <ul
                        className="hidden-mobile"
                        style={{
                            display: "flex",
                            gap: 4,
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            alignItems: "center",
                        }}
                    >
                        {navLinks.map((link) => {
                            const active =
                                location.pathname === link.path;

                            return (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            textDecoration: "none",
                                            color: active
                                                ? "var(--accent)"
                                                : "var(--text-secondary)",
                                            fontWeight: 500,
                                            fontSize: ".9rem",
                                            padding: "8px 14px",
                                            borderRadius: 8,
                                            transition: ".25s",
                                            background: active
                                                ? "rgba(0,212,255,.08)"
                                                : "transparent",
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right */}

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                        }}
                    >
                        <Link
                            to="/contact"
                            className="btn-primary hidden-mobile"
                            style={{
                                padding: "10px 22px",
                                borderRadius: 10,
                            }}
                        >
                            Let's Talk
                        </Link>

                        {/* Animated Hamburger */}

                        <button
                            onClick={() =>
                                setMenuOpen(!menuOpen)
                            }
                            className="show-mobile"
                            style={{
                                width: 42,
                                height: 42,
                                borderRadius: 12,
                                background:
                                    "rgba(255,255,255,.06)",
                                border:
                                    "1px solid rgba(255,255,255,.08)",
                                color: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                overflow: "hidden",
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={
                                        menuOpen
                                            ? "close"
                                            : "menu"
                                    }
                                    initial={{
                                        rotate: -180,
                                        opacity: 0,
                                        scale: .5,
                                    }}
                                    animate={{
                                        rotate: 0,
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        rotate: 180,
                                        opacity: 0,
                                        scale: .5,
                                    }}
                                    transition={{
                                        duration: .3,
                                    }}
                                >
                                    {menuOpen ? (
                                        <FiX size={22} />
                                    ) : (
                                        <FiMenu size={22} />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -40,
                            scaleY: .96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scaleY: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -40,
                            scaleY: .96,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 180,
                            damping: 22,
                        }}
                        style={{
                            position: "fixed",
                            top: scrolled ? 62 : 82,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 998,

                            background:
                                "linear-gradient(180deg,#08101bee,#050a16)",

                            backdropFilter: "blur(28px)",
                            WebkitBackdropFilter:
                                "blur(28px)",

                            padding:
                                "40px 28px 50px",

                            display: "flex",
                            flexDirection: "column",
                            overflowY: "auto",
                        }}
                    >
                        <ul
                            style={{
                                listStyle: "none",
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            {navLinks.map((link, i) => {
                                const active =
                                    location.pathname ===
                                    link.path;

                                return (
                                    <motion.li
                                        key={link.path}
                                        initial={{
                                            opacity: 0,
                                            x: 40,
                                            filter:
                                                "blur(10px)",
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            filter:
                                                "blur(0px)",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: 40,
                                        }}
                                        transition={{
                                            delay:
                                                i * .08,
                                            duration:
                                                .45,
                                        }}
                                    >
                                        <Link
                                            to={
                                                link.path
                                            }
                                            style={{
                                                display:
                                                    "block",
                                                padding:
                                                    "18px 0",
                                                color: active
                                                    ? "var(--accent)"
                                                    : "#fff",
                                                textDecoration:
                                                    "none",
                                                fontWeight:
                                                    700,
                                                fontSize:
                                                    "1.8rem",
                                                borderBottom:
                                                    "1px solid rgba(255,255,255,.08)",
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: .8,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                delay: .45,
                                type: "spring",
                                stiffness: 200,
                            }}
                            style={{
                                marginTop: 40,
                            }}
                        >
                            <Link
                                to="/contact"
                                className="btn-primary"
                                style={{
                                    padding:
                                        "15px 32px",
                                    borderRadius: 12,
                                    display:
                                        "inline-block",
                                    textDecoration:
                                        "none",
                                }}
                            >
                                Let's Talk
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width:768px){
                    .hidden-mobile{
                        display:flex !important;
                    }

                    .show-mobile{
                        display:none !important;
                    }
                }

                @media (max-width:767px){
                    .hidden-mobile{
                        display:none !important;
                    }

                    .show-mobile{
                        display:flex !important;
                    }
                }
            `}</style>
        </>
    );
}