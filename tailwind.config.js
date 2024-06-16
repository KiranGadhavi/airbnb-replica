/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      keyframes:{
        // slideInLeft: {
        //   '0%': { transform: 'translateX(100%)' },
        //   '100%': { transform: 'translateX(0)' },
        // },
        // slideInRight: {
        //   '0%': { transform: 'translateX(-100%)' },
        //   '100%': { transform: 'translateX(0)' },
        // },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        // slideInLeft: 'slideInLeft 0.5s ease-in-out',
        // slideInRight: 'slideInRight 0.5s ease-in-out',
        slideOutLeft: 'slideOutLeft 0.5s ease-in-out',
        slideOutRight: 'slideOutRight 0.5s ease-in-out',
      },
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

