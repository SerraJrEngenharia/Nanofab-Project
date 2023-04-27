// React
import React from "react";

// Native Components
import { Container } from "./Style";

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from "./Types";

import Form from "./Templates/Form/Index"

const ProjectsPage: React.FC<PageProps> = ({}) => {
  return (
    <Container>
      <HeaderTemplate />

      <Form></Form>

      <FooterTemplate />
    </Container>
  );
};

export default ProjectsPage;
