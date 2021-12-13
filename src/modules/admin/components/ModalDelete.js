import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

export default function ModalDelete(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log("iddd"+ props.id);

    const baseURLadd = 'http://localhost:3002/api/product/';
    axios.delete(baseURLadd + props.id).then((res) => {
      //  console.log(res);
      // console.log(res.data);
    });
    handleClose();
  };

  return (
    <>
      <Button
        className="color-wh fw-bold"
        variant="danger"
        onClick={handleShow}
      >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Desea eliminar este producto {props.id}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
