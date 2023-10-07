import React from 'react';

const Product = ({ product }) => {
  const { title, description, price, imageUrl } = product;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imageUrl} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Price: ₹{price}</p>
          <button className="btn btn-primary mr-2">Buy Now</button>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
