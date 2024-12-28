import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{ts,tsx}', // Ajout du chemin Acernity
	],
	darkMode: 'class', // Ajout du mode sombre
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
				// Animations existantes
				gradient: 'gradient 8s linear infinite',
				rainbow: 'rainbow var(--speed, 2s) infinite linear',
				shine: 'shine var(--duration) infinite linear',
				'spin-slow-30': 'spin 30s linear infinite',
				'spin-slow-25': 'spin 25s linear infinite',
				'animate-shiny-text': 'animate-shiny-text 8s infinite',
				'spin-slow-10': 'spin 10s linear infinite',
				'marquee-infinite': 'marquee 25s linear infinite',

				// Nouvelles animations Acernity
				first: 'moveVertical 30s ease infinite',
				second: 'moveInCircle 20s reverse infinite',
				third: 'moveInCircle 40s linear infinite',
				fourth: 'moveHorizontal 40s ease infinite',
				fifth: 'moveInCircle 20s ease infinite',
			},
			keyframes: {
				// Keyframes existantes
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

				// Nouvelles keyframes Acernity
				moveHorizontal: {
					'0%': {
						transform: 'translateX(-50%) translateY(-10%)',
					},
					'50%': {
						transform: 'translateX(50%) translateY(10%)',
					},
					'100%': {
						transform: 'translateX(-50%) translateY(-10%)',
					},
				},
				moveInCircle: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'50%': {
						transform: 'rotate(180deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
				moveVertical: {
					'0%': {
						transform: 'translateY(-50%)',
					},
					'50%': {
						transform: 'translateY(50%)',
					},
					'100%': {
						transform: 'translateY(-50%)',
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
