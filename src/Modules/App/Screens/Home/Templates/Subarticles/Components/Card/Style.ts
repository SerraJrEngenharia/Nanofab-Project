import styled from "styled-components";
import { width } from "@/Services/screenSizes";

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

  @media screen and (max-width: ${width.mobile}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {   
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    text-align: left;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -90px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 100%;
  margin-top: 5%;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: scale-down;
  overflow: visible;
`;

export const Text = styled.span`
  margin: 10px;
  font-size: ${({ theme }) => theme.fonts.small}px;
  padding: 20px;
  text-align: justify;
`;

export const Title = styled.span`
  margin: 20px;
  font-weight: bold;
  line-height: 30px;
  font-size: ${({ theme }) => theme.fonts.medium}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  text-align: center;
  margin-top: 90px;

  @media screen and (max-width: ${width.mobile}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
    margin-bottom: 5px;
  }
  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {   
    margin-bottom: 0px;
    margin: 10px;
    margin-top: 100px;
  }
`;
