import { chartGeneral } from './components/graphic.js'
import { dataPresidents } from '../data/db.js'
import { changeTypeChart } from './events/event.js'

const containerGeneral = document.querySelector('#chart')
const newCanvasClassList = [
  'lg:m-20',
  'md:m-10',
  'm-2',
  'border-2',
  'border-dashed',
  'border-borde',
  'rounded-lg',
  'p-3',
  'bg-canva'
]

function createChart () {
  dataPresidents.map(data => {
    const newCanvas = document.createElement('canvas')
    newCanvas.classList.add(...newCanvasClassList)
    newCanvas.setAttribute('id', data.id)

    containerGeneral.append(newCanvas)

    const myChart = chartGeneral(newCanvas.id, data.options, data.title)

    changeTypeChart(myChart)

    return myChart
  })
}

createChart()
