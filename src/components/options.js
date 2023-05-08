
const titleChart = {
  huelgas: '# de huelgas',
  inflacion: '% de inflación'
}

export const dataOptions = (title) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: title,
        padding: {
          top: 30,
          bottom: 10
        },
        font: {
          size: 14,
          family: 'Pathway Gothic One'
        }
      },
      customCanvasBackgroundColor: {
        color: 'rgb(255, 255, 255)'
      },
      legend: {
        labels: {
          font: {
            size: 14,
            family: 'Pathway Gothic One'
          }
        }
      },
      colors: {
        enabled: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        position: 'left',
        title: {
          text: titleChart.huelgas,
          display: true
        }
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        title: {
          text: titleChart.inflacion,
          display: true
        }
      }
    },
    maintainAspecRatio: false,
    responsive: true
  }

  return options
}
