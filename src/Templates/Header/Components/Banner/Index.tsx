// React
import React from "react";

// Native Components
import { Container, Items, Logo } from "./Style";

// @Types
import { BannerProps } from "./Types";

// Images
// import LogoUerj from "@/Assets/Banner/uerj.png";
// import LogoNanoFab from "@/Assets/Banner/nanofab-lab.png";
// import LogoEngrenagem from "@/Assets/Banner/engrenagem.png";
import LogoUerj from "@/Assets/Banner/uerj.png";
import LogoNanoFab from "@/Assets/Banner/nanofab-lab.png";

const BannerComponent: React.FC<BannerProps> = ({}) => {
  return (
    <Container>
      <Items>
        <Logo src={LogoNanoFab} />
        <Logo src={LogoUerj} />
      </Items>
    </Container>
  );
};

export default BannerComponent;
