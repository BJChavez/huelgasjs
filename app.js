import { chartGeneral } from './src/components/graphic.js'
import { CANVAS_CLASS } from './src/helpers/styleCanvas.js'
import { dataPresidents } from './data/db.js'
import { changeTypeChart } from './src/events/event.js'
import { download } from './src/download/script.csv.js'

const containerGeneral = document.querySelector('#chart')
const dw = document.querySelector('#download')
// const CANVAS_CLASS = ['lg:m-20', 'md:m-10', 'm-2', 'border-2', 'border-dashed', 'border-borde', 'rounded-lg', 'p-3', 'bg-canva']

function createChart () {
  dataPresidents.map(data => {
    const newCanvas = document.createElement('canvas')
    newCanvas.classList.add(...CANVAS_CLASS)
    newCanvas.setAttribute('id', data.id)

    containerGeneral.append(newCanvas)

    const myChart = chartGeneral(newCanvas.id, data.options, data.title)

    changeTypeChart(myChart)

    return myChart
  })
}

download(dw)
createChart()
