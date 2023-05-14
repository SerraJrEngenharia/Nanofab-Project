// React
import React from "react";

// Native Components
import { Container, Text, IconLogin } from "./Style";

// @Types
import { LoginBadgeProps } from "./Types";
import { useNavigate } from "react-router-dom";

const LoginBadge: React.FC<LoginBadgeProps> = ({}) => {

  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate('/Login')}>
      <Text>Entrar</Text>
      <IconLogin />
    </Container>
  );
};

export default LoginBadge;
