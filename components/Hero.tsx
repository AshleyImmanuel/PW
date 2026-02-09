'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Hero.module.css'

export default function Hero() {
    const textRef = useRef<HTMLHeadingElement>(null)
    const subTextRef = useRef<HTMLParagraphElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } })

            tl.from(textRef.current, { y: 150, opacity: 0, rotateX: 20 })
                .from(subTextRef.current, { y: 20, opacity: 0 }, '-=1.2')
                .from(btnRef.current, { y: 20, opacity: 0, scale: 0.9 }, '-=1')

            // Subtle mouse parallax
            window.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20
                const y = (e.clientY / window.innerHeight - 0.5) * 20

                gsap.to(textRef.current, { x, y, duration: 1, ease: 'power2.out' })
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section className={styles.hero}>
            <div className={`${styles.blob} ${styles.blob1}`} />

            <h1 ref={textRef} className={styles.title}>
                Pixel<br />Weft
            </h1>

            <p ref={subTextRef} className={styles.subtitle}>
                Digital Architecture &middot; Future Systems
            </p>

            <button ref={btnRef} className={styles.ctaButton}>
                Explore Works
            </button>
        </section>
    )
}
