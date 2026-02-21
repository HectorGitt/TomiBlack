"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Our retention doubled. TomiBlack understands exactly where to cut to keep the audience glued to the screen.",
        author: "Alex Hormozi",
        role: "Founder, Acquisition.com"
    },
    {
        quote: "The only agency I trust with my billion-dollar brand. The cinematic quality is unmatched in the industry.",
        author: "Iman Gadzhi",
        role: "Entrepreneur & Creator"
    },
    {
        quote: "They don't just edit videos; they architect experiences. Our recent launch was our biggest ever, largely due to the vsl.",
        author: "Sam Ovens",
        role: "Founder, Skool"
    },
    {
        quote: "TomiBlack is the secret weapon for any creator scaling past $1M. The pacing is surgical.",
        author: "Ali Abdaal",
        role: "YouTuber & Author"
    },
    {
        quote: "Absolutely insane quality. We handed them 40 hours of raw footage and they delivered a masterpiece.",
        author: "Chris Williamson",
        role: "Host, Modern Wisdom"
    }
];

export function TestimonialsMarquee() {
    // Duplicate array for infinite scroll effect
    const marqueeItems = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-background w-full overflow-hidden border-t border-white/5">
            <div className="mb-16 text-center max-w-2xl mx-auto px-6">
                <span className="text-primary text-sm tracking-widest uppercase font-semibold mb-4 block">Client Success</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Trust the Process.</h2>
            </div>

            <div className="relative w-full flex overflow-hidden">
                {/* Left/Right fading gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />

                <motion.div
                    className="flex gap-6 whitespace-nowrap py-4 px-6 md:px-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                    {marqueeItems.map((item, i) => (
                        <div
                            key={i}
                            className="w-[350px] md:w-[450px] shrink-0 bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-colors"
                        >
                            <div>
                                <div className="flex gap-1 mb-6 text-primary">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-lg md:text-xl text-neutral-300 font-serif italic whitespace-normal mb-8 leading-relaxed">
                                    "{item.quote}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold uppercase overflow-hidden ring-1 ring-primary/30">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold tracking-wide">{item.author}</h4>
                                    <p className="text-sm text-neutral-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
