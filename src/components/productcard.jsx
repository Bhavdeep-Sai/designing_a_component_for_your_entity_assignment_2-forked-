import React from 'react';
import Button from './button';
import './items.css';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="image">
        <img src="https://th.bing.com/th/id/OIP.i_bVLHEXMzf-LKi1bbbktAHaHa?w=187&h=186&c=7&r=0&o=5&pid=1.7" alt="Product" />
      </div>
      <h2>Lego Car-Build set</h2>
      <p>$ 200</p>
      <Button />
    </div>
  );
};

export default ProductCard;
