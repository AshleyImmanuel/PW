'use client';

import React, { useEffect, useRef } from 'react';

interface ThreadBackgroundProps {
    theme?: 'light' | 'dark';
}

const ThreadBackground: React.FC<ThreadBackgroundProps> = ({ theme = 'light' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Threads configuration
        const threads: {
            y: number;
            amplitude: number;
            frequency: number;
            speed: number;
            offset: number;
            color: string;
            thickness: number;
        }[] = [];

        const darkColors = ['#10B981', '#059669', '#047857', '#34D399', '#6EE7B7'];
        const lightColors = ['#059669', '#047857', '#064E3B', '#10B981', '#34D399']; // Darker greens for contrast on light bg

        const colors = theme === 'dark' ? darkColors : lightColors;
        const threadCount = 40;

        for (let i = 0; i < threadCount; i++) {
            threads.push({
                y: Math.random() * height,
                amplitude: 20 + Math.random() * 50,
                frequency: 0.002 + Math.random() * 0.005,
                speed: 0.02 + Math.random() * 0.05,
                offset: Math.random() * Math.PI * 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                thickness: 0.5 + Math.random() * 1.5
            });
        }

        let time = 0;
        let mouseX = 0;
        let mouseY = 0;
        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw faint grid background
            ctx.strokeStyle = theme === 'dark' ? '#222' : '#E5E5E5';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            for (let x = 0; x < width; x += 40) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for (let y = 0; y < height; y += 40) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            time += 0.5;

            threads.forEach((thread) => {
                ctx.beginPath();
                ctx.strokeStyle = thread.color;
                ctx.lineWidth = thread.thickness;
                ctx.globalAlpha = theme === 'dark' ? 0.4 : 0.15; // Lower opacity for light theme to be subtle

                for (let x = 0; x < width; x += 10) {
                    let y = thread.y + Math.sin(x * thread.frequency + time * thread.speed + thread.offset) * thread.amplitude;

                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const interactionRadius = 200;

                    if (dist < interactionRadius) {
                        const force = (interactionRadius - dist) / interactionRadius;
                        if (y > mouseY) {
                            y += force * 50;
                        } else {
                            y -= force * 50;
                        }
                    }

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    // Use mix-blend-mode wisely: screen for dark, multiply for light? 
    // actually standard alpha blending is safer for canvas context here.
    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
        />
    );
};

export default ThreadBackground;
