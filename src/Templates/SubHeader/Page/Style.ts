import styled from "styled-components";
import { width } from "@/Services/screenSizes";


export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {
    margin-bottom: 2%;
  }
`;

export const Section = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
  margin-bottom: 70px;
`;
