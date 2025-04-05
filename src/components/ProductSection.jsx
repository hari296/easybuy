import { useNavigate } from 'react-router-dom';

const ProductSection = ({ title, products, images, onAddToCart }) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { 
      state: { 
        product: {
          ...product,
          image: images[product.name],
          displayName: getDisplayName(product.name)
        }
      }
    });
  };

  return (
    <div className="product-section">
      {/* ... existing header code ... */}
      
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image" onClick={() => handleProductClick(product)}>
              <img 
                src={images[product.name]} 
                alt={getDisplayName(product.name)} 
                style={{width: '140px', height: '140px', objectFit: 'cover', cursor: 'pointer'}} 
              />
            </div>
            {/* ... rest of product card content ... */}
          </div>
        ))}
      </div>
    </div>
  );
}; 