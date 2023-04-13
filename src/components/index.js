
export const chartGeneral = (ctx, option, title) => new Chart(ctx, {

    type: 'line',
    data: {
        labels: option.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Pliego de reclamos',
                data: option.map(p => p.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#00509d',
                borderWidth: 1,
                borderColor: '#00509d'
            },
            {
                label: '# Otras causas',
                data: option.map(c => c.HUELGAS_OTRAS_CAUSAS),
                backgroundColor: '#ef233c',
                borderWidth: 1,
                borderColor: '#ef233c'
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: title,
                padding: {
                    top: 30,
                    bottom: 10
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})