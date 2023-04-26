
function chartToBar (ctx) {
  const bar = document.querySelector('#bar')
  bar.addEventListener('click', () => {
    ctx.config.type = 'bar'
    ctx.update()
  })
}

function ChartToLine (ctx) {
  const line = document.querySelector('#line')
  line.addEventListener('click', () => {
    ctx.config.type = 'line'
    ctx.update()
  })
}

export default {
  chartToBar,
  ChartToLine
}
