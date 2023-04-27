import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 1000px; // PLACEHOLDER - REMOVE LATER

`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.TitleSubArticles};
  margin-bottom: 10px;
`;

export const InputOrientador = styled.input`
    width: 90%;
    height: 30px;
    background-color: #E8E8E8;
    border-radius: 10px;
    border: 0px;
    padding: 5px;
    padding-left: 20px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #5086B699;
    opacity: 1; /* Firefox */
    }
`;

export const InputOrientadorContainer = styled.div`
    margin-bottom: 3%;
`;

export const ComponentTypes = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
`;

export const CheckBoxTypes = styled.input`
    height: 15px;
    width: 15px;
`;

export const LabelTypes = styled.label`
  margin-left: 5px;
  font-family: "Maven Pro";
`;

export const DivRow = styled.div`
  display: flex;
  
  flex-direction: row;
    margin: 5px;
`;

export const InputOutros = styled(InputOrientador)`

`;

export const InputOutrosContainer = styled(InputOrientadorContainer)`

`;