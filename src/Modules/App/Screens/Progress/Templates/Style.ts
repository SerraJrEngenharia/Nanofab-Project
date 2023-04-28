import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #d9d9d9aa;
  border-radius: 30px;
  margin: 3%;
  margin-top: 5%;
  padding: 2%;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  padding-bottom: 10px;
  border-bottom: 2px solid #4a4a4a;
  width: 90%;
  text-align: center;
`;