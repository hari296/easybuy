import React, { useState, useEffect } from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, image, description }) => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(prev => !prev);
  }, []);

  return (
    <div className="category">
      <img src={image} alt={title} className="category-image" />
      <div className="category-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}    
      </div>
    </div>
  );
};

export default CategoryCard; 