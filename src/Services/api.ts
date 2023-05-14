import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000' //Development URL
    // baseURL: '' //Production URL
})

export const getUsers = async () => {
    let url = '/users'

    return api.get(url)
}

// export const createUsers = async (name, email, password, address, cep, lat, lon, points) => {
//     let url = '/users'

//     return await api.post(url, {name, email, password, address, cep, lat, lon, points})
// }

export const createSession = async (email: string, password: string) => {
    return await api.post('/login', {email, password})
}