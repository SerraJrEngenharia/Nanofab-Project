// React
import React from "react";

// Native Components
import { Container, Text, Content } from "./Style";

//Components
import LogoComponent from "../Components/Logo/Index";
import TitleComponent from "../Components/Title/Index";

// @Types
import { PageProps } from "./Types";

const ArticlePage: React.FC<PageProps> = ({ descriptions }) => {
  return (
    <Container>
      <LogoComponent />

      <TitleComponent title="Sobre o NANOFAB" />

      <Content>
        {descriptions.map((eachDescription) => (
          <Text key={descriptions.indexOf(eachDescription)}>
            {eachDescription.text}
          </Text>
        ))}
      </Content>
    </Container>
  );
};

export default ArticlePage;
