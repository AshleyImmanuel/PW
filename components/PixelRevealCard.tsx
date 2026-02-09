'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PixelRevealCardProps {
    src: string;
    className?: string;
    pixelSize?: number; // Size of each pixel in px (approximate target)
}

const PixelRevealCard = ({ src, className = '', pixelSize = 40 }: PixelRevealCardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pixelsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !pixelsRef.current) return;

        const container = containerRef.current;
        const pixelsContainer = pixelsRef.current;

        // Clear previous pixels
        pixelsContainer.innerHTML = '';

        const { width, height } = container.getBoundingClientRect();
        const cols = Math.ceil(width / pixelSize);
        const rows = Math.ceil(height / pixelSize);
        const totalPixels = cols * rows;

        // Create pixels
        const fragment = document.createDocumentFragment();
        const pixels: HTMLDivElement[] = [];

        for (let i = 0; i < totalPixels; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('absolute', 'bg-stone-200', 'z-10'); // Default cover color
            pixel.style.width = `${100 / cols}%`;
            pixel.style.height = `${100 / rows}%`;
            pixel.style.left = `${(i % cols) * (100 / cols)}%`;
            pixel.style.top = `${Math.floor(i / cols) * (100 / rows)}%`;

            // Optional: Adding slight borders or gaps can enhance the "pixel" look
            // pixel.style.border = '1px solid rgba(0,0,0,0.05)'; 

            fragment.appendChild(pixel);
            pixels.push(pixel);
        }

        pixelsContainer.appendChild(fragment);

        // Animation
        gsap.fromTo(pixels,
            { opacity: 1 },
            {
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
                stagger: {
                    amount: 1,
                    from: "random",
                    grid: [rows, cols]
                },
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%", // Start revealing when top of card hits 80% viewport height
                    toggleActions: "play none none none" // Play once
                }
            }
        );

        // Reveal image underneath simultaneously slightly
        const img = container.querySelector('img');
        if (img) {
            gsap.fromTo(img,
                { scale: 1.1, filter: 'grayscale(100%)' },
                {
                    scale: 1,
                    filter: 'grayscale(0%)',
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                    }
                }
            );
        }

    }, [src, pixelSize]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {/* Target Image */}
            <img src={src} alt="Reveal Content" className="w-full h-full object-cover relative z-0" />

            {/* Pixel Overlay Layer */}
            <div ref={pixelsRef} className="absolute inset-0 z-10 w-full h-full pointer-events-none"></div>
        </div>
    );
};

export default PixelRevealCard;
