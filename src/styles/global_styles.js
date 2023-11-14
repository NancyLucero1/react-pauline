import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Fredoka:wght@300;400;500;600;700&family=Zilla+Slab+Highlight:wght@400;700&display=swap');
        
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
  font-family: 'Caveat', cursive;
        font-family: 'Fredoka', sans-serif;
        font-family: 'Zilla Slab Highlight', serif;

  }
  html{
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(-45deg,  #2B2B1A 10%, #A3976D 90%);
    /*background: #21C994 ;*/
    font-family: 'Montserrat', sans-serif;
    color:#D7DBDC ;
  
    
    
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