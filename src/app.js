import { chartGeneral } from './components/index.js'
import { dateStrikes } from '../data/strikes.js'
import { dateAlanFirst } from '../data/alanFirst.js'
import { dateALanTwo } from '../data/alanTwo.js'

const ctxAlan1 = document.querySelector('#alan1')
const ctxAlan2 = document.querySelector('#alan2')

chartGeneral(ctxAlan1, dateStrikes, dateStrikes[0].ID)
chartGeneral(ctxAlan2, dateAlanFirst, dateAlanFirst[0].ID)
