import csvDownload from 'json-to-csv-export'
import { allData } from '../../data/allDb.js'
import JSpdf from 'jspdf'

class Download {
  chartPdf (data) {
    const pdf = new JSpdf()

    const ig = new Image()
    ig.src = data.toDataURL('image/png')
    pdf.addImage(ig, 'JPEG', 25, 30, 250, 100)
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
