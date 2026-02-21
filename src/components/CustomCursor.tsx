"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveringVideo, setIsHoveringVideo] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("[data-cursor='video']")) {
                setIsHoveringVideo(true);
            } else {
                setIsHoveringVideo(false);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    if (typeof window === "undefined") return null;

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex items-center justify-center rounded-full bg-primary"
            style={{
                x: cursorX,
                y: cursorY,
                width: 32,
                height: 32,
            }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isHoveringVideo ? 2.5 : 1,
                backgroundColor: isHoveringVideo ? "rgba(255, 255, 255, 0.9)" : "rgba(212, 175, 55, 0.8)",
            }}
            transition={{ duration: 0.2 }}
        >
            {isHoveringVideo && (
                <span className="text-[10px] text-black font-semibold tracking-wider mix-blend-normal">PLAY</span>
            )}
        </motion.div>
    );
}
