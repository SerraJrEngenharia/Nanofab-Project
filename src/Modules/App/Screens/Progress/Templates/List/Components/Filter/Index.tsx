// React
import React from 'react';

// Native Components
import { FContainer, FTitle, FCombobox, FButtonFilter, FFilterContainer } from './Style';

// @Types
import { FilterProps } from './Types';

const Filter: React.FC<FilterProps> = ({}) => {
  return (
    <FContainer> 
      <FTitle>Filtro</FTitle>

      <FFilterContainer>
        <FCombobox>
          <option value="sadlsak">Todos</option>
          <option value="sadlsak">Aprovado</option>
          <option value="sadlsak">Agendado</option>
          <option value="sadlsak">Solicitado</option>
        </FCombobox>

        <FButtonFilter>
          Filtrar
        </FButtonFilter>

      </FFilterContainer>
    </FContainer>
);
}

export default Filter;