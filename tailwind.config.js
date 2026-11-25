import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Afacad Flux Variable"', ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				banner: {
					from: { clipPath: 'inset(0 0 22% 0 round 1rem)', filter: 'saturate(0.6)' },
					to: { clipPath: 'inset(0 0 0 0 round 1rem)' }
				},
				avatar: { from: { transform: 'translateY(10px) scale(0.96)' } }
			},
			animation: {
				banner: 'banner 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
				avatar: 'avatar 900ms 120ms cubic-bezier(0.16, 1, 0.3, 1) both'
			},
			backgroundImage: {
				'sunset-gradient': 'linear-gradient(158deg, rgba(251, 146, 60, 1) 0%, rgba(239, 68, 68, 1) 50%, rgba(185, 28, 28, 1) 100%)'
			}
		}
	},
	plugins: [],
	darkMode: 'class'
};
