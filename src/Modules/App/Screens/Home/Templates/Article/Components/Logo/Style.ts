import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  position: absolute;
  top: -70px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 100%;

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
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${width.mobile}) {    
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
`;
