
const TYPE_CHART = {
  bar: 'bar',
  line: 'line'
}

const { bar, line } = TYPE_CHART

const graphic = document.querySelector('#graphics')

export function changeTypeChart (ctx) {
  graphic.addEventListener('change', (option) => {
    if (option.target.value === bar) {
      ctx.config.type = bar
      ctx.update()
    } else if (option.target.value === line) {
      ctx.config.type = line
      ctx.update()
    }
  })
}
