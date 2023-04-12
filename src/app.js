import { chartGeneral } from './components/index.js'
import { dateStrikes } from '../data/strikes.js'
import { dateAlanFirst } from '../data/alanFirst.js'
import { dateAlanTwo } from '../data/alanTwo.js'
import { dateFujimori } from '../data/fujimori.js'
import { dateOllanta } from '../data/ollanta.js'
import { datePaniagua } from '../data/paniagua.js'
import { datePPK } from '../data/ppk.js'
import { dateSagasti } from '../data/sagasti.js'
import { dateToledo } from '../data/toledo.js'
import { dateVizcarra } from '../data/vizcarra.js'

const ctxGeneral = document.querySelector('#general')
const ctxAlan1 = document.querySelector('#alan1')
const ctxFujimori = document.querySelector('#fujimori')
const ctxPaniagua = document.querySelector('#paniagua')
const ctxToledo = document.querySelector('#toledo')
const ctxAlan2 = document.querySelector('#alan2')
const ctxOllanta = document.querySelector('#ollanta')
const ctxPPK = document.querySelector('#ppk')
const ctxVizcarra = document.querySelector('#vizcarra')
const ctxSagasti = document.querySelector('#sagasti')

chartGeneral(ctxGeneral, dateStrikes)
chartGeneral(ctxAlan1, dateAlanFirst)
chartGeneral(ctxFujimori, dateFujimori)
chartGeneral(ctxPaniagua, datePaniagua)
chartGeneral(ctxToledo, dateToledo)
chartGeneral(ctxAlan2, dateAlanTwo)
chartGeneral(ctxOllanta, dateOllanta)
chartGeneral(ctxPPK, datePPK)
chartGeneral(ctxVizcarra, dateVizcarra)
chartGeneral(ctxSagasti, dateSagasti)
