/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Space Grotesk", "sans-serif"],
            },
            colors: {
                'pixel-cream': '#Fdfdf9', // Porcelain / Paper
                'pixel-orange': '#FF4D00', // Sharp International Orange
                'pixel-black': '#1a1a1a',
                'pixel-grid': '#e5e5e0',
                background: "var(--background)",
                foreground: "var(--foreground)",
                "primary": "#1B4D3E", // Deep Forest Green
                "primary-dark": "#0D2E24", // Even Darker Forest Green
                "accent": "#1B4D3E", // Swapped bronze for Forest Green
                "background-light": "#F9F8F4",
                "background-dark": "#1C1C1C",
                "border-thick": "#1C1C1C",
                "text-main": "#111111", // Pitch Black for high contrast
                "text-muted": "#4B4B4B", // Darker Gray for better readability
                "surface": "#F2F0EB",
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #e5e5e0 1px, transparent 1px), linear-gradient(to bottom, #e5e5e0 1px, transparent 1px)",
                'grainy': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
