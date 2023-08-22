/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: 'FFFFFF',
          primary: '#D1D1D1',
          secondary: '#868686',
        },
        primary: {
          DEFAULT: '#242424',
          dark: '#333333',
          light: '#494949',
        },
        accent: {
          DEFAULT: '#DCEDF3',
        },
        error: {
          DEFAULT: '#F7AC85',
        },
        warning: {
          DEFAULT: '#FFE9B3',
        },
        success: {
          DEFAULT: '#EDFEBE',
        },
        pop: {
          green: '#4AFCD1',
          blue: '#7848FF',
          pink: '#BA48FF',
        }
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    },
  },
  plugins: [],
}

