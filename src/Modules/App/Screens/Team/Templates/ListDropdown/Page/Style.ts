import styled from 'styled-components';

import { width } from '@/Services/screenSizes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: ${width.notebook}) {
    display: none;
  }
`;
