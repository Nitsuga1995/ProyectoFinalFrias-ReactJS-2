import React from 'react';

const ProductDetail = ({ data }) => {
  return (
    <div style={{ padding: '10px 40px' }}>
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <h3>{data.description}</h3>
    </div>
  );
};

export default ProductDetail;
