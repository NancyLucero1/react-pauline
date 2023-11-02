import React from 'react'
import{StyledButton} from"./styles"
import { motion } from 'framer-motion';
export const Button = ({children}) => {
  return (
    
      <div >
       
      <StyledButton> { children  }  </StyledButton>
    </div>
  )
}
