// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import ListTemplate from "../Templates/List/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";

const TeamPage: React.FC<PageProps> = ({}) => {
  const persons = [
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Regina Maria Mel",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
    {
      name: "Aleef Jorfer",
      unit: "IPRJ - UERJ",
      bond: "Permanente",
      titration: "Doutor",
      personFunction: "Coordenador",
    },
  ];

  return (
    <Container>
      <HeaderTemplate />

      <ListTemplate list={persons} />

      <FooterTemplate />
    </Container>
  );
};

export default TeamPage;
