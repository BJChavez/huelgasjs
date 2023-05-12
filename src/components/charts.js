import { dataPresidents } from '../../data/db.js'
import { CANVAS_CLASS } from '../helpers/styleCanvas'
import { chartGeneral } from './graphic.js'
import { event } from '../events/event.js'

class ChartView {
  createChart (container) {
    dataPresidents.map(data => {
      const newCanvas = document.createElement('canvas')
      const newDiv = document.createElement('div')

      newCanvas.classList.add(...CANVAS_CLASS)
      newCanvas.setAttribute('id', data.id)

      newDiv.append(newCanvas)
      container.append(newDiv)

      const myChart = chartGeneral(newCanvas.id, data.options, data.title)
      event.changeTypeChart(myChart)

      return myChart
    })
  }
}

export const chartView = new ChartView()
