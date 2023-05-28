import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemLista from "./ItemLista";

const ListaCitas = ({ datos, borrarCita }) => {
  const handleBorrarCita = (nombreMascota) => {
    borrarCita(nombreMascota);
  };

  return (
    <ListGroup>
      <hr className="mb-3" />
      <h2 className="text-center">Lista de Citas</h2>
      {datos.length === 0 ? (
        <p className="py-3 mx-auto">No hay citas registradas</p>
      ) : (
        datos.map((cita, indice) => (<ItemLista key={indice} cita={cita} borrarCita={handleBorrarCita}/>
        ))
      )}
    </ListGroup>
  );
};

export default ListaCitas;