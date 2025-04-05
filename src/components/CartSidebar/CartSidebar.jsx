import React from 'react';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose, cartItems, cartTotal }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2>My Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="cart-content">
          <div className="delivery-time">
            <span className="delivery-icon">⏱</span>
            <div>
              <h3>Delivery in 15 minutes</h3>
              <p>Shipment of {cartItems.length} items</p>
            </div>
          </div>

          <div className="savings-info">
            <p>Your total savings</p>
            <span>₹{Math.round(cartTotal * 0.1)}</span>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>{item.quantity}</p>
                  <div className="item-price">
                    <span className="price">₹{item.price}</span>
                    {item.mrp && (
                      <span className="original-price">₹{item.mrp}</span>
                    )}
                  </div>
                </div>
                <div className="quantity-controls">
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="bill-details">
              <h3>Bill Details</h3>
              <div className="total">₹{cartTotal}</div>
            </div>
            <button className="proceed-btn">Login to Proceed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar; 