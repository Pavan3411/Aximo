/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white-glow': '0px 0px 10px 5px rgba(255, 255, 255, 1)', // Customize blur and spread
      },

      colors: {
        limeGreen: 'rgb(191, 247, 71)',
        lightGreen: 'rgb(226 235 219)',
      },
      backgroundImage: {
        'product1': "url('/src/images/project-img-1.jpg')",
        'product2': "url('/src/images/project-img-2.jpg')",
        'product3': "url('/src/images/project-img-3.jpg')",
        'product4': "url('/src/images/project-img-4.jpg')",
      },
      boxShadow: {
        'white-glow': '2px 2px 10px 2px rgba(255, 255, 255, 0.5)', // Example glow effect
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      backgroundColor: {
        'light-yellow': "rgb(255, 255, 245)",
      },
    },
  },
  plugins: [],
}