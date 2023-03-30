// React
import React from "react";

// Native Components
import { Container, Image } from "./Style";

// @Types
import { LogoProps } from "./Types";

// Images
import ChemistryIcon from '../../../../../../../../Assets/Chemistry/chemistry.png';

const LogoComponent: React.FC<LogoProps> = ({}) => {
  return (
    <Container>
      <Image src={ChemistryIcon} />
    </Container>
  );
};

export default LogoComponent;
