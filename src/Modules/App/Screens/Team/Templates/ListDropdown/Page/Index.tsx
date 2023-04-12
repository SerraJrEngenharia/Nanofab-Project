// React
import React from 'react';

// Native Components
import { Container, LogoContainer, Logo, Title } from './Style';

// @Types
import { ListDropdownTemplateProps } from './Types';
import DropdownComponent from '../Components/Dropdown/Index';

// Assets
import TeamIcon from "@/Assets/Team/team.png";

const ListDropdownTemplate: React.FC<ListDropdownTemplateProps> = ({list}) => {
  return (
    <Container>
        <LogoContainer>
            <Logo src={TeamIcon} />
        </LogoContainer>

        <Title>Equipe NANOFAB</Title>
        {list.map((eachItem) => {
            return (
                <DropdownComponent 
                    key={list.indexOf(eachItem)} 
                    name={eachItem.name}  
                    bond={eachItem.bond} 
                    personFunction={eachItem.personFunction} 
                    titration={eachItem.titration} 
                    unit={eachItem.unit}
                />
            )
        })}
        
    </Container>
);
}

export default ListDropdownTemplate;