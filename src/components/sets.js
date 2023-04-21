
export const dataSets = (option) => {
    const dataSet = {
        labels: option.map(a => a.ANIOS),
        datasets: [
            {
                label: 'Huelgas por pliego de reclamos',
                data: option.map(b => b.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: 'rgba(155, 208, 245, .4)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                borderColor: '#001d3d',
            },
            {
                label: 'Inflacion',
                data: option.map(c => parseInt(Math.round(c.INFLACION))),
                backgroundColor: 'rgba(255, 177, 193, .4)',
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
