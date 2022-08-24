import { createGlobalStyle } from "styled-components";

export  const GlobalStyles = createGlobalStyle`
* {
  box-sizing : border-box;
}

body {
    margin: 0;
    padding: 0;
    background: none;
    font-family: Montserrat, Helvetica, Sans-Serif;
  }

a {
  text-decoration : none; 
  color : grey ;
}

a:hover {
  border-bottom : 1px solid grey;
}
`;