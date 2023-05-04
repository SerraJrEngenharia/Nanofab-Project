import styled from "styled-components";
import { width } from '@/Services/screenSizes';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 50%;
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

export const ExternalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputContainer100 = styled.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputContainer50 = styled.div`
  width: 45%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputContainer33 = styled.div`
  width: 30%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export const Button = styled.button`
    background-color: #5086B6;
    border: 0px;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
    border-radius: 10px;
    margin-bottom: 10px;
    border: 1px solid #5086B6;

    :hover{
            color: #5086B6; 
            background-color: #fff;
            border: 1px solid #5086B6;
            transition: 0.5s;
            cursor: pointer;
            /* transform: scale(1.05); */
        }
`;

export const InstContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
`;

export const Combobox = styled.select`
  width: 100%;
  height: 50px;
  background-color: #e8e8e8;
  border-radius: 10px;
  border: 0px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.small}px;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};

  //
  // padding: 10px;
  // margin-bottom: 10px;
`;

export const InstSection = styled.div`
  width: 100%;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const RadioInput = styled.input`
  border: 1px solid #e8e8e8;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const RadioLabel = styled.label`
    margin-right: 20px;
    color: #AE0806;
    font-weight: bolder;
`;


