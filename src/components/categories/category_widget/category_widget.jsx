import {categories} from "../../../data/categories"
import { CategoryCard } from "../category_card/category_card"
import { CategoriasWrapper } from "../category_card/styles"
import { CategoriasContainer } from "../category_card/styles"

export const CategoryWidget = () => {
  return (
 
<CategoriasWrapper>
    <h2>Category</h2>
    <CategoriasContainer >
        {
         categories.map((item ) => <CategoryCard key ={item.id} {...item}/>)


        }
    </CategoriasContainer >
 
    </CategoriasWrapper>
  )
}
