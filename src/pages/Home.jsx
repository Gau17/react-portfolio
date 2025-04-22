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
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ccc;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
  margin: 0 1rem 1rem 0;

  &:hover {
    background: #fff;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroContent>
        <Title>Hi, I'm Your Name</Title>
        <Subtitle>Frontend Developer | Designer | Creator</Subtitle>
        <HeroText>
          I create modern and responsive websites with clean and efficient code.
          Passionate about building user-friendly interfaces and delivering exceptional user experiences.
        </HeroText>
        <div>
          <CTAButton to="/projects">View My Work</CTAButton>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </div>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home;