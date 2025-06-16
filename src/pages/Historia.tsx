import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Carousel, Modal } from 'react-bootstrap';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const Historia: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const timelineEvents = [
    {
      year: '2014',
      title: 'Fundación de Bububurger',
      description: 'Todo comenzó con un sueño: crear las mejores hamburguesas al carbón de la ciudad. Abrimos nuestra primera sucursal en el corazón del centro de la ciudad.',
      icon: <MapPin size={24} />,
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      year: '2016',
      title: 'Primera Expansión',
      description: 'Debido al éxito y la demanda de nuestros clientes, abrimos nuestra segunda sucursal en la zona norte, duplicando nuestra capacidad de servicio.',
      icon: <Users size={24} />,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      year: '2018',
      title: 'Renovación e Imagen',
      description: 'Renovamos completamente nuestro concepto visual y gastronómico, introduciendo nuevas recetas y un diseño más moderno en nuestros restaurantes.',
      icon: <Award size={24} />,
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      year: '2020',
      title: 'Adaptación Digital',
      description: 'Durante la pandemia, implementamos servicio de delivery y pedidos en línea, manteniéndonos cerca de nuestros clientes en tiempos difíciles.',
      icon: <Calendar size={24} />,
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      year: '2022',
      title: 'Crecimiento Regional',
      description: 'Expandimos nuestras operaciones abriendo 3 nuevas sucursales en diferentes estados, consolidando nuestra presencia nacional.',
      icon: <MapPin size={24} />,
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    },
    {
      year: '2024',
      title: 'Modelo de Franquicia',
      description: 'Lanzamos oficialmente nuestro modelo de franquicia, permitiendo a emprendedores formar parte de la familia Bububurger en todo el país.',
      icon: <Award size={24} />,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2'
    }
  ];

  useEffect(() => {
    // Desplazar la vista al inicio de la sección
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in" style={{ paddingTop: '100px' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4">Nuestra Historia</h1>
            <p className="lead text-muted">
              Un viaje de más de 10 años creando los mejores sabores
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Imagen 1"
                  style={{ height: '400px', objectFit: 'cover', cursor: 'pointer' }}
                  onClick={() => handleImageClick('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2')}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Imagen 2"
                  style={{ height: '400px', objectFit: 'cover', cursor: 'pointer' }}
                  onClick={() => handleImageClick('https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2')}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Imagen 3"
                  style={{ height: '400px', objectFit: 'cover', cursor: 'pointer' }}
                  onClick={() => handleImageClick('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2')}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item mb-5">
                <Card className="border-0 shadow-sm">
                  <Row className="g-0">
                    <Col md={4}>
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="img-fluid rounded-start h-100" 
                        style={{ objectFit: 'cover', minHeight: '200px' }}
                      />
                    </Col>
                    <Col md={8}>
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div 
                            className="me-3 p-2 rounded-circle"
                            style={{ backgroundColor: 'var(--bububurger-orange)', color: 'white' }}
                          >
                            {event.icon}
                          </div>
                          <div>
                            <h3 className="h4 mb-0" style={{ color: 'var(--bububurger-orange)' }}>
                              {event.year}
                            </h3>
                            <h4 className="h5 mb-0">{event.title}</h4>
                          </div>
                        </div>
                        <p className="card-text text-muted mb-0">
                          {event.description}
                        </p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="py-5 mt-5 bg-light rounded">
          <Col className="text-center mb-4">
            <h2 className="h3 fw-bold">Bububurger en Números</h2>
          </Col>
          
          <Col md={3} className="text-center mb-4">
            <div className="h2 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>
              10+
            </div>
            <p className="mb-0">Años de experiencia</p>
          </Col>
          
          <Col md={3} className="text-center mb-4">
            <div className="h2 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>
              8
            </div>
            <p className="mb-0">Sucursales activas</p>
          </Col>
          
          <Col md={3} className="text-center mb-4">
            <div className="h2 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>
              50K+
            </div>
            <p className="mb-0">Clientes satisfechos</p>
          </Col>
          
          <Col md={3} className="text-center mb-4">
            <div className="h2 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>
              100+
            </div>
            <p className="mb-0">Empleados</p>
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
          <Modal.Body>
            <img src={selectedImage} alt="Imagen ampliada" className="img-fluid" />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Historia;