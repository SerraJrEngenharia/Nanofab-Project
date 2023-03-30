// React
import React from "react";

// Native Components
import { Container, LogoCompany, Section } from "./Style";

// Assets
//import NanoImage from "@/Assets/Company/nanofab.png";
import NanoImage from "@/Assets/Company/nanofab.png";

// Components
import BannerComponent from "../Components/Banner/Index";

// Templates
import NavigationTemplate from "../Templates/Navigation/Page/Index";

// @Types
import { PageProps } from "./Types";

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
      </Section>

      <BannerComponent />
    </Container>
  );
};

export default HeaderTemplate;
