import styled from 'styled-components';
import { DropdownStyleProps } from './Types';
import { width } from '@/Services/screenSizes';

export const Container = styled.div`
    width: 40%;
    margin: 10px;

    @media screen and (max-width: ${width.mobile}) {   
        width: 90%;
    }

    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        width: 70%;
    }
`;

export const ButtonArea = styled.button`
    width: 100%;
    background-color: #f2f2f2;
    border: 1px solid #c2c2c2;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;


export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3px;
`;

export const SubTitle = styled.span`
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fonts.medium}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.auxiliary.error.dark};
`;

export const Title = styled.span`
    font-size: ${({ theme }) => theme.fonts.small}px;
    color: ${({ theme }) => theme.colors.text.title};
`;

export const Content = styled.div<DropdownStyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    flex-wrap: wrap;
    background-color: #f2f2f2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid #c2c2c2;
    border-top: none;

    ${({isVisible}) => isVisible ?
        `
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
        
        `
        :
        null
    }
    
`;

export const Text = styled.span`

`;
