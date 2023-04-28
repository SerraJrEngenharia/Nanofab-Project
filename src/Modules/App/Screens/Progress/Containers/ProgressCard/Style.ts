import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
`;

export const Title = styled.div`
    width: 100%;
    display: flex;
    background-color: #D5D4D4;
    color: ${({ theme }) => theme.colors.text.TitleSubArticles};

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    padding-top: 10px;
    padding-bottom: 10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const TitleText = styled.span`
    font-size: ${({ theme }) => theme.fonts.medium}px;
    margin: 5px;
    font-weight: bold;

    margin-left: 10px;
`;

export const Content = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
`;

interface StatusInterface {
    status: string
}

export const Status = styled.span<StatusInterface>`
    text-align: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${({status}) => {
        if(status === "Aprovado"){
            return `background-color: rgba(48, 212, 111, 0.7);`
        }
        else if(status === "Solicitado"){
            return `background-color: rgba(255, 204, 92, 0.7);`
        }
        else if(status === "Cancelado"){
            return `background-color: rgba(255, 111, 105, 0.7);`
        }
    }}
`;

export const Text = styled.span`
    margin: 10px;
`;