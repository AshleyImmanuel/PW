'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const IntroAnimation = () => {
    // 0: weaving, 1: reveal text, 2: complete/exit
    const [phase, setPhase] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Safety: If refs aren't ready, don't lock scroll (shouldn't happen in standard react flow but good practice)
        if (!containerRef.current || !textRef.current) return;

        // Lock scroll
        document.body.style.overflow = 'hidden';

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Resize handler
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            if (canvas) {
                canvas.width = width;
                canvas.height = height;
            }
        };
        window.addEventListener('resize', resize);
        resize();

        // --- LOOM ANIMATION SETUP ---
        // Vertical threads (The Warp) - Static or slow moving
        const warps: { x: number, opacity: number, speed: number }[] = [];
        const warpCount = Math.floor(width / 20);

        for (let i = 0; i < warpCount; i++) {
            warps.push({
                x: i * 20 + (Math.random() * 10),
                opacity: 0,
                speed: 0.5 + Math.random()
            });
        }

        // Horizontal threads (The Weft) - Fast shooting
        const wefts: { y: number, length: number, speed: number, color: string, x: number }[] = [];

        const spawnWeft = () => {
            const y = Math.random() * height;
            const isEmerald = Math.random() > 0.3; // Mostly green
            wefts.push({
                y,
                length: 0,
                speed: 25 + Math.random() * 20,
                color: isEmerald ? '#10B981' : '#E5E7EB', // Emerald or Stone-200
                x: -100 // Start off screen
            });
        };

        const timeline = { progress: 0 }; // GSAP will animate this

        const render = () => {
            if (!ctx || !canvas) return;

            // Clear with slight trail
            ctx.fillStyle = 'rgba(5, 5, 5, 0.2)';
            ctx.fillRect(0, 0, width, height);

            // 1. Draw Warp (Verticals) - Fade in based on timeline.progress
            if (timeline.progress > 0.1) {
                ctx.lineWidth = 1;
                warps.forEach(warp => {
                    // Update opacity based on progress and random flicker
                    let targetOpacity = (timeline.progress - 0.1) * 2; // Ramp up
                    if (targetOpacity > 0.2) targetOpacity = 0.2; // Max opacity

                    const flicker = Math.random() * 0.1;
                    ctx.strokeStyle = `rgba(16, 185, 129, ${Math.max(0, targetOpacity - flicker)})`;

                    ctx.beginPath();
                    ctx.moveTo(warp.x, 0);
                    ctx.lineTo(warp.x, height);
                    ctx.stroke();
                });
            }

            // 2. Draw Weft (Horizontals) - Shoot across
            if (timeline.progress < 0.8) {
                if (Math.random() < 0.3 * (timeline.progress + 0.1)) spawnWeft(); // Spawn rate increases
            }

            for (let i = wefts.length - 1; i >= 0; i--) {
                const w = wefts[i];
                w.x += w.speed;
                w.length = w.speed * 8; // Tail length

                ctx.strokeStyle = w.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(w.x - w.length, w.y);
                ctx.lineTo(w.x, w.y);
                ctx.stroke();

                // Remove checks
                if (w.x - w.length > width) {
                    wefts.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // --- GSAP SEQUENCE ---
        const tl = gsap.timeline({
            onComplete: () => {
                setPhase(2); // Complete
                // Wait for exit animation to finish before unmounting?
                // Actually we handle exit IN the timeline
                setTimeout(() => {
                    setPhase(3); // Unmount
                    document.body.style.overflow = '';
                }, 1000);
            }
        });

        // 0s - 2s: Build up the loom
        tl.to(timeline, {
            progress: 1,
            duration: 2.5,
            ease: "power2.inOut"
        });

        // 1.0s: Reveal Text (Overlapping with loom build)
        tl.to(textRef.current, {
            opacity: 1,
            duration: 0.1
        }, 1.0)
            .fromTo(".intro-char",
                {
                    y: 20,
                    opacity: 0,
                    filter: "blur(10px)",
                    scale: 1.5
                },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "back.out(1.7)"
                },
                1.0
            );

        // 2.5s: Expand/Exit
        tl.to(".intro-bg", {
            height: 0, // Split vertically? Or fade?
            // Let's do a shutter effect or swipe up
            top: "-100%",
            duration: 1.2,
            ease: "expo.inOut"
        }, 3.0);

        // Also fade out canvas
        tl.to(canvas, {
            opacity: 0,
            duration: 0.5
        }, 2.8);


        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
            tl.kill();
            document.body.style.overflow = '';
        };
    }, []);

    if (phase === 3) return null;

    // Helper to split text
    const word1 = "PIXEL";
    const word2 = "WEFT";

    return (
        <div ref={containerRef} className="intro-bg fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen opacity-60" />

            <div ref={textRef} className="relative z-20 flex flex-col items-center gap-2 opacity-0">
                <div className="flex gap-4 md:gap-8 overflow-hidden pointer-events-none select-none">
                    <div className="flex">
                        {word1.split('').map((char, i) => (
                            <span key={i} className="intro-char inline-block text-6xl md:text-9xl font-bold text-stone-100 font-display tracking-tighter">
                                {char}
                            </span>
                        ))}
                    </div>
                    <div className="flex">
                        {word2.split('').map((char, i) => (
                            <span key={`w2-${i}`} className="intro-char inline-block text-6xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 to-emerald-700 italic font-display tracking-tighter">
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="intro-char w-full h-[1px] bg-stone-700 mt-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-emerald-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </div>
    );
};

export default IntroAnimation;
