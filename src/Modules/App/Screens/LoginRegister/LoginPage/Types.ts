export interface ComponentLoginRegisterProps{

}

export interface LoginDataProps {
    formLogin: {
        email: string,
        senha: string
    },
    setFormLogin: React.Dispatch<React.SetStateAction<{
        email: string,
        senha: string
    }>>

}