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
                    year={eachItem.year}
                    descriptions={eachItem.descriptions}
                />
            )
        })}
        
    </Container>
);
}

export default ListDropdownTemplate;