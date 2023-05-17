import csvDownload from 'json-to-csv-export'
import { allData } from '../../data/allDb.js'

class Download {
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
