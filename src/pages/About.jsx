import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaCode, FaLaptopCode, FaServer, FaMicrochip, FaRobot, FaBriefcase, FaGraduationCap, FaFileDownload, FaEye } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: calc(1.618rem * 3) calc(1.618rem * 1.2);
  background: #121212;
  color: #e0e0e0;
`;

const AboutTitle = styled.h2`
  font-size: calc(1.618rem * 1.618);
  text-align: center;
  margin-bottom: calc(1.618rem * 2.5);
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

const ProfileSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 4rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 3rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 1/1.2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 350px;
  margin: 0 auto;
  height: auto;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid transparent;
    border-radius: 10px;
    background: linear-gradient(45deg, #15cdfc, #5f65f9) border-box;
    -webkit-mask: 
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
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

const SectionContainer = styled.div`
  margin-top: calc(1.618rem * 2.5);
  max-width: 1200px;
  margin: calc(1.618rem * 2.5) auto 0;
`;

const SectionTitle = styled.h3`
  font-size: calc(1.618rem * 1.2);
  margin-bottom: calc(1.618rem * 1.8);
  color: #ffffff;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background: linear-gradient(180deg, #15cdfc, #5f65f9);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
    opacity: 0.6;
  }
  
  @media screen and (max-width: 768px) {
    &:after {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  left: ${(props) => (props.position === 'right' ? '50%' : '0')};
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background: #1e1e1e;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: ${(props) => (props.position === 'right' ? 'auto' : '-15px')};
  left: ${(props) => (props.position === 'right' ? '-15px' : 'auto')};
  top: 20px;
  border-radius: 50%;
  z-index: 2;
  background: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    left: 16px;
    right: auto;
  }
`;

const TimelineIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #15cdfc, #5f65f9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
`;

const TimelineTitle = styled.h4`
  font-size: calc(1.618rem * 0.9);
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.h5`
  font-size: 1.1rem;
  color: #15cdfc;
  margin-bottom: 0.5rem;
`;

const TimelineDate = styled.p`
  font-size: 0.9rem;
  color: #aaaaaa;
  font-style: italic;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.ul`
  padding-left: 1.2rem;
`;

const TimelinePoint = styled.li`
  font-size: 0.95rem;
  color: #e0e0e0;
  margin-bottom: 0.75rem;
  line-height: 1.5;
`;

const ResumeSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 2rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
  }
`;

const ResumeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ResumeTitle = styled.h3`
  font-size: calc(1.618rem * 1.2);
  margin-bottom: 1.2rem;
  color: #ffffff;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 2px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
    border-radius: 2px;
  }
`;

const ResumeText = styled.p`
  font-size: 1.1rem;
  line-height: 1.618;
  margin-bottom: 2rem;
  color: #e0e0e0;
  max-width: 800px;
`;

const ResumeButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ResumeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background: ${props => props.primary ? 'linear-gradient(135deg, #15cdfc, #5f65f9)' : 'rgba(30, 30, 30, 0.9)'};
  color: ${props => props.primary ? '#ffffff' : '#15cdfc'};
  border: ${props => props.primary ? 'none' : '1px solid #15cdfc'};
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 180px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background: ${props => props.primary ? 'linear-gradient(135deg, #0eb4e3, #4e4bd0)' : 'rgba(21, 205, 252, 0.1)'};
  }
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const SkillRatingContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
`;

const SkillCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const CategoryHeader = styled.h3`
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

const SkillBar = styled.div`
  margin-bottom: 2rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const SkillName = styled.span`
  color: #ffffff;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  background: rgba(21, 205, 252, 0.1);
  color: #15cdfc;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  font-size: 1rem;
`;

const SkillLevel = styled.span`
  color: ${props => 
    props.level === 'Expert' ? '#15cdfc' : 
    props.level === 'Advanced' ? '#4a9aff' : 
    props.level === 'Intermediate' ? '#2cc7b1' : 
    '#15cda5'
  };
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProgressBarBg = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.animate ? 
    (props.level === 'Expert' ? '95%' : 
     props.level === 'Advanced' ? '80%' : 
     props.level === 'Intermediate' ? '60%' : 
     '40%') : '0'
  };
  background: ${props => 
    props.level === 'Expert' ? 'linear-gradient(90deg, #15cdfc, #5f65f9)' : 
    props.level === 'Advanced' ? 'linear-gradient(90deg, #15cdfc, #4a9aff)' : 
    props.level === 'Intermediate' ? 'linear-gradient(90deg, #15cdfc, #2cc7b1)' : 
    'linear-gradient(90deg, #15cdfc, #15cda5)'
  };
  border-radius: 3px;
  transition: width 1.2s ease-out;
