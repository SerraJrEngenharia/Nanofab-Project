// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";

import Templates from "../Templates/Index"

const ProgressPage: React.FC<PageProps> = ({}) => {
  return (
    <Container>
      <HeaderTemplate />

      <Templates/>
      
      <FooterTemplate />
    </Container>
  );
};

export default ProgressPage;
