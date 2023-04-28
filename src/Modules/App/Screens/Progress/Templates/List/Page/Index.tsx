// React
import React, { ChangeEvent } from "react";
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
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(9);
  const [filter, setFilter] = useState("Todos");
  const [aux, setAux] = useState("");

  const increaseIndex = () => {
    if (firstIndex === 9) {
      setFirstIndex(firstIndex);
      setLastIndex(lastIndex);
    } else {
      setFirstIndex(firstIndex + 9);
      setLastIndex(lastIndex + 9);
    }
  };

  const decreaseIndex = () => {
    if (firstIndex === 0) {
      setFirstIndex(0);
      setLastIndex(9);
    } else {
      setFirstIndex(firstIndex - 9);
      setLastIndex(lastIndex - 9);
    }
  };

  const renderListItens = list
    .slice(firstIndex, lastIndex)
    .filter((eachItem) => {
      if (filter === "Todos") {
        return true;
      } else {
        return eachItem.situation === filter;
      }
    })
    .map((eachItem) => (
      <ProgressCardComponent
        key={list.indexOf(eachItem)}
        name={eachItem.name}
        institution={eachItem.institution}
        startDate={eachItem.startDate}
        endDate={eachItem.endDate}
        samples={eachItem.samples}
        situation={eachItem.situation}
      />
    ));

  function changingSelection(element: ChangeEvent<HTMLSelectElement>){
    
    // switch(element.target.value)
    // {
    //   case 'Todos':
    //     setFilter("Todos");
    //   case 'Aprovado':
    //     setFilter("Aprovado");
    //   case 'Agendado':
    //     setFilter("Agendado");
    //   case 'Solicitado':
    //     setFilter("Solicitado");
    // }

    if(element.target.value === 'Todos')
    {
      setFilter('Todos')
    }
    else if(element.target.value === 'Aprovado')
    {
      setFilter('Aprovado')
    }
    else if(element.target.value === 'Agendado')
    {
      setFilter('Agendado')
    }
    else if(element.target.value === 'Solicitado')
    {
      setFilter('Solicitado')
    }
    else if(element.target.value === 'Recentes')
    {
      setFilter('Recentes')
    }
  }
  return (
    <Container>
      <FilterSection>
        <FilterTitle>Filtro</FilterTitle>
        <FilterContainer>
          <Combobox onChange={(e) => changingSelection(e)}>
            <option value="Todos">Todos</option>
            <option value="Aprovado">Aprovado</option>
            <option value="Agendado">Agendado</option>
            <option value="Solicitado">Solicitado</option>
            <option value="Recentes">Recentes</option>
          </Combobox>

          <FilterButton>Filtrar</FilterButton>
        </FilterContainer>
      </FilterSection>

      <ScheduleContainer>{renderListItens}</ScheduleContainer>

      <ButtonsNavigation>
        <ButtonNavigate onClick={decreaseIndex}>Anterior</ButtonNavigate>
        <ButtonNavigate onClick={increaseIndex}>Próxima</ButtonNavigate>
      </ButtonsNavigation>
    </Container>
  );
};

export default ListTemplate;
