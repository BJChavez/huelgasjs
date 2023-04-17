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
      'text':'#352208',
      'head': '#fad643',
    }
  },
  plugins: [],
}

