import { cuadroGeneral } from './components/general.js'
import { datosHuelgas } from '../data/huelgas.js'

const ctx = document.querySelector('#contenedor')

cuadroGeneral(ctx, datosHuelgas)
