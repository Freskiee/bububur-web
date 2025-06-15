import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Star, Award, Users, Clock } from 'lucide-react';

const Home: React.FC = () => {
  useEffect(() => {
    // Desplazar la vista al inicio de la sección
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center text-white">
            <Col lg={8}>
              <h1 className="display-3 fw-bold mb-4">
                Hamburguesas al carbón desde 2014
              </h1>
              <p className="lead mb-4 fs-4">
                Descubre el auténtico sabor de nuestras hamburguesas artesanales, 
                preparadas con los mejores ingredientes y cocinadas al carbón para 
                una experiencia gastronómica única.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button 
                  as={Link} 
                  to="/sucursales" 
                  size="lg" 
                  className="btn-orange px-4 py-3"
                >
                  ¡Visítanos ya!
                </Button>
                <Button 
                  as="a"
                  href="https://menu-bububurger.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg" 
                  className="btn-outline-white px-4 py-3"
                >
                  Ver Menú
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold mb-3">¿Por qué elegir Bububurger?</h2>
              <p className="lead text-muted">
                Más de 10 años de experiencia creando las mejores hamburguesas
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ color: 'var(--bububurger-orange)' }}>
                    <Award size={48} />
                  </div>
                  <Card.Title className="h5">Calidad Premium</Card.Title>
                  <Card.Text>
                    Ingredientes frescos y carnes de primera calidad en cada hamburguesa
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ color: 'var(--bububurger-orange)' }}>
                    <Clock size={48} />
                  </div>
                  <Card.Title className="h5">Desde 2014</Card.Title>
                  <Card.Text>
                    Más de una década perfeccionando nuestras recetas y técnicas
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ color: 'var(--bububurger-orange)' }}>
                    <Users size={48} />
                  </div>
                  <Card.Title className="h5">Miles de Clientes</Card.Title>
                  <Card.Text>
                    Más de 50,000 clientes satisfechos en todas nuestras sucursales
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ color: 'var(--bububurger-orange)' }}>
                    <Star size={48} />
                  </div>
                  <Card.Title className="h5">5 Estrellas</Card.Title>
                  <Card.Text>
                    Calificación promedio en todas las plataformas de delivery
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold mb-3">Galería</h2>
              <p className="lead">
                Mira algunas de nuestras deliciosas creaciones
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="position-relative overflow-hidden rounded">
                <img 
                  src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2" 
                  alt="Hamburguesa clásica"
                  className="img-fluid"
                  style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                />
                <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 p-3">
                  <h5 className="mb-0">Clásica Bububurger</h5>
                </div>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="position-relative overflow-hidden rounded">
                <img 
                  src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2" 
                  alt="Hamburguesa con queso"
                  className="img-fluid"
                  style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                />
                <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 p-3">
                  <h5 className="mb-0">Cheese Lover</h5>
                </div>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="position-relative overflow-hidden rounded">
                <img 
                  src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=2" 
                  alt="Hamburguesa gourmet"
                  className="img-fluid"
                  style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                />
                <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 p-3">
                  <h5 className="mb-0">Gourmet Especial</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">
                ¿Listo para probar el mejor sabor?
              </h2>
              <p className="lead mb-4">
                Visita cualquiera de nuestras sucursales o haz tu pedido en línea. 
                Te garantizamos una experiencia gastronómica inolvidable.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button 
                  as={Link} 
                  to="/sucursales" 
                  size="lg" 
                  className="btn-orange"
                >
                  Ver Sucursales
                </Button>
                <Button 
                  as={Link} 
                  to="/franquicias" 
                  size="lg" 
                  className="btn-outline-orange"
                >
                  Ser Franquiciado
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;