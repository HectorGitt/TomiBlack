"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Prevent scrolling while splash is active
        document.body.style.overflow = "hidden";

        // Remove splash after 4 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = ""; // restore scrolling
        }, 4000);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#020202]"
                >
                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            initial={{ y: "150%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="text-5xl md:text-8xl font-serif font-bold tracking-tighter uppercase text-white leading-none"
                        >
                            Tomi<span className="text-primary italic">Black</span>
                        </motion.h1>
                    </div>

                    <div className="w-64 md:w-96 h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 3.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-full bg-primary"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-6 text-[10px] md:text-xs tracking-[0.3em] text-neutral-500 uppercase font-semibold"
                    >
                        Initializing Experience
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
