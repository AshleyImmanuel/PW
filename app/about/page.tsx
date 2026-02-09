'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreadBackground from '@/components/ThreadBackground';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Timeline Animation
        if (timelineRef.current && lineRef.current) {
            const items = timelineRef.current.querySelectorAll('.timeline-item');

            // Animate the main line
            gsap.fromTo(lineRef.current,
                { height: '0%' },
                {
                    height: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1
                    }
                }
            );

            // Animate items
            items.forEach((item, i) => {
                gsap.fromTo(item,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        }
    }, []);

    const teamMembers = [
        {
            name: "Elena Vance",
            role: "Chief Executive Officer",
            image1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            image2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&sat=-100&contrast=1.2" // Glitch version
        },
        {
            name: "Marcus Thorne",
            role: "Technical Director",
            image1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
            image2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&sat=-100&contrast=1.2"
        },
        {
            name: "Sarah Jenkins",
            role: "Head of Design",
            image1: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
            image2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop&sat=-100&contrast=1.2"
        }
    ];

    return (
        <div className="bg-[#051A14] text-stone-200 font-display min-h-screen flex flex-col relative selection:bg-emerald-500 selection:text-white overflow-x-hidden">
            <Navbar />

            <main className="flex flex-col w-full">
                {/* --- HERO SECTION --- */}
                <section className="relative px-6 pt-32 pb-24 lg:px-20 min-h-screen flex items-center overflow-hidden">
                    <ThreadBackground theme="dark" />

                    <div className="absolute inset-0 bg-gradient-to-b from-[#051A14]/20 via-transparent to-[#051A14] pointer-events-none z-10"></div>

                    <div className="max-w-[1400px] mx-auto w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-800/50 bg-emerald-900/20 w-fit backdrop-blur-md shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 animate-pulse"></span>
                                    <span className="absolute inline-flex rounded-full h-full w-full bg-emerald-400 opacity-75 animate-ping"></span>
                                </span>
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400">Est. 2015</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white">
                                DIGITAL<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-400 bg-[length:200%_auto] animate-shine italic pr-4">WEAVERS</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-emerald-100/60 max-w-2xl leading-relaxed font-light border-l border-emerald-500/30 pl-6 mt-4">
                                PixelWeft bridges the gap between raw data and human experience. We don't just build software; we craft digital ecosystems that breathe.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- VALUES SECTION --- */}
                <section className="px-6 py-32 lg:px-20 bg-[#051A14] relative z-20 border-y border-emerald-900/30">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Precision",
                                    subtitle: "Attention to Detail",
                                    desc: "Every pixel serves a purpose. We believe in the elegance of code and the accuracy of design, leaving nothing to chance."
                                },
                                {
                                    title: "Transparency",
                                    subtitle: "Open Communication",
                                    desc: "Open communication is our loom. We build trust through clarity, keeping you informed at every step of the process."
                                },
                                {
                                    title: "Evolution",
                                    subtitle: "Growth Mindset",
                                    desc: "Our digital fabrics are designed to stretch. We build scalable solutions that grow and adapt with your ambitions."
                                }
                            ].map((item, i) => (
                                <div key={i} className="group relative p-10 rounded-[2rem] bg-[#08221B] border border-emerald-900/30 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-500 flex flex-col justify-between gap-12">
                                    <div>
                                        <h3 className="text-4xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-emerald-500 font-mono text-sm tracking-wider uppercase">{item.subtitle}</p>
                                    </div>
                                    <div>
                                        <div className="w-12 h-[1px] bg-emerald-800 mb-6 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-500"></div>
                                        <p className="text-emerald-100/60 leading-relaxed font-light group-hover:text-emerald-50 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- TIMELINE SECTION --- */}
                <section className="px-6 py-32 lg:px-20 bg-[#Fdfcfb] relative z-20 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10" ref={timelineRef}>
                        <div className="lg:col-span-5 sticky top-32 h-fit">
                            <h2 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter mb-8 leading-none">
                                OUR<br /><span className="text-emerald-500 italic">JOURNEY</span>
                            </h2>
                            <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                                From a single thread of an idea to a complex tapestry of digital innovation. Our history is a testament to continuous evolution.
                            </p>
                        </div>

                        <div className="lg:col-span-7 relative pl-12">
                            {/* Glowing connecting line */}
                            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-stone-200">
                                <div ref={lineRef} className="w-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-900 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
                            </div>

                            <div className="flex flex-col gap-24">
                                <div className="timeline-item relative">
                                    <div className="absolute -left-[49px] top-3 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)] z-10"></div>
                                    <span className="text-6xl font-bold text-stone-200 absolute -top-10 -left-6 -z-10 select-none">2015</span>
                                    <h3 className="text-3xl font-bold text-stone-900 mb-4 mt-2">The Foundation</h3>
                                    <p className="text-stone-500 text-lg leading-relaxed border-l border-stone-200 pl-6">
                                        Founded in Seattle with a vision to simplify the complex web landscape. We started with a clear mission: to weave quality into every line of code.
                                    </p>
                                </div>

                                <div className="timeline-item relative">
                                    <div className="absolute -left-[49px] top-3 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)] z-10"></div>
                                    <span className="text-6xl font-bold text-stone-200 absolute -top-10 -left-6 -z-10 select-none">2018</span>
                                    <h3 className="text-3xl font-bold text-stone-900 mb-4 mt-2">Pattern Recognition</h3>
                                    <p className="text-stone-500 text-lg leading-relaxed border-l border-stone-200 pl-6">
                                        Expanded to a team of 10 and secured our first major industry award for innovative UI design. We began defining our signature "PixelWeft aesthetic".
                                    </p>
                                </div>

                                <div className="timeline-item relative">
                                    <div className="absolute -left-[49px] top-3 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)] z-10"></div>
                                    <span className="text-6xl font-bold text-stone-200 absolute -top-10 -left-6 -z-10 select-none">2021</span>
                                    <h3 className="text-3xl font-bold text-stone-900 mb-4 mt-2">Global Threads</h3>
                                    <p className="text-stone-500 text-lg leading-relaxed border-l border-stone-200 pl-6">
                                        Crossed borders to serve international clients, establishing satellite partnerships in London and Tokyo.
                                    </p>
                                </div>

                                <div className="timeline-item relative">
                                    <div className="absolute -left-[49px] top-3 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)] z-10"></div>
                                    <span className="text-6xl font-bold text-emerald-900/10 absolute -top-10 -left-6 -z-10 select-none">2024</span>
                                    <h3 className="text-3xl font-bold text-stone-900 mb-4 mt-2">The AI Frontier</h3>
                                    <p className="text-stone-500 text-lg leading-relaxed border-l border-stone-200 pl-6">
                                        Integrating ethical AI solutions into our workflow, enhancing creativity without replacing the human touch. We are weaving the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- TEAM SECTION --- */}
                <section className="px-6 py-32 lg:px-20 bg-white border-t border-stone-100">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                            <div>
                                <h2 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter mb-4">THE <span className="text-emerald-500">WEAVERS</span></h2>
                                <p className="text-stone-500 text-xl">The minds behind the loom.</p>
                            </div>
                            <button className="px-8 py-4 rounded-full bg-stone-100 border border-stone-200 text-stone-900 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 font-medium">
                                Join the Team
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamMembers.map((member, i) => (
                                <div key={i} className="group relative cursor-pointer">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem] mb-6 bg-stone-100 shadow-md group-hover:shadow-xl transition-all duration-500">
                                        {/* Image with smooth transition */}
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${member.image1}')` }}
                                        ></div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                            <div className="w-full flex justify-between items-center border-t border-white/20 pt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="text-white text-sm font-mono uppercase tracking-wider">LinkedIn</span>
                                                <span className="material-symbols-outlined text-white">north_east</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-stone-900 group-hover:text-emerald-600 transition-colors">{member.name}</h3>
                                    <p className="text-stone-500 mt-2 font-mono text-sm tracking-wider uppercase">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default AboutPage;
