// React
import React from "react";

// Native Components
import {
  Container,
  FirstLabel,
  SecondLabel,
 
} from "./Style";

// @Types
import { ItemProps } from "./Types";

const ItemComponent: React.FC<ItemProps> = ({
  name,
  institution,
  startDate,
  endDate,
  samples,
  situation,
  styleActive
}) => {
  return (
    <Container styleActive={styleActive}>
      <FirstLabel>{name}</FirstLabel>
      <SecondLabel>{institution}</SecondLabel>
      <SecondLabel>{startDate}</SecondLabel>
      <SecondLabel>{endDate}</SecondLabel>
      <SecondLabel>{samples}</SecondLabel>
      <SecondLabel>{situation}</SecondLabel>
    </Container>
  );
};

export default ItemComponent;
