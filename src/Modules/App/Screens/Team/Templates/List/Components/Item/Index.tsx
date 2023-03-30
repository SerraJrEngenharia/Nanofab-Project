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
  unit,
  bond,
  titration,
  personFunction,
  styleActive
}) => {
  return (
    <Container styleActive={styleActive}>
      <FirstLabel>{name}</FirstLabel>
      <SecondLabel>{unit}</SecondLabel>
      <SecondLabel>{bond}</SecondLabel>
      <SecondLabel>{titration}</SecondLabel>
      <SecondLabel>{personFunction}</SecondLabel>
    </Container>
  );
};

export default ItemComponent;
