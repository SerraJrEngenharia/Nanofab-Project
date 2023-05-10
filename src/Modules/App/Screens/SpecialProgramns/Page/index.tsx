// React
import React from 'react';

// Native Components
import { Container } from './Style';

import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

// @Types
import { PageProps } from './Types';

const SpecialProgPage: React.FC<PageProps> = ({}) => {
  return (
    <Container>
      <HeaderTemplate />

      <FooterTemplate />
    </Container>
  );
}

export default SpecialProgPage;