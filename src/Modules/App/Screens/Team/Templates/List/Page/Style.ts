import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  margin: 50px 0px;

  @media screen and (max-width: ${width.mobile}) {
    
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
  }

  @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {
  }
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

  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
        width: 95%;
    }
  @media screen and (min-width: ${width.largeNotebook}) and (max-width: ${width.desktop}) {    
    width: 90%;
  }
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
  @media screen and (max-width: ${width.mobile}) {
    top: -20px;
    left: -15px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    top: -50px;
    left: -10px;
  }
`;

export const Logo = styled.img`
  height: 160px;
  @media screen and (max-width: ${width.mobile}) {
    height: 80px;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    height: 100px;
  }

  @media screen and (min-width: 700px) and (max-width: 821px) {
    height: 120px;
  }

`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  text-align: center;

  @media screen and (max-width: ${width.mobile}) {
    font-size: ${({ theme }) => theme.fonts.medium}px;
  }
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    font-size: ${({ theme }) => theme.fonts.large}px;
  }
`;

export const Items = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${width.mobile}) {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 20px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #114676;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #114676;
    }
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 20px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #114676;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #114676;
    }
  }
`;
