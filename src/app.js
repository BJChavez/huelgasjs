import { chartGeneral } from './components/graphic.js'
import { dataPresidents } from '../data/db.js'
import Event from './events/event.js'

const containerGeneral = document.querySelector('#chart')

function createChart () {
  dataPresidents.map(data => {
    const newCanvas = document.createElement('canvas')
    newCanvas.classList.add('lg:m-20', 'md:m-10', 'm-2', 'border-2', 'border-borde', 'rounded-lg', 'p-3', 'bg-canva')
    newCanvas.setAttribute('id', data.id)

    containerGeneral.append(newCanvas)

    const myChart = chartGeneral(newCanvas.id, data.options, data.title)

    Event.chartToBar(myChart)
    Event.ChartToLine(myChart)

    return myChart
  })
}

createChart()
