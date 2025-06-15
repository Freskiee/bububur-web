import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { DollarSign, Building, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';

const Franquicias: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    inversion: '',
    mensaje: ''
  });

  useEffect(() => {
    // Desplazar la vista al inicio de la sección
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí normalmente enviarías los datos
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    setShowModal(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      ciudad: '',
      inversion: '',
      mensaje: ''
    });
  };

  const beneficios = [
    {
      icon: <Building size={48} />,
      title: 'Modelo Probado',
      description: 'Más de 10 años de experiencia y éxito comprobado en el mercado'
    },
    {
      icon: <Users size={48} />,
      title: 'Capacitación Completa',
      description: 'Entrenamiento integral para ti y tu equipo en operaciones y administración'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Marketing y Publicidad',
      description: 'Campañas nacionales y apoyo en marketing local para tu sucursal'
    },
    {
      icon: <CheckCircle size={48} />,
      title: 'Soporte Continuo',
      description: 'Acompañamiento permanente en operaciones, calidad y mejores prácticas'
    }
  ];

  return (
    <div className="fade-in" style={{ paddingTop: '100px' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4">Modelo de Franquicia</h1>
            <p className="lead text-muted">
              Únete a la familia Bububurger y forma parte de nuestro éxito
            </p>
          </Col>
        </Row>

        {/* Hero Section */}
        <Row className="mb-5 align-items-center">
          <Col lg={6}>
            <h2 className="h3 fw-bold mb-4">¿Por qué elegir Bububurger?</h2>
            <p className="mb-4">
              Con más de 10 años en el mercado, Bububurger se ha consolidado como una 
              de las marcas de hamburguesas más reconocidas. Nuestro modelo de franquicia 
              te ofrece la oportunidad de emprender con una marca exitosa y un sistema probado.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <CheckCircle size={20} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />
                Marca reconocida y posicionada en el mercado
              </li>
              <li className="mb-2">
                <CheckCircle size={20} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />
                Recetas exclusivas y productos de calidad premium
              </li>
              <li className="mb-2">
                <CheckCircle size={20} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />
                Sistema operativo comprobado y rentable
              </li>
              <li className="mb-2">
                <CheckCircle size={20} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />
                Territorios exclusivos protegidos
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
              alt="Restaurante Bububurger"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Costos de Inversión */}
        <Row className="mb-5">
          <Col>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <h3 className="text-center fw-bold mb-4" style={{ color: 'var(--bububurger-orange)' }}>
                  Inversión Requerida
                </h3>
                <Row className="text-center">
                  <Col md={4} className="mb-4">
                    <div className="p-4">
                      <DollarSign size={48} className="mb-3" style={{ color: 'var(--bububurger-orange)' }} />
                      <h4 className="h5 fw-bold">Cuota de Franquicia</h4>
                      <p className="h4 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>
                        $850,000 MXN
                      </p>
                      <small className="text-muted">Pago único inicial</small>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="p-4">
                      <Building size={48} className="mb-3" style={{ color: 'var(--bububurger-orange)' }} />
                      <h4 className="h5 fw-bold">Inversión Total</h4>
                      <p className="h4 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>
                        $1.8 - $2.5 MDP
                      </p>
                      <small className="text-muted">Incluye equipamiento y adecuaciones</small>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="p-4">
                      <TrendingUp size={48} className="mb-3" style={{ color: 'var(--bububurger-orange)' }} />
                      <h4 className="h5 fw-bold">Regalías</h4>
                      <p className="h4 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>
                        6% mensual
                      </p>
                      <small className="text-muted">Sobre ventas netas</small>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Qué incluye la franquicia */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center fw-bold mb-5">¿Qué incluye tu franquicia?</h3>
            <Row className="g-4">
              <Col md={6} lg={3}>
                <Card className="h-100 text-center border-0 shadow">
                  <Card.Body className="p-4">
                    <Building size={48} className="mb-3" style={{ color: 'var(--bububurger-orange)' }} />
                    <h5>Diseño y Layout</h5>
                    <p className="text-muted">
                      Planos arquitectónicos, diseño interior y manual de imagen
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card className="h-100 text-center border-0 shadow">
                  <Card.Body className="p-4">
                    <Users size={48} className="mb-3" style={{ color: 'var(--bububurger-orange)' }} />
                    <h5>Capacitación</h5>
                    <p className="text-muted">
                      Entrenamiento completo en operaciones, calidad y servicio
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card className="h-100 text-center border-0 shadow">
                  <Card.Body className="p-4">
                    <CheckCircle size={48} className="mb-3" style={{ color: 'var(--bububurger-orange)' }} />
                    <h5>Manuales</h5>
                    <p className="text-muted">
                      Manuales operativos, de calidad y procedimientos
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card className="h-100 text-center border-0 shadow">
                  <Card.Body className="p-4">
                    <TrendingUp size={48} className="mb-3" style={{ color: 'var(--bububurger-orange)' }} />
                    <h5>Marketing</h5>
                    <p className="text-muted">
                      Campañas publicitarias y material promocional
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Beneficios */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center fw-bold mb-5">Beneficios del Modelo</h3>
            <Row className="g-4">
              {beneficios.map((beneficio, index) => (
                <Col key={index} md={6}>
                  <Card className="h-100 border-0 shadow">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start">
                        <div className="me-4" style={{ color: 'var(--bububurger-orange)' }}>
                          {beneficio.icon}
                        </div>
                        <div>
                          <h5 className="fw-bold">{beneficio.title}</h5>
                          <p className="text-muted mb-0">{beneficio.description}</p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Testimonio */}
        <Row className="mb-5">
          <Col>
            <Card className="border-0 shadow-lg text-center" style={{ backgroundColor: '#f8f9fa' }}>
              <Card.Body className="p-5">
                <Star size={48} className="mb-3" style={{ color: 'var(--bububurger-orange)' }} />
                <blockquote className="blockquote mb-4">
                  <p className="h5 fst-italic">
                    "Invertir en una franquicia Bububurger ha sido la mejor decisión de mi vida. 
                    El apoyo constante del equipo y la fortaleza de la marca me han permitido 
                    crecer y consolidar mi negocio en tiempo récord."
                  </p>
                </blockquote>
                <footer className="blockquote-footer">
                  <cite title="Source Title">
                    <strong>María González</strong> - Franquiciada Sucursal Norte
                  </cite>
                </footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <Row className="text-center">
          <Col>
            <h3 className="fw-bold mb-4">¿Listo para emprender con nosotros?</h3>
            <p className="lead mb-4">
              Solicita información completa sobre nuestro modelo de franquicia
            </p>
            <Button 
              size="lg" 
              className="btn-orange px-5 py-3"
              onClick={() => setShowModal(true)}
            >
              Solicitar Información
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Modal de solicitud */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Solicitar Información de Franquicia</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo *</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Teléfono *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Ciudad de Interés *</Form.Label>
                  <Form.Control
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Capacidad de Inversión *</Form.Label>
              <Form.Select
                name="inversion"
                value={formData.inversion}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecciona un rango</option>
                <option value="1.5-2.0">$1.5 - $2.0 MDP</option>
                <option value="2.0-2.5">$2.0 - $2.5 MDP</option>
                <option value="2.5+">Más de $2.5 MDP</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Mensaje Adicional</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Cuéntanos más sobre tu proyecto..."
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="btn-orange">
              Enviar Solicitud
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Franquicias;