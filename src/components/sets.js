
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
        backgroundColor: 'rgb(139, 233, 253, .3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: 'rgb(2, 62, 138)',
        yAxisID: 'y'
      },
      {
        label: LABEL_CHART.otros,
        data: option.map(otras => otras.HUELGAS_OTRAS_CAUSAS),
        backgroundColor: 'rgb(80, 250, 123, .3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: 'rgba(41, 191, 18)'
      },
      {
        label: LABEL_CHART.inflacion,
        data: option.map(c => parseInt(Math.round(c.INFLACION))),
        backgroundColor: 'rgb(255, 121, 198, .3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: 'rgb(204, 68, 75)',
        yAxisID: 'y1'
      }
    ]
  }
  return dataSet
}
