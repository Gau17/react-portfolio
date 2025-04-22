import React from 'react';
import styled from 'styled-components';
import { FaCode, FaLaptopCode, FaServer, FaMicrochip, FaRobot } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: calc(1.618rem * 3) calc(1.618rem * 1.2);
  background: #121212;
  color: #e0e0e0;
`;

const AboutTitle = styled.h2`
  font-size: calc(1.618rem * 1.618);
  text-align: center;
  margin-bottom: calc(1.618rem * 1.8);
  color: #ffffff;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
    border-radius: 3px;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: calc(1.618rem * 1.8);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div``;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.618;
  margin-bottom: 1.618rem;
  color: #e0e0e0;
  font-weight: 400;
  letter-spacing: 0.01rem;
`;

const SkillsSection = styled.div``;

const SkillsTitle = styled.h3`
  font-size: calc(1.618rem * 1.1);
  margin-bottom: 1.618rem;
  color: #ffffff;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
    border-radius: 2px;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.618rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #15cdfc;
  background: rgba(21, 205, 252, 0.1);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillName = styled.p`
  font-size: 1.1rem;
  color: #e0e0e0;
`;

const SectionContainer = styled.div`
  margin-top: calc(1.618rem * 2.5);
  max-width: 1200px;
  margin: calc(1.618rem * 2.5) auto 0;
`;

const SectionTitle = styled.h3`
  font-size: calc(1.618rem * 1.2);
  margin-bottom: calc(1.618rem * 1.2);
  color: #ffffff;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
    border-radius: 2px;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(1.618rem * 1.2);
`;

const ExperienceItem = styled.div`
  background: #1e1e1e;
  padding: 1.618rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
  }
`;

const ExperienceHeader = styled.div`
  margin-bottom: 1.618rem;
`;

const ExperienceTitle = styled.h4`
  font-size: calc(1.618rem * 0.9);
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.h5`
  font-size: 1.1rem;
  color: #15cdfc;
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  font-size: 0.9rem;
  color: #aaaaaa;
  font-style: italic;
`;

const ExperienceDescription = styled.ul`
  padding-left: 1.618rem;
`;

const ExperiencePoint = styled.li`
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 0.75rem;
  line-height: 1.618;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(1.618rem * 1.2);
`;

const EducationItem = styled.div`
  background: #1e1e1e;
  padding: 1.618rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
  }
`;

const EducationHeader = styled.div`
  margin-bottom: 1.618rem;
`;

const EducationDegree = styled.h4`
  font-size: calc(1.618rem * 0.9);
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const EducationInstitution = styled.h5`
  font-size: 1.1rem;
  color: #15cdfc;
  margin-bottom: 0.5rem;
`;

const EducationDate = styled.p`
  font-size: 0.9rem;
  color: #aaaaaa;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const EducationGrade = styled.p`
  font-size: 0.9rem;
  color: #aaaaaa;
  margin-bottom: 0.5rem;
`;

const EducationActivities = styled.p`
  font-size: 0.9rem;
  color: #aaaaaa;
  margin-bottom: 1rem;
`;

const CourseworkTitle = styled.h6`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const CourseList = styled.ul`
  padding-left: 1.618rem;
`;

