// React
import React from "react";

// Native Components
import { Container, Text } from "./Style";
import { IoPersonCircleOutline } from "react-icons/io5";

// @Types
import { LoginBadgeProps } from "./Types";

const LoginBadge: React.FC<LoginBadgeProps> = ({}) => {
  return (
    <Container>
      <Text>Entrar</Text>
      <IoPersonCircleOutline size={40} />
    </Container>
  );
};

export default LoginBadge;
