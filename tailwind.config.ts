import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))',
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        rainbow: 'rainbow var(--speed, 2s) infinite linear',
        shine: 'shine var(--duration) infinite linear',
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'animate-shiny-text': 'animate-shiny-text 8s infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite': 'marquee 25s linear infinite',
      },
      keyframes: {
        'animate-shiny-text': {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shiny-width)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shiny-width)) 0',
          },
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0',
          },
        },
        rainbow: {
          '0%': { 'background-position': '0%' },
          '100%': { 'background-position': '200%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shine: {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-airbnb-cereal)'],
      },
    },
  },
  plugins: [],
};

export default config;
