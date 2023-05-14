// React
import React, { useContext } from "react";

// Native Components
import { Container } from "./Style";

// @Types
import { UserStatusProps } from "./Types";
import { AuthContext } from "@/Modules/App/Context/Auth";
import LoginBadge from "../../Components/LoginBadge/Index";
import LogoutBadge from "../../Components/LogoutBadge/Index";

const UserStatus: React.FC<UserStatusProps> = ({}) => {

  const { user, authenticated } = useContext(AuthContext)

  return (
    <Container>
      {!authenticated ?
        <LoginBadge />
        :
        <LogoutBadge user={user}/>
      }
      
    </Container>
  );
};

export default UserStatus;
