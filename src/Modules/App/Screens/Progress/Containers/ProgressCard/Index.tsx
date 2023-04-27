// React
import React from "react";

// Native Components
import { Container, Content, Status, Text, Title, TitleText } from "./Style";

// @Types
import { ProgressCardComponentProps } from "./Types";

const ProgressCardComponent: React.FC<ProgressCardComponentProps> = ({name, institution, startDate, endDate, samples, situation}) => {
  return (
    <Container>
      <Title>
        <TitleText>{name} - {institution}</TitleText>
      </Title>
      
      <Content>
        <Text>Data de Solicitação: {startDate}</Text>
        <Text>Data Final: {endDate ? endDate : 'Não informado'}</Text>
        <Text>Quantidade de Amostras: {samples}</Text>
      </Content>
      <Status status={situation}>{situation}</Status>

    </Container>
  );
};

export default ProgressCardComponent;
