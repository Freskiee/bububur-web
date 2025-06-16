import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Modal, Button, Card } from 'react-bootstrap';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import bombas from '/images/bombas.png';

const Sucursales: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSucursal, setSelectedSucursal] = useState<any>(null);

  const sucursales = [
    {
      id: 1,
      name: 'Bububurger Las Bombas',
      address: 'Calz. Bombas 841, Col. Residencial Cafetales, 04918, Coyoacán, CDMX',
      phone: '+52 (55) 4129-8112',
      image: bombas,
      description: 'Nuestra indistinguible casa.'
    }
  ];

  const handleImageClick = (sucursal: any) => {
    setSelectedSucursal(sucursal);
    setShowModal(true);
  };

  useEffect(() => {
    // Desplazar la vista al inicio de la sección
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in" style={{ paddingTop: '100px' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4">Nuestras Sucursales</h1>
            <p className="lead text-muted">
              Encuentra la sucursal más cercana a ti y disfruta de nuestras hamburguesas
            </p>
          </Col>
        </Row>

        {/* Carousel automático */}
        <Row className="mb-5">
          <Col>
            <Carousel 
              fade 
              interval={3000} 
              className="rounded overflow-hidden shadow-lg"
              controls={true}
              indicators={true}
            >
              {sucursales.map((sucursal) => (
                <Carousel.Item key={sucursal.id}>
                  <img
                    className="d-block w-100"
                    src={sucursal.image}
                    alt={sucursal.name}
                    style={{ height: '400px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => handleImageClick(sucursal)}
                  />
                  <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                    <h3>{sucursal.name}</h3>
                    <p>{sucursal.address}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* Grid de sucursales */}
        <Row className="g-4">
          {sucursales.map((sucursal) => (
            <Col key={sucursal.id} lg={6}>
              <Card className="h-100 border-0 shadow">
                <Row className="g-0 h-100">
                  <Col md={5}>
                    <img
                      src={sucursal.image}
                      alt={sucursal.name}
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover', cursor: 'pointer', minHeight: '200px' }}
                      onClick={() => handleImageClick(sucursal)}
                    />
                  </Col>
                  <Col md={7}>
                    <Card.Body className="d-flex flex-column h-100">
                      <div>
                        <h5 className="card-title fw-bold">{sucursal.name}</h5>
                        <p className="card-text text-muted mb-3">
                          {sucursal.description}
                        </p>
                        
                        <div className="mb-2">
                          <MapPin size={16} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />
                          <small>{sucursal.address}</small>
                        </div>
                        
                        <div className="mb-2">
                          <Phone size={16} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />
                          <small>{sucursal.phone}</small>
                        </div>
                        
                        <div className="mb-3">
                          <Clock size={16} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />
                          <small>Lun - Dom: 11:00 AM - 11:00 PM</small>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Button 
                          className="btn-orange w-100"
                          onClick={() => handleImageClick(sucursal)}
                        >
                          Ver Detalles
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal para detalles de sucursal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSucursal?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSucursal && (
            <Row>
              <Col md={6}>
                <img
                  src={selectedSucursal.image}
                  alt={selectedSucursal.name}
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={6}>
                <h5 className="mb-3">Información de la Sucursal</h5>
                <p className="mb-3">{selectedSucursal.description}</p>
                
                <div className="mb-3">
                  <h6><MapPin size={18} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />Dirección</h6>
                  <p className="ms-4 mb-2">{selectedSucursal.address}</p>
                </div>
                
                <div className="mb-3">
                  <h6><Phone size={18} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />Teléfono</h6>
                  <p className="ms-4 mb-2">{selectedSucursal.phone}</p>
                </div>
                
                <div className="mb-3">
                  <h6><Clock size={18} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />Horarios</h6>
                  <p className="ms-4 mb-2">Lunes a Domingo: 11:00 AM - 11:00 PM</p>
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
          <Button className="btn-orange">
            <Navigation size={16} className="me-2" />
            Ver en Mapa
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Sucursales;