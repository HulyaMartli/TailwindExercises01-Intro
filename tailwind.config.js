/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'lg': '1140px',
        'xl': '1140px',
        '2xl': '1140px',
      },
    },

    extend: {
      fontFamily: {
        'gemunu': ['Gemunu Libre', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif']
      },

      colors: {
        'mov-melon': '#FFD369',
        'mov-grey': '#DDDDDD',
        'mov-white': '#F7F7F7',
      },

      screens: {
        'xs': '375px',
      },

      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

