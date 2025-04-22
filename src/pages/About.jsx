import React from 'react';
import styled from 'styled-components';
import { FaCode, FaPalette, FaLaptopCode } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 5rem 2rem;
  background: #f9f9f9;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div``;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SkillsSection = styled.div``;

const SkillsTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #15cdfc;
`;

const SkillName = styled.p`
  font-size: 1.1rem;
  color: #333;
`;

const ServicesSection = styled.div`
  margin-top: 4rem;
  max-width: 1200px;
  margin: 4rem auto 0;
`;

const ServicesTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #15cdfc;
`;

const ServiceTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutText>
          <AboutParagraph>
            Hello! I'm [Your Name], a passionate web developer specializing in 
            creating beautiful and functional websites. With a strong background 
            in front-end development, I love turning ideas into reality through code.
          </AboutParagraph>
          <AboutParagraph>
            I graduated with a degree in Computer Science from [University Name] 
            and have [X] years of experience working with various web technologies. 
            My approach combines technical expertise with creative problem-solving 
            to deliver outstanding results.
          </AboutParagraph>
          <AboutParagraph>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or enjoying outdoor activities 
            like hiking and photography.
          </AboutParagraph>
        </AboutText>
        
        <SkillsSection>
          <SkillsTitle>My Skills</SkillsTitle>
          <SkillsList>
            <SkillItem>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillName>JavaScript (ES6+)</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillName>React.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillName>HTML5 & CSS3</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillName>Node.js</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillName>Responsive Design</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillName>Git & GitHub</SkillName>
            </SkillItem>
          </SkillsList>
        </SkillsSection>
      </AboutContent>

      <ServicesSection>
        <ServicesTitle>What I Do</ServicesTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>
              <FaLaptopCode />
            </ServiceIcon>
            <ServiceTitle>Web Development</ServiceTitle>
            <ServiceDescription>
              I build responsive websites that provide a seamless experience across 
              all devices. Using modern frameworks and best practices to ensure 
              optimal performance.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <FaPalette />
            </ServiceIcon>
            <ServiceTitle>UI/UX Design</ServiceTitle>
            <ServiceDescription>
              Creating beautiful, intuitive interfaces that enhance user experience. 
              I focus on clean design that supports functionality and engages users.
            </ServiceDescription>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <FaCode />
            </ServiceIcon>
            <ServiceTitle>Frontend Development</ServiceTitle>
            <ServiceDescription>
              Transforming designs into functional interfaces with clean, efficient code. 
              I specialize in React and modern JavaScript to build interactive web applications.
            </ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
    </AboutContainer>
  );
};

export default About;