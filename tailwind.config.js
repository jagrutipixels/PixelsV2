/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C9A24D',
          green: '#1F5E43',
          yellow: '#F2B705',
          red: '#B63A3A',
          'grape-green': '#7FB069',
          'pom-red': '#8E1E2D',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    }
  },
  plugins: [],
}