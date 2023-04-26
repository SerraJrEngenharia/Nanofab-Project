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
    width: 60%;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 50%;
    margin-top: 15px;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    width: 40%;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    width: 35%;
  }
  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {
    width: 25%;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 40%;
  }

  border-radius: 10px;
`;

export const LogoUERJ = styled.img`
  width: 10%;
  border-radius: 10px;
  margin-left: 150px;

  @media screen and (max-width: ${width.mobile}) {
    width: 30%;
    margin-left: 0px;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 30%;
    margin-left: 0px;
  }

  @media screen and (min-width: 768px) and (max-width: 769px) {
    width: 22%;
    margin-left: 0px;
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
    width: 22%;
    margin-left: 0px;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    width: 12%;
    margin-left: 190px;
  }
  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {
    width: 10%;
  }
  @media screen and (min-width: 2560px) and (max-width: ${width.largeDesktop}) {
    width: 8%;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 20%;
  }
`;