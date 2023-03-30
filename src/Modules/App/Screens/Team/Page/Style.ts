import styled from "styled-components";

import BackgroundSvg from "@/Assets/Background/background2.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${BackgroundSvg});
  background-repeat: no-repeat;
  background-size: cover;
`;
