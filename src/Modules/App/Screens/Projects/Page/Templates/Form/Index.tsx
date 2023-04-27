// React
import React from 'react';

// Native Components
import { Container, LogoContainer, Image } from './Style';

// @Types
import { FormProps } from './Types';

import TypeProject from './TypeProject/Index'

import ButtonsBottom from './ButtonsBottom/Index'

//images
import Search from "@/Assets/Form/search.png";

const Form: React.FC<FormProps> = ({}) => {
  return (
    <Container>
        <LogoContainer><Image src={Search}/></LogoContainer>
        <TypeProject/>
        <ButtonsBottom/>
    </Container>
);
}

export default Form;