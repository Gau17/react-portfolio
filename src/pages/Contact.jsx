import React from 'react';
import styled from 'styled-components';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaYoutube,
  FaFileAlt
} from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 5rem 2rem;
  background: #121212;
  min-height: calc(100vh - 160px); /* Accounting for header and footer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
  
  @media screen and (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #15cdfc;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SocialLinkCard = styled.a`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(21, 205, 252, 0.3);
    background: rgba(30, 30, 30, 0.9);
  }
  
  @media screen and (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const SocialIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  background: ${props => props.gradient || 'linear-gradient(135deg, #15cdfc, #4e4bd0)'};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
`;

const SocialIcon = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const SocialLinkContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialLinkTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const SocialLinkText = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
`;

const ContactInfoSection = styled.div`
  background: rgba(30, 30, 30, 0.7);
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #15cdfc, #5f65f9);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #e0e0e0;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.span`
  font-size: 1.5rem;
  color: #15cdfc;
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(21, 205, 252, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactInfoText = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
`;

const Contact = () => {
  // Social media links data
  const socialLinks = [
    {
      platform: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Gau17",
      username: "@Gau17",
      gradient: "linear-gradient(135deg, #333, #6e5494)"
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/gautam-bidari",
      username: "gautam-bidari",
      gradient: "linear-gradient(135deg, #0077b5, #0a66c2)"
    },
    {
      platform: "YouTube",
      icon: <FaYoutube />,
      url: "https://youtube.com/@gautambidari",
      username: "@gautambidari",
      gradient: "linear-gradient(135deg, #FF0000, #CC0000)"
    },
    {
      platform: "Resume",
      icon: <FaFileAlt />,
      url: process.env.PUBLIC_URL + "/resume.pdf",
      username: "Download PDF",
      gradient: "linear-gradient(135deg, #15cdfc, #4e4bd0)"
    },
    {
      platform: "Email",
      icon: <FaEnvelope />,
      url: "mailto:bidari.g@northeastern.edu",
      username: "bidari.g@northeastern.edu",
      gradient: "linear-gradient(135deg, #15cdfc, #4e4bd0)"
    }
  ];

  return (
    <ContactContainer>
      <ContactTitle>Connect With Me</ContactTitle>
      <ContactSubtitle>
        Feel free to reach out through any of these platforms
      </ContactSubtitle>
      
      <ContactContentWrapper>
        <SocialLinksGrid>
          {socialLinks.map((link, index) => (
            <SocialLinkCard 
              key={index} 
              href={link.url} 
              target={link.platform !== "Email" && link.platform !== "Resume" ? "_blank" : ""}
              rel="noopener noreferrer"
              download={link.platform === "Resume" ? "Gautam_Bidari_Resume.pdf" : undefined}
            >
              <SocialIconWrapper gradient={link.gradient}>
                <SocialIcon>{link.icon}</SocialIcon>
              </SocialIconWrapper>
              <SocialLinkContent>
                <SocialLinkTitle>{link.platform}</SocialLinkTitle>
                <SocialLinkText>{link.username}</SocialLinkText>
              </SocialLinkContent>
            </SocialLinkCard>
          ))}
        </SocialLinksGrid>
        
        <ContactInfoSection>
          <ContactInfo>
            <ContactText>
              I'm interested in opportunities in embedded systems development, IoT applications, 
              and innovative technology projects. Whether you have a specific project in mind or 
              just want to connect, feel free to reach out through any of my social platforms above!
            </ContactText>
          </ContactInfo>
        </ContactInfoSection>
      </ContactContentWrapper>
    </ContactContainer>
  );
};

export default Contact;