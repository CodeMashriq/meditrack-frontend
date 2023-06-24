import { loginUrl } from '@/api/urls'
import axios from 'axios'
import { useStore } from '@/store/Store'

const LoginPatient = async (username,email) => {
    
  await axios.post(loginUrl,{
      username,
      email,
  })
  .then(function() {
      useStore.setState({done: true})
  })
  .catch(function() {
      useStore.setState({done: false})
  })

}

export default LoginPatient