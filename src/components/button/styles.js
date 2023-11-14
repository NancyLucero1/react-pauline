import styled from "styled-components";

export const StyledButton = styled.div`
padding: 0.8rem 1.5rem;
outline: none;
border:2px solid white  ;


color:white;

font-weight:400;
cursor: pointer;
&:hover {
    opacity:65%;
    color: #21C994;
}
&:disabled {

    cursor: not-allowed;
    opacity: 3.5%
}

background-image: linear-gradient(-45deg,  #2B2B1A 10%, #A3976D 90%);
    border-radius: 1rem ;
    display:  flex;
    justify-content: center;
    align-items: center;
    gap: 15px;


`