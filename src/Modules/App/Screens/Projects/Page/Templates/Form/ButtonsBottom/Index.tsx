// React
import React from 'react';

// Native Components
import { Container, ButtonContainer, Button } from './Style';

// @Types
import { ButtonsBottomProps } from './Types';


const ButtonsBottom: React.FC<ButtonsBottomProps> = ({}) => {
  return (
    <Container>
        <ButtonContainer>
            <Button>Apagar</Button>
            <Button>Enviar</Button>
        </ButtonContainer>
    </Container>
);
}

export default ButtonsBottom;