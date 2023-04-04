// React
import React from "react";

// Native Components
import { Container, Text } from "./Style";

// @Types
import { TitleProps } from "./Types";

const TitleComponent: React.FC<TitleProps> = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

export default TitleComponent;
