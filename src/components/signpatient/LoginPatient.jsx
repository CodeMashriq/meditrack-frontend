'use client'
import { loginUrl } from '@/api/urls'
import axios from 'axios'
import { useStore } from '@/store/Store'

const LoginPatient = async (username,password) => {
    
    await axios.post(loginUrl,{
        username,
        password,
    })
    .then(function(res) {
        useStore.setState({done: true})
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('id', res.data.data.patient.id);
        console.log(res)
    })
    .catch(function(err) {
        useStore.setState({done: false})
        console.log(err)
    })

}

export default LoginPatient