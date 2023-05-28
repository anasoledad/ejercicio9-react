import { Button, ListGroup } from "react-bootstrap";

const ItemLista = ({ fecha, hora, nombreMascota, nombreDuenio, sintomas }) => {
    return (
      <ListGroup.Item className="my-1 py-3">
        <h5 className="pb-3">Datos de Cita</h5>
        
        <p>
          <strong>Fecha:</strong>  {fecha}  <strong className="ms-5">Hora:</strong> {hora}
        </p>
        <p>
           <strong>Nombre de Mascota:</strong> {nombreMascota}
        </p>
        <p>
           <strong>Nombre del Dueño:</strong> {nombreDuenio}
        </p>
        <p> 
           <strong>Síntomas:</strong> {sintomas} </p>
        <div className="d-flex justify-content-end">
            <Button variant="danger px-5">Borrar</Button>
        </div>


        
      </ListGroup.Item>
    );
  };

export default ItemLista;







