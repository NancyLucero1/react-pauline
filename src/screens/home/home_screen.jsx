import React from 'react'
import { Header } from '../../components/header/header'
import { CategoryCard } from '../../components/categories/category_card/category_card'
import { CategoryWidget } from '../../components/categories/category_widget/category_widget'
import { ProductCard } from '../../components/products/product_card/product_card'
import { ProductWidget } from '../../components/products/product_widget/product_widget'
import { Footer } from '../../components/footer/footer'
import { Navbar } from '../../components/navbar/navbar'
import { HomeLayout } from '../../components/layout/home/home_layout'

export const HomeScreen = () => {
  return (
    <>
      <Navbar/>


      <HomeLayout>
      <Header/>
      <CategoryWidget ></CategoryWidget>
     {/* < ProductCard></ProductCard>*/}
     <ProductWidget />
     </HomeLayout>


     <Footer />
    </>
  );
};
