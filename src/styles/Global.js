import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * 
  {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body 
  {
      -webkit-font-smoothing: antialiased;
  }

  body, button, input 
  {
      font: 16px "Graphik", Arial, sans-serif;
  }

  button 
  {
    cursor: pointer;
  }

  :root 
  {
    --red-main: #FF1510;
    --background: #FDECEC;
    --gray: #B9B9B9;
    --black-text: #303030;
  }
`;
