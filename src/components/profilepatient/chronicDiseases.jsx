
const chronicDiseases = (data) => {

    let chronicDiseases = []
    const chronicDiseases1 = [
        {"Chronic obstructive pulmonary disease":data.copd},
        {"Arthrities":data.arthrities},
        {"Asthma":data.asthma},
        {"Cancer":data.cancer},
        {"Cardiovascular disease":data.cardiovascular},
        {"Mental health conditions":data.mental},
        {"Diabetes":data.diabetes},
    ]

    chronicDiseases1.map((item) => Object.values(item)[0] == true ? chronicDiseases.push(`${Object.keys(item)[0]}`) : null)

    return chronicDiseases

}

export default chronicDiseases