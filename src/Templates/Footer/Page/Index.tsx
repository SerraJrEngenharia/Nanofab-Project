// React
import React from "react";

// Native Components
import { Container, Text, Line, FirstBottomSection, SecondBottomSection, Title, DivColumn, TextCustom, Position } from "./Style";

//images
import UerjLogo from "@/Assets/Banner/uerj.png"

// @Types
import { PageProps } from "./Types";

const FooterTemplate: React.FC<PageProps> = ({}) => {
  return (
    <Container>

      <FirstBottomSection>

        <Position>
          
          <DivColumn>
            <Title>Endereço</Title>
            <TextCustom>Rua Fonseca Teles 121, São Cristóvão, Rio de Janeiro, CEP: 20.940-903</TextCustom>
          </DivColumn>
          
          <DivColumn>
            <Title>Email</Title>
            <TextCustom>nanofabuerj@gmail.com</TextCustom>
          </DivColumn>

          <DivColumn>
            <Title>Funcionamento</Title>
            <TextCustom>Segunda a sexta Xhrs às Yhrs</TextCustom>
          </DivColumn>

        </Position>
      </FirstBottomSection>

      <Line />

      <SecondBottomSection>
        <Text>Ⓒ Serra Jr. Engenharia 2022</Text>
        <Text>Todos os direitos reservados</Text>
      </SecondBottomSection>
    </Container>
  );
};

export default FooterTemplate;
