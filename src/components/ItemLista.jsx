import { Button, ListGroup } from "react-bootstrap";

const ItemLista = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between my-1">
            Cita
            <Button variant="danger">Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemLista;







