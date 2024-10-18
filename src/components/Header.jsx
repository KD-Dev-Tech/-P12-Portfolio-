import { Navbar, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../public/assets/images/Logo-1.webp';

function Header() {
  return (
    <Navbar  bg="dark" variant="dark" expand="lg" sticky="top" style={{ paddingLeft:'3rem', paddingRight:'2rem', display:'flex', marginBottom:'3rem'}}>
      <Navbar.Brand href="#home">
        <img style={{borderRadius:'50px',width:'40px', height:'40px'}} src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'center'}}>
        <Nav className="ml-auto"style={{gap:'2rem'}}>
          <Nav.Link href="#about">À propos</Nav.Link>
          <Nav.Link href="#projects">Project</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="https://github.com/KD-Dev-Tech" target="_blank" rel="noopener noreferrer"> <FaGithub size={20} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/kdelan/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={20} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;