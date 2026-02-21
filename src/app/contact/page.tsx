"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#020202] relative flex items-center">
            {/* Abstract Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary text-sm tracking-widest uppercase font-semibold mb-6 block">Inquiries</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tighter leading-none">
                        Let's create <br /> something <span className="text-primary italic">iconic</span>.
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-md font-light leading-relaxed mb-12">
                        Fill out the form to discuss your project. We typically respond within 24 hours. For urgent matters, email directly at studio@tomiblack.com.
                    </p>

                    <div className="space-y-6 text-sm">
                        <div>
                            <h4 className="text-white font-semibold uppercase tracking-wider mb-2">Location</h4>
                            <p className="text-neutral-500 font-light">Los Angeles, CA / Remote Worldwide</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold uppercase tracking-wider mb-2">Socials</h4>
                            <div className="flex gap-4">
                                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">Instagram</a>
                                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">Twitter (X)</a>
                                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                        <h3 className="text-2xl font-serif font-bold text-white mb-8">Project Details</h3>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Project Type</label>
                                    <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none shrink-0">
                                        <option>Commercial Ad</option>
                                        <option>YouTube Long-form</option>
                                        <option>Short-form / Reels</option>
                                        <option>Documentary</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Budget Range</label>
                                    <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none shrink-0">
                                        <option>$1k - $5k</option>
                                        <option>$5k - $15k</option>
                                        <option>$15k - $50k</option>
                                        <option>$50k+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Message / Video Link</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell us about your brand, goals, and include any reference links..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-black rounded-xl py-4 font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors mt-4 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
