import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Modal, Button, Card } from 'react-bootstrap';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Sucursales: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSucursal, setSelectedSucursal] = useState<any>(null);

  const sucursales = [
    {
      id: 1,
      name: 'Sucursal Centro',
      address: 'Av. Principal 123, Centro Histórico',
      phone: '+52 (55) 1234-5678',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Nuestra sucursal original, ubicada en el corazón de la ciudad con ambiente tradicional y acogedor.'
    },
    {
      id: 2,
      name: 'Sucursal Norte',
      address: 'Blvd. Norte 456, Plaza Comercial Norte',
      phone: '+52 (55) 2345-6789',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Sucursal moderna con terraza al aire libre, perfecta para disfrutar en familia.'
    },
    {
      id: 3,
      name: 'Sucursal Sur',
      address: 'Av. Sur 789, Centro Comercial Sur',
      phone: '+52 (55) 3456-7890',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Ubicada en el centro comercial más grande del sur, con amplio estacionamiento.'
    },
    {
      id: 4,
      name: 'Sucursal Oriente',
      address: 'Calle Oriente 321, Zona Oriente',
      phone: '+52 (55) 4567-8901',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Nuestra sucursal más nueva, con diseño contemporáneo y tecnología de vanguardia.'
    },
    {
      id: 5,
      name: 'Sucursal Poniente',
      address: 'Av. Poniente 654, Colonia Poniente',
      phone: '+52 (55) 5678-9012',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      description: 'Ambiente juvenil y dinámico, popular entre estudiantes y jóvenes profesionistas.'
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