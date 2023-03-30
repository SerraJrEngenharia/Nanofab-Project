// React
import React from "react";

// Native Components
import { Container, Text } from "./Style";

// @Types
import { LinkProps } from "./Types";

const LinkComponent: React.FC<LinkProps> = ({ name, url }) => {
  return (
    <Container href={url}>
      <Text>{name}</Text>
    </Container>
  );
};

export default LinkComponent;
