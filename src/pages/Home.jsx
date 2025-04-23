import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Animation for text fade-in
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Animation for cursor blinking
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 500px; /* Added min-height fallback for small devices */
  background: linear-gradient(135deg, #2b5876, #4e4376);
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 0 2rem;
  z-index: 1;
  animation: ${fadeIn} 1s ease;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff, #15cdfc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 1s ease;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TypedContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 3rem;
  height: 3rem;
  position: relative;
`;

const TypedTextWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const TypedText = styled.h2`
  font-size: 2rem;
  color: #ccc;
  margin: 0;
  display: inline-block;
  white-space: nowrap;
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2.5px;
  height: 1.8em;
  background-color: #15cdfc;
  animation: ${blink} 1s step-end infinite;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${fadeIn} 1.5s ease;
  
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeIn} 2s ease;
  gap: 1rem;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.75rem;
  }
`;

const CTAButton = styled(Link)`
  background: ${props => props.primary ? '#15cdfc' : 'transparent'};
  color: ${props => props.primary ? '#000' : '#fff'};
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  margin: 0;
  border: ${props => props.primary ? 'none' : '2px solid #15cdfc'};

  &:hover {
    background: ${props => props.primary ? '#fff' : 'rgba(21, 205, 252, 0.1)'};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media screen and (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    width: 80%;
    max-width: 220px;
    text-align: center;
  }
`;

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  
  const titles = [
    "Embedded Systems Engineer",
    "IoT Specialist",
    "Software Developer"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      // Set typing speed
      setTypingSpeed(isDeleting ? 60 : 120);

      // If finished typing
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } 
      // If finished deleting
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, titles, typingSpeed]);

  return (
    <HomeContainer>
      <HeroContent>
        <Title>Hi, I'm Gautam Bidari</Title>
        <TypedContainer>
          <TypedTextWrapper>
            <TypedText>{displayText}</TypedText>
            <Cursor />
          </TypedTextWrapper>
        </TypedContainer>
        <HeroText>
          I specialize in Embedded Systems, IoT, Automation, Deep Learning and Robotics. 
          Passionate about building innovative products and using technology to improve people's lives.
        </HeroText>
        <CTAContainer>
          <CTAButton to="/projects" primary>View My Work</CTAButton>
          <CTAButton to="/contact" primary>Get In Touch</CTAButton>
        </CTAContainer>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home;