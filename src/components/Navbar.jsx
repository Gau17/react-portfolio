import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

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
`;

const Logo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
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

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
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
  position: absolute;
  top: 80px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: #1a1a1a;
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Nav>
        <Logo to="/">PORTFOLIO</Logo>
        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>
      </Nav>
      <MobileMenu isOpen={isOpen}>
        <MobileLink to="/" onClick={toggle}>Home</MobileLink>
        <MobileLink to="/about" onClick={toggle}>About</MobileLink>
        <MobileLink to="/projects" onClick={toggle}>Projects</MobileLink>
        <MobileLink to="/contact" onClick={toggle}>Contact</MobileLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;