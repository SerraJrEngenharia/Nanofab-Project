// React
import React from 'react';

// Native Components
import { Container } from './Style';

// @Types
import { ListDropdownTemplateProps } from './Types';
import DropdownComponent from '../Components/Dropdown/Index';

const ListDropdownTemplate: React.FC<ListDropdownTemplateProps> = ({list}) => {
  return (
    <Container>
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