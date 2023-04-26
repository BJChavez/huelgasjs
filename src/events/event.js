
const TYPE_CHART = {
  bar: 'bar',
  line: 'line'
}

const graphic = document.querySelector('#graphics')

export const changeChart = (ctx) => {
  graphic.addEventListener('change', (chart) => {
    if (chart.target.value === 'barras') {
      ctx.config.type = TYPE_CHART.bar
      ctx.update()
    }
    if (chart.target.value === 'lineas') {
      ctx.config.type = TYPE_CHART.line
      ctx.update()
    }
  })
}

// const TYPE_CHART = {
//   bar: 'bar',
//   line: 'line'
// }

// function chartToBar (ctx) {
//   const bar = document.querySelector('#bar')
//   bar.addEventListener('click', () => {
//     ctx.config.type = TYPE_CHART.bar
//     ctx.update()
//   })
// }

// function ChartToLine (ctx) {
//   const line = document.querySelector('#line')
//   line.addEventListener('click', () => {
//     ctx.config.type = TYPE_CHART.line
//     ctx.update()
//   })
// }

// export default {
//   chartToBar,
//   ChartToLine
// }
