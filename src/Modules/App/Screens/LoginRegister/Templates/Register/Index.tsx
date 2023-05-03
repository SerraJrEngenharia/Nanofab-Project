// React
import React from 'react';

// Native Components
import { Container, Title, Text, Input, Button, InputContainer } from './Style';

// @Types
import { RegisterProps } from './Types';

const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <Container>
        <Title>Registrar-se</Title>

        <InputContainer>
          <Text>Nome de Usuário:</Text>
          <Input placeholder="Digite seu Nome"></Input>
        </InputContainer>

        <InputContainer>
          <Text>Email:</Text>
          <Input placeholder="Digite seu Email"></Input>
          </InputContainer>

        <InputContainer>
          <Text>Senha:</Text>
          <Input type="password" placeholder="Digite sua senha"></Input>
          </InputContainer>
          
        <InputContainer>
          <Text>Confirmar senha:</Text>
          <Input type="password" placeholder="Confirme sua senha"></Input>
        </InputContainer>

        <Button>Registrar</Button>

    </Container>
);
}

export default Register;