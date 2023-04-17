import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${width.mobile}) {
    margin-top: 7%;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    margin-top: 6%;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    margin-top: 5%;
  }

  @media screen and (min-width: ${width.desktop}) and (max-width: ${width.largeDesktop}) {
    margin-top: 2%;
  }
`;