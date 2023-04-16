
export const dataSets = (option) => {
    const dataSet = {
        labels: option.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Pliego de reclamos',
                data: option.map(b => b.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#005f73',
                borderWidth: 1,
                fill: false,
                tension: 0.4,
                borderColor: '#005f73',
                yAxisID: 'y'
            },
            {
                label: '% Inflacion',
                data: option.map(c => parseInt(Math.round(c.INFLATION))),
                backgroundColor: '#c1121f',
                borderWidth: 1,
                fill: false,
                tension: 0.4,
                borderColor: '#c1121f',
                yAxisID: 'y1'
            }
        ]
    }

    return dataSet
}
