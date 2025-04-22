import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  background: linear-gradient(135deg, #2b5876, #4e4376);
  color: #fff;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    height: auto;
    min-height: calc(100vh - 80px);
    padding: 4rem 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 0 2rem;
  
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ccc;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CTAButton = styled(Link)`
  background: #15cdfc;
  color: #000;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  margin: 0 0 1rem 0;

  &:hover {
    background: #fff;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    width: 100%;
    text-align: center;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroContent>
        <Title>Hi, I'm Gautam Bidari</Title>
        <Subtitle>Embedded Systems Engineer | IoT Specialist | Developer</Subtitle>
        <HeroText>
          I specialize in Embedded Systems, IoT, Automation, Deep Learning and Robotics. 
          Passionate about building innovative products and using technology to improve people's lives.
        </HeroText>
        <ButtonContainer>
          <CTAButton to="/projects">View My Work</CTAButton>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </ButtonContainer>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home;