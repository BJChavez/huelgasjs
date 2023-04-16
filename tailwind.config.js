/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/app.js"],
  theme: {
    extend:{
      fontFamily:{
        sans: ['Inter var']
      }
    }
  },
  plugins: [],
}

