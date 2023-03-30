// React
import React from "react";

// Native Components
import { Container, Section, Message } from "./Style";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";

const ErrorPage: React.FC<PageProps> = ({}) => {
  return (
    <Container>
      <HeaderTemplate />

      <Section>
        <Message>Aconteceu um problema, tente novamente mais tarde</Message>
      </Section>

      <FooterTemplate />
    </Container>
  );
};

export default ErrorPage;
