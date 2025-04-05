import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`, {
      state: { product }
    });
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      {product.earliest && (
        <span className="earliest-tag">EARLIEST</span>
      )}
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="quantity">{product.quantity}</p>
        <div className="price-row">
          <div className="price-container">
            <span className="price">₹{product.price}</span>
            {product.mrp && (
              <span className="mrp">₹{product.mrp}</span>
            )}
          </div>
          <button 
            className="add-btn" 
            onClick={(e) => {
              e.stopPropagation();
              // Your add to cart logic
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 