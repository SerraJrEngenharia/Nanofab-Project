// React
import React from 'react';

// Native Components
import { Container, Section, Line } from './Style';

// @Types
import { ComponentLoginRegisterProps } from './Types';

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

//imports components 
import RedefPassw from "../Templates/RedefinePassword/Index"

const ComponentRedefPassw: React.FC<ComponentLoginRegisterProps> = ({}) => {
  return (
    <Container>
      <HeaderTemplate />
      
      <Section>
        <RedefPassw />
      </Section>

      <FooterTemplate />
    </Container>
);
}

export default ComponentRedefPassw;