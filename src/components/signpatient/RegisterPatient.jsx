'use client'
import { registerUrl } from '@/api/urls'
import axios from 'axios'
import { useStore } from '@/store/Store'

const RegisterPatient = async (username,email,password) => {

    await axios.post(registerUrl,{
        username,
        email,
        password,
    })
    .then(function(res) {
        useStore.setState({done: true})
        console.log(res)
    })
    .catch(function(err) {
        useStore.setState({done: false})
        console.log(err)
    })

}

export default RegisterPatient