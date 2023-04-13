import { data } from './dataSets.js'

export const chartGeneral = (ctx, option, title) => new Chart(ctx, {

    type: 'line',
    data: data(option),
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
})