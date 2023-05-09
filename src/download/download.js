import csvDownload from 'json-to-csv-export'
import { allData } from '../../data/allDb.js'
import JSpdf from 'jspdf'

class Download {
  chartPdf (data) {
    const pdf = new JSpdf()
    const ig = new Image()
    ig.src = data.toDataURL('image/jpeg', 1.0)
    pdf.setFontSize(20)
    pdf.addImage(ig, 'PNG', 15, 15, 280, 150)
    // pdf.save('ssss.pdf')
  }

  scriptCsv (btn) {
    const convert = {
      data: allData,
      filename: 'dataset',
      delimiter: ','
    }

    btn.addEventListener('click', () => {
      return csvDownload(convert)
    })
  }
}

export const download = new Download()
