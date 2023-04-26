// React
import React from 'react';

// Native Components
import { Container, Title } from './Style';

// @Types
import { TemplatesProps } from './Types';

import Filter from "./Filter/Index"
import List from "./List/Page/Index"

const Templates: React.FC<TemplatesProps> = ({}) => {

  const listDescription = [
    {
      name: "Maria Paiva",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado"
    },
    {
      name: "Maria Paiva",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Aprovado"
    }
  ]
  return (
    <Container>
        <Title>Lista de Solitações</Title>
        
        <Filter/>

        <List list={listDescription}/>

    </Container>
);
}

export default Templates;