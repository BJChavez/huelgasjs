
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
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 14,
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
                    text:'Cantidad de huelgas',
                    display: true
                }
            },
            y1: {
                beginAtZero: true,
                position: 'right',
                title: {
                    text: 'Porcentaje de inflacion',
                    display: true
                }
            }
        },
        maintainAspecRatio: false,
        responsive: true,
    }

    return options
}
