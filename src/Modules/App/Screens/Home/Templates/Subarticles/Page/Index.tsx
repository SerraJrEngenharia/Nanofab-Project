// React
import React from "react";

// Native Components
import { Container } from "./Style";

// @Types
import { SubArticleProps } from "./Types";

// Components
import CardComponent from "../Components/Card/Index";

const SubArticlesPage: React.FC<SubArticleProps> = ({ cards }) => {
  return (
    <Container>
      {cards.map((eachDescription) => (
        <CardComponent
          key={cards.indexOf(eachDescription)}
          image={eachDescription.image}
          title={eachDescription.title}
          text={eachDescription.text}
        />
      ))}
    </Container>
  );
};

export default SubArticlesPage;
