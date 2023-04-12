
export const chartGeneral = (ctx, strikes, title) => new Chart(ctx, {
    type:'line',
    data: {
        labels: strikes.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Pliego de reclamos',
                data: strikes.map(p => p.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#00509d',
                borderWidth: 1,
                borderColor: '#00509d'
            },
            {
                label: '# Otras causas',
                data: strikes.map(p => p.HUELGAS_OTRAS_CAUSAS),
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
                    top: 10,
                    bottom:10
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