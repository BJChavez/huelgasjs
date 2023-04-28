import { LABEL_CHART } from '../helpers/label.data.js'
import { STYLE_DATA_SETS } from '../helpers/style.data.js'

export const dataSets = (option) => {
  const dataSet = {
    labels: option.map(a => a.ANIOS),
    datasets: [
      {
        label: LABEL_CHART.pliego,
        data: option.map(pliego => pliego.HUELGAS_PLIEGO_RECLAMOS),
        backgroundColor: STYLE_DATA_SETS.background.pliego,
        borderColor: STYLE_DATA_SETS.border.pliego,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        yAxisID: 'y'
      },
      {
        label: LABEL_CHART.otros,
        data: option.map(otros => otros.HUELGAS_OTRAS_CAUSAS),
        backgroundColor: STYLE_DATA_SETS.background.otros,
        borderColor: STYLE_DATA_SETS.border.otros,
        borderWidth: 2,
        fill: true,
        tension: 0.4
      },
      {
        label: LABEL_CHART.inflacion,
        data: option.map(x => parseInt(Math.round(x.INFLACION))),
        backgroundColor: STYLE_DATA_SETS.background.inflacion,
        borderColor: STYLE_DATA_SETS.border.inflacion,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  }
  return dataSet
}
