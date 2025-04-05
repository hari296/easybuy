import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import companyLogo from '../../assets/company-logo.png';
import LoginModal from '../LoginModal/LoginModal';

const Header = ({ onCartClick, cartCount, cartTotal }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img src={companyLogo} alt="shopping" className='logo'/>
          <div className="delivery-info">
            <h3>Delivery in 10 minutes</h3>
            <p>Delhi, India</p>
          </div>
        </div>
        
        <div className="search-container">
          <input 
            type="search" 
            className="search-input"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search for rice, chicken, bread..."
          />
        
        </div>

        <div className="header-right">
          <button 
            className="login-btn" 
            onClick={() => setIsLoginModalOpen(true)}
          >
            Login
          </button>
          <div className="" onClick={onCartClick} style={{ position: 'relative', display: 'inline-block',paddingTop: '13px' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '25px', height: '25px' }}>
        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
      </svg>

      {cartCount > 0 && (
        <div style={{
          position: 'absolute',
          top: '3px',
          right: '-12px',
          backgroundColor: '#5771ff',
          color: 'white',
          borderRadius: '50%',
          padding: '3px',
          fontSize: '10px',
          fontWeight: 'bold',
          width: '18px',
          height: '18px',
          textAlign: 'center'
        }}>
          {cartCount}
        </div>
      )}

      
    </div>
        
        </div>
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </header>
  );
};

export default Header; 