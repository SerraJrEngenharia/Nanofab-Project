import styled from 'styled-components';

import { width } from '@/Services/screenSizes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LogoContainer = styled.div`

`;

export const Logo = styled.img`
  height: 120px;
  @media screen and (max-width: ${width.mobile}) {
    height: 80px;
  }

  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    height: 100px;
  }

  @media screen and (min-width: 700px) and (max-width: 821px) {
    height: 100px;
  }
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.extralarge}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  text-align: center;

  margin-bottom: 20px;

  @media screen and (max-width: ${width.mobile}) {
    font-size: ${({ theme }) => theme.fonts.medium}px;
  }
  
  @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {
    font-size: ${({ theme }) => theme.fonts.large}px;
  }
  
  @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
    font-size: ${({ theme }) => theme.fonts.large}px;
  }
`;