// React
import React from "react";
import { useState } from "react";

// Native Components
import {
  Container,
  ButtonNavigate,
  ButtonsNavigation,
  FilterSection,
  FilterTitle,
  Combobox,
  FilterButton,
  FilterContainer,
  ScheduleContainer
} from "./Style";

// @Types
import { PageProps } from "./Types";
import ProgressCardComponent from "../../../Containers/ProgressCard/Index";

const ListTemplate: React.FC<PageProps> = ({ list }) => {

  
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(9)
  const [filter, setFilter] = useState('')

  const increaseIndex = () =>{
    setFirstIndex(firstIndex+9)
    setLastIndex(lastIndex+9)
  }
  
  const decreaseIndex = () =>{
    if(firstIndex === 0)
    {
      setFirstIndex(0)
      setLastIndex(9)
    }
    else
    {
      setFirstIndex(firstIndex-9)
      setLastIndex(lastIndex-9)
    }
  }

  const defineFilter = (filter: string) => {
    if(filter === 'Todos')
    {
      setFilter('Todos')
    }
    else if(filter === 'Aprovado')
    {
      setFilter('Aprovado')
    }
    else if(filter === 'Agendado')
    {
      setFilter('Agendado')
    }
    else if(filter === 'Solicitado')
    {
      setFilter('Solicitado')
    }
  }

  return (
    <Container>

      <FilterSection>
        <FilterTitle>Filtro</FilterTitle>
        <FilterContainer>
          
          <Combobox>
            <option value="Todos">
              <FilterButton onClick={() => {defineFilter('Todos')}}>Todos</FilterButton>
            </option>
            <option value="Aprovado">
              <FilterButton onClick={() => {defineFilter('Aprovado')}}>Aprovado</FilterButton>
            </option>
            <option value="Agendado">
              <FilterButton onClick={() => {defineFilter('Agendado')}}>Agendado</FilterButton>
            </option>
            <option value="Solicitado">
              <FilterButton onClick={() => {defineFilter('Solicitado')}}>Solicitado</FilterButton>
            </option>
          </Combobox>

          <FilterButton>
            Filtrar
          </FilterButton>

        </FilterContainer>
      </FilterSection>
      
      <ScheduleContainer>
        {list.slice(firstIndex, lastIndex).map((eachItem) => (
          <ProgressCardComponent
            key={list.indexOf(eachItem)}
            name={eachItem.name}
            institution={eachItem.institution}
            startDate={eachItem.startDate}
            endDate={eachItem.endDate}
            samples={eachItem.samples}
            situation={eachItem.situation}

          />
        ))}
      </ScheduleContainer>

      <ButtonsNavigation>
        <ButtonNavigate onClick={decreaseIndex}>Anterior</ButtonNavigate>
        <ButtonNavigate onClick={increaseIndex}>Próxima</ButtonNavigate>
      </ButtonsNavigation>
    </Container>
  );
};

export default ListTemplate;
