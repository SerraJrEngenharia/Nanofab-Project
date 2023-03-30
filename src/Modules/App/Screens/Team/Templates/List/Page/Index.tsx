// React
import React from "react";

// Native Components
import {
  Container,
  Section,
  Aside,
  LogoContainer,
  Logo,
  Title,
  Items,
} from "./Style";

// Assets
import TeamIcon from "@/Assets/Team/team.png";

// Components
import PublicationComponent from "@/Modules/App/Screens/Publications/Templates/List/Components/Publication/Index";
import LabelComponent from "../Components/Label/Index";
import ItemComponent from "../Components/Item/Index";

// @Types
import { PageProps } from "./Types";

const ListTemplate: React.FC<PageProps> = ({ list }) => {
  return (
    <Container>
      <Section>
        <Aside>
          <LogoContainer>
            <Logo src={TeamIcon} />
          </LogoContainer>

          <Title>Equipe NANOFAB</Title>
        </Aside>

        <Items>
          <LabelComponent
            name="Nome"
            unit="PPG/IES"
            bond="Vínculo"
            titration="Titulação"
            personFunction="Função"
          />

          {list.map((eachItem) => (
            <ItemComponent
              key={list.indexOf(eachItem)}
              name={eachItem.name}
              unit={eachItem.unit}
              bond={eachItem.bond}
              titration={eachItem.titration}
              personFunction={eachItem.personFunction}
              styleActive={list.indexOf(eachItem) % 2 === 0 ? true : false}
            />
          ))}
        </Items>
      </Section>
    </Container>
  );
};

export default ListTemplate;
