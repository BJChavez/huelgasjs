export const GRAPHIC = (ctx, strikes) => new Chart(ctx, {
    type:'line',
    data: {
        labels: strikes.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Por pliego de reclamos',
                data: strikes.map(r => r.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#00509d',
                borderWidth: 1,
                borderColor: '#00509d'
            },
           /*{
                label: '# Inflación',
                data: strikes.map(i => Math.round(i.INFLATION)),
            }*/
        ]
    },
    options: {
        animations: {
            tension: {
                duration: 2000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        }
    }
})