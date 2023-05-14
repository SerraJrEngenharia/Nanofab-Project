import React, { createContext, useEffect, useState, ReactNode } from "react";

import { createSession } from "@/Services/api";
import { api } from "@/Services/api";

interface ContextProps{
    authenticated: boolean,
    user: {
        CodUser: number | null,
        Email: string,
        Name: string
    }
    login: (email: string, password: string) => void
    logout: () => void
}

interface ContextProviderProps{
    children: ReactNode
}

export const AuthContext = createContext<ContextProps>({} as ContextProps)

export const AuthProvider: React.FC<ContextProviderProps> = ({ children }) => {

    const [user, setUser] = useState({
        CodUser: null,
        Name: "",
        Email: ""
    })

    useEffect(() =>{
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        if(user && token){
            setUser(JSON.parse(user))
            api.defaults.headers.Authorization = `Bearer ${token}`
        }
    }, [])

    const login = async (email: string, password: string) => {
        const response = await createSession(email, password)

        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`
        setUser(response.data.user)
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('userResult')

        api.defaults.headers.Authorization = null

        setUser({
            CodUser: null,
            Name: "",
            Email: ""
        })
    }

    return(
        <AuthContext.Provider value={{authenticated: (user.CodUser === null ? false : true), user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}