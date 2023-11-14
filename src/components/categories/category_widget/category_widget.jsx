import {categories} from "../../../data/categories"
import { CategoryCard } from "../category_card/category_card"
import { CategoriasWrapper } from "../category_card/styles"
import { CategoriasContainer } from "../category_card/styles"
import { FavoriteWrapper } from "../../favorite_products/favorite_widget/styles"

export const CategoryWidget = () => {
  return (
 
<CategoriasWrapper>
<FavoriteWrapper >
     <h3> PRODUCTS GALLERY</h3>
     </FavoriteWrapper >
    <CategoriasContainer >
        {
         categories.map((item ) => <CategoryCard key ={item.id} {...item}/>)


        }
    </CategoriasContainer >
 
    </CategoriasWrapper>
  )
}
