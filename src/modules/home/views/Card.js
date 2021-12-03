import React from 'react';

export default function Card({title, imageUrl, descripcion, precio}) {
    
  return (
    <div className="card text-center"> 
        <img src={imageUrl}/>
        <div className="card-body">
            <h4 className="card-tittle">{title}</h4>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">{precio}</p>
            <a href="" className="btn btn-outline-secondary rounded-0">Comprar</a>
        </div>
    </div>
  );
}
