/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
        { 
          main: '#69EE66',
        },
      fontFamily:{
        first: ['Libre Baskerville'],
        second: ['Palanquin']
      }
    },
  },
  plugins: [],
}