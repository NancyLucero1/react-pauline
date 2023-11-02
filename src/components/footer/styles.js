
import styled from 'styled-components';



export const FooterContainerStyled = styled.div`
 
 background: #2B2B1A ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0.5rem 0;
  p span {
    font-weight: 400;
  }
`

export const LinksContainerStyled = styled.div`

  a{
font-size:18px;


padding-left: 1rem;

  }
`

export const SocialMediaStyled = styled.div`

  justify-content: center;
  align-items: center;

   font-size:20px;
   color:white;
 width: 14%;

  top: 0;
  display: flex;
justify-content:space-around;
align-items: center;

 left:0;
 @media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
    width:30%
    
}


`
export const ContacUsStyled = styled.div`
flex-direction: center;
  justify-content: center;
  align-items: center;
 
 width: 55%;
 font-size:20px;
   color:white;
  top: 0;
  display: flex;
justify-content:space-around;
align-items: center;

 left:0;
 @media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
    width:30%
    
}
`