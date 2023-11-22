/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      fontFamily: {
        "principal" : ['"Be Vietnam Pro"', 'sans-serif']
      },

      colors: {
        'bright-red': 'hsl(12, 88%, 59%)',
        'dark-blue': 'hsl(228, 39%, 23%)'
      },

    },
  },
  plugins: [],
}