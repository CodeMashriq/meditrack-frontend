'use client'
import { createProfileUrl } from '@/api/urls'
import axios from 'axios'

import chronicDiseases from './chronicDiseases'
import { useStore } from '@/store/Store'



const CreateProfile = async (data) => {

    // chronicDiseases(data)

    const token = localStorage.getItem("token")
    const patientId = localStorage.getItem("id")

    await axios.post(createProfileUrl(5),{
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
    .then(function(res) {
        useStore.setState({done: true}) 
        console.log(res)
    })
    .catch(function(err) {
        useStore.setState({done: false})  
        console.log(err)
    })

}

export default CreateProfile 





