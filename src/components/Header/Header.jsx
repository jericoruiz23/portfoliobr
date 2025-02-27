import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
  transition: backdrop-filter 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 900;
  height: 65px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: rgba(255, 255, 255, 0.1);
    width: 200px;
    padding: 1rem;
  }
`;

const NavItem = styled.li`
  a {
    color: #00d4ff;
    text-decoration: none;
    font-family: "Bebas Neue", serif;
    font-size: 1.2rem;
    font-weight: 500;
    transition: color 0.3s;
    &:hover {
      color: rgb(255, 255, 255);
    }
  }
`;

const Logo = styled(motion.img)`
  height: 40px; /* Adjust size as needed */
  width: auto;
  margin-top: 0.5rem; /* Fine-tune positioning */
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #00d4ff;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav as={motion.nav} isScrolled={isScrolled} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <a href="#hero">
        <Logo
          src="https://raw.githubusercontent.com/jericoruiz23/portfolioAssets/main/logo_horizontal.png"
          alt="BR Solutions Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </a>
      <MenuButton onClick={toggleMenu} aria-label="Toggle navigation menu">
        {isOpen ? '✖' : '☰'}
      </MenuButton>
      <NavList isOpen={isOpen}>
        <NavItem><a href="#hero" onClick={toggleMenu}>Home</a></NavItem>
        <NavItem><a href="#about" onClick={toggleMenu}>About</a></NavItem>
        <NavItem><a href="#projects" onClick={toggleMenu}>Education</a></NavItem>
        <NavItem><a href="#contact" onClick={toggleMenu}>Contact</a></NavItem>
      </NavList>
    </Nav>
  );
}

export default Header;