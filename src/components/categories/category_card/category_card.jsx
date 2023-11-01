import React from 'react'
import { CardCategoria } from '../category_widget/styles'

export const CategoryCard = ({img, title, category}) => {
  return (
      
      <CardCategoria   whileTap={{scale: 0.95}}        >

      <img src={img} alt={category} />
      <h2>{title}</h2>
    
        
    </CardCategoria>
  )
}
