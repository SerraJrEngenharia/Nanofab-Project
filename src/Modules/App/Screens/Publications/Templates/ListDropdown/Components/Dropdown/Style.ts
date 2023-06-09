import styled from 'styled-components';
import { DropdownStyleProps } from './Types';
import { width } from '@/Services/screenSizes';

export const Container = styled.div`
    width: 40%;
    margin-bottom: 10px;

    @media screen and (max-width: ${width.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${width.largeMobile}) {    
        width: 70%;
    }

    @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
        margin-bottom: 20px;
    }
`;

export const ButtonArea = styled.button<DropdownStyleProps>`    
    width: 100%;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #c2c2c2;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    ${({isVisible}) => isVisible ?
        `border-bottom-left-radius: 0px;
         border-bottom-right-radius: 0px;
        
        -webkit-animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        
        @-webkit-keyframes fade-in {
            0% {
                opacity: 0;
                max-height: 0px;
            }
            100% {
                opacity: 1;
                max-height: 400px;
            }
          }
          @keyframes fade-in {
            0% {
                opacity: 0;
                max-height: 0px;
            }
            100% {
                opacity: 1;
                max-height: 400px;
            }
          }
        ` : null}
`;

export const Content = styled.div<DropdownStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;

    @media screen and (max-width: ${width.mobile}) {   
        justify-content: space-between;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {    
        padding: 30px;
    }
`;

export const TextGroup = styled.div`
    width: 50%;
    text-align: justify;
    

    @media screen and (min-width: 500px) {    
        width: 30%;
    }
`;


export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    

    @media screen and (max-width: ${width.mobile}) {   
        min-height: 80px;
    }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        min-height: 70px;
    }

`;

export const SubTitle = styled.span`
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.fonts.medium}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.auxiliary.error.dark};
`;

export const Title = styled.span`
    font-size: ${({ theme }) => theme.fonts.medium}px;
    text-align: left;
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #AE0806;

    @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
        font-size: ${({ theme }) => theme.fonts.extralarge}px;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {    
        font-size: ${({ theme }) => theme.fonts.extralarge * 1.7}px;
    }
`;


export const Text = styled.span`
    text-align: justify;

    @media screen and (min-width: ${width.largeDesktop}) and (max-width: ${width.extraLargeDesktop}) {    
        font-size: ${({ theme }) => theme.fonts.large}px;
    }
    @media screen and (min-width: ${width.extraLargeDesktop}) {    
        font-size: ${({ theme }) => theme.fonts.extralarge * 1.1}px;
    }
`;
