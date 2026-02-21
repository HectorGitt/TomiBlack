"use client";

import { motion } from "framer-motion";
import { Film, Smartphone, Aperture } from "lucide-react";

const services = [
    {
        icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-primary mb-6" />,
        title: "Short-Form / Reels",
        description: "High-retention vertical edits designed for TikTok, Reels, and Shorts. Fast pacing, dynamic captions, and viral hooks.",
        features: ["Sub 60-second cuts", "Animated captions", "Trend-driven pacing"]
    },
    {
        icon: <Film className="w-8 h-8 md:w-10 md:h-10 text-primary mb-6" />,
        title: "Cinematic Ads",
        description: "Premium, narrative-driven commercials that elevate your brand. Deep color grading, cinematic sound design, and perfect rhythm.",
        features: ["Broadcast quality", "Custom sound design", "Advanced color grading"]
    },
    {
        icon: <Aperture className="w-8 h-8 md:w-10 md:h-10 text-primary mb-6" />,
        title: "Documentary Editing",
        description: "Long-form storytelling that keeps viewers engaged from start to finish. We find the narrative arc in hours of raw footage.",
        features: ["Story-first approach", "Multi-cam sync", "Professional mixing"]
    }
];

export function Services() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#020202] w-full border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm tracking-widest uppercase font-semibold mb-4 block">Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        We don't just edit. <br />
                        <span className="text-neutral-500">We optimize for impact.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="group relative bg-[#080808] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-primary/50 transition-colors duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                            <div className="relative z-10">
                                {service.icon}
                                <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-neutral-400 font-light leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-center text-sm text-neutral-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
