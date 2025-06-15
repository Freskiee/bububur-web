import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  const handleNavClick = () => {
    // Close mobile menu when clicking a nav item
    const navToggler = document.querySelector('.navbar-toggler') as HTMLButtonElement;
    const navCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    
    if (navToggler && navCollapse && navCollapse.classList.contains('show')) {
      navToggler.click();
    }
  };

  return (
    <BSNavbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="fw-bold">
          🍔 Bububurger
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav">
          <Menu size={24} />
        </BSNavbar.Toggle>
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/historia"
              className={location.pathname === '/historia' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Historia
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/sucursales"
              className={location.pathname === '/sucursales' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Sucursales
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/franquicias"
              className={location.pathname === '/franquicias' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Franquicias
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contacto"
              className={location.pathname === '/contacto' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Contacto
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/bolsa-trabajo"
              className={location.pathname === '/bolsa-trabajo' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Trabaja con nosotros
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;