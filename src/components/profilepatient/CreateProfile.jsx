'use client'
import { createProfileUrl } from '@/api/urls'
import axios from 'axios'
import { useStore } from '@/store/Store'

const CreateProfile = async (data,patientId) => {
    
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
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y…DMxfQ.mEEPHwJC6nlGIjM1jMxA1PTwu0ULUn8dY_Qzva-okpA"

    try{
    await axios.post(createProfileUrl(patientId),{
        name: {
            first: data.firstname,
            last: data.lastname
        },
        birthDate: data.birthdate,
        profession: data.profession,
        bloodType: data.bloodtype,
        chronicDiseases: "Diabetes",
        },
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        }
        )
    }
    catch(err) {
        console.log(err)
    }

}

export default CreateProfile 





