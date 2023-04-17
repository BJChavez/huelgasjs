/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/app.js"],
  theme: {
    extend:{
      fontFamily:{
        sans: ['Inter var']
      }
    },
    colors: {
      'head':'#2C2C54',
      'borde':'#A40E4C',
      'text':'#EFF2F1',
      'fond':'#F49D6E'
    }
  },
  plugins: [],
}

