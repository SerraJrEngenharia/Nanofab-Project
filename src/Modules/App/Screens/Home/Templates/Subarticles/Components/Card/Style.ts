import styled from 'styled-components';

export const Container = styled.div`
    width: 35%;
    display: flex;
    justify-content: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(217, 217, 217, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 35px;
    margin-top: 80px;
    text-align: justify;
    overflow: visible;
    margin-bottom: 5%;
`;

export const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -90px;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: scale-down;
    overflow: visible;
`;

export const Text = styled.span`
    margin-top: 5px;
    margin: 20px;
    font-size: var(--large);
    padding: 20px;
`;

export const Title = styled.span`
    margin: 20px;
    font-weight: bold;
    color: ${({theme}) => theme.text.TitleSubArticles};
    text-align: center;
    margin-top: 60px;
`;
