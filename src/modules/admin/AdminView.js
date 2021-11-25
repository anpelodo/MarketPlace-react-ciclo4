import React from 'react';
import AdminHeader from './components/AdminHeader';
import Table from 'react-bootstrap/Table';
// import Button from "@restart/ui/esm/Button";

import ModalEdit from './components/ModalEdit';
import ModalAdd from './components/ModalAdd';
import ModalDelete from './components/ModalDelete';

export default function AdminView() {
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <ModalEdit />
              </td>
              <td>
                <ModalDelete />
              </td>
            </tr>
          </tbody>
        </Table>
        <ModalAdd />
      </div>
    </div>
  );
}
