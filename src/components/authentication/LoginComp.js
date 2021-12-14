import { Button, Form, Modal, Alert } from 'react-bootstrap';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const LoginComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      closeForm();
    } catch (error) {
      setError('Invalid login');
    }
  };

  return (
    <>
   {/*    <div onClick={openForm} className="mx-2">
        Entrar
      </div> */}
        <form onSubmit={submitForm} className=''>
          <Modal.Header>
            <Modal.Title>Entrar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" required ref={emailRef} className='mb-3'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} className='mb-4'/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
          {/*   <Button variant="secondary" onClick={closeForm}>
              Cancelar
            </Button> */}
            <Button variant="dark" type="submit" className='w-100 mb-5 mt-5' >
              Entrar
            </Button>
          </Modal.Footer>
        </form>
    </>
  );
};
