import { download } from './src/download/download.js'
import { chartView } from './src/components/charts.js'
// const CANVAS_CLASS = ['lg:m-20', 'md:m-10', 'm-2', 'border-2', 'border-dashed', 'border-borde', 'rounded-lg', 'p-3', 'bg-canva']
const containerGeneral = document.querySelector('#chart')
const dw = document.querySelector('#download')

download.scriptCsv(dw)
chartView.createChart(containerGeneral)
