"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Ingest & Assembly",
        description: "We organize your raw footage, sync audio, and create the initial backbone of the narrative. No wasted frames."
    },
    {
        num: "02",
        title: "The Cut (Pacing & Rhythm)",
        description: "Where the magic happens. We build the retention-driven pacing, cutting out dead air and creating a flow that hooks the viewer."
    },
    {
        num: "03",
        title: "Color Grade",
        description: "We apply our signature dark, premium grading to give your footage a cinematic, expensive look tailored to your brand."
    },
    {
        num: "04",
        title: "Sound Design & Mix",
        description: "Audio is 50% of the experience. We layer foley, cinematic risers, and mix the EQ so your video sounds as heavy as it looks."
    }
];

export function ProcessTimeline() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background w-full">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-sm tracking-widest uppercase font-semibold mb-4 block">The Workflow</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        From raw to <span className="italic font-light">refined</span>.
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 md:ml-8 ml-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="mb-16 last:mb-0 relative pl-10 md:pl-16"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                                <div className="text-5xl md:text-6xl font-serif font-light text-white/10 select-none leading-none">
                                    {step.num}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-3 tracking-wide uppercase text-lg md:text-xl">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-400 font-light leading-relaxed max-w-xl">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
