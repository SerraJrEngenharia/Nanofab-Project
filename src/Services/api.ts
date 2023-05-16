import { RegisterProps } from "@/Modules/App/Screens/LoginRegister/Templates/Register/Types";
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000' //Development URL
    // baseURL: '' //Production URL
})

export const getUsers = async () => {
    let url = '/users'

    return api.get(url)
}

export const createUsers = async (data: RegisterProps) => {
    let url = '/user'
    const {nome, publica, inst, telefone, ramal, funcao, email, departamento, usuario, senha1, outro} = data

    return await api.post(url, {
        name: nome,
        instituteType: publica ? "pública" : "privado",
        institute: inst,
        phone: telefone,
        phoneBranch: ramal,
        role: funcao,
        email: email,
        department: departamento,
        username: usuario,
        password: senha1,
        others: outro
    })
}

export const createSession = async (email: string, password: string) => {
    return await api.post('/login', {email, password})
}

// nome: nome,
// publica: publica,
// privada: privada,
// inst: inst,
// telefone: telefone,
// ramal: ramal,
// funcao: funcao,
// email: email,
// departamento: dept,
// usuario: usuario,
// senha1: senha1,
// outro: outro,