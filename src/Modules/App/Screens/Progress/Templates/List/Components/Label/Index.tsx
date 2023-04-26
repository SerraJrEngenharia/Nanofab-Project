// React
import React from "react";

// Native Components
import { Container, FirstLabel, SecondLabel } from "./Style";

// @Types
import { LabelProps } from "./Types";

const LabelComponent: React.FC<LabelProps> = ({
  name,
  institution,
  startDate,
  endDate,
  samples,
  situation
}) => {
  return (
    <Container>
      <FirstLabel>{name}</FirstLabel>
      <SecondLabel>{institution}</SecondLabel>
      <SecondLabel>{startDate}</SecondLabel>
      <SecondLabel>{endDate}</SecondLabel>
      <SecondLabel>{samples}</SecondLabel>
      <SecondLabel>{situation}</SecondLabel>
    </Container>
  );
};

export default LabelComponent;
