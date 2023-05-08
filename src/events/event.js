/*
Separamos esta logica por que es una funcionalidad especifica de los graficos. Se recomienda mantenerlo asi o en todo caso modularizar aun mas el codigo de eventos.
*/

class Events {
  constructor () {
    this.bar = 'bar'
    this.line = 'line'
  }

  changeTypeChart (ctx) {
    const graphic = document.querySelector('#graphics')
    graphic.addEventListener('change', (option) => {
      if (option.target.value === this.bar) {
        ctx.config.type = this.bar
        ctx.update()
      } else if (option.target.value === this.line) {
        ctx.config.type = this.line
        ctx.update()
      }
    })
  }
}

export const event = new Events()
