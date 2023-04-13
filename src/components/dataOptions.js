
export const dataOptions = (title) => {

    const options = {
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
                beginAtZero: true,
                position: 'left'
            },
            y1: {
                beginAtZero: true,
                position: 'right'
            }
        },
        responsive: true
    }

    return options
}
