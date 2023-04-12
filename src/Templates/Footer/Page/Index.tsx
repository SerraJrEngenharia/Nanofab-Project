// React
import React from "react";

// Native Components
import { Container, Text, Line, FirstBottomSection, SecondBottomSection, Title, DivColumn, TextCustom, Position, LogoImage } from "./Style";

//images
import UerjLogo from "@/Assets/Banner/uerj.png"

// @Types
import { PageProps } from "./Types";

const FooterTemplate: React.FC<PageProps> = ({}) => {
  return (
    <Container>

      <FirstBottomSection>

        <LogoImage src={UerjLogo}/>
        
        <Position>
          <DivColumn>
            <Title>Email</Title>
            <TextCustom>adsad@gmail.com</TextCustom>
          </DivColumn>

          <DivColumn>
            <Title>Funciomento</Title>
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
