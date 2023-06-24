import { registerUrl } from '@/api/urls'
import axios from 'axios'
import { useStore } from '@/store/Store'

const RegisterPatient = async (username,email,passowrd) => {
    
    await axios.post(registerUrl,{
        username,
        email,
        passowrd,
    })
    .then(function() {
        useStore.setState({done: true})
    })
    .catch(function() {
        useStore.setState({done: false})
    })

}

export default RegisterPatient