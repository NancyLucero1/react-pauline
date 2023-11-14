import React from 'react'
import {  FaRegHeart,FaMapMarkerAlt,FaEnvelope ,FaWhatsapp,FaShippingFast } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { FooterContainerStyled } from './styles';
import { LinksContainerStyled } from './styles';
import { SocialMediaStyled, ContacUsStyled } from './styles';
import  london from "../../assets/image/london.png"
import  argentina from "../../assets/image/argentina.png"
import { TitleH3 } from './styles';
import { Sign } from './styles';
import { FooterMenu } from './styles';
import { LinkContainer } from '../navbar/styles';



export const Footer = () => {
  return (
    <FooterContainerStyled>

      <LinksContainerStyled >
     

      

      </LinksContainerStyled >
      <TitleH3><h3>Stay in touch</h3></TitleH3>
    
      <ContacUsStyled >
      <FaMapMarkerAlt/>
        <p> Rosales 256. Ramos Mejía</p>
        <FaWhatsapp/>
        <p>1123857844</p>

        <FaShippingFast/>
        <p> FreeShipping</p>
    
      </ContacUsStyled >
      
     <TitleH3> <h3>Follow Us</h3></TitleH3>
      <SocialMediaStyled>
       
        
            <FaFacebook />
            <FaTwitter/>
            <FaPinterest/>
            <FaInstagram/>
            <FaEnvelope/>
           
      
      </SocialMediaStyled>
      
       
      <TitleH3> <h3>Footer Menu</h3></TitleH3>
      <FooterMenu>
      <a href="/#"> Term & Conditions</a>
     
     <a href="/#">Newsletter </a>
     <a href="/#">Polity Privacy </a>
     <a href="/#">Preference Cookies </a>
     </FooterMenu>
      
     <Sign>
      <p> Designed in < FaRegHeart/> by Nancy Lucero </p>
      <p> Copyright © 2023- All  rights reserved</p>
      </Sign>
      </FooterContainerStyled>
  );
};
