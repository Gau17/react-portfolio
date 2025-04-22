import React from 'react';
import styled from 'styled-components';
import { FaCode, FaLaptopCode, FaServer, FaMicrochip, FaRobot, FaFileAlt } from 'react-icons/fa';

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

const SectionContainer = styled.div`
  margin-top: 4rem;
  max-width: 1200px;
  margin: 4rem auto 0;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceItem = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ExperienceHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const ExperienceTitle = styled.h4`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.h5`
  font-size: 1.2rem;
  color: #15cdfc;
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  font-size: 1rem;
  color: #555;
  font-style: italic;
`;

const ExperienceDescription = styled.ul`
  padding-left: 1.5rem;
`;

const ExperiencePoint = styled.li`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.75rem;
  line-height: 1.6;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationItem = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const EducationHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const EducationDegree = styled.h4`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const EducationInstitution = styled.h5`
  font-size: 1.2rem;
  color: #15cdfc;
  margin-bottom: 0.5rem;
`;

const EducationDate = styled.p`
  font-size: 1rem;
  color: #555;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const EducationGrade = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const EducationActivities = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const CourseworkTitle = styled.h6`
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const CourseList = styled.ul`
  padding-left: 1.5rem;
`;

const CourseItem = styled.li`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ResumeSection = styled.div`
  margin-top: 4rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  background: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ResumeTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const ResumeDescription = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #15cdfc;
  color: #000;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 8px rgba(21, 205, 252, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(21, 205, 252, 0.4);
    background: #0eb4e3;
  }
`;

const DownloadIcon = styled.span`
  margin-right: 10px;
  font-size: 1.5rem;
`;

const KeySkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
  gap: 1rem;
`;

const SkillPill = styled.span`
  background: #f0f0f0;
  color: #333;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
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

      <ResumeSection>
        <ResumeTitle>Download My Resume</ResumeTitle>
        <ResumeDescription>
          Looking for a more detailed overview of my professional background, technical skills, and education?
          Download my full resume to learn more about my qualifications and experience.
        </ResumeDescription>
        <KeySkills>
          <SkillPill>Embedded Systems</SkillPill>
          <SkillPill>IoT</SkillPill>
          <SkillPill>C/C++</SkillPill>
          <SkillPill>Rust</SkillPill>
          <SkillPill>Python</SkillPill>
          <SkillPill>ML for IoT</SkillPill>
          <SkillPill>Microcontrollers</SkillPill>
          <SkillPill>PCB Design</SkillPill>
          <SkillPill>Linux</SkillPill>
          <SkillPill>Java</SkillPill>
        </KeySkills>
        <DownloadButton 
          href="/resume.pdf" 
          download="Gautam_Bidari_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadIcon>
            <FaFileAlt />
          </DownloadIcon>
          Download Resume
        </DownloadButton>
      </ResumeSection>
    </AboutContainer>
  );
};

export default About;