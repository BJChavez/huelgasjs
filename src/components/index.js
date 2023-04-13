
export const chartGeneral = (ctx, option, title) => new Chart(ctx, {

    type: 'line',
    data: {
        labels: option.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Pliego de reclamos',
                data: option.map(p => p.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#f0c808',
                borderWidth: 1,
                borderColor: '#f0c808'
            },
            {
                label: '# Otras causas',
                data: option.map(c => c.HUELGAS_OTRAS_CAUSAS),
                backgroundColor: '#004e89',
                borderWidth: 1,
                borderColor: '#004e89'
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
        },
        responsive: true
    }
})