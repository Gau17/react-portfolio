import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

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
    background: var(--primary-gradient);
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
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIconLink href="https://github.com" target="_blank" aria-label="GitHub">
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink href="https://twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink href="mailto:your.email@example.com" aria-label="Email">
          <FaEnvelope />
        </SocialIconLink>
      </SocialIcons>
      <FooterText>© {new Date().getFullYear()} Your Name. All rights reserved.</FooterText>
      <FooterText>Built with <FooterHighlight>React</FooterHighlight></FooterText>
    </FooterContainer>
  );
};

export default Footer;