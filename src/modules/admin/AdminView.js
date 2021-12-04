
import AdminHeader from './components/AdminHeader';
import Table from 'react-bootstrap/Table';
// import Button from "@restart/ui/esm/Button";

import ModalEdit from './components/ModalEdit';
import ModalAdd from './components/ModalAdd';
import ModalDelete from './components/ModalDelete';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const baseURL = "http://localhost:3002/api/product/list";

export default function AdminView()  {
  const [post, setPost] = useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);

  // console.log(post);



  return (
    <div>
      <div className="container">
        <AdminHeader />
        <h2>Admin View</h2>
        <Table striped bordered hover>
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
          {

            post.map((item, i) =>{return(

                    <tr>
                      <td key={i}> {item._id}</td>
                      <td> {item.nombre} </td>
                      <td> {item.categoria} </td>
                      <td> {item.stock} </td>
                      <td> {item.precio} </td>
                      <td>
                        <ModalEdit />
                      </td>
                      <td>
                        <ModalDelete />
                      </td>
                    </tr>
            )}

            )

          }



          </tbody>
        </Table>
        <ModalAdd />
      </div>
    </div>
  );
}
