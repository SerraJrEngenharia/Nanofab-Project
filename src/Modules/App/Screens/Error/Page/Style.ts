import styled from "styled-components";
import BackgroundSvg from "@/Assets/Background/background2.svg";

export const Container = styled.div`
  width: 100%;
  min-width: 100vh;
  background-image: url(${BackgroundSvg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Section = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fonts.large}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.highlight};
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.auxiliary.error.dark};
  border-radius: 20px;
`;
