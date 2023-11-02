import styled from "styled-components";

export const NavbarContainer = styled.div ` 
 background:#C3B581 ;
 border-bottom: 2px solid #2B2B1A ;
 width: 100%;
  position: fixed;
  top: 0;
  display: flex;
justify-content:space-around;
align-items: center;
  
  height: 75px;
 left:0;
  margin: 0 auto;
  z-index: 999;

gap:20px;
 

 
    
`


export const LinksContainer= styled.div `
color:#2B2B1A ;
display: flex;
justify-content:center;
align-items: center;
gap: 30px;


a{
    padding: 0.5rem 2rem ;
    
}

a:first-child{

    background: var(--orange-bg) ;
    border-radius: 1rem;
    display:  flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
     border:2px solid white
}

`


export const LinkContainer = styled.div`
font-size: 1.2rem;
color: ${(props) => (props.home ? "#26F3F3" : "#3E2C14")};


`

export const UserContainer = styled.div`
display: flex;
align-items: center;
gap:10px;


`

export const HomeContainer = styled(LinkContainer)`
display: flex;
gap: 2rem;
align-items: center;
@media (max-width: 965px) {
    display: none;
}
`

export const MenuContainer = styled(LinkContainer)`
display: none;
align-items: center;
font-size: 2rem;
cursor: pointer;
@media (max-width: 768px) {
    display: flex;
}
`


export const UserNav = styled.div`
gap: 10px;
cursor: pointer;
span{
    color:#3E371B  ;
    font-size: 1rem;
    margin-right: 5px;
}
@media (max-width: 965px){
    display: none;
}
`

export const UserImage = styled.img`
width: 30px;
height: 30px;
border-radius: 100px;
cursor: pointer;
`

export const SpanStyled = styled.span`
&:hover{
    text-decoration: underline;
    border:20px;
    color: black;
}
`