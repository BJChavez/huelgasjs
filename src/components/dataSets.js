
export const data = (option) => {
    const dataSet = {
        labels: option.map(a => a.ANIOS),
        datasets: [
            {
                label: '# Pliego de reclamos',
                data: option.map(p => p.HUELGAS_PLIEGO_RECLAMOS),
                backgroundColor: '#f0c808',
                borderWidth: 1,
                borderColor: '#f0c808',
                yAxisID: 'y'
            },
            {
                label: '# Otras causas',
                data: option.map(c => c.HUELGAS_OTRAS_CAUSAS),
                backgroundColor: '#004e89',
                borderWidth: 1,
                borderColor: '#004e89',
                yAxisID: 'y1'
            }
        ]
    }

    return dataSet
}

//export const dataa = {
//    labels: option.map(a => a.ANIOS),
//    datasets: [
//        {
//            label: '# Pliego de reclamos',
//            data: option.map(p => p.HUELGAS_PLIEGO_RECLAMOS),
//            backgroundColor: '#f0c808',
//            borderWidth: 1,
//            borderColor: '#f0c808'
//        },
//        {
//            label: '# Otras causas',
//            data: option.map(c => c.HUELGAS_OTRAS_CAUSAS),
//            backgroundColor: '#004e89',
//            borderWidth: 1,
//            borderColor: '#004e89'
//        }
//    ]
//}