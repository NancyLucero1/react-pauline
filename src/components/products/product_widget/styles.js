import styled from "styled-components";
import{motion} from "framer-motion";

export const ProductosWrapper = styled.div`
display: flex;
padding-top:30px;
justify-content:center;
width:100%;
align-items:center;
flex-direction:column;
max-width:1300px;
margin:  15px auto;

@media (max-width: 768px) {

    text-align: center;
    
}


`

export const ProductosContainer = styled.div`

display: grid;
place-items:center;
flex-wrap: wrap;
justify-content:center;
grid-template-columns: repeat(auto-fit, 370px);
row-gap:2.5rem;
width:100%;
max-width:1300px;
padding: 1rem 0;

 


`

export const NextBackStyled = styled.div `

display: flex;
justify-content: center;
align-items: center;
gap:0.5rem;
width: 105px;
padding: 0.5 0.5rem;

border-radius:10px;
cursor:pointer;

`