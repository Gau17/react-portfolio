import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--bg-color);
  position: relative;
  color: var(--text-color);
  padding: var(--space-5) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--primary-gradient);
    opacity: 0.3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-4);
`;

const SocialIconLink = styled.a`
  color: var(--text-color);
  font-size: var(--font-xl);
  margin: 0 var(--space-3);
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.gradient || 'linear-gradient(135deg, #15cdfc, #4e4bd0)'};
    opacity: 0;
    transition: var(--transition);
    z-index: -1;
    transform: scale(0.8);
    border-radius: var(--radius-full);
  }

  &:hover {
    color: var(--light-color);
    transform: translateY(-3px);
    
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-bottom: var(--space-2);
  color: var(--text-muted);
  font-size: var(--font-sm);
  max-width: 600px;
  padding: 0 var(--space-4);
`;

const FooterHighlight = styled.span`
  background: ${props => props.gradient || 'linear-gradient(135deg, #15cdfc, #4e4bd0)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIconLink 
          href="https://github.com/Gau17" 
          target="_blank" 
          aria-label="GitHub"
          gradient="linear-gradient(135deg, #333, #6e5494)"
        >
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink 
          href="https://linkedin.com/in/gautam-bidari" 
          target="_blank" 
          aria-label="LinkedIn"
          gradient="linear-gradient(135deg, #0077b5, #0a66c2)"
        >
          <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink 
          href="https://youtube.com/@gautambidari" 
          target="_blank" 
          aria-label="YouTube"
          gradient="linear-gradient(135deg, #FF0000, #CC0000)"
        >
          <FaYoutube />
        </SocialIconLink>
        <SocialIconLink 
          href="mailto:bidari.g@northeastern.edu" 
          aria-label="Email"
          gradient="linear-gradient(135deg, #15cdfc, #4e4bd0)"
        >
          <FaEnvelope />
        </SocialIconLink>
      </SocialIcons>
      <FooterText>© {new Date().getFullYear()} Gautam Bidari. All rights reserved.</FooterText>
      <FooterText>Built with <FooterHighlight gradient="linear-gradient(135deg, #61DBFB, #00BFFF)">React</FooterHighlight></FooterText>
    </FooterContainer>
  );
};

export default Footer;