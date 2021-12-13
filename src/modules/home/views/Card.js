import React from 'react';

export default function Card({ title, imageUrl, precio }) {
  return (
    <div
      className="card d-flex flex-column"
      style={{ minHeight: '26rem', width: '18rem' }}
    >
      <div
        className="d-flex flex-wrap align-content-center justify-content-center"
        style={{ height: '18rem', width: '17.8rem' }}
      >
        <img src={imageUrl} alt={title + ' image'} className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-tittle">{title}</h4>
        <p className="card-text fw-bold text-primary fs-4">${precio}</p>
      </div>
    </div>
  );
}