const CourseItem = styled.li`
  font-size: 0.9rem;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutText>
          <AboutParagraph>
            Hello! I'm Gautam Bidari, an Embedded Systems Engineer and IoT Specialist with a passion 
            for building innovative technology solutions. I specialize in developing embedded systems, 
            IoT applications, and implementing automation solutions.
          </AboutParagraph>
          <AboutParagraph>
            My primary areas of interest include Embedded Systems, IoT, Automation, Deep Learning, and Robotics. 
            I'm passionate about using technology to develop products that improve people's lives and solve 
            real-world challenges.
          </AboutParagraph>
          <AboutParagraph>
            Currently pursuing my Master's degree in Cyber-Physical Systems at Northeastern University, 
            I'm enhancing my technical skills while gaining hands-on experience through internships 
            and academic projects. Outside of work, I'm an avid quizzer and enjoy music, reading, and 
            maintaining an active fitness routine.
          </AboutParagraph>
        </AboutText>
        
        <SkillsSection>
          <SkillsTitle>Technical Skills</SkillsTitle>
          <SkillsList>
            <SkillItem>
              <SkillIcon>
                <FaMicrochip />
              </SkillIcon>
              <SkillName>nRF52840, ESP32, Arduino</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaCode />
              </SkillIcon>
              <SkillName>C/C++, Rust, Python</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaLaptopCode />
              </SkillIcon>
              <SkillName>SPI, I2C, JTAG, BLE, RTOS</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaServer />
              </SkillIcon>
              <SkillName>Java, SQL, Docker</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaRobot />
              </SkillIcon>
              <SkillName>TensorFlow, OpenCV</SkillName>
            </SkillItem>
            <SkillItem>
              <SkillIcon>
                <FaServer />
              </SkillIcon>
              <SkillName>Cloud Computing (GCP)</SkillName>
            </SkillItem>
          </SkillsList>
        </SkillsSection>
      </AboutContent>

      <SectionContainer>
        <SectionTitle>Education</SectionTitle>
        <EducationContainer>
          <EducationItem>
            <EducationHeader>
              <EducationDegree>Master of Science - MS, Cyber-Physical Systems</EducationDegree>
              <EducationInstitution>Northeastern University</EducationInstitution>
              <EducationDate>September 2023 - August 2025</EducationDate>
              <EducationGrade>Grade: 4.0</EducationGrade>
              <EducationActivities>Activities: President - IoT Connect Club (Spring 2025)</EducationActivities>
            </EducationHeader>
            <CourseworkTitle>Relevant Coursework:</CourseworkTitle>
            <CourseList>
              <CourseItem>Fundamentals of Internet of Things (TELE 6510)</CourseItem>
              <CourseItem>Data Networking (TELE 5330)</CourseItem>
              <CourseItem>Data Networking Lab (TELE 5331)</CourseItem>
              <CourseItem>Connected Devices (TELE 6530)</CourseItem>
              <CourseItem>ML for IoT (TELE 6500)</CourseItem>
              <CourseItem>Software Security and Vulnerability (CY5770)</CourseItem>
              <CourseItem>Computer Hardware Security (EECE 7390)</CourseItem>
              <CourseItem>Embedded Device Drivers and Rust (TELE 7374)</CourseItem>
            </CourseList>
          </EducationItem>
        </EducationContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceContainer>
          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>Teaching Assistant - ML for IoT Systems (TELE 6500)</ExperienceTitle>
              <ExperienceCompany>Northeastern University, Boston, MA</ExperienceCompany>
              <ExperienceDate>January 2025 - April 2025</ExperienceDate>
            </ExperienceHeader>
            <ExperienceDescription>
              <ExperiencePoint>Responsible for designing and grading assignments and projects</ExperiencePoint>
              <ExperiencePoint>Conducted weekly lab sessions using Python and frameworks like SKTime and SKForecast</ExperiencePoint>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>Embedded Software Engineering Intern</ExperienceTitle>
              <ExperienceCompany>Woods Hole Oceanographic Institute (WHOI), Woods Hole, MA</ExperienceCompany>
              <ExperienceDate>June 2024 - December 2024</ExperienceDate>
            </ExperienceHeader>
            <ExperienceDescription>
              <ExperiencePoint>Designed, built and field-tested a low-cost, high-precision optical pH sensor having 3rd decimal place precision and sampling rate 2x other devices</ExperiencePoint>
              <ExperiencePoint>Designed, manufactured and assembled prototype PCBs using KiCad and JLCPCB</ExperiencePoint>
              <ExperiencePoint>Wrote embedded C firmware libraries for nRF52840 MCU (ARM Cortex-M4) following a test driven development framework and MISRA C 2012 guidelines</ExperiencePoint>
              <ExperiencePoint>Developed an interactive python-based GUI to control sensor components via BLE or Serial interface and plot sensor data in real-time</ExperiencePoint>
              <ExperiencePoint>Wrote comprehensive unit and component tests using Unity framework</ExperiencePoint>
              <ExperiencePoint>Documented UML and system state diagrams and used event driven architecture principles and design patterns</ExperiencePoint>
              <ExperiencePoint>Interfaced sensor with Bristlemouth Dev Kit and Sofar Spotter for cellular/satellite connectivity</ExperiencePoint>
              <ExperiencePoint>Collaborated with Lowell Instruments LLC to interface sensor with their commercial Deck Data Hub using BLE, enhancing deployment capabilities</ExperiencePoint>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>Teaching Assistant - Data Networking (TELE 5330)</ExperienceTitle>
              <ExperienceCompany>Northeastern University, Boston, MA</ExperienceCompany>
              <ExperienceDate>January 2024 - April 2024</ExperienceDate>
            </ExperienceHeader>
            <ExperienceDescription>
              <ExperiencePoint>Responsible for designing and grading assignments, projects, and viva evaluations</ExperiencePoint>
              <ExperiencePoint>Conducted weekly Networking Lab sessions using Cisco Packet Tracer and Ubuntu Linux</ExperiencePoint>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>Java Backend Developer</ExperienceTitle>
              <ExperienceCompany>Deloitte Consulting, India</ExperienceCompany>
              <ExperienceDate>June 2022 - August 2023</ExperienceDate>
            </ExperienceHeader>
            <ExperienceDescription>
              <ExperiencePoint>Awarded Deloitte Applause Award for end-to-end implementation of core modules supporting 5+ business use cases (0 critical post-deployment defects)</ExperiencePoint>
              <ExperiencePoint>Built 20+ REST endpoints using Spring Boot Microservices with 99.9% uptime SLA. Containerized deployment using Docker and Google Kubernetes Engine (GKE)</ExperiencePoint>
              <ExperiencePoint>Utilized Git, Jenkins and Jira for CI/CD flows across Dev/QA/Prod and Project Management in an Agile Framework</ExperiencePoint>
            </ExperienceDescription>
          </ExperienceItem>

          <ExperienceItem>
            <ExperienceHeader>
              <ExperienceTitle>Embedded Software Engineering Intern</ExperienceTitle>
              <ExperienceCompany>Millennium Semiconductors, India</ExperienceCompany>
              <ExperienceDate>June 2021 - August 2021</ExperienceDate>
            </ExperienceHeader>
            <ExperienceDescription>
              <ExperiencePoint>Successfully prototyped a wearable, low-cost, bluetooth-enabled patient monitoring system</ExperiencePoint>
              <ExperiencePoint>Bare metal development on nRF52840 MCU using Segger Embedded System IDE w/ JTAG debugger and protocols like SPI, I2C, BLE</ExperiencePoint>
            </ExperienceDescription>
          </ExperienceItem>
        </ExperienceContainer>
      </SectionContainer>
    </AboutContainer>
  );
};

export default About;