
export const cuadroGeneral = (ctx, datosHuelgas, titulo) => new Chart(ctx, {
    type:'bar',
    data: {
        labels: datosHuelgas.map(anios => anios.ANIOS),
        datasets: [
            {
                label: '# Pliego de reclamos',
                data: datosHuelgas.map(pliego => pliego.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#00509d',
                borderWidth: 1,
                borderColor: '#00509d'
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true, 
                text: titulo,
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