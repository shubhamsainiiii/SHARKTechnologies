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

    useEffect(() => { setMenuOpen(false); }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        document.documentElement.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [menuOpen]);

    const navHeight = scrolled ? 62 : 82;

    return (
        <>
            {/* ✅ Navbar — zIndex sabse upar */}
            <nav
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0,
                    zIndex: 10000,
                    transition: "background .3s, border-color .3s, padding .3s",
                    background: scrolled ? "rgba(8,12,20,.95)" : "transparent",
                    backdropFilter: scrolled ? "blur(16px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,.07)"
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
                    <Link to="/" onClick={() => setMenuOpen(false)}>
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

                    {/* Desktop Nav */}
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
                            const active = location.pathname === link.path;
                            return (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            textDecoration: "none",
                                            color: active ? "var(--accent)" : "var(--text-secondary)",
                                            fontWeight: 500,
                                            fontSize: ".9rem",
                                            padding: "8px 14px",
                                            borderRadius: 8,
                                            transition: ".25s",
                                            background: active ? "rgba(0,212,255,.08)" : "transparent",
                                            display: "block",
                                        }}
                                        onMouseEnter={e => {
                                            if (!active) {
                                                e.currentTarget.style.color = "#fff";
                                                e.currentTarget.style.background = "rgba(255,255,255,.05)";
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            if (!active) {
                                                e.currentTarget.style.color = "var(--text-secondary)";
                                                e.currentTarget.style.background = "transparent";
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right side */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Link
                            to="/contact"
                            className="btn-primary hidden-mobile"
                            style={{ padding: "10px 22px", borderRadius: 10, textDecoration: "none" }}
                        >
                            Let's Talk
                        </Link>

                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen(prev => !prev)}
                            className="show-mobile"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            style={{
                                width: 38,
                                height: 38,
                                borderRadius: 10,
                                background: menuOpen ? "rgba(0,212,255,.1)" : "rgba(255,255,255,.06)",
                                border: menuOpen
                                    ? "1px solid rgba(0,212,255,.3)"
                                    : "1px solid rgba(255,255,255,.08)",
                                color: menuOpen ? "var(--accent)" : "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                                transition: "background .25s, border-color .25s, color .25s",
                                flexShrink: 0,
                            }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={menuOpen ? "close" : "open"}
                                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* ✅ Mobile Menu — navbar ke neeche, navbar height ke baad shuru */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "fixed",
                            top: navHeight,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 9999,
                            background: "rgba(5,10,22,.97)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            borderTop: "1px solid rgba(255,255,255,.07)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            padding: "5px 25px 40px",
                            overflowY: "auto",
                            overflowX: "hidden",
                        }}
                    >
                        {/* Nav Links */}
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, width: "100%" }}>
                            {navLinks.map((link, i) => {
                                const active = location.pathname === link.path;
                                return (
                                    <motion.li
                                        key={link.path}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ delay: i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setMenuOpen(false)}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "10px 0",
                                                color: active ? "var(--accent)" : "#fff",
                                                textDecoration: "none",
                                                fontWeight: 500,
                                                fontSize: "1rem",
                                                borderBottom: "1px solid rgba(255,255,255,.07)",
                                                width: "100%",
                                                boxSizing: "border-box",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            <span>{link.label}</span>
                                            {active && (
                                                <motion.span
                                                    layoutId="dot"
                                                    style={{
                                                        width: 7,
                                                        height: 7,
                                                        borderRadius: "50%",
                                                        background: "var(--accent)",
                                                        boxShadow: "0 0 10px var(--accent)",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                            )}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.35 }}
                            style={{ marginTop: 10 }}
                        >
                            <Link
                                to="/contact"
                                className="btn-primary"
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    padding: "10px 25px",
                                    borderRadius: 12,
                                    display: "inline-block",
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                }}
                            >
                                <span>
                                    Let's Talk
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 768px) {
                    .hidden-mobile { display: flex !important; }
                    .show-mobile { display: none !important; }
                }
                @media (max-width: 767px) {
                    .hidden-mobile { display: none !important; }
                    .show-mobile { display: flex !important; }
                }
            `}</style>
        </>
    );
}