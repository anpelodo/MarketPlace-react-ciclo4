import React from 'react';
import Card from './Card';
import axios from 'axios';
import { useState } from 'react';

const baseURL = 'http://localhost:3002/api/product/list';

export default function StoreView() {
  const [post, setPost] = useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);

  console.log(post);

  return (
    <div>
      <h3>Store View</h3>
      <div className="container d-flex justify-content-center">
        <div className="row">
          {post.map((post) => (
            <div className="col-12 col-md-6 col-lg-3" key={post._id}>
              <Card
                title={post.nombre}
                imageUrl={post.img}
                descripcion={post.descripcion}
                precio={post.precio}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
