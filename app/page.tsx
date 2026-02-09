'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/TiltedCard';
import IntroAnimation from '@/components/IntroAnimation';
import PixelRevealCard from '@/components/PixelRevealCard';
import SpotlightCard from '@/components/SpotlightCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const serviceRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    // Scroll Trigger for Services
    if (serviceRef.current) {
      const cards = serviceRef.current.children;
      Array.from(cards).forEach((card, index) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card as Element,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      });
    }
  }, []);

  return (
    <div className="bg-background-light text-text-main font-display min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary selection:text-white">

      <IntroAnimation />

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grainy z-10 opacity-60 mix-blend-multiply"></div>
        <div className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] orb-gradient z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-gradient-to-tr from-[#E6E2D8] via-[#F0EEE6] to-transparent rounded-full blur-3xl z-0 opacity-50"></div>
      </div>

      {/* --- NAVBAR --- */}
      <Navbar />

      <main className="relative z-10 flex flex-col pt-16 w-full min-h-screen bg-[#Fdfcfb]">

        {/* --- HERO SECTION --- */}
        <section className="relative px-6 md:px-12 lg:px-20 pb-20 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full max-w-[1600px] mx-auto" ref={heroRef}>
          <div className="lg:col-span-7 flex flex-col gap-8 relative z-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-white w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-text-muted">Weaving the future</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-text-main">
              DIGITAL<br />
              <span className="text-primary italic">REALITIES</span><br />
              WOVEN.
            </h1>
            <p className="text-lg md:text-xl font-normal text-text-muted max-w-xl leading-relaxed">
              PixelWeft is a new-age digital agency. We fuse structural code architecture with organic design to create sophisticated software experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-pixel group relative flex items-center gap-3 overflow-hidden rounded-full bg-primary-dark px-8 py-4 text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/20">
                <span className="font-medium tracking-wide">Start a Project</span>
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
              <button className="btn-pixel btn-pixel-dark flex items-center gap-3 rounded-full border border-stone-300 bg-transparent px-8 py-4 font-medium text-text-main transition-all hover:border-primary hover:text-primary">
                <span className="material-symbols-outlined">play_circle</span>
                Showreel
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] flex items-center justify-center animate-float-slow">
            <PixelRevealCard
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMg3Pnytp2_ZJHkRj17YzQcE5mZO9OMF_KEiCZND-4WXT-LtbSDCsevT8tQ3WWo4yLu0p27oApZX5SlwQp_HmRVkn2elQ3b0NcO8UXohHkhs63Cn8eftdU7fyLiA7UDrc2LAwypE1EwEBYzYq15e5Z4ZDBOFIulnrrvD_fabJhneMqQl8oRdyQUIsydA1BfE7MVB5YaX5VQc3LMt0Btx7NuZ6SrOSQ_x4h2OAwEMkkHkiezLRlRc8pOQTwLfBX23Txpqqsc5BiJaU"
              className="w-full h-full rounded-[2rem] z-10 opacity-90 sepia-[0.2] shadow-2xl"
              pixelSize={40}
            />
            <div className="absolute top-12 right-12 w-4/5 h-4/5 border-2 border-primary/10 rounded-[2rem] -z-10 bg-stone-50"></div>
          </div>
        </section>

        {/* --- MARQUEE --- */}
        <div className="w-full border-y border-stone-200 bg-surface text-primary-dark py-6 overflow-hidden relative z-20">
          <div className="marquee-container max-w-[1600px] mx-auto">
            <div className="marquee-content text-xl font-medium tracking-widest uppercase flex gap-16 opacity-80 min-w-full">
              {/* Duplicating content for seamless marquee loop */}
              {[...Array(20)].map((_, i) => (
                <React.Fragment key={i}>
                  <span>Strategy</span> <span className="text-stone-400">•</span>
                  <span>Development</span> <span className="text-stone-400">•</span>
                  <span>Design</span> <span className="text-stone-400">•</span>
                  <span>Branding</span> <span className="text-stone-400">•</span>
                  <span>Marketing</span> <span className="text-stone-400">•</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* --- SERVICES --- */}
        <section className="w-full bg-white relative z-20 border-b border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1600px] mx-auto" ref={serviceRef}>
            <PixelRevealCard className="h-full rounded-[1rem]" pixelSize={60}>
              <div className="group relative flex flex-col justify-between p-10 md:p-14 border-b md:border-b-0 md:border-r border-stone-200 hover:bg-white hover:z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 h-full bg-white">
                <div className="flex flex-col gap-8">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <span className="material-symbols-outlined text-2xl">design_services</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-text-main">UI/UX Design</h3>
                  <p className="text-text-muted font-normal leading-relaxed text-base">
                    We craft intuitive interfaces that not only look stunning but feel seamless. User-centric design woven with modern aesthetics.
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-medium text-xs uppercase tracking-widest text-stone-400">01</span>
                  <button className="w-8 h-8 flex items-center justify-center text-stone-400 group-hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-xl">arrow_outward</span>
                  </button>
                </div>
              </div>
            </PixelRevealCard>
            <PixelRevealCard className="h-full rounded-[1rem]" pixelSize={60}>
              <div className="group relative flex flex-col justify-between p-10 md:p-14 border-b md:border-b-0 md:border-r border-stone-200 hover:bg-white hover:z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 h-full bg-white">
                <div className="flex flex-col gap-8">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <span className="material-symbols-outlined text-2xl">code_blocks</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-text-main">Development</h3>
                  <p className="text-text-muted font-normal leading-relaxed text-base">
                    Robust full-stack solutions. From React to Python, we build scalable architectures that power the next generation of web apps.
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-medium text-xs uppercase tracking-widest text-stone-400">02</span>
                  <button className="w-8 h-8 flex items-center justify-center text-stone-400 group-hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-xl">arrow_outward</span>
                  </button>
                </div>
              </div>
            </PixelRevealCard>
            <PixelRevealCard className="h-full rounded-[1rem]" pixelSize={60}>
              <div className="group relative flex flex-col justify-between p-10 md:p-14 hover:bg-white hover:z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 h-full bg-white">
                <div className="flex flex-col gap-8">
                  <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-text-main">Growth Strategy</h3>
                  <p className="text-text-muted font-normal leading-relaxed text-base">
                    Data-driven marketing and brand positioning. We help you find your voice and amplify it across the digital landscape.
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-medium text-xs uppercase tracking-widest text-stone-400">03</span>
                  <button className="w-8 h-8 flex items-center justify-center text-stone-400 group-hover:text-primary transition-all">
                    <span className="material-symbols-outlined text-xl">arrow_outward</span>
                  </button>
                </div>
              </div>
            </PixelRevealCard>
          </div>
        </section>

        {/* --- SELECTED WORKS --- */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#F5F5F0] relative z-20 border-b border-stone-200">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">SELECTED WORKS</h2>
                <div className="h-1 w-20 bg-primary"></div>
              </div>
              <button className="text-text-main font-medium border-b border-text-main pb-1 hover:text-primary hover:border-primary transition-colors">
                View All Projects
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* Project 1 */}
              <div className="flex flex-col gap-6 group cursor-pointer">
                <PixelRevealCard className="aspect-[4/3] rounded-[1.5rem]" pixelSize={50}
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop">
                </PixelRevealCard>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">Neon Horizon</h3>
                    <p className="text-text-muted mt-2">Immersive VR Experience</p>
                  </div>
                  <span className="text-xs font-bold border border-stone-300 px-3 py-1 rounded-full text-stone-500">2024</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col gap-6 group cursor-pointer md:mt-24">
                <PixelRevealCard className="aspect-[4/3] rounded-[1.5rem]" pixelSize={50}
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop">
                </PixelRevealCard>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">Quantum Core</h3>
                    <p className="text-text-muted mt-2">Fintech Dashboard Interface</p>
                  </div>
                  <span className="text-xs font-bold border border-stone-300 px-3 py-1 rounded-full text-stone-500">2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- VELOCITY SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 w-full bg-[#1C1C1C] text-[#F9F8F4] relative z-20">
          <div className="p-12 lg:p-20 flex flex-col justify-center gap-10 border-r border-stone-800">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              BUILT FOR<br />
              <span className="text-primary italic">VELOCITY.</span>
            </h2>
            <p className="text-stone-400 text-lg max-w-md leading-relaxed">
              We don't just write code; we engineer speed. Our stack is optimized for performance, ensuring your users never wait.
            </p>
            <ul className="flex flex-col gap-6 mt-4">
              <li className="flex items-center gap-4 text-lg font-medium text-stone-300">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Next.js Architecture
              </li>
              <li className="flex items-center gap-4 text-lg font-medium text-stone-300">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Edge Computing Ready
              </li>
              <li className="flex items-center gap-4 text-lg font-medium text-stone-300">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Global CDN Distribution
              </li>
            </ul>
          </div>
          <div className="relative min-h-[400px] overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 grayscale"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARVlFRAbR-KfscHM_574rI9c9lNhoNoOj9D9siN78KvVv29LrR2YQJgcfzAoMPjouqBK69F9Ac65btvKAVF7DDK35qqb9iRogDuT0RX9kFEjn1wkswPoY3IgfGmTesj3OGEDPWx6fQ9K82jxGgZ3_QFtfq_pM5kYXdaL5BnoH-hYgM30wKseW1oPg2ZV24xLMD8bnjWtvbyHrJtnW7B916gnCnrnDrjnns5eCgvod8bDEPu6BljxQSfynlOV5Y9RqFictSkmKgp_Q')" }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-lg max-w-xs">
                <p className="text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">// METRIC</p>
                <p className="text-5xl font-bold text-white">99.9%</p>
                <p className="text-stone-400 text-sm mt-2">Uptime Guarantee on all deployments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- THE ALGORITHM (PROCESS) --- */}
        <section className="py-32 px-6 md:px-12 lg:px-20 bg-white relative z-20 border-t border-stone-200">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 sticky top-32 h-fit">
              <h2 className="text-6xl font-bold text-text-main leading-none mb-8">
                THE<br /><span className="text-primary italic">ALGORITHM.</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed max-w-sm">
                Our development process is a meticulous loop of discovery, architecture, and refinement.
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-16 relative pl-12 border-l-2 border-stone-200">
              {/* Step 1 */}
              <div className="relative group">
                <span className="absolute -left-[calc(3rem+5px)] top-2 h-3 w-3 rounded-full bg-stone-300 group-hover:bg-primary transition-colors duration-500 ring-4 ring-white"></span>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">STEP 01</span>
                  <h3 className="text-2xl font-bold text-text-main">Discovery & Blueprint</h3>
                </div>
                <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
                  We decode your vision. Through intensive workshops, we map out the DNA of your project, defining user personas, technical requirements, and aesthetic direction.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-surface rounded-full text-sm font-medium text-stone-600">User Research</div>
                  <div className="px-4 py-2 bg-surface rounded-full text-sm font-medium text-stone-600">Tech Stack Selection</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <span className="absolute -left-[calc(3rem+5px)] top-2 h-3 w-3 rounded-full bg-stone-300 group-hover:bg-primary transition-colors duration-500 ring-4 ring-white"></span>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">STEP 02</span>
                  <h3 className="text-2xl font-bold text-text-main">Architectural Weave</h3>
                </div>
                <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
                  Code meets canvas. Our developers build the skeletal structure while designers craft the skin. We use component-driven development for modular, scalable systems.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <span className="absolute -left-[calc(3rem+5px)] top-2 h-3 w-3 rounded-full bg-stone-300 group-hover:bg-primary transition-colors duration-500 ring-4 ring-white"></span>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">STEP 03</span>
                  <h3 className="text-2xl font-bold text-text-main">Optimization & Launch</h3>
                </div>
                <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
                  Performance is paramount. We refine animations, optimize assets, and ensure pixel-perfect rendering across all devices before the final deploy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="px-6 py-32 bg-background-light relative z-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-6 mb-24 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-text-main tracking-tight">
                Invest in <span className="text-primary italic">Excellence</span>
              </h2>
              <p className="text-text-muted font-light text-xl max-w-2xl mx-auto">
                Transparent pricing for every stage of your digital evolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Card 1 */}
              <div className="h-full">
                <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-stone-200 hover:border-text-muted/30 transition-all duration-300 h-full flex flex-col min-h-[600px] group hover:shadow-xl hover:shadow-stone-200/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-stone-200 group-hover:bg-text-main transition-colors duration-500"></div>
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="p-3 rounded-xl bg-stone-100 text-text-main group-hover:bg-text-main group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined">rocket_launch</span>
                      </span>
                      <h3 className="text-xl font-bold text-text-main">Startup Weft</h3>
                    </div>
                    <p className="text-5xl font-bold text-text-main tracking-tight">$2,500</p>
                    <p className="text-text-muted mt-4 font-medium">Perfect for validation and MVP launches.</p>
                  </div>

                  <div className="flex-grow flex flex-col gap-5 mb-10">
                    <div className="flex items-start gap-4 text-text-muted">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-sm font-medium">Single Page Application</span>
                    </div>
                    <div className="flex items-start gap-4 text-text-muted">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-sm font-medium">Basic Analytics Setup</span>
                    </div>
                    <div className="flex items-start gap-4 text-text-muted">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-sm font-medium">CMS Integration</span>
                    </div>
                    <div className="flex items-start gap-4 text-text-muted">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-sm font-medium">1 Month Post-Launch Support</span>
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-xl border-2 border-text-main text-text-main font-bold hover:bg-text-main hover:text-white transition-all duration-300 tracking-wide">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Card 2 - Featured */}
              <div className="h-full transform md:-translate-y-6 relative z-10">
                <div className="bg-[#0F1F1A] rounded-[2rem] p-1 border border-emerald-500/30 h-full min-h-[650px] shadow-[0_20px_60px_-15px_rgba(16,185,129,0.2)]">
                  <div className="bg-[#111111] rounded-[1.8rem] h-full p-8 lg:p-10 flex flex-col relative overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-0 right-0">
                      <div className="bg-emerald-500 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl tracking-widest uppercase shadow-lg shadow-emerald-500/20">
                        Most Popular
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50%] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="mb-10 relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="material-symbols-outlined">auto_graph</span>
                        </span>
                        <h3 className="text-xl font-bold text-white">Growth Loom</h3>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-5xl font-bold text-white tracking-tight">$5,000</p>
                        <span className="text-stone-500 font-medium">/mo</span>
                      </div>
                      <p className="text-stone-400 mt-4 font-medium">Full-stack scaling for growing teams.</p>
                    </div>

                    <div className="flex-grow flex flex-col gap-5 mb-10 relative z-10">
                      <div className="flex items-start gap-4 text-stone-300">
                        <span className="material-symbols-outlined text-emerald-500 shrink-0">verified</span>
                        <span className="text-sm font-medium">Full Identity System & Strategy</span>
                      </div>
                      <div className="flex items-start gap-4 text-stone-300">
                        <span className="material-symbols-outlined text-emerald-500 shrink-0">verified</span>
                        <span className="text-sm font-medium">Complex Web App Development</span>
                      </div>
                      <div className="flex items-start gap-4 text-stone-300">
                        <span className="material-symbols-outlined text-emerald-500 shrink-0">verified</span>
                        <span className="text-sm font-medium">Advanced Animations & Interactions</span>
                      </div>
                      <div className="flex items-start gap-4 text-stone-300">
                        <span className="material-symbols-outlined text-emerald-500 shrink-0">verified</span>
                        <span className="text-sm font-medium">Priority Support & Monthly Calls</span>
                      </div>
                    </div>

                    <button className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all duration-300 tracking-wide shadow-lg shadow-emerald-900/40 relative z-10">
                      Scale Up Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="h-full">
                <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-stone-200 hover:border-text-muted/30 transition-all duration-300 h-full flex flex-col min-h-[600px] group hover:shadow-xl hover:shadow-stone-200/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-stone-200 group-hover:bg-text-main transition-colors duration-500"></div>
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="p-3 rounded-xl bg-stone-100 text-text-main group-hover:bg-text-main group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined">domain</span>
                      </span>
                      <h3 className="text-xl font-bold text-text-main">Enterprise Fabric</h3>
                    </div>
                    <p className="text-5xl font-bold text-text-main tracking-tight">Custom</p>
                    <p className="text-text-muted mt-4 font-medium">Tailored infrastructure for large organizations.</p>
                  </div>

                  <div className="flex-grow flex flex-col gap-5 mb-10">
                    <div className="flex items-start gap-4 text-text-muted">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-sm font-medium">Dedicated Development Team (5+)</span>
                    </div>
                    <div className="flex items-start gap-4 text-text-muted">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-sm font-medium">Global CDN & Custom Infrastructure</span>
                    </div>
                    <div className="flex items-start gap-4 text-text-muted">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-sm font-medium">24/7 SLA Support</span>
                    </div>
                    <div className="flex items-start gap-4 text-text-muted">
                      <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                      <span className="text-sm font-medium">White-label Options</span>
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-xl border-2 border-text-main text-text-main font-bold hover:bg-text-main hover:text-white transition-all duration-300 tracking-wide">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="relative py-32 px-6 flex items-center justify-center bg-[#F9F8F4] overflow-hidden z-20 border-t border-stone-200">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#1B4D3E_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col gap-10 items-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-text-main">
              READY TO WEAVE<br />
              YOUR <span className="italic text-primary">LEGACY?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
              Join the forward-thinking brands that are reshaping the digital landscape with PixelWeft.
            </p>
            <button className="btn-pixel group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary-dark px-12 font-medium text-white transition-all hover:bg-primary hover:w-72 w-64 shadow-lg shadow-stone-300">
              <span className="mr-2 text-lg font-semibold">Get Started</span>
              <span className="material-symbols-outlined transition-all group-hover:translate-x-2">arrow_right_alt</span>
            </button>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
