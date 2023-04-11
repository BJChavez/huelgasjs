export const GRAPHIC = (ctx, strikes) => new Chart(ctx, {
    type:'bar',
    data: {
        labels: strikes.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Por pliego de reclamos',
                data: strikes.map(r => r.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#ffafcc',
                borderWidth: 1,
                borderColor: '#f28482'
            },
           /* {
                label: '# Inflación',
                data: strikes.map(i => i.INFLATION),
            }*/
        ]
    }
})