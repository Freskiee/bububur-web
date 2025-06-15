import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Users, Briefcase, Clock, DollarSign, Upload, CheckCircle } from 'lucide-react';

const BolsaTrabajo: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    area: '',
    experiencia: '',
    disponibilidad: '',
    salario: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu interés en trabajar con nosotros! Revisaremos tu solicitud y nos pondremos en contacto contigo pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      edad: '',
      area: '',
      experiencia: '',
      disponibilidad: '',
      salario: '',
      mensaje: ''
    });
  };

  const beneficios = [
    {
      icon: <DollarSign size={48} />,
      title: 'Salario Competitivo',
      description: 'Ofrecemos salarios atractivos y bonos por desempeño'
    },
    {
      icon: <Clock size={48} />,
      title: 'Horarios Flexibles',
      description: 'Adaptamos horarios según tus necesidades y disponibilidad'
    },
    {
      icon: <Users size={48} />,
      title: 'Ambiente Familiar',
      description: 'Trabajo en equipo en un ambiente profesional y amigable'
    },
    {
      icon: <Briefcase size={48} />,
      title: 'Crecimiento Profesional',
      description: 'Oportunidades de desarrollo y ascenso dentro de la empresa'
    }
  ];

  const posiciones = [
    {
      titulo: 'Cocinero/a',
      descripcion: 'Preparación de hamburguesas y alimentos según estándares de calidad',
      requisitos: ['Experiencia en cocina', 'Disponibilidad de horario', 'Trabajo en equipo']
    },
    {
      titulo: 'Mesero/a',
      descripcion: 'Atención al cliente y servicio de alimentos en el restaurante',
      requisitos: ['Excelente servicio al cliente', 'Comunicación efectiva', 'Disponibilidad fines de semana']
    },
    {
      titulo: 'Cajero/a',
      descripcion: 'Manejo de caja registradora y atención en mostrador',
      requisitos: ['Manejo de dinero', 'Habilidades matemáticas básicas', 'Atención al detalle']
    },
    {
      titulo: 'Supervisor/a',
      descripcion: 'Supervisión de operaciones y coordinación del equipo de trabajo',
      requisitos: ['Experiencia en supervisión', 'Liderazgo', 'Conocimiento en restaurantes']
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
            <h1 className="display-4 fw-bold mb-4">Trabaja con Nosotros</h1>
            <p className="lead text-muted">
              Únete al equipo Bububurger y forma parte de nuestra familia
            </p>
          </Col>
        </Row>

        {/* ¿Por qué trabajar con nosotros? */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold mb-5">¿Por qué trabajar en Bububurger?</h2>
            <Row className="g-4">
              {beneficios.map((beneficio, index) => (
                <Col key={index} md={6} lg={3}>
                  <Card className="h-100 text-center border-0 shadow">
                    <Card.Body className="p-4">
                      <div className="mb-3" style={{ color: 'var(--bububurger-orange)' }}>
                        {beneficio.icon}
                      </div>
                      <h5 className="fw-bold">{beneficio.title}</h5>
                      <p className="text-muted mb-0">{beneficio.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Posiciones disponibles */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold mb-5">Posiciones Disponibles</h2>
            <Row className="g-4">
              {posiciones.map((posicion, index) => (
                <Col key={index} md={6}>
                  <Card className="h-100 border-0 shadow">
                    <Card.Body className="p-4">
                      <h5 className="fw-bold mb-3" style={{ color: 'var(--bububurger-orange)' }}>
                        {posicion.titulo}
                      </h5>
                      <p className="mb-3">{posicion.descripcion}</p>
                      <h6 className="fw-bold mb-2">Requisitos:</h6>
                      <ul className="list-unstyled">
                        {posicion.requisitos.map((requisito, reqIndex) => (
                          <li key={reqIndex} className="mb-1">
                            <CheckCircle size={16} className="me-2" style={{ color: 'var(--bububurger-orange)' }} />
                            {requisito}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Formulario de aplicación */}
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <h3 className="text-center fw-bold mb-5" style={{ color: 'var(--bububurger-orange)' }}>
                  Solicitud de Empleo
                </h3>
                <p className="text-center text-muted mb-4">
                  Completa el formulario y envíanos tu información. Nos pondremos en contacto contigo.
                </p>
                
                <Form onSubmit={handleSubmit}>
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
                        <Form.Label>Edad *</Form.Label>
                        <Form.Control
                          type="number"
                          name="edad"
                          value={formData.edad}
                          onChange={handleInputChange}
                          min="16"
                          max="65"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Área de Interés *</Form.Label>
                        <Form.Select
                          name="area"
                          value={formData.area}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Selecciona un área</option>
                          <option value="cocina">Cocina</option>
                          <option value="servicio">Servicio al Cliente</option>
                          <option value="caja">Caja</option>
                          <option value="supervision">Supervisión</option>
                          <option value="gerencia">Gerencia</option>
                          <option value="limpieza">Limpieza</option>
                          <option value="delivery">Delivery</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Experiencia Previa *</Form.Label>
                        <Form.Select
                          name="experiencia"
                          value={formData.experiencia}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Selecciona tu experiencia</option>
                          <option value="sin-experiencia">Sin experiencia</option>
                          <option value="menos-1-ano">Menos de 1 año</option>
                          <option value="1-3-anos">1 - 3 años</option>
                          <option value="3-5-anos">3 - 5 años</option>
                          <option value="mas-5-anos">Más de 5 años</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Disponibilidad *</Form.Label>
                        <Form.Select
                          name="disponibilidad"
                          value={formData.disponibilidad}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Selecciona disponibilidad</option>
                          <option value="tiempo-completo">Tiempo completo</option>
                          <option value="medio-tiempo">Medio tiempo</option>
                          <option value="fines-semana">Solo fines de semana</option>
                          <option value="tardes">Solo tardes</option>
                          <option value="flexible">Horario flexible</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Expectativa Salarial</Form.Label>
                        <Form.Select
                          name="salario"
                          value={formData.salario}
                          onChange={handleInputChange}
                        >
                          <option value="">Selecciona rango</option>
                          <option value="sueldo-minimo">Sueldo mínimo</option>
                          <option value="8000-12000">$8,000 - $12,000</option>
                          <option value="12000-16000">$12,000 - $16,000</option>
                          <option value="16000-20000">$16,000 - $20,000</option>
                          <option value="negociable">A negociar</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Adjuntar CV</Form.Label>
                    <div className="d-flex align-items-center">
                      <Form.Control
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="me-2"
                      />
                      <Upload size={20} style={{ color: 'var(--bububurger-orange)' }} />
                    </div>
                    <Form.Text className="text-muted">
                      Formatos aceptados: PDF, DOC, DOCX (máximo 5MB)
                    </Form.Text>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Cuéntanos sobre ti</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Háblanos sobre tu experiencia, motivaciones y por qué te gustaría trabajar en Bububurger..."
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button type="submit" size="lg" className="btn-orange px-5">
                      Enviar Solicitud
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Información adicional */}
        <Row className="mt-5">
          <Col>
            <Card className="border-0" style={{ backgroundColor: '#f8f9fa' }}>
              <Card.Body className="p-4 text-center">
                <h5 className="fw-bold mb-3">Proceso de Selección</h5>
                <Row>
                  <Col md={3} className="mb-3">
                    <div className="p-3">
                      <div className="h4 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>1</div>
                      <p className="mb-0">Recepción de solicitud</p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="p-3">
                      <div className="h4 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>2</div>
                      <p className="mb-0">Revisión de perfil</p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="p-3">
                      <div className="h4 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>3</div>
                      <p className="mb-0">Entrevista personal</p>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="p-3">
                      <div className="h4 fw-bold" style={{ color: 'var(--bububurger-orange)' }}>4</div>
                      <p className="mb-0">Incorporación al equipo</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BolsaTrabajo;