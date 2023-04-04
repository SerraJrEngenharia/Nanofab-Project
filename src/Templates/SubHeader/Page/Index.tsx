// React
import React from "react";

// Native Components
import { Container, Section } from "./Style";

// Components
import LogoComponent from "../Components/Logo/Index";
import TitleComponent from "../Components/Title/Index";

// @Types
import { PageProps } from "./Types";

const SubHeaderTemplate: React.FC<PageProps> = ({ title, image }) => {
  return (
    <Container>
      <Section>
        <LogoComponent url={image} />

        <TitleComponent title={title} />
      </Section>
    </Container>
  );
};

export default SubHeaderTemplate;
