import { chartGeneral } from './components/index.js'
import {dataAlanFirst, dataAlanTwo, dataFujimori, dataOllanta, dataPPK, dataPaniagua, dataSagasti, dataToledo, dataVizcarra} from '../data/dbpresidents.js'

const arraysData = [
    dataAlanFirst,
    dataFujimori,
    dataPaniagua,
    dataToledo, 
    dataAlanTwo, 
    dataOllanta, 
    dataPPK,
    dataVizcarra,
    dataSagasti,]


const containerGeneral = document.querySelector('#containerG')

function createChart(){
    arraysData.forEach(e => {
        const newDiv = document.createElement('div')
        newDiv.className = 'row'

        const newCanvas = document.createElement('canvas')
        newCanvas.setAttribute('id', e.ide)

        newDiv.append(newCanvas)
        containerGeneral.append(newDiv)

        chartGeneral(newCanvas.id, e.options, e.title)
    });   
}

createChart()
