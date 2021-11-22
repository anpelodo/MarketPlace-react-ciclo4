import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from "react";


export default function ModalEdit() {
   
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          edit
        </Button>
  
        <Modal scrollable = {true} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <Form>
              <Form.Group className="mb-3" controlId="formBasicCodigo">
                <Form.Label>Codigo</Form.Label>
                <Form.Control type="text" placeholder="Codigo" /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicNombre">
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control type="text" placeholder="Nombre del producto" /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="Precio" /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCategoria">
                <Form.Label>Categoria</Form.Label>
                <Form.Control type="text" placeholder="Categoria" /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" placeholder="Stock" /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImagen">
                <Form.Label>Añadir imagen</Form.Label>
                <Form.Control type="file" placeholder="Añadir imagen" /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Descipcion" /> 
              </Form.Group>

             
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  
 