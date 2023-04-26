// React
import React from 'react';

// Native Components
import { Container, LogoContainer, Logo, Title } from './Style';
import FunctionCardComponent from '../Components/FunctionCard/Index';

// @Types
import { ListDropdownTemplateProps } from './Types';

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
            return(
                <FunctionCardComponent
                    key={list.indexOf(eachItem)} 
                    title={eachItem.personFunction} 
                    persons={eachItem.persons}
                />
            )
        })
        }
        
    </Container>
);
}

export default ListDropdownTemplate;