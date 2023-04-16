import { chartGeneral } from './components/graphic.js'
import { arraysData } from '../data/db.js'

const containerGeneral = document.querySelector('#chart')

function createChart(){
    arraysData.forEach(data => {

        const newDiv = document.createElement('div')
        const newCanvas = document.createElement('canvas')
        
        newDiv.classList.add('p-4')
        newCanvas.classList.add('p-3',
        'border-2',
        'border-slate-900', 
        'rounded-md',
        'bg-white')

        newCanvas.setAttribute('id', data.id)

        newDiv.append(newCanvas)
        containerGeneral.append(newDiv)

        chartGeneral(newCanvas.id, data.options, data.title)
    });   
}

createChart()
