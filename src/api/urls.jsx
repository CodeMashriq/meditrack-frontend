export const registerUrl = "http://209.38.233.196:3000/patients/auth/signup" 

export const loginUrl = "http://209.38.233.196:3000/patients/auth/login" 

export const createProfileUrl = (patientId) => {
    return `http://209.38.233.196:3000/patients/${patientId}/profile` 
}