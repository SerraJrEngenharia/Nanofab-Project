// React
import React from "react";

// Native Components
import { Container, Image } from "./Style";

// @Types
import { LogoProps } from "./Types";

const LogoComponent: React.FC<LogoProps> = ({ url }) => {
  return (
    <Container>
      <Image src={url} />
    </Container>
  );
};

export default LogoComponent;
