

import { Button } from "../button/button"
import portada from '../../assets/image/portada.png';
import bor from "../../assets/image/bor.png"
import { HeaderContainer } from './styles';
import { HeaderTextContainer } from './styles';
import { HeaderImageContainer } from './styles';
import bor1 from "../../assets/image/bor1.png";


export const Header = () => {
  return (
    

    <HeaderContainer>
      
      <HeaderTextContainer>
      
    <img src={bor}/>
   
         <h1>Pauline  </h1>
         <h2>is the best place,to kick off your day or just take a break. </h2>
         
             <p>
               ¿Take away? ¿To eat in? Enter and make your order online today . </p>

               

                
               <img src={bor1}/>

             
            
    
         

            
        </HeaderTextContainer>
      
         <HeaderImageContainer>
           <img src={portada} />

        </HeaderImageContainer> 
        
    
   </HeaderContainer>
  )
}
