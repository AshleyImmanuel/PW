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

const PixelRevealCard = ({ src, children, className = '', pixelSize = 40 }: { src?: string, children?: React.ReactNode, className?: string, pixelSize?: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pixelsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !pixelsRef.current) return;

        const container = containerRef.current;
        const pixelsContainer = pixelsRef.current;

        // Clear previous pixels
        pixelsContainer.innerHTML = '';

        const { width, height } = container.getBoundingClientRect();
        if (width === 0 || height === 0) return; // Guard against 0 dimensions

        const cols = Math.ceil(width / pixelSize);
        const rows = Math.ceil(height / pixelSize);
        const totalPixels = cols * rows;

        // Create pixels
        const fragment = document.createDocumentFragment();
        const pixels: HTMLDivElement[] = [];

        for (let i = 0; i < totalPixels; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('absolute', 'bg-stone-200', 'z-20'); // Increased z-index
            pixel.style.width = `${100 / cols}%`;
            pixel.style.height = `${100 / rows}%`;
            pixel.style.left = `${(i % cols) * (100 / cols)}%`;
            pixel.style.top = `${Math.floor(i / cols) * (100 / rows)}%`;

            fragment.appendChild(pixel);
            pixels.push(pixel);
        }

        pixelsContainer.appendChild(fragment);

        // Animation
        gsap.fromTo(pixels,
            { opacity: 1 },
            {
                opacity: 0,
                duration: 1.0,
                ease: "power2.inOut",
                stagger: {
                    amount: 0.5,
                    from: "random",
                    grid: [rows, cols]
                },
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Animate content scale/filter if it's an image or generally
        const content = container.querySelector('.reveal-content');
        if (content) {
            gsap.fromTo(content,
                { filter: 'grayscale(100%)', scale: 0.98 },
                {
                    filter: 'grayscale(0%)',
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                    }
                }
            );
        }

    }, [src, children, pixelSize]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {/* Content Layer */}
            <div className="reveal-content w-full h-full relative z-0">
                {children ? children : (
                    src && <img src={src} alt="Reveal Content" className="w-full h-full object-cover" />
                )}
            </div>

            {/* Pixel Overlay Layer */}
            <div ref={pixelsRef} className="absolute inset-0 z-20 w-full h-full pointer-events-none"></div>
        </div>
    );
};

export default PixelRevealCard;
