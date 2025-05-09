import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';

const Nav = styled.nav`
  background: #1a1a1a;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 80px);
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #000;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #15cdfc;
    transition: all 0.3s ease;
  }
`;

const ResumeLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #15cdfc;
    transition: all 0.3s ease;
  }
  
  svg {
    margin-right: 0.3rem;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: fixed;
  top: 80px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: #1a1a1a;
  z-index: 9999;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`;

const MobileLink = styled(Link)`
  color: #fff;
  padding: 2rem;
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #15cdfc;
    transition: all 0.3s ease;
  }
`;

const MobileResumeLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #15cdfc;
    transition: all 0.3s ease;
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">GAUTAM BIDARI</NavLogo>
          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            <span
              className="sr-only"
              style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                borderWidth: '0',
              }}
            >
              {isOpen ? 'Close menu' : 'Open menu'}
            </span>
          </MobileIcon>
          <NavMenu isOpen={isOpen} role="navigation" aria-label="Main navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/achievements">Achievements</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <ResumeLink
              href={process.env.PUBLIC_URL + "/pdf-viewer.html"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt /> Resume
            </ResumeLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <MobileMenu isOpen={isOpen}>
        <MobileLink to="/" onClick={toggle}>Home</MobileLink>
        <MobileLink to="/about" onClick={toggle}>About</MobileLink>
        <MobileLink to="/projects" onClick={toggle}>Projects</MobileLink>
        <MobileLink to="/achievements" onClick={toggle}>Achievements</MobileLink>
        <MobileLink to="/contact" onClick={toggle}>Contact</MobileLink>
        <MobileResumeLink
          href={process.env.PUBLIC_URL + "/pdf-viewer.html"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggle}
        >
          <FaFileAlt /> Resume
        </MobileResumeLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;