// React
import React from 'react';

// Native Components
import { Container, Title, Text, Input, Button, InputContainer, Section, LinkContainer, Link } from './Style';

// @Types
import { RedefProps } from './Types';

const RedefPassw: React.FC<RedefProps> = ({}) => {
  return (
    <Container>
      <Title>Redefinição de Senha</Title>

      <Section>
        <InputContainer>
          <Text>Usuário:</Text>
          <Input placeholder="Digite seu usuário"></Input>
        </InputContainer>

        <InputContainer>
          <Text>Email:</Text>
          <Input placeholder="Digite seu email"></Input>
        </InputContainer>

        <InputContainer>
          <Text>Nova Senha:</Text>
          <Input type="password" placeholder="Digite sua senha"></Input>
        </InputContainer>

        <InputContainer>
          <Text>Confime a Nova Senha:</Text>
          <Input type="password" placeholder="Digite sua senha"></Input>
        </InputContainer>
      </Section>

      <Button>Redefinir</Button>
    </Container>
  );
}

export default RedefPassw;