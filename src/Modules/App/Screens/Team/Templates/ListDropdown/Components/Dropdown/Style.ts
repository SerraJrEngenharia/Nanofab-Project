import styled from 'styled-components';

import { width } from '@/Services/screenSizes';

export const Container = styled.div`
    width: 40%;
    margin: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #f2f2f2;
    
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
    border: none;
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

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    flex-wrap: wrap;
    
`;

export const Text = styled.span`

`;
