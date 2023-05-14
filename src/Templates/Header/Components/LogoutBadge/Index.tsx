// React
import React, { useContext } from "react";

// Native Components
import { Container, UserText, Text, IconLogout, IconContainer } from "./Style";
import { toast } from "react-toastify";

// @Types
import { LogoutBadgeProps } from "./Types";
import { AuthContext } from "@/Modules/App/Context/Auth";
import { useNavigate } from "react-router-dom";

const LogoutBadge: React.FC<LogoutBadgeProps> = ({user}) => {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
      await logout() 
      navigate("/")
    } catch(e) {
      toast.error("Erro, tente novamente.")
    }
  }

  return (
    <Container>
      <UserText>Olá, {user.Name}</UserText>
      
      <IconContainer onClick={() => handleLogout()}>
        <Text>Sair</Text>
        <IconLogout />
      </IconContainer>
    </Container>
  );
};

export default LogoutBadge;
