// React
import React from "react";

// Native Components
import { Container, Text, Line, BottomSection } from "./Style";

// @Types
import { PageProps } from "./Types";

const FooterTemplate: React.FC<PageProps> = ({}) => {
  return (
    <Container>
      <Line />
      <BottomSection>
        <Text>Ⓒ Serra Jr. Engenharia 2022</Text>
        <Text>Todos os direitos reservados</Text>
      </BottomSection>
    </Container>
  );
};

export default FooterTemplate;
