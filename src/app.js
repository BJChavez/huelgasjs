import { chartGeneral } from './components/graphic.js'
import { arraysData } from '../data/db.js'

const containerGeneral = document.querySelector('#chart')

function createChart(){
    arraysData.forEach(data => {

        //const newDiv = document.createElement('div')
        const newCanvas = document.createElement('canvas')
        
        // newDiv.classList.add(
        // 'p-5', 
        // 'mx-auto',
        // 'w-5/6')
        newCanvas.classList.add(
        'md:m-10',
        'm-0',
        'p-2',
        'border-2',
        'border-slate-900', 
        'rounded-md',
        'bg-white',)

        newCanvas.setAttribute('id', data.id)

        //newDiv.append(newCanvas)
        containerGeneral.append(newCanvas)

        chartGeneral(newCanvas.id, data.options, data.title)
    });   
}

createChart()
