import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: rgba(217, 217, 217, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 35px;
    margin-top: 80px;
    margin-bottom: 5%;;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    padding: 20px;
`;


export const Text = styled.span`
    margin: 20px;
    font-size: var(--large);
`;
