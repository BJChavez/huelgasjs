import JSpdf from 'jspdf'

const pdf = new JSpdf('a3')

export function chartPdf (data) {
  const ig = new Image()
  ig.src = data.toDataURL('image/png')
  pdf.addImage(ig, 'JPEG', 25, 30, 250, 100)
  // pdf.addImage(canvasImage, 'PNG', 10, 10, 150, 80)
}
