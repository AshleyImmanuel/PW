'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface FloatingImageProps {
    src: string
    alt: string
    className?: string
    speed?: number
    depth?: number
}

export default function FloatingImage({ src, alt, className = '', speed = 1, depth = 1 }: FloatingImageProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Float animation (randomized sine wave)
            gsap.to(containerRef.current, {
                y: '+=20',
                duration: 2 + Math.random(),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })

            // Mouse Parallax
            const handleMouseMove = (e: MouseEvent) => {
                const { innerWidth, innerHeight } = window
                const x = (e.clientX / innerWidth - 0.5) * 50 * speed
                const y = (e.clientY / innerHeight - 0.5) * 50 * speed

                gsap.to(containerRef.current, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: 'power2.out'
                })

                // Tilt effect on image
                gsap.to(imgRef.current, {
                    rotateY: x * 0.5 * depth,
                    rotateX: -y * 0.5 * depth,
                    duration: 1,
                    ease: 'power2.out'
                })
            }

            window.addEventListener('mousemove', handleMouseMove)
            return () => window.removeEventListener('mousemove', handleMouseMove)
        }, containerRef)

        return () => ctx.revert()
    }, [speed, depth])

    return (
        <div ref={containerRef} className={`absolute pointer-events-none ${className}`}>
            <div className="relative overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20">
                {/* Wrapper for 3D tilt context */}
                <div style={{ perspective: '1000px' }}>
                    <img
                        ref={imgRef}
                        src={src}
                        alt={alt}
                        className="object-cover w-full h-full transform-gpu"
                    />
                </div>
                {/* Reflection/Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
            </div>
        </div>
    )
}
