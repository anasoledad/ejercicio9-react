import { ListGroup } from "react-bootstrap";
import ItemLista from "./ItemLista";


const ListaCitas = ({ datos }) => {
    return (
      <ListGroup>
        <hr className="mb-3"/>
         <h2 className="text-center">Lista de Citas</h2>
      {datos.length === 0 ? (
        <p className="py-3 mx-auto">No hay citas registradas</p>
      ) : (
        datos.map((dato, indice) => (
          <ItemLista key={indice} fecha={dato.fecha} hora={dato.hora} nombreMascota={dato.nombreMascota} nombreDuenio={dato.nombreDuenio} sintomas={dato.sintomas} />
        )))}
      </ListGroup>
    );
  };

export default ListaCitas;