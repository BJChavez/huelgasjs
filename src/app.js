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
chartGeneral(ctxAlan1, dataAlanFirst, dataAlanFirst[0])
chartGeneral(ctxFujimori, dataFujimori, dataFujimori[0])
chartGeneral(ctxPaniagua, dataPaniagua, dataPaniagua[0])
chartGeneral(ctxToledo, dataToledo, dataToledo[0])
chartGeneral(ctxAlan2, dataAlanTwo, dataAlanTwo[0])
chartGeneral(ctxOllanta, dataOllanta, dataOllanta[0])
chartGeneral(ctxPPK, dataPPK, dataPPK[0])
chartGeneral(ctxVizcarra, dataVizcarra, dataVizcarra[0])
chartGeneral(ctxSagasti, dataSagasti, dataSagasti[0])
