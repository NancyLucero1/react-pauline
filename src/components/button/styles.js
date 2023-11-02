import styled from "styled-components";

export const StyledButton = styled.div`
padding: 0.8rem 1.5rem;
outline: none;
border:2px solid white  ;


color:white;

font-weight:400;
cursor: pointer;
&:hover {
    opacity:95%;
}
&:disabled {

    cursor: not-allowed;
    opacity: 0.5%
}
background: var(--orange-bg) ;
    border-radius: 1rem ;
    display:  flex;
    justify-content: center;
    align-items: center;
    gap: 15px;


`