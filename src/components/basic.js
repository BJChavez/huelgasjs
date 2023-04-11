export const GRAPHIC = (ctx, strikes) => new Chart(ctx, {
    type:'bar',
    data: {
        labels: strikes.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Pliego de reclamos',
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
        plugins: {
            title: {
                display: true, 
                text: 'Huelgas en el Perú 1987 - 20220',
                padding: {
                    top: 10,
                    bottom:10
                }
            }
        }
    }
})