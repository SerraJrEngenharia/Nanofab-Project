// React
import React from 'react';

// Native Components
import { Container, Title } from './Style';

// @Types
import { TemplatesProps } from './Types';

// import Filter from "./Filter/Index"
import List from "./List/Page/Index"

const Templates: React.FC<TemplatesProps> = ({}) => {

  const listDescription = [
    {
      name: "Pedro Carlos",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Pedro Carlos",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Pedro Carlos",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Roberto Lima",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Aprovado",
    },

    {
      name: "Victor Costa",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Aprovado",
    },
    {
      name: "Maria Paula",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Agendado",
    },
    {
      name: "Sandra Barros",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Victoria Maria",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Joana Saraiva",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Pedro Carlos",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Roberto Lima",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Aprovado",
    },
    {
      name: "Victor Costa",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Agendado",
    },
    {
      name: "Maria Paula",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Finalizado",
    },
    {
      name: "Sandra Barros",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Victoria Maria",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Joana Saraiva",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Solicitado",
    },
    {
      name: "Joana Saraiva",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Agendado",
    },
    {
      name: "Joana Saraiva",
      institution: "UFRJ",
      startDate: "07 de dezembro",
      endDate: null,
      samples: 1,
      situation: "Antigos",
    },
  ];
  
  return (
    <Container>
        <Title>Lista de Solitações</Title>

        <List list={listDescription}/>

    </Container>
);
}

export default Templates;