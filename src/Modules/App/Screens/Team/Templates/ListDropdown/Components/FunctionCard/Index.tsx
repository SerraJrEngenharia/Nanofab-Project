// React
import React, { useState } from "react";

// Native Components
import { Container, Text, Title, Content } from "./Style";
import DropdownComponent from "../Dropdown/Index";

// @Types
import { FunctionCardProps } from "./Types";

const FunctionCardComponent: React.FC<FunctionCardProps> = ({
  title,
  persons,
}) => {
  return (
    <Container>
      <Title>
        <Text>{title}</Text>
      </Title>

      <Content>
        {persons.map((eachItem) => {
          return (
            <DropdownComponent
              key={persons.indexOf(eachItem)}
              name={eachItem.name}
              bond={eachItem.bond}
              titration={eachItem.titration}
              unit={eachItem.unit}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default FunctionCardComponent;
