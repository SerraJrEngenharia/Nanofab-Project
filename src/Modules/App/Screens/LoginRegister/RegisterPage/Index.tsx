// React
import React, { useState } from 'react';

// Native Components
import { Container, Section, Line } from './Style';

// @Types
import { ComponentLoginRegisterProps } from './Types';

// Templates
import HeaderTemplate from "@/Templates/Header/Page/Index";
import FooterTemplate from "@/Templates/Footer/Page/Index";

//imports components 
import Register from "../Templates/Register/Index"

const ComponentLoginRegister: React.FC<ComponentLoginRegisterProps> = ({}) => {

  return (
    <Container>
      <HeaderTemplate />
      
      <Section>
        <Register />
      </Section>

      <FooterTemplate />
    </Container>
);
}

export default ComponentLoginRegister;