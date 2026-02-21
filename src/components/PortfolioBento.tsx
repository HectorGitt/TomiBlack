"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

const portfolioItems = [
    {
        id: 1,
        title: "Cyberpunk Commercial",
        category: "Commercial",
        thumbnail: "https://images.unsplash.com/photo-1533422902779-babd491104ef?q=80&w=2670&auto=format&fit=crop",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1 md:row-span-2",
    },
    {
        id: 2,
        title: "High-Energy Reels",
        category: "Short-Form",
        thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
    },
    {
        id: 3,
        title: "Tech Documentary",
        category: "Documentary",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
    },
    {
        id: 4,
        title: "Automotive Launch",
        category: "Cinematic",
        thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2683&auto=format&fit=crop",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
    }
];

export function PortfolioBento() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-background w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Selected Work</h2>
                        <p className="text-neutral-400 text-lg max-w-xl">Curated edits that drive retention and tell compelling stories.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button className="hidden md:flex items-center gap-2 pb-2 border-b border-primary text-primary hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm font-semibold mt-8 md:mt-0">
                            View All Work
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {portfolioItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-neutral-900 ${item.colSpan} ${item.rowSpan}`}
                            data-cursor="video"
                            onClick={() => setActiveVideo(item.video)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            {/* Image Thumbnail */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.thumbnail})` }}
                            />

                            {/* Video Preview on Hover (Visible only on md+ screens and when hovered) */}
                            <video
                                src={item.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-white/0 group-hover:text-white/80 transition-colors duration-500 text-sm">
                                    <Play size={16} fill="currentColor" />
                                    <span>Play excerpt</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <button className="flex md:hidden items-center justify-center w-full mt-12 py-4 border border-white/20 rounded-full text-white uppercase tracking-widest text-sm font-semibold">
                    View All Work
                </button>
            </div>

            {/* Video Lightbox Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-12"
                    >
                        <button
                            className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white transition-colors z-10 bg-black/50 p-3 rounded-full"
                            onClick={() => setActiveVideo(null)}
                        >
                            <X size={24} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
                        >
                            <video
                                src={activeVideo}
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
