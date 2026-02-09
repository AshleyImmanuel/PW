'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Showcase.module.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    { id: '01', title: 'Cyber Loom', meta: 'Interactive WebGL Experience' },
    { id: '02', title: 'Neon Weave', meta: 'Algorithm Visualization' },
    { id: '03', title: 'Void State', meta: 'Immersive Sound Scape' },
    { id: '04', title: 'Thread 0x', meta: 'Blockchain Visualization' },
]

export default function Showcase() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLHeadingElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header parallax
            gsap.to(headerRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: 100
            })

            // Cards staggered appearance
            cardsRef.current.forEach((card, i) => {
                if (!card) return;

                gsap.fromTo(card,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className={styles.showcaseSection}>
            <div className={styles.bgText}>PROJECTS</div>

            <h2 ref={headerRef} className={styles.header}>
                Selected<br />Works
            </h2>

            <div className={styles.projectGrid}>
                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        ref={el => { if (el) cardsRef.current[i] = el }}
                        className={styles.projectCard}
                    >
                        {/* Placeholder Visuals using CSS Gradients */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                            style={{
                                backgroundImage: `linear-gradient(45deg, #111, #222)`,
                                // Simulation of an image
                            }}
                        />
                        {/* Adding some "glitch" or "scanline" overlay via CSS if desired, simplified here */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className={styles.cardContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectMeta}>{project.meta}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
