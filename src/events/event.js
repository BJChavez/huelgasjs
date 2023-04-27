
const TYPE_CHART = {
  bar: 'bar',
  line: 'line'
}

const graphic = document.querySelector('#graphics')

export function changeTypeChart (ctx) {
  graphic.addEventListener('change', (option) => {
    if (option.target.value === TYPE_CHART.bar) {
      ctx.config.type = TYPE_CHART.bar
      ctx.update()
    } else if (option.target.value === TYPE_CHART.line) {
      ctx.config.type = TYPE_CHART.line
      ctx.update()
    }
  })
}
