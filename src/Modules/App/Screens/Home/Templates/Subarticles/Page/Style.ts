import styled from 'styled-components';
import { width } from '@/Services/screenSizes';

export const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: ${width.mobile}) {    
        flex-direction: column;
        width: 80%;
        margin-top: 10%;
    }
    @media screen and (min-width: ${width.largeMobile}) and (max-width: ${width.tablet}) {    
        display: flex;
        width: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 10%;
        margin-top: 10%;
    }
    @media screen and (min-width: 720px) and (max-width: 770px) {    
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 0%;
    }
    @media screen and (min-width: ${width.tablet}) and (max-width: ${width.notebook}) {   
        display: flex;
        width: 85%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 2%;
  }

    @media screen and (min-width: ${width.notebook}) and (max-width: ${width.largeNotebook}) {    
        width: 90%;
    }
`;