`;

const About = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const skillData = [
    {
      category: "Software & Tools",
      skills: [
        { name: "Embedded C/C++", level: "Expert", icon: <FaServer /> },
        { name: "Python", level: "Expert", icon: <FaCode /> },        
        { name: "Java, SQL, GCP", level: "Advanced", icon: <FaServer /> },
        { name: "Rust", level: "Intermediate", icon: <FaCode /> },
        { name: "TensorFlow, OpenCV", level: "Intermediate", icon: <FaRobot /> }

      ]
    },
    {
      category: "Embedded & Hardware",
      skills: [
        { name: "ARM Microcontrollers", level: "Expert", icon: <FaMicrochip /> },
        { name: "Arduino, ESP32, nRF52840", level: "Expert", icon: <FaMicrochip /> },
        { name: "Linux & Embedded Linux", level: "Advanced", icon: <FaServer /> },
        { name: "Device Drivers", level: "Advanced", icon: <FaMicrochip /> },
        { name: "JTAG Debugging", level: "Expert", icon: <FaLaptopCode /> }
      ]
    },
    {
      category: "IoT & Communication",
      skills: [
        { name: "BLE/Thread/Matter", level: "Expert", icon: <FaLaptopCode /> },
        { name: "SPI/I²C/UART", level: "Expert", icon: <FaLaptopCode /> },
        { name: "RTOS", level: "Advanced", icon: <FaLaptopCode /> }
      ]
    },
    {
      category: "Design & Testing",
      skills: [
        { name: "KiCad PCB Design", level: "Intermediate", icon: <FaMicrochip /> },
        { name: "TDD & Unity Testing", level: "Advanced", icon: <FaCode /> }
      ]
    }
  ];

  const experiences = [
    {
      id: 1,
      title: "Teaching Assistant - ML for IoT Systems (TELE 6500)",
      company: "Northeastern University, Boston, MA",
      date: "January 2025 - April 2025",
      points: [
        "Responsible for designing and grading assignments and projects",
        "Conducted weekly lab sessions using Python and frameworks like SKTime and SKForecast"
      ],
      icon: <FaBriefcase />
    },
    {
      id: 2,
      title: "Embedded Software Engineering Intern",
      company: "Woods Hole Oceanographic Institute (WHOI), Woods Hole, MA",
      date: "June 2024 - December 2024",
      points: [
        "Designed, built and field-tested a low-cost, high-precision optical pH sensor having 3rd decimal place precision and sampling rate 2x other devices",
        "Designed, manufactured and assembled prototype PCBs using KiCad and JLCPCB",
        "Wrote embedded C firmware libraries for nRF52840 MCU (ARM Cortex-M4) following a test driven development framework and MISRA C 2012 guidelines",
        "Developed an interactive python-based GUI to control sensor components via BLE or Serial interface and plot sensor data in real-time",
        "Wrote comprehensive unit and component tests using Unity framework",
        "Documented UML and system state diagrams and used event driven architecture principles and design patterns",
        "Interfaced sensor with Bristlemouth Dev Kit and Sofar Spotter for cellular/satellite connectivity",
        "Collaborated with Lowell Instruments LLC to interface sensor with their commercial Deck Data Hub using BLE, enhancing deployment capabilities"
      ],
      icon: <FaMicrochip />
    },
    {
      id: 3,
      title: "Teaching Assistant - Data Networking (TELE 5330)",
      company: "Northeastern University, Boston, MA",
      date: "January 2024 - April 2024",
      points: [
        "Responsible for designing and grading assignments, projects, and viva evaluations",
        "Conducted weekly Networking Lab sessions using Cisco Packet Tracer and Ubuntu Linux"
      ],
      icon: <FaLaptopCode />
    },
    {
      id: 4,
      title: "Java Backend Developer",
      company: "Deloitte Consulting, India",
      date: "June 2022 - August 2023",
      points: [
        "Awarded Deloitte Applause Award for end-to-end implementation of core modules supporting 5+ business use cases (0 critical post-deployment defects)",
        "Built 20+ REST endpoints using Spring Boot Microservices with 99.9% uptime SLA. Containerized deployment using Docker and Google Kubernetes Engine (GKE)",
        "Utilized Git, Jenkins and Jira for CI/CD flows across Dev/QA/Prod and Project Management in an Agile Framework"
      ],
      icon: <FaServer />
    },
    {
      id: 5,
      title: "Embedded Software Engineering Intern",
      company: "Millennium Semiconductors, India",
      date: "June 2021 - August 2021",
      points: [
        "Successfully prototyped a wearable, low-cost, bluetooth-enabled patient monitoring system",
        "Bare metal development on nRF52840 MCU using Segger Embedded System IDE w/ JTAG debugger and protocols like SPI, I2C, BLE"
      ],
      icon: <FaCode />
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Science - MS, Cyber-Physical Systems",
      institution: "Northeastern University",
      date: "September 2023 - August 2025",
      grade: "Grade: 4.0",
      // activities: "Activities: President - IoT Connect Club (Spring 2025)",
      courses: [
        "Fundamentals of Internet of Things (TELE 6510)",
        "Data Networking (TELE 5330)",
        "Data Networking Lab (TELE 5331)",
        "Connected Devices (TELE 6530)",
        "ML for IoT (TELE 6500)",
        "Software Security and Vulnerability (CY5770)",
        "Computer Hardware Security (EECE 7390)",
        "Embedded Device Drivers and Rust (TELE 7374)"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Technology - B.Tech, Electronics and Communication Engineering",
      institution: "Visvesvaraya National Institute of Technology (NIT Nagpur)",
      date: "July 2018 - May 2022",
      courses: [
        "Embedded Systems", 
        "Operating Systems", 
        "Object-Oriented Programming"
      ]
    }
  ];

  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      
      <ProfileSection>
        <ProfileImageContainer>
          <img 
            src={process.env.PUBLIC_URL + "/profile.JPG"}
            alt="Gautam Bidari" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 0 }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; color: #a0a0a0; font-size: 1rem; text-align: center; padding: 2rem; position: relative; z-index: 0;">Upload a profile image at \'/public/profile.JPG\'</div>';
            }}
          />
        </ProfileImageContainer>
        
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
      </ProfileSection>
      
      <ResumeSection>
        <ResumeContent>
          <ResumeTitle>My Resume</ResumeTitle>
          <ResumeText>
            Want to know more about my professional background? 
            Download my resume to see detailed information about my education, work experience, skills, and achievements.
          </ResumeText>
          <ResumeButtons>
            <ResumeButton primary href={process.env.PUBLIC_URL + "/resume.pdf"} download="Gautam_Bidari_Resume.pdf">
              <FaFileDownload /> Download Resume
            </ResumeButton>
            <ResumeButton href={process.env.PUBLIC_URL + "/pdf-viewer.html"} target="_blank" rel="noopener noreferrer">
              <FaEye /> View Resume
            </ResumeButton>
          </ResumeButtons>
        </ResumeContent>
      </ResumeSection>

      <SkillRatingContainer>
        <SectionTitle>Technical Expertise</SectionTitle>
        
        <SkillCategoriesGrid>
          {skillData.map((category, index) => (
            <SkillCategory key={index}>
              <CategoryHeader>{category.category}</CategoryHeader>
              
              {category.skills.map((skill, idx) => (
                <SkillBar key={idx}>
                  <SkillInfo>
                    <SkillName>
                      <IconWrapper>{skill.icon}</IconWrapper>
                      {skill.name}
                    </SkillName>
                    <SkillLevel level={skill.level}>{skill.level}</SkillLevel>
                  </SkillInfo>
                  <ProgressBarBg>
                    <ProgressBar animate={animateSkills} level={skill.level} />
                  </ProgressBarBg>
                </SkillBar>
              ))}
            </SkillCategory>
          ))}
        </SkillCategoriesGrid>
      </SkillRatingContainer>
      
      <SectionContainer>
        <SectionTitle>Work Experience</SectionTitle>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem 
              key={experience.id} 
              position={index % 2 === 0 ? 'left' : 'right'}
            >
              <TimelineContent>
                <TimelineTitle>{experience.title}</TimelineTitle>
                <TimelineCompany>{experience.company}</TimelineCompany>
                <TimelineDate>{experience.date}</TimelineDate>
                <TimelineDescription>
                  {experience.points.map((point, i) => (
                    <TimelinePoint key={i}>{point}</TimelinePoint>
                  ))}
                </TimelineDescription>
              </TimelineContent>
              <TimelineDot position={index % 2 === 0 ? 'left' : 'right'}>
                <TimelineIcon>
                  {experience.icon}
                </TimelineIcon>
              </TimelineDot>
            </TimelineItem>
          ))}
        </Timeline>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Education</SectionTitle>
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem 
              key={edu.id} 
              position={index % 2 === 0 ? 'left' : 'right'}
            >
              <TimelineContent>
                <TimelineTitle>{edu.degree}</TimelineTitle>
                <TimelineCompany>{edu.institution}</TimelineCompany>
                <TimelineDate>{edu.date}</TimelineDate>
                <p style={{ color: '#aaaaaa', margin: '0.5rem 0', fontSize: '0.9rem' }}>{edu.grade}</p>
                <p style={{ color: '#aaaaaa', margin: '0 0 1rem', fontSize: '0.9rem' }}>{edu.activities}</p>
                <h6 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem' }}>Relevant Coursework:</h6>
                <TimelineDescription>
                  {edu.courses.map((course, i) => (
                    <TimelinePoint key={i}>{course}</TimelinePoint>
                  ))}
                </TimelineDescription>
              </TimelineContent>
              <TimelineDot position={index % 2 === 0 ? 'left' : 'right'}>
                <TimelineIcon>
                  <FaGraduationCap />
                </TimelineIcon>
              </TimelineDot>
            </TimelineItem>
          ))}
        </Timeline>
      </SectionContainer>
    </AboutContainer>
  );
};

export default About;