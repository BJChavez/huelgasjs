import { chartGeneral } from './components/index.js'
import { arraysData } from '../data/db.js'

const containerGeneral = document.querySelector('#containerG')

function createChart(){
    arraysData.forEach(e => {
        const newDiv = document.createElement('div')
        newDiv.className = 'row'

        const newCanvas = document.createElement('canvas')
        newCanvas.setAttribute('id', e.id)

        newDiv.append(newCanvas)
        containerGeneral.append(newDiv)

        chartGeneral(newCanvas.id, e.options, e.title)
    });   
}

createChart()
