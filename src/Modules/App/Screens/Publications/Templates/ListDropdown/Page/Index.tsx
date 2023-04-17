// React
import React from 'react';

// Native Components
import { Container, LogoContainer, Logo, Title } from './Style';

// @Types
import { ListDropdownTemplateProps } from './Types';
import DropdownComponent from '../Components/Dropdown/Index';

// Assets
import PublicationIcon from "@/Assets/Publications/publications2.svg";

const ListDropdownTemplate: React.FC<ListDropdownTemplateProps> = ({list}) => {
  return (
    <Container>
        <LogoContainer>
              <Logo src={PublicationIcon} />
        </LogoContainer>

        <Title>Equipe NANOFAB</Title>
        {list.map((eachItem) => {
            return (
                <DropdownComponent 
                    key={list.indexOf(eachItem)}
                    year={eachItem.year}
                    descriptions={eachItem.descriptions}
                />
            )
        })}
        
    </Container>
);
}

export default ListDropdownTemplate;