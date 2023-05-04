// React
import React from "react";

// Native Components
import {
  Container,
  Items,
  Logo,
  LogoUERJ,
  LeftLogo,
  RightLogo,
  CenterLogo,
  LogoNANO,
} from "./Style";

// @Types
import { BannerProps } from "./Types";

// Images
// import LogoUerj from "@/Assets/Banner/uerj.png";
// import LogoNanoFab from "@/Assets/Banner/nanofab-lab.png";
// import LogoEngrenagem from "@/Assets/Banner/engrenagem.png";
import LogoUerj from "@/Assets/Banner/logo-uerj.png";
import LogoNanoFab from "@/Assets/Banner/nanofab-lab.png";
import LogoPPGEM from "@/Assets/ParceriasLogos/LogoPPGEM-white.png"

const BannerComponent: React.FC<BannerProps> = ({}) => {
  return (
    <Container>
      <Items>
        <LeftLogo>
          <LogoUERJ src={LogoUerj} />
        </LeftLogo>
        <CenterLogo>
          <LogoNANO src={LogoNanoFab} />
        </CenterLogo>
        <RightLogo>
          <Logo src={LogoPPGEM} />
        </RightLogo>
      </Items>
    </Container>
  );
};

export default BannerComponent;
