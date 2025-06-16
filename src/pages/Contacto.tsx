import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Card } from 'react-bootstrap';
import { Calendar, Handshake, MapPin } from 'lucide-react';

const Contacto: React.FC = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [showSocioModal, setShowSocioModal] = useState(false);
  const [eventFormData, setEventFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    fecha: '',
    personas: '',
    mensaje: ''
  });
  const [socioFormData, setSocioFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    tipoSocio: '',
    mensaje: ''
  });

  const handleEventInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEventFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocioInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSocioFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto para organizar tu evento.');
    setShowEventModal(false);
    setEventFormData({
      nombre: '',
      email: '',
      telefono: '',
      tipoEvento: '',
      fecha: '',
      personas: '',
      mensaje: ''
    });
  };

  const handleSocioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu interés en ser socio! Nos pondremos en contacto contigo pronto.');
    setShowSocioModal(false);
    setSocioFormData({
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      tipoSocio: '',
      mensaje: ''
    });
  };

  return (
    <div className="fade-in" style={{ paddingTop: '100px' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-4">Contáctanos</h1>
            <p className="lead text-muted">
              Estamos aquí para ayudarte con cualquier consulta o propuesta
            </p>
          </Col>
        </Row>

        {/* Mapa de ubicación */}
        <Row className="mb-5">
          <Col>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <h3 className="text-center fw-bold mb-4" style={{ color: 'var(--bububurger-orange)' }}>
                  <MapPin size={32} className="me-2" />
                  Nuestra Ubicación Principal
                </h3>
                <p className="text-center text-muted mb-4">
                  Calz. Bombas 841, Cafetales 04918, Ciudad de México
                </p>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.8234567890123!2d-99.1234567!3d19.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0123456789ab%3A0x123456789abcdef0!2sCalz.%20Bombas%20841%2C%20Cafetales%2C%2004918%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Bububurger"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Botones principales */}
        <Row className="mb-5 g-4">
          <Col md={6}>
            <Card className="h-100 border-0 shadow text-center">
              <Card.Body className="p-5">
                <Calendar size={64} className="mb-4" style={{ color: 'var(--bububurger-orange)' }} />
                <h3 className="fw-bold mb-3">Evento Privado</h3>
                <p className="lead mb-4">
                  ¿Planeas una celebración especial? Organizamos eventos privados 
                  para cumpleaños, reuniones corporativas, graduaciones y más.
                </p>
                <ul className="list-unstyled text-start mb-4">
                  <li className="mb-2">✓ Menús personalizados</li>
                  <li className="mb-2">✓ Espacios privados</li>
                  <li className="mb-2">✓ Servicio especializado</li>
                  <li className="mb-2">✓ Decoración temática</li>
                </ul>
                <Button 
                  size="lg" 
                  className="btn-orange w-100"
                  onClick={() => setShowEventModal(true)}
                >
                  Solicitar Evento
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="h-100 border-0 shadow text-center">
              <Card.Body className="p-5">
                <Handshake size={64} className="mb-4" style={{ color: 'var(--bububurger-orange)' }} />
                <h3 className="fw-bold mb-3">Conviértete en Socio</h3>
                <p className="lead mb-4">
                  Únete a nuestra red de socios comerciales. Buscamos proveedores, 
                  distribuidores y socios estratégicos para crecer juntos.
                </p>
                <ul className="list-unstyled text-start mb-4">
                  <li className="mb-2">✓ Oportunidades de negocio</li>
                  <li className="mb-2">✓ Alianzas estratégicas</li>
                  <li className="mb-2">✓ Crecimiento mutuo</li>
                  <li className="mb-2">✓ Red comercial sólida</li>
                </ul>
                <Button 
                  size="lg" 
                  className="btn-outline-orange w-100"
                  onClick={() => setShowSocioModal(true)}
                >
                  Ser Socio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Información adicional */}
        <Row>
          <Col>
            <Card className="border-0 shadow" style={{ backgroundColor: '#f8f9fa' }}>
              <Card.Body className="p-5 text-center">
                <h4 className="fw-bold mb-3">Otros Tipos de Consulta</h4>
                <p className="mb-4">
                  Para consultas sobre franquicias, oportunidades laborales, quejas o sugerencias, 
                  visita las secciones correspondientes de nuestro sitio web o contáctanos directamente.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Button variant="outline-dark" href="/franquicias">
                    Franquicias
                  </Button>
                  <Button variant="outline-dark" href="/bolsa-trabajo">
                    Bolsa de Trabajo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal para Evento Privado */}
      <Modal show={showEventModal} onHide={() => setShowEventModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Solicitar Evento Privado</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEventSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo *</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={eventFormData.nombre}
                    onChange={handleEventInputChange}
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
                    value={eventFormData.email}
                    onChange={handleEventInputChange}
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
                    value={eventFormData.telefono}
                    onChange={handleEventInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo de Evento *</Form.Label>
                  <Form.Select
                    name="tipoEvento"
                    value={eventFormData.tipoEvento}
                    onChange={handleEventInputChange}
                    required
                  >
                    <option value="">Selecciona el tipo</option>
                    <option value="cumpleanos">Cumpleaños</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="graduacion">Graduación</option>
                    <option value="reunion-familiar">Reunión Familiar</option>
                    <option value="otro">Otro</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Fecha Tentativa *</Form.Label>
                  <Form.Control
                    type="date"
                    name="fecha"
                    value={eventFormData.fecha}
                    onChange={handleEventInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Número de Personas *</Form.Label>
                  <Form.Select
                    name="personas"
                    value={eventFormData.personas}
                    onChange={handleEventInputChange}
                    required
                  >
                    <option value="">Selecciona cantidad</option>
                    <option value="10-20">10 - 20 personas</option>
                    <option value="21-40">21 - 40 personas</option>
                    <option value="41-60">41 - 60 personas</option>
                    <option value="60+">Más de 60 personas</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Detalles del Evento</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="mensaje"
                value={eventFormData.mensaje}
                onChange={handleEventInputChange}
                placeholder="Cuéntanos más detalles sobre tu evento: horario, preferencias, necesidades especiales, etc."
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEventModal(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="btn-orange">
              Enviar Solicitud
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Modal para Socio */}
      <Modal show={showSocioModal} onHide={() => setShowSocioModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Solicitud para Ser Socio</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSocioSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo *</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={socioFormData.nombre}
                    onChange={handleSocioInputChange}
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
                    value={socioFormData.email}
                    onChange={handleSocioInputChange}
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
                    value={socioFormData.telefono}
                    onChange={handleSocioInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Empresa/Organización</Form.Label>
                  <Form.Control
                    type="text"
                    name="empresa"
                    value={socioFormData.empresa}
                    onChange={handleSocioInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Tipo de Sociedad *</Form.Label>
              <Form.Select
                name="tipoSocio"
                value={socioFormData.tipoSocio}
                onChange={handleSocioInputChange}
                required
              >
                <option value="">Selecciona el tipo</option>
                <option value="proveedor">Proveedor</option>
                <option value="distribuidor">Distribuidor</option>
                <option value="alianza-comercial">Alianza Comercial</option>
                <option value="inversion">Oportunidad de Inversión</option>
                <option value="otro">Otro</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Propuesta de Negocio *</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="mensaje"
                value={socioFormData.mensaje}
                onChange={handleSocioInputChange}
                placeholder="Describe tu propuesta de negocio, experiencia y cómo podemos trabajar juntos..."
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSocioModal(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="btn-orange">
              Enviar Propuesta
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Contacto;