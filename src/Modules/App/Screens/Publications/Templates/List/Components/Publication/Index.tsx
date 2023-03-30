// React
import React from "react";

// Native Components
import { Container, Text } from "./Style";

// @Types
import { PublicationProps } from "./Types";

const PublicationComponent: React.FC<PublicationProps> = ({ description }) => {
  return (
    <Container>
      <Text>{description}</Text>
    </Container>
  );
};

export default PublicationComponent;
