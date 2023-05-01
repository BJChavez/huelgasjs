import jsonToCsvExport from 'https://cdn.jsdelivr.net/npm/json-to-csv-export@2.1.1/+esm'
import { allData } from '../../data/allDb.js'

const convert = {
  data: allData,
  filename: 'dataset',
  delimiter: ','
}

export function download (btn) {
  btn.addEventListener('click', () => {
    return jsonToCsvExport(convert)
  })
}
