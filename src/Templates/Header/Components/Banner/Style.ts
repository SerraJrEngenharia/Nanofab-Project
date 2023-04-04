import styled from "styled-components";

import BackgroundSvg from "@/Assets/Banner/background.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  background-image: url(${BackgroundSvg});
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`;

export const Items = styled.div`
  width: 60%;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: red; */
`;

export const Logo = styled.img`
  height: 95%;
  border-radius: 10px;
`;
