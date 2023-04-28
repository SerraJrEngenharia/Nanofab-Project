// React
import React from "react";

// Native Components
import { Container, LoginContainer, LogoCompany, Section } from "./Style";

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


const HeaderTemplate: React.FC<PageProps> = ({}) => {
  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Equipe",
      url: "/equipe",
    },
    {
      name: "Andamento",
      url: "/andamento",
    },
    {
      name: "Submissão de Projetos",
      url: "/submissao_projetos",
    },
    {
      name: "Publicações",
      url: "/publicacoes",
    },
    {
      name: "Parcerias",
      url: "/parcerias",
    },
  ];

  return (
    <Container>
      <Section>
        <LogoCompany src={NanoImage} />

        <NavigationTemplate urls={navLinks} />
        <MobileNavigationTemplate />
      </Section>

      <LoginContainer>
        <LoginBadge />
      </LoginContainer>

      <BannerComponent />
    </Container>
  );
};

export default HeaderTemplate;
