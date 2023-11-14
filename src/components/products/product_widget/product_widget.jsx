import React from 'react'
import {products} from '../../../data/products'
import { ProductCard } from '../product_card/product_card'
import { ProductosContainer, ProductosWrapper } from './styles';
import { Button } from "../../button/button"
import { NextBackStyled } from './styles';
import{FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';
import { FavoriteWrapper } from '../../favorite_products/favorite_widget/styles';
import bor1 from "../../../assets/image/bor1.png"
import { SeparadorGold } from './styles';

export const ProductWidget = () => {
  return (
    <ProductosWrapper>
   
     <ProductosContainer>

        {
      products.map((product) => <ProductCard key={product.id} {...product}/>)


        }
     </ProductosContainer>

   <NextBackStyled>
    <Button><FaAngleDoubleLeft/> Back</Button>
    <Button> Next  < FaAngleDoubleRight/></Button>
   </NextBackStyled>
   <SeparadorGold>
   <img src={bor1}/>  <img src={bor1}/> <img src={bor1}/>  
  
   </SeparadorGold>
    </ProductosWrapper>

  )
}
