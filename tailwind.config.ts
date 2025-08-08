import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        // Custom Blue Slate Gradient Colors
        'hero-gradient-start': '#B5B9FF',
        'hero-gradient-end': '#2B2C49',
        
        // Case Hardened Navbar Gradient Colors (Cyan-dominant)
        'navbar-gradient-start': '#000000', // Black
        'navbar-gradient-middle': '#0000FF', // Blue
        'navbar-gradient-end': '#1E1E1E', // Dark Gray
        
        // Case Hardened accent colors
        'case-hardened-cyan': '#06b6d4',
        'case-hardened-blue': '#0284c7',
        'case-hardened-teal': '#0d9488',
        'case-hardened-dark': '#164e63',
        
        // Onlycs brand colors
        'onlycs-blue': '#5e98d9',
        primary: {
          50: '#f0f4ff',
          100: '#e1eaff',
          200: '#c3d5ff',
          300: '#a4bfff',
          400: '#85aaff',
          500: '#5e98d9',
          600: '#4d8bd8',
          700: '#3d7bd7',
          800: '#2d6bd6',
          900: '#1d5bd5',
        },
        dark: {
          800: '#212126',
          700: '#2a2a30',
          600: '#343440',
          500: '#3e3e50',
          400: '#484860',
          300: '#525270',
          200: '#5c5c80',
          100: '#666690',
        },
        rarity: {
          'consumer': '#b0c3d9',
          'industrial': '#5e98d9',
          'mil-spec': '#4b69ff',
          'restricted': '#8847ff',
          'classified': '#d32ce6',
          'covert': '#eb4b4b',
          'contraband': '#e4ae33',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['DrukTextApp', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(94, 152, 217, 0.5), 0 0 10px rgba(94, 152, 217, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(94, 152, 217, 0.8), 0 0 20px rgba(94, 152, 217, 0.6)' 
          },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(94, 152, 217, 0.3)',
        'glow-lg': '0 0 30px rgba(94, 152, 217, 0.5)',
        'onlycs-glow': '0 0 20px rgba(94, 152, 217, 0.3)',
        'case-hardened-glow': '0 0 25px rgba(6, 182, 212, 0.4)',
        'case-hardened-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
