import { chartGeneral } from './components/index.js'
import {dataAlanFirst, dataAlanTwo, dataFujimori, dataOllanta, dataPPK, dataPaniagua, dataSagasti, dataToledo, dataVizcarra} from '../data/presidents.js'


//El problema es los id
//const ctxAlan1 = document.querySelector('#alan1').getContext('2d')
//const ctxFujimori = document.querySelector('#fujimori').getContext('2d')
//const ctxPaniagua = document.querySelector('#paniagua').getContext('2d')
//const ctxToledo = document.querySelector('#toledo').getContext('2d')
//const ctxAlan2 = document.querySelector('#alan2').getContext('2d')
//const ctxOllanta = document.querySelector('#ollanta').getContext('2d')
//const ctxPPK = document.querySelector('#ppk').getContext('2d')
//const ctxVizcarra = document.querySelector('#vizcarra').getContext('2d')
//const ctxSagasti = document.querySelector('#sagasti').getContext('2d')

//const arraysCtx = [ctxAlan1, ctxFujimori, ctxPaniagua, ctxToledo, ctxAlan2, ctxOllanta, ctxPPK, ctxVizcarra, ctxSagasti]
const arraysData = [dataAlanFirst, dataAlanTwo, dataFujimori, dataOllanta, dataPPK, dataPaniagua, dataSagasti, dataToledo, dataVizcarra]

console.log(arraysData)

const containerG = document.querySelector('#containerG')

function createForm(){

    for(let i = 0; i <= arraysData.length; i++){

        chartGeneral(i, i.options, i.ide)

        //const newDiv = document.createElement('div')
        //newDiv.className = 'row'
//
        //const newCanvas = document.createElement('canvas')
        //newCanvas.setAttribute('id', i.ide)
//
        //containerG.append(newDiv)
        //newDiv.append(newCanvas)
//
        //chartGeneral(i, i.options, i.title)
    }
}

createForm()


//chartGeneral(ctxAlan1, dataAlanFirst.options, dataAlanFirst.title)
//chartGeneral(ctxFujimori, dataFujimori.options, dataFujimori.title)
//chartGeneral(ctxPaniagua, dataPaniagua.options, dataPaniagua.title)
//chartGeneral(ctxToledo, dataToledo.options, dataToledo.title)
//chartGeneral(ctxAlan2, dataAlanTwo.options, dataAlanTwo.title)
//chartGeneral(ctxOllanta, dataOllanta.options, dataOllanta.title)
//chartGeneral(ctxPPK, dataPPK.options, dataPPK.title)
//chartGeneral(ctxVizcarra, dataVizcarra.options, dataVizcarra.title)
//chartGeneral(ctxSagasti, dataSagasti.options, dataSagasti.title)
