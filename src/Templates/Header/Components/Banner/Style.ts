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
`;

export const Logo = styled.img`
  width: 20%;

  @media screen and (max-width: ${width.mobile}) {    
    width: 50%;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    width: 50%;
  }
  
  border-radius: 10px;
`;
