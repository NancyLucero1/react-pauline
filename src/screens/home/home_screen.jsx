import React from 'react'
import { Header } from '../../components/header/header'

import { ProductCard } from '../../components/products/product_card/product_card'
import { ProductWidget } from '../../components/products/product_widget/product_widget'
import { Footer } from '../../components/footer/footer'
import { Navbar } from '../../components/navbar/navbar'
import { HomeLayout } from '../../components/layout/home/home_layout'
import { FavoriteWidget } from '../../components/favorite_products/favorite_widget/favorite_widget'
import { CategoryWidget } from '../../components/categories/category_widget/category_widget'

export const HomeScreen = () => {
  return (
    <>
      <Navbar/>


      <HomeLayout>
      <Header/>
     
    <FavoriteWidget></FavoriteWidget>
    {/* < ProductCard></ProductCard>*/}

    <CategoryWidget ></CategoryWidget>
     <ProductWidget />
     
     </HomeLayout>


     <Footer />
    </>
  );
};
