import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  margin: 50px 0px;
`;

export const Section = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const Aside = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d5d4d4;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: -70px;
  left: 10px;
`;

export const Logo = styled.img`
  height: 180px;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  text-align: center;
`;

export const Items = styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
`;
