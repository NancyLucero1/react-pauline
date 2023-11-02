import styled from "styled-components";
import{motion} from "framer-motion";


export const ProductoCard = styled.div`
 
width: 300px;
border-radius:15px;
padding:1rem;
background-color:  #A3976D;
border:2px solid #3E371B ;

&:hover {
 transform: translateY(15px);
}  
img{
    width:100%;
    margin-bottom: 1rem;
    border-radius:30px;
    
    
}

h2{

font-weight:600;
margin:0;

}
p{

color:#3E371B;
font-size:1.2rem;

}
@media (max-width: 768px) {
    width:190px;
    text-align:center;
    margin-left:3px;
    justify-content:center;
}

`