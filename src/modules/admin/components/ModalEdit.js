import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
export default function ModalEdit(props) {
  // console.log(props);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value,

    });
  }
  const handleSubmit = e =>{
    // e.preventDefault();
    // console.log("iddd"+ props.id);
   
   const baseURLadd = "http://localhost:3002/api/product/";
   axios.put(baseURLadd+props.id,{...form}).then(res => {
    //  console.log(res);
    console.log(res.data);
   });
  }
  return (
    <>
      <Button
        className="color-wh fw-bold"
        style={{ color: 'white' }}
        variant="primary"
        onClick={handleShow}
      >
        edit
      </Button>

      <Modal scrollable={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicCodigo">
              <Form.Label>Codigo</Form.Label>
              <Form.Control type="text"  name="codigo" placeholder="Codigo" defaultValue={props.id} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control type="text" name="nombre" placeholder="Nombre del producto" defaultValue={props.nombre} value={form.nombre} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" name="precio" placeholder="Precio" defaultValue={props.precio} value={form.precio} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" name="categoria" placeholder="Categoria" defaultValue={props.categoria} value={form.categoria} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="number" name="stock" placeholder="Stock" defaultValue={props.stock} value={form.stock} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImagen">
              <Form.Label>Añadir imagen</Form.Label>
              <Form.Control type="txt" name="img" placeholder="Añadir imagen" defaultValue={props.img} value={form.img} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" name="descripcion" placeholder="Descipcion" defaultValue={props.descripcion} value={form.descripcion} onChange={handleChange}/>
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
