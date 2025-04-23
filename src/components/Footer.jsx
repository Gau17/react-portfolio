import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #0c0c0c;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  text-align: left;
  width: auto;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin: 0.5rem 0;
  }
`;

const FooterLinkTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const FooterLink = styled(Link)`
  color: #a0a0a0;
  text-decoration: none;
  margin-bottom: 0.7rem;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: #15cdfc;
  }
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const SocialIconLink = styled.a`
  color: #a0a0a0;
  font-size: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    color: #15cdfc;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: #707070;
  font-size: 0.85rem;
  margin-top: 1.5rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMediaWrap>
          <SocialIconLink 
            href="https://github.com/Gau17" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink 
            href="https://linkedin.com/in/gautam-bidari" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink 
            href="https://youtube.com/@gautambidari" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink 
            href="mailto:bidari.g@northeastern.edu" 
            aria-label="Email"
          >
            <FaEnvelope />
          </SocialIconLink>
        </SocialMediaWrap>
      </FooterWrapper>
      <Copyright>&copy; {new Date().getFullYear()} Gautam Bidari. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;