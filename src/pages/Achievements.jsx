import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaAward, FaMedal, FaTrophy, FaCertificate } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AchievementsContainer = styled.div`
  padding: 5rem 2rem;
  background: #121212;
  
  @media screen and (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const AchievementsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
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

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 2rem;
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

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  margin-bottom: 4rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled.div`
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
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    border-color: rgba(21, 205, 252, 0.3);
  }
`;

const AchievementHeader = styled.div`
  position: relative;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(30,30,30,0.9), rgba(20,20,20,0.95));
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
`;

const AchievementIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.color || 'linear-gradient(135deg, #15cdfc, #5f65f9)'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
  svg {
    color: white;
    font-size: 1.5rem;
  }
`;

const AchievementTitleContainer = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h4`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const AchievementSource = styled.p`
  font-size: 1rem;
  color: #15cdfc;
  font-weight: 500;
`;

const AchievementContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const AchievementDate = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  font-style: italic;
  margin-bottom: 1rem;
`;

const AchievementDescription = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ViewCertificationButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: rgba(21, 205, 252, 0.1);
  color: #15cdfc;
  border: 1px solid rgba(21, 205, 252, 0.3);
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: auto;
  width: fit-content;
  
  &:hover {
    background: rgba(21, 205, 252, 0.2);
    transform: translateY(-2px);
  }
`;

const AchievementImage = styled.div`
  height: 250px;
  min-width: 100%;
  min-height: 100%;
  background-color: #252525;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, #1e1e1e, transparent);
  }
`;

// Custom arrow components for react-slick
const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 2;
  background: rgba(30, 30, 30, 0.25);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b0b0b0;
  font-size: 1.1rem;
  cursor: pointer;
  transform: translateY(-50%);
  opacity: 0.5;
  transition: background 0.2s, color 0.2s, opacity 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  &:hover {
    background: rgba(21, 205, 252, 0.18);
    color: #15cdfc;
    opacity: 1;
  }
`;

const NextArrow = ({ className, style, onClick, show }) => {
  if (!show) return null;
  return (
    <ArrowButton
      className={className}
      style={{ ...style, right: 10 }}
      onClick={onClick}
      aria-label="Next image"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4.5L12 9L6 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </ArrowButton>
  );
};

const PrevArrow = ({ className, style, onClick, show }) => {
  if (!show) return null;
  return (
    <ArrowButton
      className={className}
      style={{ ...style, left: 10 }}
      onClick={onClick}
      aria-label="Previous image"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.5L6 9L12 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </ArrowButton>
  );
};

// Hide only the default slick arrow icons
const HideSlickDefaultArrowIcons = createGlobalStyle`
  .slick-prev::before, .slick-next::before {
    display: none !important;
  }
`;

