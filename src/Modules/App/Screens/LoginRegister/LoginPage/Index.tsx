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
import Login from "../Templates/Login/Index"

const ComponentLoginRegister: React.FC<ComponentLoginRegisterProps> = ({}) => {

  const [formLogin, setFormLogin] = useState({
    email: "",
    senha: ""
  })
  
  return (
    <Container>
      <HeaderTemplate />
      
      <Section>
        <Login formLogin={formLogin} setFormLogin={setFormLogin}/>
      </Section>

      <FooterTemplate />
    </Container>
);
}

export default ComponentLoginRegister;