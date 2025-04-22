import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 5rem 2rem;
  background: #121212;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #252525;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
  background-size: cover;
  background-position: center;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(21, 205, 252, 0.15);
  color: #15cdfc;
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 1.5rem;
  
  &:hover {
    color: #15cdfc;
  }
`;

const LinkIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.1rem;
`;

const ProjectDate = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  font-style: italic;
  margin-bottom: 0.75rem;
`;

const Projects = () => {
  // Project data based on Gautam's specific projects
  const projects = [
    {
      id: 1,
      title: 'Embedded Linux Device Driver Development',
      date: 'Jan 2025 - April 2025',
      description: 'Developed Linux device drivers for sysfs, proc, and ioctl to manipulate RPi 4 GPIO ports using memory mapped IO and bit manipulation for PWM control.',
      tech: ['Linux Device Drivers', 'Yocto', 'Rust', 'GPIO', 'Raspberry Pi'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
    {
      id: 2,
      title: 'MITRE E-CTF 2025 (Team NEU1)',
      date: 'Jan 2025 - April 2025',
      description: 'Designed a secure Satellite Communication System based on MAX78000 (Arm Cortex-M4) MCU. Implemented end-to-end encryption using ChaCha20Poly1305 for AEAD. Ranked top 20 out of 120+ teams.',
      tech: ['Embedded Security', 'ChaCha20Poly1305', 'SHA512 HKDF', 'MAX78000', 'Hardware Security'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
    {
      id: 3,
      title: 'Matter-enabled Patient Monitoring System',
      date: 'Sep 2024 - Oct 2024',
      description: 'Winner - Silicon Labs Matter Developer Challenge; Featured in SiLabs WorksWith Conference. Redesigned Matter over Thread for critical-care environments with 40% lower energy consumption than WiFi.',
      tech: ['IoT', 'Matter', 'Thread', 'Arduino Nano', 'SPI', 'I2C'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
    {
      id: 4,
      title: 'Time Series Forecasting',
      date: 'Jan 2024 - Feb 2024',
      description: 'Forecasted energy consumption using PJM Energy Dataset and models such as Exponential Smoothing, Holt-Winters, AR, MA, ARMA, ARIMA, SARIMA and XGBoost.',
      tech: ['Time Series', 'Forecasting', 'ARIMA', 'SARIMA', 'XGBoost', 'Python'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
    {
      id: 5,
      title: 'IoT Smart Home Thermal Management System',
      date: 'Jan 2024 - April 2024',
      description: 'Designed an IoT control system using temperature, humidity, and pressure sensors with automated HVAC controls via MQTT. Applied ML algorithms for predictive maintenance to reduce downtime by 30%.',
      tech: ['IoT', 'MQTT', 'Edge AI', 'Raspberry Pi', 'Redis'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
    {
      id: 6,
      title: 'Linux Based Intranet Design',
      date: 'Nov 2023 - Dec 2023',
      description: 'Configured DHCP, DNS (BIND9), Web server, and implemented IPSec VPN in tunnel mode between Linux machines. Created Network File System for file sharing between server and client.',
      tech: ['Linux', 'DHCP', 'DNS', 'BIND9', 'IPSec VPN', 'Apache2'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
    {
      id: 7,
      title: 'Organizational Network Design',
      date: 'Oct 2023 - Nov 2023',
      description: 'Designed inter-connectivity for a 5-location organization, addressing bandwidth (EtherChannel), redundancy (STP, HSRP), and latency concerns using Cisco Packet Tracer.',
      tech: ['Network Design', 'OSPF', 'EIGRP', 'VLANs', 'ACLs', 'Cisco'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
    {
      id: 8,
      title: 'Real Time Audio Synchronization',
      date: 'Aug 2021 - Feb 2022',
      description: 'Published in IEEE Xplore. Designed a system that can recognize a song by recording a small snippet of it and automatically synchronize lag-free playback with 86% detection accuracy.',
      tech: ['Digital Signal Processing', 'FFT', 'DWT', 'Audio Fingerprinting', 'Synchronization'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
    {
      id: 9,
      title: 'Mask Module for Remote Health Monitoring',
      date: 'May 2021 - June 2021',
      description: 'Patent Application Published (No: 202221031954). Designed an ESP32 based multi-sensor smart module with BLE capability to track vital signs and reduce infection risk by up to 50%.',
      tech: ['ESP32', 'BLE', 'Healthcare IoT', 'Android App', 'Remote Monitoring'],
      github: 'https://github.com',
      demo: '#',
      image: '',
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage bg={project.image} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDate>{project.date}</ProjectDate>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.tech.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </ProjectTech>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <LinkIcon>
                    <FaGithub />
                  </LinkIcon>
                  Code
                </ProjectLink>
                <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                  <LinkIcon>
                    <FaExternalLinkAlt />
                  </LinkIcon>
                  Details
                </ProjectLink>
              </ProjectLinks>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;