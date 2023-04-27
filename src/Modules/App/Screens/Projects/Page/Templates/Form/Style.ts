import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 85%;
  background-color: #D9D9D9aa;
  border-radius: 30px;
  margin: 3%;
  margin-top: 5%;
  padding: 2%;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 100%;
/* 
  @media screen and (max-width: ${width.mobile}) {
    top: -5px;
    left: -5px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    top: -30px;
    left: -30px;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    top: -40px;
    left: -40px;
  } */
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;

  /* @media screen and (max-width: ${width.mobile}) {    
      width: 90px;
      height: 90px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 720px) and (max-width: 900px) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
    width: 200px;
    height: 200px; */
  }
`;
