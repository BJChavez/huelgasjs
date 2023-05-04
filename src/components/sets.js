// import { LABEL_CHART } from '../helpers/labelData.js'
import { pliego, otros, inflacion } from '../helpers/labelData.js'
import { STYLE_DATA_SETS } from '../helpers/styleData.js'

export const dataSets = (option) => {
  const dataSet = {
    labels: option.map(a => a.ANIOS),
    datasets: [
      {
        label: pliego,
        data: option.map(pliego => pliego.HUELGAS_PLIEGO_RECLAMOS),
        backgroundColor: STYLE_DATA_SETS.background.pliego,
        borderColor: STYLE_DATA_SETS.border.pliego,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        yAxisID: 'y'
      },
      {
        label: otros,
        data: option.map(otros => otros.HUELGAS_OTRAS_CAUSAS),
        backgroundColor: STYLE_DATA_SETS.background.otros,
        borderColor: STYLE_DATA_SETS.border.otros,
        borderWidth: 2,
        fill: true,
        tension: 0.4
      },
      {
        label: inflacion,
        data: option.map(x => Number((x.INFLACION).toFixed(2))),
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