const Achievements = () => {
  // Awards data
  const awards = [
    {
      id: 1,
      title: "Laurel and Scroll 100 Honor Society Award",
      organization: "Northeastern University",
      date: "May 2025",
      description: "Inducted into the Laurel and Scroll 100 Honor Society for outstanding academic achievement and leadership in extracurricular activities.",
      icon: <FaAward />,
      color: "linear-gradient(135deg, #8e44ad, #2980b9)",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/laurel-and-scroll-1.jpg`,
        `${process.env.PUBLIC_URL}/images/projects/laurel-and-scroll-2.jpg`
      ],
    },
    {
      id: 2,
      title: "Cyber-Physical Systems Department Award",
      organization: "Northeastern University",
      date: "May 2025",
      description: "Received the Department Award for exceptional contributions to research and innovation in Cyber-Physical Systems.",
      icon: <FaTrophy />,
      color: "linear-gradient(135deg, #00b894, #00cec9)",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/cyps-award-1.jpg`,
        `${process.env.PUBLIC_URL}/images/projects/cyps-award-2.jpeg`
      ],
    },
    {
      id: 3,
      title: "MITRE E-CTF Top 18",
      organization: "MITRE Corporation",
      date: "April 2025",
      description: "Ranked 18 globally out of 120+ teams in the MITRE Embedded Capture-The-Flag competition, designing a secure satellite communication system with hardware security features.",
      icon: <FaAward />,
      color: "linear-gradient(135deg, #8e44ad, #2980b9)",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/ectf-logo.png`,
      ],
    },
    {
      id: 4,
      title: "Winner - Silicon Labs Matter Developer Challenge",
      organization: "Silicon Labs",
      date: "October 2024",
      description: "Won the Silicon Labs Matter Developer Challenge with a Matter-enabled Patient Monitoring System for Critical Care Environments. Featured in the SiLabs WorksWith Conference.",
      icon: <FaTrophy />,
      color: "linear-gradient(135deg, #FFD700, #FFA500)",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/matter-challenge-2.png`,
        `${process.env.PUBLIC_URL}/images/projects/matter-challenge-winners.png`
      ],
    },
    {
      id: 5,
      title: "Deloitte Applause Award",
      organization: "Deloitte Consulting",
      date: "February 2023",
      description: "Recognized for exceptional performance in end-to-end implementation of core modules supporting 5+ business use cases with zero critical post-deployment defects.",
      icon: <FaMedal />,
      color: "linear-gradient(135deg, #0076CE, #00218A)",
      images: [
      `${process.env.PUBLIC_URL}/images/projects/deloitte-applause-award.png`,
      `${process.env.PUBLIC_URL}/images/projects/Deloitte-emblem.png`,
        
      ],
    },

  ];

  // Certifications data
  const certifications = [
    {
      id: 1,
      title: "GCP Associate Cloud Engineer",
      organization: "Google Cloud Platform (GCP)",
      date: "September 2023",
      description: "",
      icon: <FaCertificate />,
      link: "",
      color: "linear-gradient(135deg, #0078D4, #0050A0)",
      images: [
        `${process.env.PUBLIC_URL}/images/projects/gcp-certification.png`,
        `${process.env.PUBLIC_URL}/images/projects/gcp.jpg`
      ],
    }
  ];

  // Helper to get carousel settings per image set
  const getCarouselSettings = (images) => ({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: images.length > 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow show={images.length > 1} />,
    prevArrow: <PrevArrow show={images.length > 1} />,
    autoplay: false,
    autoplaySpeed: 3000,
  });

  return (
    <>
      <HideSlickDefaultArrowIcons />
      <AchievementsContainer>
        <AchievementsTitle>Achievements</AchievementsTitle>
        
        <ContentWrapper>
          <SectionTitle>Awards & Recognition</SectionTitle>
          <AchievementsGrid>
            {awards.map((award) => (
              <AchievementCard key={award.id}>
                {award.images && award.images.length > 0 && (
                  <Slider {...getCarouselSettings(award.images)}>
                    {award.images.map((img, idx) => (
                      <AchievementImage key={idx} bg={img} role="img" aria-label={`Image for ${award.title} - ${idx + 1}`} />
                    ))}
                  </Slider>
                )}
                <AchievementHeader>
                  <AchievementIcon color={award.color}>
                    {award.icon}
                  </AchievementIcon>
                  <AchievementTitleContainer>
                    <AchievementTitle>{award.title}</AchievementTitle>
                    <AchievementSource>{award.organization}</AchievementSource>
                  </AchievementTitleContainer>
                </AchievementHeader>
                <AchievementContent>
                  <AchievementDate>{award.date}</AchievementDate>
                  <AchievementDescription>{award.description}</AchievementDescription>
                </AchievementContent>
              </AchievementCard>
            ))}
          </AchievementsGrid>

          <SectionTitle>Certifications</SectionTitle>
          <AchievementsGrid>
            {certifications.map((cert) => (
              <AchievementCard key={cert.id}>
                {cert.images && cert.images.length > 0 && (
                  <Slider {...getCarouselSettings(cert.images)}>
                    {cert.images.map((img, idx) => (
                      <AchievementImage key={idx} bg={img} role="img" aria-label={`Image for ${cert.title} - ${idx + 1}`} />
                    ))}
                  </Slider>
                )}
                <AchievementHeader>
                  <AchievementIcon color={cert.color}>
                    {cert.icon}
                  </AchievementIcon>
                  <AchievementTitleContainer>
                    <AchievementTitle>{cert.title}</AchievementTitle>
                    <AchievementSource>{cert.organization}</AchievementSource>
                  </AchievementTitleContainer>
                </AchievementHeader>
                <AchievementContent>
                  <AchievementDate>{cert.date}</AchievementDate>
                  <AchievementDescription>{cert.description}</AchievementDescription>
                  {cert.link && (
                    <ViewCertificationButton 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certification
                    </ViewCertificationButton>
                  )}
                </AchievementContent>
              </AchievementCard>
            ))}
          </AchievementsGrid>
        </ContentWrapper>
      </AchievementsContainer>
    </>
  );
};

export default Achievements;