"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

type Category = "All" | "Commercial" | "YouTube" | "Short-Form" | "Documentary";

const projects = [
    { id: 1, title: "Nike Alphafly", category: "Commercial", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 2, title: "MrBeast Challenge", category: "YouTube", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 3, title: "Tech Launch 2024", category: "Commercial", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2671&auto=format&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, title: "Hormozi Retargeting", category: "Short-Form", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 5, title: "The Deep Sea", category: "Documentary", img: "https://images.unsplash.com/photo-1682687982501-1e5898cb4693?q=80&w=2670&auto=format&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 6, title: "Gymshark Campaign", category: "Commercial", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 7, title: "Vlog Transformation", category: "YouTube", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 8, title: "Daily Motivation", category: "Short-Form", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const categories: Category[] = ["All", "Commercial", "YouTube", "Short-Form", "Documentary"];

export default function WorkPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const filteredProjects = projects.filter(
        (p) => activeCategory === "All" || p.category === activeCategory
    );

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tighter">
                        Our <span className="text-primary italic">Work</span>.
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl font-light">
                        A diverse catalog of high-retention post-production projects across various niches and formats.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="flex flex-wrap items-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all ${activeCategory === cat
                                ? "bg-primary text-black"
                                : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-video overflow-hidden rounded-2xl bg-[#0a0a0a] cursor-pointer"
                                data-cursor="video"
                                onClick={() => setActiveVideo(project.video)}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.img})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
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
        </main>
    );
}
