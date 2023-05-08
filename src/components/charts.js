import { dataPresidents } from '../../data/db.js'
import { download } from '../download/download.js'
import { CANVAS_CLASS } from '../helpers/styleCanvas'
import { chartGeneral } from './graphic'
import { event } from '../events/event.js'

class ChartView {
  createChart (container) {
    dataPresidents.map(data => {
      const newCanvas = document.createElement('canvas')
      newCanvas.classList.add(...CANVAS_CLASS)
      newCanvas.setAttribute('id', data.id)

      container.append(newCanvas)

      const myChart = chartGeneral(newCanvas.id, data.options, data.title)

      download.chartPdf(myChart.canvas)
      event.changeTypeChart(myChart)

      return myChart
    })
  }
}

export const chartView = new ChartView()
