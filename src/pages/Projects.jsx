import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 5rem 2rem;
  background: #fff;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
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
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #ddd;
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
  color: #1a1a1a;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: #e0e0e0;
  color: #333;
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
  color: #1a1a1a;
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

const Projects = () => {
  // Example project data - Replace with your own projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform built with React and Node.js.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '',  // Add your project image path here
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag and drop functionality.',
      tech: ['React', 'Redux', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '',  // Add your project image path here
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that shows current and forecasted weather data.',
      tech: ['JavaScript', 'CSS', 'Weather API'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '',  // Add your project image path here
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      tech: ['React', 'Styled Components'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: '',  // Add your project image path here
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
                  Live Demo
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