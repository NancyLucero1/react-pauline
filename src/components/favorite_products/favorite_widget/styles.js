

import styled from "styled-components";
import{motion} from "framer-motion";

export const FavoriteWrapper = styled.div`
display: flex;
padding-top:20px;
justify-content:center;
width:100%;
align-items:center;
flex-direction:column;
max-width:1300px;
margin:  15px auto;


h3{
   
    font-size:35px;
    font-family: 'Zilla Slab Highlight', serif;
        font-weight: 700;
        
        text-overflow: ellipsis;
        display: flex; background-image: linear-gradient(-25deg,  #2B2B1A 10%, #A3976D 90%);
   flex-direction: column;
   text-align: center;
   align-items: center;
   gap: 0.5rem;
   text-overflow: ellipsis;
   width: 650px;
   max-width: 80%;
   color:#21C994 ;
    }
    p{
        font-size: 14px;
  width: 95%;
  color: var(--text-gray);
  text-align: justify;
  padding:  5px;
word-spacing: normal;
flex-direction:column;
align-items:center;
justify-content:center;




    }
 
@media (max-width: 768px) {

    text-align: center;
    
}


`

export const FavoriteContainer = styled.div`

display: grid;
place-items:center;
flex-wrap: wrap;
justify-content:center;
grid-template-columns: repeat(auto-fit, 200px);
row-gap:2.5rem;
width:100%;
max-width:1300px;
padding: 0.6rem 0;

 


`

