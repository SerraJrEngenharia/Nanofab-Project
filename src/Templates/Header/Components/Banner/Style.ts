import styled from "styled-components";
import { width } from "@/Services/screenSizes";

import BackgroundSvg from "@/Assets/Banner/background.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${BackgroundSvg});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${width.mobile}) {
    flex-direction: column;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    flex-direction: column;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 60%;
  }
`;

export const Logo = styled.img`
  width: 20%;

  @media screen and (max-width: ${width.mobile}) {
    width: 250px;
    margin-top: 15px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${width.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {
    width: 400px;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`;

export const LogoNANO = styled.img`
  width: 20%;

  @media screen and (max-width: ${width.mobile}) {
    width: 250px;
    margin-top: 15px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 250px;
    margin-top: 15px;
  }

  @media screen and (min-width: 767px) and (max-width: ${width.tablet}) {
    width: 250px;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    width: 250px;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    width: 400px;
  }
  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {
    width: 500px;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 650px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    width: 900px;
  }

  border-radius: 10px;
`;

export const LogoUERJ = styled.img`
  width: 30%;
  margin-left: 17%;

  @media screen and (max-width: ${width.mobile}) {
    width: 80%;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 80%;
    margin-top: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: ${width.tablet}) {
    width: 35%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    width: 40%;
    margin-left: 20%;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    width: 30%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {
    width: 25%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 35%;
    margin-left: 20%;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}) {
    width: 35%;
  }

  border-radius: 10px;
`;

export const LeftLogo = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterLogo = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightLogo = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;