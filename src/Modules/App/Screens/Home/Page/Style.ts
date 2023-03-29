import styled from "styled-components";
import BackgroundSvg from "@/Assets/Background/background2.svg";

export const Container = styled.div`
  width: 100%;
  height: 350vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* background-color: #F8F8F8; */
  background-image: url(${BackgroundSvg});
`;
