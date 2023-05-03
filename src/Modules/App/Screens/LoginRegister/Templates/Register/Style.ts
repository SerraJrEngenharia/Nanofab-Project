import styled from "styled-components";
import { width } from '@/Services/screenSizes';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 40%;
    height: 500px;
    background-color: #D9D9D9aa;
    border-radius: 30px;
    margin: 3%;
    margin-top: 5%;
    padding: 2%;

    background: rgba(217, 217, 217, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 35px;
`;

export const Title = styled.h1`
color: ${({ theme }) => theme.colors.text.title};
`;

export const Text = styled.span`
    text-align: left;
    width: 50%;
    margin-bottom: 1%;
    color: ${({ theme }) => theme.colors.text.TitleSubArticles};
    font-weight: bolder;
`;

export const Input = styled.input`
    width: 50%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 10px;
    margin-bottom: 10px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      /* padding-left: 20px; */
      color: #5086B699;
      opacity: 1; /* Firefox */
      /* padding: 5px; */
    }
    
`;

export const InputContainer = styled.div`
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
 `;

export const Button = styled.button`
    background-color: #5086B6;
    border: 0px;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
    border-radius: 10px;

    :hover{
            color: #5086B6; 
            background-color: #fff;
            border: 1px solid #5086B6;
            transition: 0.5s;
            cursor: pointer;
        }
`;

