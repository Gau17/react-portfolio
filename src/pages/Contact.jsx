import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 5rem 2rem;
  background: #121212;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #ffffff;
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #333333;
  border-radius: 4px;
  font-size: 1rem;
  background: #252525;
  color: #e0e0e0;
  
  &:focus {
    outline: none;
    border-color: #15cdfc;
  }
  
  &::placeholder {
    color: #a0a0a0;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #333333;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background: #252525;
  color: #e0e0e0;
  
  &:focus {
    outline: none;
    border-color: #15cdfc;
  }
  
  &::placeholder {
    color: #a0a0a0;
  }
`;

const SubmitButton = styled.button`
  background: #15cdfc;
  color: #000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0eb4e3;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #e0e0e0;
`;

const ContactDetailsWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.span`
  font-size: 1.5rem;
  color: #15cdfc;
  margin-right: 1rem;
`;

const ContactInfoText = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
`;

const FormSubmitMessage = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  color: ${(props) => (props.success ? '#4caf50' : '#f44336')};
  background-color: ${(props) => (props.success ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)')};
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitMessage, setSubmitMessage] = useState({
    visible: false,
    success: false,
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission to a backend server here
    if (formData.name && formData.email && formData.message) {
      setSubmitMessage({
        visible: true,
        success: true,
        text: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitMessage({
        visible: true,
        success: false,
        text: 'Please fill in all required fields.'
      });
    }

    // Hide message after 5 seconds
    setTimeout(() => {
      setSubmitMessage(prev => ({ ...prev, visible: false }));
    }, 5000);
  };

  return (
    <ContactContainer>
      <ContactTitle>Get In Touch</ContactTitle>
      <ContactWrapper>
        <ContactForm onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <FormTextarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
          <FormSubmitMessage
            visible={submitMessage.visible}
            success={submitMessage.success}
          >
            {submitMessage.text}
          </FormSubmitMessage>
        </ContactForm>

        <ContactInfo>
          <ContactText>
            I'm interested in opportunities in embedded systems development, IoT applications, 
            and innovative technology projects. Whether you have a specific project in mind or 
            just want to connect, feel free to reach out!
          </ContactText>
          <ContactDetailsWrapper>
            <ContactDetail>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactInfoText>Boston, Massachusetts</ContactInfoText>
            </ContactDetail>
            <ContactDetail>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactInfoText>youremail@example.com</ContactInfoText>
            </ContactDetail>
            <ContactDetail>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactInfoText>+1 (123) 456-7890</ContactInfoText>
            </ContactDetail>
          </ContactDetailsWrapper>
        </ContactInfo>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;