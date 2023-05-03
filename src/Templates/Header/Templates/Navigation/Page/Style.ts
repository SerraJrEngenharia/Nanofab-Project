import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 1299px) {    
    display: none;
  }
`;
