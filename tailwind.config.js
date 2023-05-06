/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app.js'],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue'],
      sans: ['Open Sans']
    },
    colors: {
      head: 'rgb(52, 53, 70)',
      text: 'rgb(249, 226, 175)',
      textSub: 'rgb(148, 229, 181)',
      bgButtom: 'rgb(148, 229, 181)',
      hoverButtom: 'rgb(249, 226, 175)',
      textButtom: 'rgb(52, 53, 70)',
      hoverBtext: 'rgb(52, 53, 70)',
      canva: 'rgb(249, 226, 175, .1)',
      borde: 'rgb(0, 43, 91)'
    }
  },
  plugins: []
}
