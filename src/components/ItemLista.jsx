import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemLista = ({ cita, borrarCita }) => {
  const { nombreMascota, nombreDuenio, fecha, hora, sintomas } = cita;

  const handleBorrarCita = () => {
    borrarCita(nombreMascota);
  };

  return (
    <ListGroup.Item className="my-1 py-3">
      <h5 className="pb-3">Datos de Cita</h5>
      <p>
        <strong>Fecha:</strong> {fecha}
        <strong className="ms-5">Hora:</strong> {hora}
      </p>
      <p>
        <strong>Nombre de Mascota:</strong> {nombreMascota}
      </p>
      <p>
        <strong>Nombre del Dueño:</strong> {nombreDuenio}
      </p>
      <p>
        <strong>Síntomas:</strong> {sintomas}
      </p>
      <div className="d-flex justify-content-end">
        <Button variant="danger px-5" onClick={handleBorrarCita}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemLista;





