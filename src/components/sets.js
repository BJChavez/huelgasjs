
export const dataSets = (option) => {
  const dataSet = {
    labels: option.map(a => a.ANIOS),
    datasets: [
      {
        label: 'Por pliego de reclamos',
        data: option.map(pliego => pliego.HUELGAS_PLIEGO_RECLAMOS),
        backgroundColor: 'rgb(139, 233, 253, .3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: '#001d3d',
        yAxisID: 'y'
      },
      {
        label: 'Por otras causas',
        data: option.map(otras => otras.HUELGAS_OTRAS_CAUSAS),
        backgroundColor: 'rgb(80, 250, 123, .3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: 'rgba(8, 28, 21)'
        //  yAxisID: 'y'
      },
      {
        label: 'Inflacion',
        data: option.map(c => parseInt(Math.round(c.INFLACION))),
        backgroundColor: 'rgb(255, 85, 85, .4)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        borderColor: '#780000',
        yAxisID: 'y1'
      }
    ]
  }
  return dataSet
}
