import React from 'react'
import {  FaRegHeart,FaMapMarkerAlt,FaEnvelope ,FaViber} from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { FooterContainerStyled } from './styles';
import { LinksContainerStyled } from './styles';
import { SocialMediaStyled, ContacUsStyled } from './styles';


export const Footer = () => {
  return (
    <FooterContainerStyled>

      <LinksContainerStyled >
      <a href="/#"> Term & Conditions</a>
     
      <a href="/#">Newsletter </a>
      </LinksContainerStyled >
     
      <ContacUsStyled >
    
    
      </ContacUsStyled >

      <SocialMediaStyled>
    
            <FaFacebook/>
            <FaTwitter/>
            <FaPinterest/>
            <FaInstagram/>
          
      </SocialMediaStyled>
      
      </FooterContainerStyled>
  );
};
