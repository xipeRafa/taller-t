import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import React, { useContext, useRef} from "react";
import { AuthContext } from "../../context/AuthContext";

export const AddAuction = ({ setAuction }) => {

  const itemTitle = useRef();
  const itemTitle1 = useRef();
  const itemTitle2 = useRef();
  const itemTitle3 = useRef();

  const itemDesc = useRef();
  const itemCategorie = useRef();
  const myFormRef = useRef();
  

  const { currentUser } = useContext(AuthContext);


  const submitForm = async (e) => {
    e.preventDefault();

    let currentDate = new Date();
    let dueDate = currentDate.setHours(currentDate.getHours());

    let newAuction = {
      email: currentUser.email,
      title: itemTitle.current.value,
      title1: itemTitle1.current.value,
      costo: Number(itemTitle2.current.value),
      title3: itemTitle3.current.value,
      description: itemDesc.current.value,
      duration: dueDate,
      categorie: itemCategorie.current.value
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
                  ref={itemTitle}
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
                  ref={itemTitle3}
                  placeholder="Nombre de Taxista"
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
                ref={itemCategorie}
                className="mb-3"
              >
                <option disabled>Selecciona una Opcion        </option>
                <option value="mantenimiento"> Mantenimiento  </option> 
                <option value="reparacion">    Reparacion     </option> 
                <option value="choque">        Choque         </option> 
                <option value="llantas">       LLantas        </option> 
            {/* <option value="clienteExterno">Cliente Externo</option> */}
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" required ref={itemTitle1} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Costo Total</Form.Label>
                <Form.Control type="number" required ref={itemTitle2} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Comentarios</Form.Label>
                <Form.Control type="text" required ref={itemDesc} />
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