// React
import React from "react";

// Native Components
import { Container } from "./Style";

// @Types
import { NavigationProps } from "./Types";

//Components
import Link from "../Components/Link/Index";

const NavigationTemplate: React.FC<NavigationProps> = ({}) => {
  const options = [
    {
      name: "Home",
    },
    {
      name: "Equipe",
    },
    {
      name: "Andamento",
    },
    {
      name: "Submissão de Projetos",
    },
    {
      name: "Publicações",
    },
    {
      name: "Parcerias",
    },
  ];

  return (
    <Container>
      {options.map((eachOption) => (
        <Link key={options.indexOf(eachOption)} name={eachOption.name} />
      ))}
    </Container>
  );
};

export default NavigationTemplate;
