import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 5rem 2rem;
  background: #121212;
  
  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-gap: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    padding: 0 0.5rem;
    grid-gap: 1.25rem;
  }
`;

const ProjectCard = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    border-color: rgba(21, 205, 252, 0.3);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #252525;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(to top, #1e1e1e, transparent);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  flex: 1;
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
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 1.5rem;
  padding: 0.5rem 0;
  transition: all 0.2s ease;
  
  &:hover {
    color: #15cdfc;
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid #15cdfc;
    outline-offset: 2px;
    border-radius: 4px;
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

const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterTag = styled.button`
  background: ${props => (props.active ? 'rgba(21, 205, 252, 0.25)' : 'rgba(30, 30, 30, 0.7)')};
  color: ${props => (props.active ? '#15cdfc' : '#a0a0a0')};
  border: 1px solid ${props => (props.active ? '#15cdfc' : 'rgba(255, 255, 255, 0.1)')};
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(21, 205, 252, 0.15);
    color: #15cdfc;
    border-color: #15cdfc;
  }
  
  &:focus {
    outline: 2px solid #15cdfc;
    outline-offset: 2px;
  }
  
  @media screen and (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const ActiveFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

const ActiveFilter = styled.div`
  display: flex;
  align-items: center;
  background: rgba(21, 205, 252, 0.15);
  color: #15cdfc;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  
  svg {
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 0.75rem;
    
    &:hover {
      color: #ffffff;
    }
  }
`;

const ClearFiltersButton = styled.button`
  background: none;
  color: #a0a0a0;
  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: #ffffff;
  }
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #a0a0a0;
  font-size: 1.1rem;
  grid-column: 1 / -1;
`;

const Projects = () => {
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Embedded Linux Device Driver Development',
      date: 'Jan 2025 - April 2025',
      description: 'Developed Linux device drivers for sysfs, proc, and ioctl to manipulate RPi 4 GPIO ports using memory mapped IO and bit manipulation for PWM control.',
      tech: ['Linux Device Drivers', 'Yocto', 'Rust', 'GPIO', 'Raspberry Pi'],
      github: 'https://github.com/Gau17/HEDD_Project',
      // demo: '#',
      image: `${process.env.PUBLIC_URL}/images/projects/embedded-linux.jpeg`,
    },
    {
      id: 2,
      title: 'MITRE E-CTF 2025 (Team NEU1)',
      date: 'Jan 2025 - April 2025',
      description: 'Designed a secure Satellite Communication System based on MAX78000 (Arm Cortex-M4) MCU. Implemented end-to-end encryption using ChaCha20Poly1305 for AEAD. Ranked top 20 out of 120+ teams.',
      tech: ['Embedded Security', 'ChaCha20Poly1305', 'SHA512 HKDF', 'MAX78000', 'Hardware Security'],
      // github: 'https://github.com',
      // demo: '#',
      image: `${process.env.PUBLIC_URL}/images/projects/ectf.jpg`,
    },
    {
      id: 3,
      title: 'Matter-enabled Patient Monitoring System',
      date: 'Sep 2024 - Oct 2024',
      description: 'Winner - Silicon Labs Matter Developer Challenge; Featured in SiLabs WorksWith Conference. Redesigned Matter over Thread for critical-care environments with 40% lower energy consumption than WiFi.',
      tech: ['IoT', 'Matter', 'Thread', 'Arduino Nano', 'SPI', 'I2C'],
      github: 'https://github.com/Gau17/Matter-Enabled_Patient_Monitoring_System',
      demo: 'https://youtu.be/47jS2L-9tFg',
      image: `${process.env.PUBLIC_URL}/images/projects/matter-challenge.png`,
    },
    {
      id: 4,
      title: 'Time Series Forecasting',
      date: 'Jan 2024 - Feb 2024',
      description: 'Forecasted energy consumption using PJM Energy Dataset and models such as Exponential Smoothing, Holt-Winters, AR, MA, ARMA, ARIMA, SARIMA and XGBoost.',
      tech: ['Time Series', 'Forecasting', 'ARIMA', 'SARIMA', 'XGBoost', 'Python'],
      github: 'https://github.com/Gau17/ML_IoT',
      // demo: '#',
      image: `${process.env.PUBLIC_URL}/images/projects/time-series.webp`,
    },
    {
      id: 5,
      title: 'IoT Data Center Thermal Management System',
      date: 'Jan 2024 - April 2024',
      description: 'Designed an IoT control system using temperature, humidity, and pressure sensors with automated HVAC controls via MQTT. Applied ML algorithms for predictive maintenance to reduce downtime by 30%.',
      tech: ['IoT', 'MQTT', 'Edge AI', 'Raspberry Pi', 'Redis'],
      // github: 'https://github.com',
      demo: 'https://youtu.be/jCYXgjibJdw',
      image: `${process.env.PUBLIC_URL}/images/projects/data-center.avif`,
    },
    {
      id: 6,
      title: 'Linux Based Intranet Design',
      date: 'Nov 2023 - Dec 2023',
      description: 'Configured DHCP, DNS (BIND9), Web server, and implemented IPSec VPN in tunnel mode between Linux machines. Created Network File System for file sharing between server and client.',
      tech: ['Linux', 'DHCP', 'DNS', 'BIND9', 'IPSec VPN', 'Apache2'],
      // github: 'https://github.com',
      // demo: '#',
      image: `${process.env.PUBLIC_URL}/images/projects/network-design.jpg`,
    },
    {
      id: 7,
      title: 'Organizational Network Design',
      date: 'Oct 2023 - Nov 2023',
      description: 'Designed inter-connectivity for a 5-location organization, addressing bandwidth (EtherChannel), redundancy (STP, HSRP), and latency concerns using Cisco Packet Tracer.',
      tech: ['Network Design', 'OSPF', 'EIGRP', 'VLANs', 'ACLs', 'Cisco'],
      // github: 'https://github.com',
      // demo: '#',
      image: `${process.env.PUBLIC_URL}/images/projects/cisco-network.jpg`,
    },
    {
      id: 8,
      title: 'Real Time Audio Synchronization Using Audio Fingerprinting',
      date: 'Aug 2021 - Feb 2022',
      description: 'Published in IEEE Xplore. Designed a system that can recognize a song by recording a small snippet of it and automatically synchronize lag-free playback with 86% detection accuracy.',
      tech: ['Digital Signal Processing', 'FFT', 'DWT', 'Audio Fingerprinting', 'Synchronization'],
      github: 'https://github.com/VNIT-Final-Year-Project/Audio-Fingerprinting-and-Syncing',
      demo: 'https://ieeexplore.ieee.org/document/9808050',
      image: `${process.env.PUBLIC_URL}/images/projects/audio-waves.jpg`,
    },
    {
      id: 9,
      title: 'Mask Module for Remote Health Monitoring',
      date: 'May 2021 - June 2021',
      description: 'Patent Application Published (No: 202221031954). Designed an ESP32 based multi-sensor smart module with BLE capability to track vital signs and reduce infection risk by up to 50%.',
      tech: ['ESP32', 'BLE', 'Healthcare IoT', 'Android App', 'Remote Monitoring'],
      // github: 'https://github.com',
      demo: 'https://drive.google.com/file/d/1DDVhYUej-ciNVQxkOFRwRMLbjFDIWOSo/view?usp=sharing',
      image: `${process.env.PUBLIC_URL}/images/projects/smart-mask.jpg`,
    },
  ], []);

  const categories = useMemo(() => [
    { name: "Embedded Systems", tags: ["Embedded Security", "Raspberry Pi", "ESP32", "Arduino Nano", "MAX78000", "Hardware Security", "GPIO", "SPI", "I2C", "ChaCha20Poly1305", "SHA512 HKDF"] },
    { name: "IoT", tags: ["IoT", "Matter", "Thread", "BLE", "MQTT", "Healthcare IoT", "Remote Monitoring"] },
    { name: "Networking", tags: ["Network Design", "OSPF", "EIGRP", "VLANs", "ACLs", "Cisco", "DHCP", "DNS", "BIND9", "IPSec VPN"] },
    { name: "Software Development", tags: ["Rust", "Linux Device Drivers", "Yocto", "Python", "Redis", "Apache2"] },
    { name: "Data Science", tags: ["Time Series", "Forecasting", "ARIMA", "SARIMA", "XGBoost", "Edge AI"] },
    { name: "Signal Processing", tags: ["Digital Signal Processing", "FFT", "DWT", "Audio Fingerprinting", "Synchronization"] },
    { name: "Mobile Development", tags: ["Android App"] },
  ], []);
  
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => {
        return project.tech.some(tech => selectedFilters.includes(tech)) ||
               selectedFilters.some(filter => {
                 const category = categories.find(cat => cat.name === filter);
                 if (!category) return false;
                 return project.tech.some(tech => category.tags.includes(tech));
               });
      });
      setFilteredProjects(filtered);
    }
  }, [selectedFilters, categories, projects]);

  const toggleFilter = (tag) => {
    if (selectedFilters.includes(tag)) {
      setSelectedFilters(selectedFilters.filter(filter => filter !== tag));
    } else {
      setSelectedFilters([...selectedFilters, tag]);
    }
  };

  const removeFilter = (tag) => {
    setSelectedFilters(selectedFilters.filter(filter => filter !== tag));
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      
      <FilterContainer>        
        <TagsContainer>
          {categories.map((category, index) => (
            <FilterTag
              key={index}
              active={selectedFilters.includes(category.name)}
              onClick={() => toggleFilter(category.name)}
              aria-pressed={selectedFilters.includes(category.name)}
            >
              {category.name}
            </FilterTag>
          ))}
        </TagsContainer>
        
        {selectedFilters.length > 0 && (
          <ActiveFiltersContainer>
            {selectedFilters.map((filter, index) => (
              <ActiveFilter key={index}>
                {filter}
                <FaTimes onClick={() => removeFilter(filter)} aria-label={`Remove ${filter} filter`} />
              </ActiveFilter>
            ))}
            <ClearFiltersButton onClick={clearFilters}>
              Clear all filters
            </ClearFiltersButton>
          </ActiveFiltersContainer>
        )}
      </FilterContainer>
      
      <ProjectsWrapper>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage bg={project.image} role="img" aria-label={`Project: ${project.title}`} />
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
                  {project.demo && (
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      <LinkIcon>
                        <FaExternalLinkAlt />
                      </LinkIcon>
                      Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))
        ) : (
          <NoResultsMessage>
            No projects match the selected filters. Try selecting different filters.
          </NoResultsMessage>
        )}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;