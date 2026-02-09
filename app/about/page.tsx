import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'About Us | PixelWeft',
    description: 'Weaving digital threads into tangible results. Meet the team behind PixelWeft.',
};

const AboutPage = () => {
    return (
        <div className="bg-background-light text-text-main font-display min-h-screen flex flex-col relative selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex flex-col w-full pt-20">
                {/* Hero Section */}
                <section className="relative px-6 py-24 md:py-32 lg:px-40 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[960px] mx-auto">
                        <div className="flex flex-col gap-6">
                            <div className="w-12 h-1 bg-primary mb-4"></div>
                            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-text-main dark:text-white leading-[1.1]">
                                Weaving digital threads into <span className="font-bold text-primary">tangible results</span>.
                            </h1>
                            <p className="text-xl md:text-2xl text-text-muted dark:text-gray-400 max-w-2xl font-light leading-relaxed mt-4">
                                PixelWeft is a strategy-first digital agency dedicated to crafting premium web experiences that bridge the gap between human connection and technical precision.
                            </p>
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent dark:from-white/5 opacity-50 -z-10 hidden lg:block"></div>
                </section>

                {/* Values Section */}
                <section className="px-6 py-20 lg:px-40 border-y border-stone-200 dark:border-white/10 bg-white dark:bg-surface-dark">
                    <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">precision_manufacturing</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white">Precision</h3>
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed">Every pixel serves a purpose. We believe in the elegance of code and the accuracy of design, leaving no detail to chance.</p>
                        </div>
                        <div className="flex flex-col gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">visibility</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white">Transparency</h3>
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed">Open communication is our loom. We build trust through clarity, keeping you informed at every step of the weave.</p>
                        </div>
                        <div className="flex flex-col gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined">trending_up</span>
                            </div>
                            <h3 className="text-xl font-bold text-text-main dark:text-white">Growth</h3>
                            <p className="text-text-muted dark:text-gray-400 leading-relaxed">Our digital fabrics are designed to stretch. We build scalable solutions that grow alongside your ambitions.</p>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="px-6 py-24 lg:px-40 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[960px] mx-auto">
                        <div className="flex flex-col md:flex-row gap-16">
                            <div className="md:w-1/3">
                                <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6">Our Journey</h2>
                                <p className="text-text-muted dark:text-gray-400">From a small studio in Seattle to a global digital partner, our history is built on constant evolution.</p>
                            </div>
                            <div className="md:w-2/3 relative pl-2 border-l-2 border-stone-200">
                                <div className="relative flex gap-8 pb-12 group -ml-[21px]">
                                    <div className="z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-background-dark border-2 border-video flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 border-primary">
                                        <span className="material-symbols-outlined text-[20px]">flag</span>
                                    </div>
                                    <div className="pt-1">
                                        <span className="text-sm font-bold tracking-widest text-primary uppercase mb-1 block">2015</span>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">The Foundation</h3>
                                        <p className="text-text-muted dark:text-gray-400">Founded in Seattle with a single laptop and a vision to simplify the complex web landscape.</p>
                                    </div>
                                </div>
                                <div className="relative flex gap-8 pb-12 group -ml-[21px]">
                                    <div className="z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-background-dark border-2 border-video flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 border-primary">
                                        <span className="material-symbols-outlined text-[20px]">trophy</span>
                                    </div>
                                    <div className="pt-1">
                                        <span className="text-sm font-bold tracking-widest text-primary uppercase mb-1 block">2018</span>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Expansion & Recognition</h3>
                                        <p className="text-text-muted dark:text-gray-400">Expanded to a team of 10 and secured our first major industry award for innovative UI design.</p>
                                    </div>
                                </div>
                                <div className="relative flex gap-8 pb-12 group -ml-[21px]">
                                    <div className="z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-background-dark border-2 border-video flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 border-primary">
                                        <span className="material-symbols-outlined text-[20px]">public</span>
                                    </div>
                                    <div className="pt-1">
                                        <span className="text-sm font-bold tracking-widest text-primary uppercase mb-1 block">2021</span>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Global Reach</h3>
                                        <p className="text-text-muted dark:text-gray-400">Crossed borders to serve international clients, establishing satellite partnerships in London and Tokyo.</p>
                                    </div>
                                </div>
                                <div className="relative flex gap-8 group -ml-[21px]">
                                    <div className="z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-background-dark border-2 border-video flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 border-primary">
                                        <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                                    </div>
                                    <div className="pt-1">
                                        <span className="text-sm font-bold tracking-widest text-primary uppercase mb-1 block">2024</span>
                                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">The AI Frontier</h3>
                                        <p className="text-text-muted dark:text-gray-400">Pivoting to integrate ethical AI solutions into our workflow, enhancing creativity without replacing the human touch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="px-6 py-24 lg:px-40 bg-white dark:bg-surface-dark border-t border-stone-200 dark:border-white/10">
                    <div className="max-w-[960px] mx-auto">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Meet the Leadership</h2>
                            <p className="text-text-muted dark:text-gray-400 max-w-xl mx-auto">The minds weaving the strategy behind every pixel.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4 border border-transparent group-hover:border-primary transition-colors duration-300">
                                    <div className="w-full h-full bg-stone-200 grayscale group-hover:grayscale-0 transition-all duration-500 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0HCdL15wX7bD-0cqV7-nEb6jO6D4rJEZqateauUWsIQQpyeSgDrk8NPzr0A5Idh0659loGihaTCMEL39s_wJtyeLC4BeZ8xmj_YLeVcWu0uF1zKNgK1K-GE8jDgHFTOn_LX6-WBmojYTCFIUfYE6EJXUGHnvYa0_u70j_lmcTZeJlGOBdE58GY-A30b2BLCLoV8wy8pXEgTPsKQYit2q-qKN9iPiavOEBi0tF-vCCT-4IZOgd0dvrS7Uo8H4SpNHF6gwcJ7LJqzQ')" }}></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-xs font-bold tracking-wider uppercase">Connect on LinkedIn</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-text-main dark:text-white">Elena Vance</h3>
                                <p className="text-primary text-sm font-medium uppercase tracking-wide">Chief Executive Officer</p>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4 border border-transparent group-hover:border-primary transition-colors duration-300">
                                    <div className="w-full h-full bg-stone-200 grayscale group-hover:grayscale-0 transition-all duration-500 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxHaCR-Hsu_uOa4xY0R-g1qWlVVmu6HZgjqRtIuwYLD8W4xuRTW57VhVHOR29wu_3qdT8OEzsuGzWeYC6myPHnHN2OyuQc0M5UuHLLSafgGQaRuNejLknAPO3zj1UemmagGuBlDRJ7hX53j73iS0-sd-nHndKWIc-AGj9W0x95MlyNSmjgbGX21l8DXMJDNnwFp-SJe1AfAomOHNB5AbwgSb2pk2sIyX2hyQ0zT9QnXXexkVuwlsjActFln6dI2eiGZm0wq4KztXo')" }}></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-xs font-bold tracking-wider uppercase">Connect on LinkedIn</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-text-main dark:text-white">Marcus Thorne</h3>
                                <p className="text-primary text-sm font-medium uppercase tracking-wide">Technical Director</p>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-4 border border-transparent group-hover:border-primary transition-colors duration-300">
                                    <div className="w-full h-full bg-stone-200 grayscale group-hover:grayscale-0 transition-all duration-500 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_nSXYSa5Rmr_ivMBJsjcoPzj29twttDKTuGZb8IEp4l4T2sLYTw1SKk--h3-Gv00GPkpmwxuwlDyQ9ZlndF3cwxQMuQwyqOSpGYajWTVmL-Zp2tdgpkJ33QWFnJgrcZfAWuMfDJCQlbPfjB4SmS95AASqyJuQtSQI_KN_TTcXsvaBVY_c3ESiW4GgmzIH2ACrZZD2RAPC68xZkqcD99QCVxKVN0GBiZeC4_1bhgqkkt55klu4UAAOve3a2g2R6uIWQAOUv2SmFpE')" }}></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-xs font-bold tracking-wider uppercase">Connect on LinkedIn</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-text-main dark:text-white">Sarah Jenkins</h3>
                                <p className="text-primary text-sm font-medium uppercase tracking-wide">Head of Design</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-6 py-20 lg:px-40 bg-background-light dark:bg-background-dark border-t border-stone-200 dark:border-white/10">
                    <div className="max-w-[960px] mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-text-main dark:text-white mb-6">Ready to weave your success story?</h2>
                        <p className="text-lg text-text-muted dark:text-gray-400 mb-10 max-w-2xl mx-auto">Let's collaborate to build a digital presence that is as robust as it is beautiful.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-pixel flex items-center justify-center rounded px-8 h-12 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-colors">
                                Start a Project
                            </button>
                            <button className="btn-pixel btn-pixel-dark flex items-center justify-center rounded px-8 h-12 border border-stone-300 hover:border-primary text-text-main hover:text-primary transition-colors bg-transparent text-base font-bold">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default AboutPage;
