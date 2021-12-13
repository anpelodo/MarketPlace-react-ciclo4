import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
const baseURL = 'http://localhost:3002/api/product/list';

export default function ModalAdd() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({});

  const [post, setPost] = useState([]);

  // const [codigo, setCodigo] = useState("");
  // const [nombre, setNombre] = useState("");
  // const [precio, setPrecio] = useState("");
  // const [categoria, setCategoria] = useState("");
  // const [stock, setStock] = useState("");
  // const [img, setImg] = useState("");
  // const [desc, setDesc] = useState("");
  const getProducts = () => {
    axios.get(baseURL).then((response) => {
      console.log('data');
      console.log(response.data);
      setPost(response.data);
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    const baseURLadd = 'http://localhost:3002/api/product/add';
    axios.post(baseURLadd, { ...form }).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    getProducts();

    alert('El formulario se ha enviado');
  };

  return (
    <>
      <Button
        className="text-white fw-bold"
        variant="primary"
        onClick={handleShow}
      >
        Add
      </Button>

      <Modal scrollable={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicCodigo">
              <Form.Label>Codigo</Form.Label>
              <Form.Control
                type="text"
                name="codigo"
                placeholder="Codigo"
                value={form.codigo}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Nombre del producto"
                value={form.nombre}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                placeholder="Precio"
                value={form.precio}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCategoria">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                name="categoria"
                placeholder="Categoria"
                value={form.categoria}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                placeholder="Stock"
                value={form.stock}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImagen">
              <Form.Label>Añadir imagen</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="Añadir imagen"
                value={form.img}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="desc"
                placeholder="Descipcion"
                value={form.desc}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={handleClose}
              className="text-white fw-bold"
            >
              Add product
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
