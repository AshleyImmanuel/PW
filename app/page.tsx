'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TiltedCard from '@/components/TiltedCard';
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
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat z-10 opacity-90 grayscale-[0.8] sepia-[0.2]"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMg3Pnytp2_ZJHkRj17YzQcE5mZO9OMF_KEiCZND-4WXT-LtbSDCsevT8tQ3WWo4yLu0p27oApZX5SlwQp_HmRVkn2elQ3b0NcO8UXohHkhs63Cn8eftdU7fyLiA7UDrc2LAwypE1EwEBYzYq15e5Z4ZDBOFIulnrrvD_fabJhneMqQl8oRdyQUIsydA1BfE7MVB5YaX5VQc3LMt0Btx7NuZ6SrOSQ_x4h2OAwEMkkHkiezLRlRc8pOQTwLfBX23Txpqqsc5BiJaU')",
                filter: "contrast(1.1) brightness(1.1) hue-rotate(90deg)"
              }}>
            </div>
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
            <div className="group relative flex flex-col justify-between p-10 md:p-14 border-b md:border-b-0 md:border-r border-stone-200 hover:bg-white hover:z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
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
            <div className="group relative flex flex-col justify-between p-10 md:p-14 border-b md:border-b-0 md:border-r border-stone-200 hover:bg-white hover:z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
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
            <div className="group relative flex flex-col justify-between p-10 md:p-14 hover:bg-white hover:z-10 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
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

        {/* --- PRICING SECTION --- */}
        <section className="px-6 py-24 md:px-12 lg:px-20 bg-background-light relative z-20">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col gap-4 mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight">TRANSPARENT PRICING</h2>
              <p className="text-text-muted font-medium text-lg">No hidden fees. Just results.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TiltedCard className="h-full">
                <div className="bg-white rounded-[1rem] p-10 border border-stone-200 hover:border-primary hover:shadow-[0_25px_50px_-12px_rgba(27,77,62,0.15)] h-full flex flex-col gap-8 relative overflow-hidden group">
                  <div>
                    <h3 className="text-xl font-bold text-text-main">Startup Weft</h3>
                    <p className="text-4xl font-bold text-text-main mt-4">$2,000<span className="text-lg font-normal text-stone-400">/project</span></p>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">Perfect for getting your MVP off the ground quickly with essential features.</p>
                  <hr className="border-stone-100" />
                  <ul className="flex flex-col gap-4 text-sm font-medium text-stone-600">
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-base">check</span>Basic Branding</li>
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-base">check</span>Landing Page</li>
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-base">check</span>1 Month Support</li>
                  </ul>
                  <button className="mt-auto w-full py-4 rounded-md border border-text-main text-text-main font-semibold hover:bg-text-main hover:text-white transition-colors">Get Started</button>
                </div>
              </TiltedCard>
              <div className="premium-frame bg-primary-dark text-white rounded-[1rem] flex flex-col relative transform md:-translate-y-4 z-10 transition-transform duration-300 hover:scale-[1.02]">
                <div className="eb-content p-10 flex flex-col gap-8 h-full">
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg tracking-wider z-20">POPULAR</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Growth Loom</h3>
                    <p className="text-4xl font-bold mt-4">$5,000<span className="text-lg font-normal text-stone-400">/mo</span></p>
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">Scale your operations with a dedicated full-stack team and strategic oversight.</p>
                  <hr className="border-stone-700" />
                  <ul className="flex flex-col gap-4 text-sm font-medium text-stone-300">
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-emerald-400 text-base">check</span>Full Identity System</li>
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-emerald-400 text-base">check</span>Web App Development</li>
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-emerald-400 text-base">check</span>Priority Support</li>
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-emerald-400 text-base">check</span>Monthly Strategy Calls</li>
                  </ul>
                  <button className="mt-auto w-full py-4 rounded-md bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold transition-colors shadow-lg shadow-black/20">Scale Up</button>
                </div>
              </div>
              <TiltedCard className="h-full">
                <div className="bg-white rounded-[1rem] p-10 border border-stone-200 hover:border-primary/50 hover:shadow-xl hover:shadow-stone-200/50 h-full flex flex-col gap-8 relative overflow-hidden group">
                  <div>
                    <h3 className="text-xl font-bold text-text-main">Enterprise Fabric</h3>
                    <p className="text-4xl font-bold text-text-main mt-4">Custom</p>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">Tailored solutions for large-scale organizations requiring deep integration.</p>
                  <hr className="border-stone-100" />
                  <ul className="flex flex-col gap-4 text-sm font-medium text-stone-600">
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-base">check</span>Global Strategy</li>
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-base">check</span>Dedicated Team of 5+</li>
                    <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary text-base">check</span>24/7 SLA Support</li>
                  </ul>
                  <button className="mt-auto w-full py-4 rounded-md border border-text-main text-text-main font-semibold hover:bg-text-main hover:text-white transition-colors">Contact Sales</button>
                </div>
              </TiltedCard>
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
