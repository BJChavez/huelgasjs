import { chartGeneral } from './components/graphic.js'
import { arraysData } from '../data/db.js'

const containerGeneral = document.querySelector('#chart')

function createChart(){
    arraysData.forEach(data => {

        const newCanvas = document.createElement('canvas')
        
        newCanvas.classList.add(
        'md:m-10',
        'm-0',
        'p-2',
        'border-2',
        'border-slate-900', 
        'rounded-md',
        'bg-white',)

        newCanvas.setAttribute('id', data.id)
        containerGeneral.append(newCanvas)

        chartGeneral(newCanvas.id, data.options, data.title)
    });   
}

createChart()
