import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find product from your data based on category
    const findProduct = () => {
      const allProducts = [
        ...dairyProducts.map(p => ({ ...p, category: 'dairy' })),
        ...rollingProducts.map(p => ({ ...p, category: 'rolling' })),
        ...snackProducts.map(p => ({ ...p, category: 'snacks' }))
      ];
      
      const found = allProducts.find(p => p.id.toString() === id);
      if (found) {
        // Add image from your images mapping
        setProduct({
          ...found,
          image: products[found.category][found.name],
          displayName: getDisplayName(found.name)
        });
      } else {
        // Redirect to home if product not found
        navigate('/');
      }
    };

    findProduct();
  }, [id]);

  if (!product) return null;

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.displayName} 
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

        <div className="product-info-section">
          <button 
            className="back-button" 
            onClick={() => navigate('/')}
          >
            ← Back to Products
          </button>

          <div className="breadcrumb">
            {product.category} / {product.subcategory}
          </div>
          
          <h1 className="product-title">{product.displayName}</h1>
          
          <div className="delivery-time">
            {product.earliest && (
              <span className="earliest-tag">EARLIEST DELIVERY</span>
            )}
          </div>

          <div className="product-pricing">
            <div className="quantity-selector">
              <span>{product.quantity}</span>
            </div>
            <div className="price-details">
              <span className="current-price">₹{product.price}</span>
              {product.mrp && (
                <>
                  <span className="mrp">₹{product.mrp}</span>
                  {product.discount && (
                    <span className="discount">{product.discount}</span>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="add-to-cart-section">
            <button 
              className="add-to-cart-btn" 
              onClick={() => onAddToCart(product)}
            >
              ADD TO CART
            </button>
          </div>

          <div className="product-description">
            <h2>Product Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Category</span>
                <span className="detail-value">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
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