import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        {/* Left side - Image */}
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.name} 
            className="main-product-image"
          />
          <div className="thumbnail-images">
            {/* Additional product images */}
            {product.additionalImages?.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} view ${index + 1}`} 
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        {/* Right side - Details */}
        <div className="product-info-section">
          <div className="breadcrumb">
            {product.category} / {product.subcategory}
          </div>
          
          <h1 className="product-title">{product.displayName}</h1>
          
          <div className="delivery-time">
            <span className="delivery-icon">⚡</span>
            {product.deliveryTime} MINS
          </div>

          <div className="product-pricing">
            <div className="quantity-selector">
              <span>{product.quantity}</span>
            </div>
            <div className="price-details">
              <span className="current-price">₹{product.price}</span>
              {product.mrp && (
                <span className="mrp">₹{product.mrp}</span>
              )}
              {product.discount && (
                <span className="discount">{product.discount}</span>
              )}
            </div>
          </div>

          <button className="add-to-cart-btn">
            {product.inCart ? (
              <div className="quantity-control">
                <button className="qty-btn">-</button>
                <span>{product.cartQuantity}</span>
                <button className="qty-btn">+</button>
              </div>
            ) : (
              'ADD TO CART'
            )}
          </button>

          <div className="product-description">
            <h2>Product Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Type</span>
                <span className="detail-value">{product.type}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Unit</span>
                <span className="detail-value">{product.quantity}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Shelf Life</span>
                <span className="detail-value">{product.shelfLife}</span>
              </div>
              {product.fssaiLicense && (
                <div className="detail-item">
                  <span className="detail-label">FSSAI License</span>
                  <span className="detail-value">{product.fssaiLicense}</span>
                </div>
              )}
            </div>

            <div className="key-features">
              <h3>Key Features</h3>
              <ul>
                {product.keyFeatures?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 