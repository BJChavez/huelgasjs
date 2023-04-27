/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/app.js'],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue']
    },
    colors: {
      head: 'rgb(0, 43, 91)',
      text: 'rgb(249, 226, 175)',
      textSub: 'rgb(234, 84, 85)',
      bgButtom: 'rgb(4, 167, 119, .8)',
      hoverButtom: 'rgb(4, 167, 119)',
      textButtom: 'rgb(255, 255, 255)',
      canva: 'rgb(249, 226, 175, .1)',
      borde: 'rgb(0, 43, 91)'
    }
  },
  plugins: []
}
