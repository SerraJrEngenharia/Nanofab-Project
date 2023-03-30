// React
import React from "react";

// Native Components
import { Container, FirstLabel, SecondLabel } from "./Style";

// @Types
import { LabelProps } from "./Types";

const LabelComponent: React.FC<LabelProps> = ({
  name,
  unit,
  bond,
  titration,
  personFunction,
}) => {
  return (
    <Container>
      <FirstLabel>{name}</FirstLabel>
      <SecondLabel>{unit}</SecondLabel>
      <SecondLabel>{bond}</SecondLabel>
      <SecondLabel>{titration}</SecondLabel>
      <SecondLabel>{personFunction}</SecondLabel>
    </Container>
  );
};

export default LabelComponent;
