
const TYPE_CHART = {
  bar: 'bar',
  line: 'line'
}

function chartToBar (ctx) {
  const bar = document.querySelector('#bar')
  bar.addEventListener('click', () => {
    ctx.config.type = TYPE_CHART.bar
    ctx.update()
  })
}

function ChartToLine (ctx) {
  const line = document.querySelector('#line')
  line.addEventListener('click', () => {
    ctx.config.type = TYPE_CHART.line
    ctx.update()
  })
}

export default {
  chartToBar,
  ChartToLine
}
