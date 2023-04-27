
const LABEL_CHART = {
  pliego: 'Por pliego de reclamos',
  otros: 'Por otras causas',
  inflacion: 'Inflación'
}

export const dataSets = (option) => {
  const dataSet = {
    labels: option.map(a => a.ANIOS),
    datasets: [
      {
        label: LABEL_CHART.pliego,
        data: option.map(pliego => pliego.HUELGAS_PLIEGO_RECLAMOS),
        backgroundColor: 'rgb(4, 167, 119, .3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: 'rgb(4, 167, 119)',
        yAxisID: 'y'
      },
      {
        label: LABEL_CHART.otros,
        data: option.map(otras => otras.HUELGAS_OTRAS_CAUSAS),
        backgroundColor: 'rgb(249, 226, 175, .3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: 'rgb(255, 189, 0)'
      },
      {
        label: LABEL_CHART.inflacion,
        data: option.map(c => parseInt(Math.round(c.INFLACION))),
        backgroundColor: 'rgb(255, 0, 84, .3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: 'rgb(255, 0, 84)',
        yAxisID: 'y1'
      }
    ]
  }
  return dataSet
}
