// React
import React from 'react';

// Native Components
import { Container, Title, Text, Input, Button, InputContainer, Section, LinkContainer, Link } from './Style';

// @Types
import { LoginProps } from './Types';

const RedefPassword: React.FC<LoginProps> = ({}) => {
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
        <LinkContainer>
          <Link href={"/Nanofab-Project/login/createAccount"}>Não tem conta? Crie uma!</Link>
          <Link href={"/Nanofab-Project/login/RedefinePassword"}>
            Esqueci minha senha
          </Link>
        </LinkContainer>
      </Section>

      <Button>Entrar</Button>
    </Container>
  );
}

export default RedefPassword;