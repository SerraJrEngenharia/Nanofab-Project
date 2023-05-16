// React
import React, { useContext } from 'react';

// Native Components
import { Container, Title, Text, Input, Button, InputContainer, Section, LinkContainer, Link } from './Style';
import { toast } from 'react-toastify'

// @Types
import { LoginProps } from './Types';
import { AuthContext } from '@/Modules/App/Context/Auth';
import { useNavigate } from 'react-router-dom';

const RedefPassword: React.FC<LoginProps> = ({formLogin, setFormLogin}) => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async () => {
    if(formLogin.email, formLogin.senha){
      try{
        await login(formLogin.email, formLogin.senha) 
        navigate("/")
      } catch(e) {
        toast.error("Erro, tente novamente.")
      }
    }
    else{
      toast.error('Preencha todos os campos de texto!')
    }
  }


  return (
    <Container>
      <Title>Entrar</Title>

      <Section>
        <InputContainer>
          <Text>Email ou Nome de Usuário:</Text>
          <Input 
            placeholder="Digite seu Email" 
            onChange={(e) =>
            setFormLogin(
                {   
                    ...formLogin,
                    email: e.target.value
                })} 
            />
        </InputContainer>
        
        <InputContainer>
          <Text>Senha:</Text>
          <Input type="password" placeholder="Digite sua senha"
            onChange={(e) =>
              setFormLogin(
                {   
                    ...formLogin,
                    senha: e.target.value
                })}
          />
        </InputContainer>
        <LinkContainer>
          <Link onClick={() => navigate("/criar_conta")}>Não tem conta? Crie uma!</Link>
          <Link onClick={() => navigate("/redefinir_senha")}>
            Esqueci minha senha
          </Link>
        </LinkContainer>
      </Section>

      <Button onClick={() => handleLogin()}>Entrar</Button>
    </Container>
  );
}

export default RedefPassword;