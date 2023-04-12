import { cuadroGeneral } from './components/basic.js'
import { datosHuelgas } from '../data/huelgas.js'

const ctx = document.querySelector('#contenedor')

cuadroGeneral(ctx, datosHuelgas)