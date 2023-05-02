import csvDownload from 'json-to-csv-export'
import { allData } from '../data/allDb.js'

const convert = {
  data: allData,
  filename: 'dataset',
  delimiter: ','
}

export function download (btn) {
  btn.addEventListener('click', () => {
    return csvDownload(convert)
  })
}
