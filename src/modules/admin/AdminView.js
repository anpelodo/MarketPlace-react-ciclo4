import AdminHeader from './components/AdminHeader';
import Table from 'react-bootstrap/Table';
// import Button from "@restart/ui/esm/Button";

import ModalEdit from './components/ModalEdit';
import ModalAdd from './components/ModalAdd';
import ModalDelete from './components/ModalDelete';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const baseURL = 'http://localhost:3002/api/product/list';

export default function AdminView() {
  const { token } = useAuth().getAuthData();

  const [post, setPost] = useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <AdminHeader />

      <div className="w-75">
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Producto</th>
              <th>Categoria</th>
              <th>Stock</th>
              <th>Precio</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {post.map((item, i) => {
              return (
                <tr>
                  <td key={item.id}> {item._id}</td>
                  <td> {item.nombre} </td>
                  <td> {item.categoria} </td>
                  <td> {item.stock} </td>
                  <td> {item.precio} </td>
                  <td>
                    <ModalEdit
                      id={item._id}
                      nombre={item.nombre}
                      categoria={item.categoria}
                      stock={item.stock}
                      precio={item.precio}
                      img={item.img}
                      descripcion={item.descripcion}
                      token={token}
                    />
                  </td>
                  <td>
                    <ModalDelete id={item._id} token={token} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <ModalAdd token={token} />
      </div>
    </div>
  );
}
