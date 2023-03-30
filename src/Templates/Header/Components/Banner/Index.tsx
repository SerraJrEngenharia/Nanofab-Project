// React
import React from "react";

// Native Components
import { Container, Logo } from "./Style";

// @Types
import { BannerProps } from "./Types";

// Images
// import LogoUerj from "@/Assets/Banner/uerj.png";
// import LogoNanoFab from "@/Assets/Banner/nanofab-lab.png";
// import LogoEngrenagem from "@/Assets/Banner/engrenagem.png";
import LogoUerj from "../../../../Assets/Banner/uerj.png";
import LogoNanoFab from "../../../../Assets/Banner/nanofab-lab.png";
import LogoEngrenagem from "../../../../Assets/Banner/engrenagem.png";

const BannerComponent: React.FC<BannerProps> = ({}) => {
  return (
    <Container>
      <Logo src={LogoEngrenagem} />
      <Logo src={LogoNanoFab} />
      <Logo src={LogoUerj} />
    </Container>
  );
};

export default BannerComponent;
