import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  border-bottom: 2px solid #4A4A4A;
  width: 90%;
  text-align: center;
`;