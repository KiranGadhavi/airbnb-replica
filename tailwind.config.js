/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      screens: {
        'custom-xs': '50px',
      },
      colors: {
        customGray: '#f7f7f7',
      },
      
    },
  },
  plugins: [],
}

