import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 border-t border-primary-dark/10 z-20 relative">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">grid_view</span>
                            <span className="font-bold text-2xl tracking-tight text-white">PixelWeft</span>
                        </div>
                        <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                            A digital product agency fusing structured principles with organic fluidity to create memorable web experiences.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-lg">Sitemap</h4>
                        <div className="flex flex-col gap-3">
                            <a className="text-stone-400 hover:text-primary transition-colors text-sm font-medium" href="#">Work</a>
                            <a className="text-stone-400 hover:text-primary transition-colors text-sm font-medium" href="#">Services</a>
                            <a className="text-stone-400 hover:text-primary transition-colors text-sm font-medium" href="/about">About</a>
                            <a className="text-stone-400 hover:text-primary transition-colors text-sm font-medium" href="#">Contact</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-lg">Socials</h4>
                        <div className="flex flex-col gap-3">
                            <a className="text-stone-400 hover:text-primary transition-colors text-sm font-medium" href="#">Twitter / X</a>
                            <a className="text-stone-400 hover:text-primary transition-colors text-sm font-medium" href="#">Instagram</a>
                            <a className="text-stone-400 hover:text-primary transition-colors text-sm font-medium" href="#">LinkedIn</a>
                            <a className="text-stone-400 hover:text-primary transition-colors text-sm font-medium" href="#">Dribbble</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-lg">Newsletter</h4>
                        <p className="text-stone-400 text-sm">Latest design trends directly to your inbox.</p>
                        <div className="flex gap-2 w-full">
                            <input className="bg-stone-50 border border-stone-200 rounded-md px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary focus:border-primary text-text-main placeholder-stone-400 outline-none" placeholder="Email address" type="email" />
                            <button className="bg-primary hover:bg-primary-dark text-white rounded-md w-12 h-10 flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-stone-500 text-sm">© 2024 PixelWeft Digital Agency. All rights reserved.</p>
                    <div className="flex gap-8 text-sm text-stone-500 font-medium">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
