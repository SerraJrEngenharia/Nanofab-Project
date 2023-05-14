// React
import React from "react";

// Native Components
import { Container, LoginContainer, LogoCompany, NavigationContainer, Section } from "./Style";

// Assets
//import NanoImage from "@/Assets/Company/nanofab.png";
import NanoImage from "@/Assets/Company/nanofab.png";

// Components
import BannerComponent from "../Components/Banner/Index";

// Templates
import NavigationTemplate from "../Templates/Navigation/Page/Index";
import MobileNavigationTemplate from "../Templates/MobileNavigation/Index";

// @Types
import { PageProps } from "./Types";
import LoginBadge from "../Components/LoginBadge/Index";
import { useNavigate } from "react-router-dom";
import UserStatus from "../Templates/UserStatus/Index";


const HeaderTemplate: React.FC<PageProps> = ({}) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Section>
        <MobileNavigationTemplate />
        
        <LogoCompany src={NanoImage} onClick={() => navigate("/")}/>

        <UserStatus  />
       
      </Section>
      
      <BannerComponent />
    </Container>
  );
};

export default HeaderTemplate;
