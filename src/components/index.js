import { data } from './dataSets.js'
import { dataOptions } from './dataOptions.js'

export const chartGeneral = (ctx, option, title) => new Chart(ctx, {

    type: 'line',
    data: data(option),
    options: dataOptions(title)
})