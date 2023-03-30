import styled from "styled-components";
import BackgroundSvg from "@/Assets/Background/background2.svg";


export const Container = styled.div`
  width: 100%;
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${BackgroundSvg});
  background-repeat: no-repeat;
  background-size: cover;
`;
