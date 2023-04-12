import { cuadroGeneral } from './components/molde.js'
import { datosHuelgas } from '../data/huelgas.js'
import { datosAlanFirst } from '../data/alanFirst.js'

const ctx = document.querySelector('#alan1')
const ctx2 = document.querySelector('#alan2')

cuadroGeneral(ctx, datosHuelgas, datosHuelgas[0].ID)
cuadroGeneral(ctx2, datosAlanFirst, datosAlanFirst[0].ID)
