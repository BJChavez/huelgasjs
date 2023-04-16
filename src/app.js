import { chartGeneral } from './components/index.js'
import { arraysData } from '../data/db.js'

const containerGeneral = document.querySelector('#containerG')

function createChart(){
    arraysData.forEach(e => {

        const newDiv = document.createElement('div')
        const newCanvas = document.createElement('canvas')
        
        newDiv.classList.add('p-12',
        'pl-36',
        'pr-36')
        newCanvas.classList.add('p-3', 
        'border-2', 
        'rounded-md')

        newCanvas.setAttribute('id', e.id)

        newDiv.append(newCanvas)
        containerGeneral.append(newDiv)

        chartGeneral(newCanvas.id, e.options, e.title)
    });   
}

createChart()
