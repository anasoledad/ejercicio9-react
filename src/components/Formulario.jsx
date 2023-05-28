import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ListaCitas from "./ListaCitas";
import React, { useState } from "react";

const Formulario = () => {

    const handleInputChange = (e, setState) => {
        setState(e.target.value);
      };

    const [nombreMascota, setNombreMascota] = useState('');
    const [nombreDuenio, setNombreDuenio] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [datos, setDatos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (nombreMascota && nombreDuenio && fecha && hora && sintomas) {
            const nuevosDatos = {
                nombreMascota, nombreDuenio, fecha, hora, sintomas
            }
          setDatos([...datos, nuevosDatos]);
          setNombreMascota('');
          setNombreDuenio('');
          setFecha('');
          setHora('');
          setSintomas('');
      
          Swal.fire("Se enviaron los datos");
        } else {
          Swal.fire("Faltan campos por llenar");
        }
      };

  return (
    <Container className="pt-4 pb-5 px-3 d-flex justify-content-center">
      <Col lg={8} className="border border-2 rounded-4 p-5 bgForm">
        <h4 className="mb-4">LLenar el formulario para crear una cita</h4>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label><strong>Nombre de mascota</strong></Form.Label>
            <Form.Control type="text" placeholder="Nombre de mascota" value={nombreMascota}
                onChange={(e) => handleInputChange(e, setNombreMascota)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="apellido">
            <Form.Label><strong>Nombre del dueño</strong></Form.Label>
            <Form.Control type="text" placeholder="Nombre de dueño" value={nombreDuenio}
                onChange={(e) => handleInputChange(e, setNombreDuenio)}/>
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="fecha">
                <Form.Label><strong>Fecha</strong></Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" value={fecha}
                onChange={(e) => handleInputChange(e, setFecha)}/>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label><strong>Hora</strong></Form.Label>
                <Form.Control type="time" placeholder="hh:mm" value={hora}
                onChange={(e) => handleInputChange(e, setHora)}/>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="sintomas">
            <Form.Label><strong>Síntomas</strong></Form.Label>
            <Form.Control as="textarea" type="email" placeholder="Describir síntomas" value={sintomas}
                onChange={(e) => handleInputChange(e, setSintomas)}/>
          </Form.Group>

          <div className="d-flex justify-content-center justify-content-sm-end">
            <Button variant="dark" className="px-5 mb-5" type="submit">
              Agregar Cita
            </Button>
          </div>
        </Form>
        <ListaCitas datos={datos}></ListaCitas>
        
      </Col>

    </Container>
    
  );
};

export default Formulario;
