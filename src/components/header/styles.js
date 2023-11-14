import styled from "styled-components";



export const HeaderContainer = styled.div`
background-image: linear-gradient(-45deg,  #2B2B1A 30%, #A3976D 70%);
display: flex;
justify-content:space-around;
align-items: center;
max-width: 1300px;
margin: 0 auto;
gap: 10px;
padding:111px;
border-bottom: 2px solid #E8E8D8 ;

h1{

    margin-bottom: 0.5rem;
}
@media (max-width: 1000px) {
    flex-direction: column;
}
    
    
`
export const HeaderTextContainer = styled.div`
display: flex;
flex-direction: column;

justify-content:center;
align-items: flex-start;
width: 50%;

h1{
font-size: 3rem;
margin: 15px 0;
}

h2{
font-size: 1.5rem;
margin: 15px 0;
}
p{
font-size: 1.2rem;
margin: 15px 0;

}


@media (max-width: 1000px) {

align-items: center;
/*font-size:1rem;*/
  /*width: 100%;*/
justify-content: space-around;
  text-align: justify;
  /*padding:  2px;*/
/*word-spacing: normal;*/
width: 40vw;

img{
  width: 75vw;
}
h1{
font-size: 3rem;
margin: 5px 0;
}

h2{
font-size: 1.5rem;
margin: 5px 0;
}
p{
font-size: 1.2rem;
margin: 5px 0;

}


}



  
    
`
export const HeaderImageContainer = styled.div`

width:90%;
height:80%;
border:3px  solid #EFECE6 ;
border-radius:30px;
  


img{
    width:100%;
    height:100%;
    border-radius:30px;

   
  
}   

@media (max-width: 1000px) {
display:none;
}    
    
`