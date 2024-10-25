import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../public/assets/images/Logo-1.webp';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded}
            onToggle={handleToggle} 
            bg="dark" variant="dark" expand="lg" sticky="top" 
            style={{ paddingLeft:'3rem', paddingRight:'2rem', display:'flex', marginBottom:'3rem'}}>
      <Navbar.Brand href="#home">
        <img style={{borderRadius:'50px',width:'40px', height:'40px'}} src={logo} alt="Logo portfolio" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
      <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'center'}}>
        <Nav className="ml-auto"style={{gap:'2rem'}}>
          <Nav.Link href="#about" onClick={handleNavClick}>À propos</Nav.Link>
          <Nav.Link href="#projects" onClick={handleNavClick}>Project</Nav.Link>
          <Nav.Link href="#skills" onClick={handleNavClick}>Skills</Nav.Link>
          <Nav.Link href="#contact"onClick={handleNavClick}>Contact</Nav.Link>
          <Nav.Link href="https://github.com/KD-Dev-Tech" aria-label="Github" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}><FaGithub size={20} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/kdelan/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" onClick={handleNavClick}><FaLinkedin size={20} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;