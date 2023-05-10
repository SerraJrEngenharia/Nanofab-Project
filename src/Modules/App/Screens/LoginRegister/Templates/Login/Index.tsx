// React
import React from 'react';

// Native Components
import { Container, Title, Text, Input, Button, InputContainer, Section, LinkContainer, Link } from './Style';

// @Types
import { LoginProps } from './Types';

const RedefPassword: React.FC<LoginProps> = ({formLogin, setFormLogin}) => {
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
          <Link href={"/Nanofab-Project/login/create_Account"}>Não tem conta? Crie uma!</Link>
          <Link href={"/Nanofab-Project/login/Redefine_Password"}>
            Esqueci minha senha
          </Link>
        </LinkContainer>
      </Section>

      <Button onClick={() => console.log(formLogin)}>Entrar</Button>
    </Container>
  );
}

export default RedefPassword;