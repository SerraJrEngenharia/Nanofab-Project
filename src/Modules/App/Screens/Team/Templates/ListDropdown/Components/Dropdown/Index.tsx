// React
import React, { useState } from 'react';

// Native Components
import { Container, Content, Title, Text, ButtonArea, TextContainer, SubTitle } from './Style';
import { RiArrowDropUpFill } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";

// @Types
import { DropdownComponentProps } from './Types';

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  name, 
  unit, 
  bond,  
  titration
}) => {

  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <ButtonArea onClick={() => setVisible(!visible)} isVisible={visible}>
        <Title>{name}</Title>
        {visible ?
          <RiArrowDropUpFill size={20}/>
          :
          <RiArrowDropDownFill size={20}/>
        }
      </ButtonArea>

      {visible ?
        <Content isVisible={visible}>
            <TextContainer>
              <SubTitle>PPG/IES</SubTitle>
              <Text>{unit}</Text>
            </TextContainer>

            <TextContainer>
              <SubTitle>Vínculo</SubTitle>
              <Text>{bond}</Text>
            </TextContainer>

            <TextContainer>
              <SubTitle>Titulação</SubTitle>
              <Text>{titration}</Text>
            </TextContainer>
        </Content>
        :
        null
      }
    </Container>
);
}

export default DropdownComponent;