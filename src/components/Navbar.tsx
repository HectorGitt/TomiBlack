"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "py-4 bg-background/70 backdrop-blur-md border-b border-white/10"
                : "py-6 bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white">
                    Tomi<span className="text-primary">Black</span>.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-4 text-sm tracking-wide uppercase font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-white" : "text-neutral-400"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 text-sm font-semibold text-black bg-primary rounded-full hover:bg-primary/90 transition-colors"
                    >
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 right-0"
                >
                    <div className="flex flex-col px-6 py-8 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-serif text-white hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
