import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <Link to="/">
              <img src="/images/Bububurger-logo-freskiee.png" alt="Bububurger Logo" style={{ height: '100px' }} />
            </Link>
            <p className="mb-3">
              <MapPin size={18} className="me-2" />
              Calz. Bombas 841, Cafetales 04918, Ciudad de México
            </p>
            <p className="mb-0">
              Las mejores hamburguesas al carbón desde 2014
            </p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="mb-3" style={{ color: 'var(--bububurger-orange)' }}>
              Información de Contacto
            </h6>
            <p className="mb-2">
              <Phone size={16} className="me-2" />
              +52 (55) 4129-8112
            </p>
            <p className="mb-2">
              <Mail size={16} className="me-2" />
              bubu.factura@gmail.com
            </p>
            <p className="mb-0">
              <Clock size={16} className="me-2" />
              Lunes: Cerrado
            </p>
            <p className="mb-0">
            <Clock size={16} className="me-2" />
            Martes - Miércoles: 16:00 - 23:30
            </p>
            <p className="mb-0">
            <Clock size={16} className="me-2" />
            Jueves - Viernes- Sábado: 13:00 - 00:30
            
            </p>
            <p className="mb-0">
            <Clock size={16} className="me-2" />
            Domingo: 13:00 - 23:30
            </p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6 className="mb-3" style={{ color: 'var(--bububurger-orange)' }}>
              Síguenos
            </h6>
            <div className="social-icons">
              <a href="https://www.facebook.com/bububurgeralcarbon" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/bububurger01" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </Col>
        </Row>
        
        <hr style={{ borderColor: 'var(--bububurger-orange)' }} />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © 2024 Bububurger. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;