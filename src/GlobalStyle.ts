import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    *:focus {
        outline: none;
    }

    margin: 0;
    padding: 0;

    h1, h2, h3, h4, span{
      font-family: "Maven Pro";
    }

    :root{
      --extra-small: 16px;
      --small: 24px;
      --medium: 56px;
      --large: 76px;
      --extra-large: 96px;
    }

    a{
      text-decoration: none;
    }
  }
`;
