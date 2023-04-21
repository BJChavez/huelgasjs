import { chartGeneral } from './components/graphic.js'
import { dataPresidents } from '../data/db.js'

const containerGeneral = document.querySelector('#chart')

function createChart(){
    
    dataPresidents.map(data => {

        const newCanvas = document.createElement('canvas')
        const newDiv = document.createElement('div')
        
        newCanvas.classList.add('lg:m-20','md:m-14','m-8','border-2','border-text', 'rounded-xl','p-3', 'bg-canva')
        newCanvas.setAttribute('id', data.id)

        newDiv.append(newCanvas)
        containerGeneral.append(newDiv)

        const test = chartGeneral(newCanvas.id, data.options, data.title)
        
    });
}

createChart()