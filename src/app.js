import { chartGeneral } from './components/graphic.js'
import { dataPresidents } from '../data/db.js'

const containerGeneral = document.querySelector('#chart')

function bar (ctx) {
  const bar = document.querySelector('#bar')
  bar.addEventListener('click', () => {
    ctx.config.type = 'bar'
    ctx.update()
  })
}

function line (ctx) {
  const line = document.querySelector('#line')
  line.addEventListener('click', () => {
    ctx.config.type = 'line'
    ctx.update()
  })
}

function createChart () {
  dataPresidents.map(data => {
    const newCanvas = document.createElement('canvas')
    newCanvas.classList.add('lg:m-20', 'md:m-10', 'm-2', 'border-2', 'border-borde', 'rounded-lg', 'p-3', 'bg-canva')
    newCanvas.setAttribute('id', data.id)

    containerGeneral.append(newCanvas)

    const myChart = chartGeneral(newCanvas.id, data.options, data.title)

    bar(myChart)
    line(myChart)

    return myChart
  })
}

createChart()

// console.log(Object.keys(window.Chart))

// console.log(Object.keys(window.Chart.instances['1']._metasets['1']))
