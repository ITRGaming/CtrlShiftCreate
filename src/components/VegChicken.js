import React, { useState } from 'react';

const ProductDetail = () => {
  // Sample product data (you can replace this with dynamic data)
  const product = {
    id: 1,
    title: 'Veg Chicken',
    description: 'This is the description of the product.',
    price: 140,
    
    imageUrl: '/a-images/vegchicken.png',
  };

  // Sample reviews data (you can replace this with dynamic data)
  const reviews = [
    {
      id: 1,
      user: 'User 1',
      comment: 'This product is great!',
    },
    {
      id: 2,
      user: 'User 2',
      comment: 'I love it!',
    },
  ];

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleBuyNow = () => {
    // Handle the "Buy Now" action (e.g., navigate to a checkout page)
  };

  const handleAddToCart = () => {
    // Handle the "Add to Cart" action (e.g., add the product to the cart)
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          {/* Product Image */}
          <img src={product.imageUrl} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          {/* Product Details */}
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ₹{product.price}</p>

          {/* Quantity Input */}
          <div className="mb-3">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="form-control"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>

          {/* Buy Now and Add to Cart Buttons */}
          <button className="btn btn-primary" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className="btn btn-success ml-2" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-4">
        <h3>Customer Reviews</h3>
        <ul className="list-group">
          {reviews.map((review) => (
            <li key={review.id} className="list-group-item">
              <strong>{review.user}</strong>: {review.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
