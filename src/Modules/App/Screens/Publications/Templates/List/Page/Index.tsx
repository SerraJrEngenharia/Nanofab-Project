// React
import React from "react";

// Native Components
import { Container, Section, Aside, Title, Items } from "./Style";

// Components
import PublicationComponent from "../Components/Publication/Index";

// @Types
import { PageProps } from "./Types";

const ListTemplate: React.FC<PageProps> = ({ year, list }) => {
  return (
    <Container>
      <Section>
        <Aside>
          <Title>{year}</Title>
        </Aside>

        <Items>
          {list.map((eachItem) => (
            <PublicationComponent
              key={list.indexOf(eachItem)}
              description={eachItem.description}
            />
          ))}
        </Items>
      </Section>
    </Container>
  );
};

export default ListTemplate;
