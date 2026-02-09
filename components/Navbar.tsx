import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
            <div className="glass-pill rounded-full px-3 py-3 flex items-center justify-between gap-6 max-w-4xl w-full mx-auto shadow-sm border border-stone-200">
                <a className="pl-4 pr-2 flex items-center gap-2 text-text-main group" href="/">
                    <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform duration-500">grid_view</span>
                    <span className="font-bold text-lg tracking-tight text-primary-dark">PixelWeft</span>
                </a>
                <div className="hidden md:flex items-center gap-1">
                    <a className="relative px-5 py-2 text-sm font-medium text-text-muted hover:text-primary-dark transition-all duration-300 group" href="#">
                        Work
                        <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/5 group-hover:left-[20%]"></span>
                    </a>
                    <a className="relative px-5 py-2 text-sm font-medium text-text-muted hover:text-primary-dark transition-all duration-300 group" href="#">
                        Services
                        <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/5 group-hover:left-[20%]"></span>
                    </a>
                    <a className="relative px-5 py-2 text-sm font-medium text-text-muted hover:text-primary-dark transition-all duration-300 group" href="/about">
                        About
                        <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/5 group-hover:left-[20%]"></span>
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95">
                        Let's Talk
                    </button>
                    <button className="md:hidden flex items-center justify-center rounded-full h-10 w-10 bg-stone-100 text-text-main hover:bg-stone-200">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
