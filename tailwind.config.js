/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
    fontfamily:{
      roboto: ['roboto', 'sans-serif']
    }
  },
  plugins: [],
}

