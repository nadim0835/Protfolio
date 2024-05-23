/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sora': [ "Sora","sans-serif"],
      },
      colors: {
        'primary': '#000000',
        'scendary': '#404040',
        'white': '#FFFFFF',

      },

    },
  },
  plugins: [],
}