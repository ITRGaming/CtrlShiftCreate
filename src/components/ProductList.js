import React, { useState } from 'react';
import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const initialProducts = [
  {
    id: 1,
    title: 'Next Yakiniku',
    description: 'This is the description of product 1.',
    price: 10,
    imageUrl: '/a-images/sesamesauce.png',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is the description of product 2.',
    price: 20,
    imageUrl: '/a-images/sesamesauce.png',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is the description of product 2.',
    price: 20,
    imageUrl: '/a-images/sesamesauce.png',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'This is the description of product 2.',
    price: 20,
    imageUrl: '/a-images/sesamesauce.png',
  }
];

const ProductList = () => {
	const [products, setProducts] = useState(initialProducts);
	const [sortBy, setSortBy] = useState('priceAsc'); // Default sort order
  
	// Function to handle sorting by price
	const handleSortByPrice = (order) => {
	  let sortedProducts = [...products];
  
	  if (order === 'priceAsc') {
		sortedProducts.sort((a, b) => a.price - b.price);
	  } else if (order === 'priceDesc') {
		sortedProducts.sort((a, b) => b.price - a.price);
	  }
  
	  setSortBy(order);
	  setProducts(sortedProducts);
	};
  
	return (
		<div className="container-fluid">
			<div className="text-center m-3">
			  {/* Title */}
			  <h2>Product List</h2>
			</div>
		  <div className="row">
			<div className="col-md-3 mb-4" id='filter'>
			  {/* Filter Icon */}
			  	<h1>
            	
            	<FontAwesomeIcon
              		icon={faFilter}
              		onClick={() => handleSortByPrice(sortBy === 'priceAsc' ? 'priceDesc' : 'priceAsc')}
              		style={{ cursor: 'pointer' }}
            	/>
          		</h1>
			</div>
			
			<div className="col-md-12 mb-4" id='products'>
			</div>
			{products.map((product) => (
			  <Product key={product.id} product={product} />
			))}
		  </div>
		</div>
	  );
	};
	
	export default ProductList;

	