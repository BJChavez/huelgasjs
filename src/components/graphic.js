import { dataSets } from './sets.js'
import { dataOptions } from './options.js'

export const chartGeneral = (ctx, option, title) => new Chart(ctx, {
  type: 'line',
  data: dataSets(option),
  options: dataOptions(title)
})
