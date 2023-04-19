
export const dataSets = (option) => {
    const dataSet = {
        labels: option.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Huelgas por pliego de reclamos',
                data: option.map(b => b.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#ff7b00',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                borderColor: '#001d3d',
                yAxisID: 'y'
            },
            {
                label: 'Inflacion',
                data: option.map(c => parseInt(Math.round(c.INFLATION))),
                backgroundColor: '#e5383b',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                borderColor: '#780000',
                yAxisID: 'y1'
            }
        ]
    }

    return dataSet
}
