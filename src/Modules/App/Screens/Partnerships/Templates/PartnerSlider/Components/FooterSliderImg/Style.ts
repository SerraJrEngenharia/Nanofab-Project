import styled from 'styled-components';

export const Container = styled.div`
	margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 120px;
    height: 150px;
	margin: 0 20px;
	transition: 0.5s;
	overflow: hidden;
    &:hover{
	    transition: 0.5s;
        opacity: 0.7;
    }
`;