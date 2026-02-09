'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const IntroAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setComplete(true);
                    // Unlock body scroll if needed, though we might not lock it to keep it simple
                    document.body.style.overflow = 'auto';
                }
            });

            // Prevent scrolling during intro
            document.body.style.overflow = 'hidden';

            // Initial State
            gsap.set(containerRef.current, { zIndex: 9999 });

            // Animate Text
            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.5
            })
                .to(textRef.current, {
                    scale: 1.1,
                    duration: 2,
                    ease: "power1.inOut"
                }, "<")
                .to(".intro-pixel", {
                    opacity: 0,
                    scale: 0,
                    duration: 0.8,
                    stagger: {
                        amount: 1,
                        from: "random",
                        grid: [10, 10]
                    },
                    ease: "power2.in"
                }, "-=1.0")
                .to(containerRef.current, {
                    yPercent: -100,
                    duration: 1,
                    ease: "power4.inOut"
                });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (complete) return null;

    // Generate grid for pixel efffect
    const pixels = Array.from({ length: 100 }).map((_, i) => (
        <div
            key={i}
            className="intro-pixel w-full h-full bg-stone-300 opacity-20"
        />
    ));

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a] text-white"
        >
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none">
                {pixels}
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
                <h1
                    ref={textRef}
                    className="text-6xl md:text-8xl font-bold tracking-tighter opacity-0 translate-y-10"
                >
                    Pixel<span className="text-emerald-500 italic">Weft</span>
                </h1>
                <div className="h-1 w-0 bg-emerald-500 animate-expand"></div>
            </div>
        </div>
    );
};

export default IntroAnimation;
