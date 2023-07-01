'use client'
import { loginUrl } from '@/api/urls'
import axios from 'axios'
import { useStore } from '@/store/Store'

const LoginPatient = async (username,email,password) => {
    
    await axios.post(loginUrl,{
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

export default LoginPatient