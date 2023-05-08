import Chart from 'chart.js/auto'
import { dataSets } from './dataSets.js'
import { dataOptions } from './dataOptions.js'

export const chartGeneral = (ctx, option, title) => new Chart(ctx, {
  type: 'line',
  data: dataSets(option),
  options: dataOptions(title),
  plugins: [{
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const { ctx } = chart
      ctx.save()
      ctx.globalCompositeOperation = 'destination-over'
      ctx.fillStyle = options.color || '#99ffff'
      ctx.fillRect(0, 0, chart.width, chart.height)
      ctx.restore()
    }
  }]
})
