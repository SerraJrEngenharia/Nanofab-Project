import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 35px;
  margin-top: 80px;
  text-align: justify;
  overflow: visible;
  margin-bottom: 5%;
  position: relative;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 100%;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`;

export const Text = styled.span`
  margin: 20px;
  font-size: ${({ theme }) => theme.fonts.small}px;
  padding: 20px;
`;

export const Title = styled.span`
  margin: 20px;
  font-weight: bold;
  line-height: 30px;
  font-size: ${({ theme }) => theme.fonts.medium}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  text-align: center;
  margin-top: 90px;
`;
