import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #15cdfc;
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-bottom: 1rem;
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
      <FooterText>Built with React</FooterText>
    </FooterContainer>
  );
};

export default Footer;