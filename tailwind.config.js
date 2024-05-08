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
      },
      backgroundImage:{
        img1: "url('./Images/home.png')",
        locationBg: "url('./Images/locationBg.png')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}