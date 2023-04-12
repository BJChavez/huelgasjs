import { chartGeneral } from './components/index.js'
import { dataStrikes } from '../data/strikes.js'

import {dataAlanFirst, dataAlanTwo, dataFujimori, dataOllanta, dataPPK, dataPaniagua, dataSagasti, dataToledo, dataVizcarra} from '../data/presidents.js'


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

chartGeneral(ctxGeneral, dataStrikes)
chartGeneral(ctxAlan1, dataAlanFirst, "hola")
chartGeneral(ctxFujimori, dataFujimori)
chartGeneral(ctxPaniagua, dataPaniagua)
chartGeneral(ctxToledo, dataToledo)
chartGeneral(ctxAlan2, dataAlanTwo)
chartGeneral(ctxOllanta, dataOllanta)
chartGeneral(ctxPPK, dataPPK)
chartGeneral(ctxVizcarra, dataVizcarra)
chartGeneral(ctxSagasti, dataSagasti)
