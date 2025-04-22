import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 2rem 0;
  
  @media screen and (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1.5rem;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media screen and (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #15cdfc;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #aaa;
  
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>Gautam Bidari</FooterLogo>
        <SocialIcons>
          <SocialIcon href="https://github.com/Gau17" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/gautam-bidari" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="mailto:youremail@example.com">
            <FaEnvelope />
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Gautam Bidari. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;