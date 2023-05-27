import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const Formulario = () => {
  return (
    <Container className="pt-4 pb-5 px-3 d-flex justify-content-center">
      <Col lg={8} className="border border-2 p-5 bgForm">
        <h5 className="mb-4">LLenar el formulario para crear una cita</h5>
        <Form>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre de mascota</Form.Label>
            <Form.Control type="text" placeholder="Nombre de mascota" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="apellido">
            <Form.Label>Nombre del dueño</Form.Label>
            <Form.Control type="text" placeholder="Nombre de dueño" />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="fecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="text" placeholder="dd/mm/yyyy" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Hora</Form.Label>
                <Form.Control type="email" placeholder="hh:mm" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="sintomas">
            <Form.Label>Sintomas</Form.Label>
            <Form.Control as="textarea" type="email" placeholder="Describir sintomas" />
          </Form.Group>

          <div className="d-flex justify-content-center justify-content-sm-end">
            <Button variant="dark" className="px-5 mb-5" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
        <ListaCitas></ListaCitas>
        
      </Col>

    </Container>
    
  );
};

export default Formulario;
