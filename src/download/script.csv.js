import csvDownload from 'json-to-csv-export'
import { allData } from '../data/allDb.js'

/*
Esta logica esta separada por que es una funcionalidad de convertir y transformar un archivo .json
*/
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
