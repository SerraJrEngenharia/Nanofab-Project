// React
import React from 'react';

// Native Components
import { Container, Title, Text, Input, Button, InputContainer, Section } from './Style';

// @Types
import { LoginProps } from './Types';

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Container>
        <Title>Entrar</Title>
        

        <Section>

        <InputContainer>
          <Text>Email ou Nome de Usuário:</Text>
          <Input placeholder="Digite seu Email"></Input>
        </InputContainer>

        <InputContainer>
          <Text>Senha:</Text>
          <Input type="password" placeholder="Digite sua senha"></Input>
          </InputContainer>
        </Section>

        <Button>Entrar</Button>

    </Container>
);
}

export default Login;