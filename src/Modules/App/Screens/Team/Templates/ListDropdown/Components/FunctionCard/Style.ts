import styled from 'styled-components';
import { width } from '@/Services/screenSizes';

export const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;

    border-radius: 40px;
    
    @media screen and (max-width: ${width.mobile}) {
        width: 90%;
    }  
    
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
        width: 90%;
    }
`;

export const Text = styled.span`
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
  @media screen and (min-width: ${width.tablet}) and (max-width: 1025px) {
    font-size: ${({ theme }) => theme.fonts.large}px;
  }
  
  @media screen and (min-width: 2560px) and (max-width: ${width.extraLargeDesktop}) {    
    font-size: ${({ theme }) => theme.fonts.extralarge * 1.5}px;
  }
  @media screen and (min-width: ${width.extraLargeDesktop}){    
    font-size: ${({ theme }) => theme.fonts.extralarge * 2.0}px;
  }
`;

export const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #d5d4d4;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(217, 217, 217, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);

    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

    padding-top: 20px;
    padding-bottom: 20px;
`;

