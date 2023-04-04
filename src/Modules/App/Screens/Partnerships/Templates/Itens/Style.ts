import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  margin-top: 5%;
  margin-bottom: 5%;
  align-self: center;
`;

export const CardCont = styled.div`
    width: 70%;
    padding: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgb(217, 217, 217, 0.5);
    border-radius: 150px;
    justify-content: space-around;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.span`
    font-weight: bold;
    color: #AE0806;
    text-align: center;
    font-size: 30px;
    margin-bottom: 3%;
`;

export const Paragraph = styled.span`
    color: black;
    text-align: center;
    font-size: 18px;
    width: 60%;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border: 1px solid #AE0806;
    border-radius: 150px;
    padding: 20%;
    object-fit: scale-down;
    overflow: visible;
    background-color: white;
`;

export const ExternalImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 200px;
    width: 200px; */
`;