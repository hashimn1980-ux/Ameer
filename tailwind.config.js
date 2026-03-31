/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        gold: '#D4AF37',
        ash: '#333333',
        "primary-container": "#D4AF37",
        "on-surface": "#e5e2e1",
        "surface-variant": "#131313",
        "outline": "#4d4635",
      },
      fontFamily: {
        headline: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
        arabic: ["Noto Sans Arabic", "sans-serif"],
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.76, 0, 0.24, 1)',
      }
    },
  },
  plugins: [],
}
