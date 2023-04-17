
export const dataOptions = (title) => {

    const options = {
        plugins: {
            title: {
                display: true,
                text: title,
                padding: {
                    top: 30,
                    bottom: 10
                },
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                position: 'left'
            },
            y1: {
                beginAtZero: true,
                position: 'right'
            }
        },
        maintainAspecRatio: false,
        responsive: true,
        /*animations: {
            tension: {
                duration: 2000,
                easing:'linear',
                from: 1,
                to: 0,
                loop: true
            }
        }*/
    }

    return options
}
