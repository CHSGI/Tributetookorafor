/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Futura', 'sans-serif']
      },
      colors: {
        customGold: '#bf8c2f',
        customBrown: '#4F3403',
        hoverColor: '#a9782b'
      },
    },
  },
  plugins: [],
}