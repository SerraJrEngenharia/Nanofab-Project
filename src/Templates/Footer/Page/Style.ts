import styled from "styled-components";
import { width } from "@/Services/screenSizes";

export const Container = styled.div`
  display: flex;
  justify-content: bottom;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.middleground};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 15px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.large}px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
`;

export const Line = styled.div`
  width: 85%;
  height: 2px;
  background: ${({ theme }) => theme.colors.text.content};
  margin-bottom: 10px;

  @media screen and (max-width: ${width.mobile}) {    
    width: 50%;
  }
`;

export const SecondBottomSection = styled.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${width.mobile}) {    
    flex-direction: column;
  }
`;

export const Text = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.content};

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
`;

export const Title = styled.h3`

`;  

export const DivColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6%;
  
`;

export const TextCustom = styled.span`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.content};
  width: 70%;

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    font-size: ${({ theme }) => theme.fonts.extralarge}px;
  }
`;

export const FirstBottomSection = styled.div`
  width: 83%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
  margin-top: 1%;

  @media screen and (max-width: ${width.mobile}) {    
    width: 100%;
    margin-bottom: 3%;
    justify-content: flex-end;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {      
    width: 100%;
    margin-bottom: 3%;
    justify-content: flex-end;
  } 
  @media screen and (min-width: 700px) and (max-width: 900px) {      
    width: 83%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1%;
    margin-top: 1%;
  }
`;

export const Position = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${width.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {      
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } 

  @media screen and (min-width: 700px) and (max-width: 900px) {      
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  filter: grayscale(1);

  @media screen and (max-width: ${width.mobile}) {
    margin-right: 3%;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    margin-right: 5%;
  }

  @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {
    width: 130px;
    height: 130px;
  }

  @media screen and (min-width: ${width.extraLargeDesktop}) {
    width: 200px;
    height: 200px;
  }
`;