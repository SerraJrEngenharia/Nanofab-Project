// React
import React from 'react';

// Native Components
import { Container, Title, Combobox, ButtonFilter, FilterContainer, ButtonsNavigation, ButtonNavigate} from './Style';

// @Types
import { FilterProps } from './Types';

const Filter: React.FC<FilterProps> = ({}) => {
  return (
    <Container> 
      <Title>Filtro</Title>

      <FilterContainer>
        <Combobox/>

        <ButtonFilter>
          Filtrar
        </ButtonFilter>

      </FilterContainer>

      <ButtonsNavigation>
        <ButtonNavigate>Anterior</ButtonNavigate>
        <ButtonNavigate>Próxima</ButtonNavigate>
      </ButtonsNavigation>
    </Container>
);
}

export default Filter;