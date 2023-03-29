// React
import React from "react";

// Native Components
import { Container, Text } from "./Style";

// @Types
import { LinkProps } from "./Types";

const LinkComponent: React.FC<LinkProps> = ({ name }) => {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
};

export default LinkComponent;
