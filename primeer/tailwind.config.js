/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily:{
        "Raleway":['Raleway','Raleway-ital']
      }
    },
    colors:{
      current: 'currentColor',
      'fondoC': '#222222',
      'titleC': '#F57D0D'
    },
  },
  plugins: [],
}
