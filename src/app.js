import { chartGeneral } from './components/graphic.js'
import { dataPresidents } from '../data/db.js'
import { addClassNewCanvas } from './components/sets.js'
import Event from './events/event.js'

const containerGeneral = document.querySelector('#chart')

function createChart () {
  dataPresidents.map(data => {
    const newCanvas = document.createElement('canvas')
    newCanvas.classList.add(addClassNewCanvas)
    newCanvas.setAttribute('id', data.id)

    containerGeneral.append(newCanvas)

    const myChart = chartGeneral(newCanvas.id, data.options, data.title)

    Event.chartToBar(myChart)
    Event.ChartToLine(myChart)

    return myChart
  })
}

createChart()
