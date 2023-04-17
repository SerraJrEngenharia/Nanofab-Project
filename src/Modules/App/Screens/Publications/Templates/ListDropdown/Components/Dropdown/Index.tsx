// React
import React, { useState } from 'react';

// Native Components
import { Container, Content, Title, Text, ButtonArea, TextGroup, TextContainer, SubTitle } from './Style';
import { RiArrowDropUpFill } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";

// @Types
import { DropdownComponentProps } from './Types';

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  year, 
  descriptions,
}) => {

  const [visible, setVisible] = useState(false)

  return (
    <Container>
      <ButtonArea onClick={() => setVisible(!visible)} isVisible={visible}>
        <Title>{year}</Title>
        {visible ?
          <RiArrowDropUpFill size={20}/>
          :
          <RiArrowDropDownFill size={20}/>
        }
      </ButtonArea>

      {visible ?
        <Content isVisible={visible}>
          
          {/* {{descriptions.map((eachItem)=>{
            return(
              <TextContainer>
                <Text>{eachItem.description}<Text>
              </TextContainer>
            )
          })}} */}

        </Content>
        :
        null
      }
    </Container>
);
}

export default DropdownComponent;