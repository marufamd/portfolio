/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(158deg, rgba(251, 146, 60, 1) 0%, rgba(239, 68, 68, 1) 50%, rgba(185, 28, 28, 1) 100%)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

