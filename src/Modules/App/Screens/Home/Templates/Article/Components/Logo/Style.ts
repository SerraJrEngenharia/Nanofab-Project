import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  position: absolute;
  top: -70px;
  left: -70px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 100%;

  @media screen and (max-width: ${width.mobile}) {    
    top: -10px;
    left: -10px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    top: -10px;
    left: -10px;
  }

`;

export const Image = styled.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: ${width.mobile}) {    
      width: 100px;
      height: 100px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    width: 100px;
    height: 100px;
  }
`;
