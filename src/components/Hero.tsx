"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full opacity-40 scale-105"
                    poster="https://images.unsplash.com/photo-1605634691459-7b56837ee50d?q=80&w=2670&auto=format&fit=crop"
                >
                    {/* Muted/desaturated abstract dark particles video */}
                    <source src="https://cdn.coverr.co/videos/coverr-moving-monochrome-particle-waves-9502/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
            </div>

            <div className="container relative z-10 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm md:text-base mb-6 block">
                        Retention-Focused Post-Production
                    </span>
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold tracking-tighter text-white mb-6 uppercase leading-none"
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    Tomi<span className="text-white/60">Black</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    We build the visuals that keep your audience hooked.
                    <span className="text-white font-medium ml-1">Fast cuts.</span>
                    <span className="text-white font-medium mx-1">Bold grades.</span>
                    TomiBlack.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    <button
                        data-cursor="video"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm font-semibold tracking-wide uppercase overflow-hidden transition-transform hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                            <PlayCircle size={20} className="fill-black/10" />
                            Watch Showreel
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                    <motion.div
                        className="w-full h-1/2 bg-primary absolute top-0"
                        animate={{ y: ["0%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
