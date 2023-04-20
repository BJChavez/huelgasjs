import { chartGeneral } from './components/graphic.js'
import { arraysData } from '../data/db.js'

const containerGeneral = document.querySelector('#chart')

function createChart(){
    arraysData.forEach(data => {

        const newCanvas = document.createElement('canvas')
        
        newCanvas.classList.add('lg:m-20','md:m-14','m-8','border-2','border-text', 'rounded-xl','p-3', 'bg-canva')

        newCanvas.setAttribute('id', data.id)
        containerGeneral.append(newCanvas)

        chartGeneral(newCanvas.id, data.options, data.title)
    });   
}

createChart()

const seleChart = document.querySelector('#seleChart')

seleChart.addEventListener('change', () => {

    console.log(newCanvas.id)

})