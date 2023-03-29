// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";

const HomePage: React.FC<PageProps> = ({}) => {
  return (
    <Container>
      <HeaderTemplate
        key={Math.random()}
        leftLogoTitle="Left Logo da esquerda"
      />

      <FooterTemplate />
    </Container>
  );
};

export default HomePage;
