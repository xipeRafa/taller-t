import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import React, { useContext, useRef} from "react";
import { AuthContext } from "../../context/AuthContext";

export const AddAuction = ({ setAuction }) => {

  const unidad = useRef();
  const description = useRef();
  const costo = useRef();
  const taxista = useRef();

  const coments = useRef();
  const categorie = useRef();
  const myFormRef = useRef();
  

  const { currentUser } = useContext(AuthContext);


  const submitForm = async (e) => {
    e.preventDefault();

    let currentDate = new Date();
    let dueDate = currentDate.setHours(currentDate.getHours());

    let newAuction = {
      email: currentUser.email,
      unidad: unidad.current.value,
      desc: description.current.value,
      costo: Number(costo.current.value),
      taxista: taxista.current.value,
      coments:  coments.current.value,
      duration: dueDate,
      categorie: categorie.current.value
    };

    setAuction(newAuction);

    myFormRef.current.reset()
  };

  let admin = currentUser ? true : false;

  return (
    <>
    
      <form
        onSubmit={submitForm}
        className={admin ? "border border-danger w-75 p-3 mt-5" : 'd-none' }
        style={{ marginLeft: "12.5%" }}
        ref={myFormRef}
      >
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="bg-secondary text-center p-2 text-white w-100 mb-4">
                Encargado en Turno: {currentUser?.email.slice(0, -10)}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-4">
                <Form.Control
                  type="number"
                  required
                  ref={unidad}
                  placeholder="Numero de Unidad"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  required
                  ref={taxista}
                  placeholder="KL de Taxista"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                multiple={false}
                ref={categorie}
                className="mb-3"
              >
                <option disabled>Selecciona una Opcion        </option>
                <option value="Mantenimiento"> Mantenimiento  </option> 
                <option value="Reparacion">    Reparacion     </option> 
                <option value="Choque">        Choque         </option> 
                <option value="Llantas">       LLantas        </option> 
            {/* <option value="clienteExterno">Cliente Externo</option> */}
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" required ref={description} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Costo Total</Form.Label>
                <Form.Control type="number" required ref={costo} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Comentarios</Form.Label>
                <Form.Control type="text" required ref={coments} />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" type="submit" className="w-100">
            Guardar Ticket
          </Button>
        </Modal.Footer>
        
      </form>
    </>
  );
};
