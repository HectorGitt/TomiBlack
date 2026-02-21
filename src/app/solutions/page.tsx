"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target } from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary text-sm tracking-widest uppercase font-semibold mb-6 block">Our Methodology</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter leading-none">
                        Attention is <br /> the new <span className="text-primary italic">currency</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl font-light leading-relaxed">
                        We don't just edit videos to make them look pretty. We engineer visual experiences mathematically designed to maximize viewer retention and conversion.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-32">
                    {[
                        {
                            icon: <TrendingUp className="w-10 h-10 text-primary mb-6" />,
                            title: "Retention Optimization",
                            desc: "By analyzing drop-off points in algorithmic platforms, we structure pacing that constantly refreshes the viewer's attention span every 3-5 seconds."
                        },
                        {
                            icon: <Users className="w-10 h-10 text-primary mb-6" />,
                            title: "Audience Psychology",
                            desc: "Color theory, soundscapes, and visual hierarchy aren't just art—they're tools to evoke the exact emotional state required to make a viewer subscribe or buy."
                        },
                        {
                            icon: <Target className="w-10 h-10 text-primary mb-6" />,
                            title: "Algorithmic Precision",
                            desc: "We stay ahead of TikTok, YouTube, and IG algorithm changes, editing content specifically for the structural demands of each network."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            {item.icon}
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="bg-primary text-black rounded-3xl p-12 md:p-20 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ready to scale your content?</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
                        Stop losing viewers to poorly paced edits. Let TomiBlack engineer your next viral hit or high-converting campaign.
                    </p>
                    <Link href="/contact">
                        <motion.div
                            className="inline-block bg-black text-white px-10 py-5 rounded-full font-semibold uppercase tracking-widest text-sm hover:bg-neutral-900 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book a Strategy Call
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
