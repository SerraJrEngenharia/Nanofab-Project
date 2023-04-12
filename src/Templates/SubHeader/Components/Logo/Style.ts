import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  height: 10vh;
  padding: 35px;
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;

  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {
    height: 180px;
    width: 180px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    height: 250px;
    width: 250px;
  }
`;

