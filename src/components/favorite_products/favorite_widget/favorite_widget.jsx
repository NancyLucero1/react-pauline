import React from 'react'
import {favorite} from '../../../data/favorite'
import { FavoriteCard } from '../favorite_card/favorite_card'
import { FavoriteContainer, FavoriteWrapper } from './styles';
import { Button } from '../../button/button';
import bor1 from "../../../assets/image/bor1.png"
import { SeparadorGold } from '../../products/product_widget/styles';

export const FavoriteWidget = () => {
  return (
    <FavoriteWrapper>
    
     
     
     <h3>HERE ARE SOME OF THE MOST POPULAR CAKE FLAVORS</h3>
      <h3>WHAT ARE YOUR FAVORITE CAKES? </h3>
     <FavoriteContainer>

        {
      favorite.map((product) => <FavoriteCard key={product.id} {...product}/>)


        }
     </FavoriteContainer>
   
    <Button>Go To Store</Button>

   
    <SeparadorGold>
    <img src={bor1}/>    <img src={bor1}/>   
    <img src={bor1}/>
     </SeparadorGold>
   
    </FavoriteWrapper>
  )
}

