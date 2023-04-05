import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1023px) {    
    display: none;
  }
`;
