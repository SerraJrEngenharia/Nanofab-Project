// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";

const ProgressPage: React.FC<PageProps> = ({}) => {
  return (
    <Container>
      <HeaderTemplate />

      <FooterTemplate />
    </Container>
  );
};

export default ProgressPage;
