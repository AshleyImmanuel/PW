'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Marquee({ text, speed = 1, reverse = false }: { text: string, speed?: number, reverse?: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!textRef.current || !containerRef.current) return

        const width = textRef.current.offsetWidth
        const duration = width / (100 * speed)

        gsap.set(textRef.current, { x: reverse ? -width / 2 : 0 })

        gsap.to(textRef.current, {
            x: reverse ? 0 : -width / 2,
            duration: duration,
            ease: 'none',
            repeat: -1
        })
    }, [text, speed, reverse])

    return (
        <div ref={containerRef} className="overflow-hidden whitespace-nowrap w-full py-2 border-y border-black/10 bg-black/5">
            <div ref={textRef} className="inline-block text-8xl font-bold uppercase opacity-20" style={{ fontFamily: 'var(--font-display)' }}>
                {text} &middot; {text} &middot; {text} &middot; {text} &middot; {text} &middot; {text} &middot;
            </div>
        </div>
    )
}
