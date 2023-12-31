import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {     
    --orange-bg:#3E371B ;
    --orange: #ff9d01;
    --magenta: #FF005C;
    --gray-bg: #2b2b2c;
  --btn-gradient: linear-gradient(83deg, #ffa100, #fb103d);
  --btn-gradient-secondary: linear-gradient(140deg, #3B3022, #3B2329);
  margin: 0;
  padding: 0;
  width: 100%;
  }
  html{
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    background:#21C994 ;
    font-family: 'Montserrat', sans-serif;
    color: #DDDACBEC;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
    a {
    text-decoration: none;
    color:white ;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;