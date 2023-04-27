import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;

    `;

export const Button = styled.button`
    background-color: #5086B6;
    border: 0px;
    border-radius: 20px;
    width: 35%;
    height: 4vh;
    
    color: white;
    font-weight: bold;
    font-family: "Maven Pro";
    
    :first-child {// Selects first button for a specific transition to red text
        background-color: #aa0000;// red

        :hover{
            color: #aa0000; 
            background-color: #fff;
            border: 1px solid #aa0000;
            transition: 0.5s;
            cursor: pointer;
        }
    }
    :nth-child(2){ // Selects second button for a specific transition to blue text

       :hover{
            color: #5086B6; // blue
            background-color: #fff;
            border: 1px solid #5086B6;
            transition: 0.5s;
            cursor: pointer;
        }

    }
    `;