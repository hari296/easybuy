import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CartSidebar from './components/CartSidebar/CartSidebar';
import { bannerImage, featuredCategories, productCategories, products } from './assets/images';
import bannerImg2 from './assets/banner-img-2.jpg';
import bannerImg1 from './assets/banner-img-1.jpg';
import leftArrow from './assets/left-arrow.svg';
import rightArrow from './assets/right-arrow.svg';

// Banner Component
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerSlides = [
    {
      image: bannerImg2,
      title: "EasyBuy – Groceries at Your Doorstep!",
    },
    // {
    //   image: bannerImg1,
    //   title: "Pet Care Essentials Delivered Fast",
    // },
    {
      image: bannerImg2,
      title: "Pharmacy at Your Doorstep",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      <div 
        className="banner-slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }} >
        {bannerSlides.map((slide, index) => (
          <div key={index} className="banner-slide">
      <img 
              src={slide.image}
              alt={slide.title}
        className="banner-image"
      />
            <div className="banner-content">
              <h1>{slide.title}</h1>
            </div>
          </div>
        ))}
      </div>
      
      <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
        <img src={leftArrow} alt="Previous" />
      </button>
      
      <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
        <img src={rightArrow} alt="Next" />
      </button>

      <div className="slider-dots">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-image" />
      
    </div>
  );
};

// Product Category Component
const ProductCategory = ({ title, image }) => {
  return (
    <div className="product-category-item">
      <img src={image} alt={title} />
      {/* <h4>{title}</h4> */}
    </div>
  );
};

// First, create a products array (you can put this at the top of your file or in a separate data file)
const dairyProducts = [
  {
    id: 1,
    name: "milk",
    quantity: "500 ml",
    price: 30,
    earliest: true
  },
  {
    id: 2,
    name: "curd",
    quantity: "500 g",
    price: 40,
    earliest: true
  },
  {
    id: 3,
    name: "tonedMilk",
    quantity: "500 ml",
    price: 20,
    earliest: true
  },
  {
    id: 4,
    name: "bread",
    quantity: "500 ml",
    price: 40,
    earliest: true
  },
  {
    id: 5,
    name: "butter",
    quantity: "500 ml",
    price: 40,
    earliest: true
  },
  {
    id: 6,
    name: "eggs",
    quantity: "500 ml",
    price: 40,
    earliest: true
  },
  // Add more products as needed
];

const rollingProducts = [
  {
    id: 1,
    name: "brownRipper",
    quantity: "1 pack (64 pieces)",
    price: 120,
    earliest: true
  },
  {
    id: 2,
    name: "ultimate",
    quantity: "1 pack (32 pieces)",
    price: 90,
    earliest: true
  },
  {
    id: 3,
    name: "brownCones",
    quantity: "6 pieces",
    price: 90,
    earliest: true
  },
  {
    id: 4,
    name: "whiteRipper",
    quantity: "1 pack (32 + 32 pieces)",
    price: 100,
    earliest: true
  },
  {
    id: 5,
    name: "ultimateFilter",
    quantity: "1 pack (32 Leaves + 32)",
    price: 80,
    earliest: true
  },
  {
    id: 6,
    name: "perfectCones",
    quantity: "3 pack",
    price: 31,
    mrp: 45,
    earliest: true,
    discount: "31% OFF"
  }
];

const snackProducts = [
  {
    id: 1,
    name: "cheetos",
    quantity: "28 g",
    price: 10,
    earliest: true
  },
  {
    id: 2,
    name: "kodubale",
    quantity: "125 g",
    price: 42,
    mrp: 56,
    earliest: true,
    discount: "25% OFF"
  },
  {
    id: 3,
    name: "cheeseBalls",
    quantity: "60 g",
    price: 65,
    earliest: true
  },
  {
    id: 4,
    name: "chips",
    quantity: "160 g",
    price: 179,
    mrp: 200,
    earliest: true,
    discount: "10% OFF"
  },
  {
    id: 5,
    name: "murukku",
    quantity: "125 g",
    price: 42,
    mrp: 56,
    earliest: true,
    discount: "25% OFF"
  },
  {
    id: 6,
    name: "kettle",
    quantity: "56 g",
    price: 47,
    mrp: 49,
    earliest: true
  }
];

// Product Section Component
const ProductSection = ({ title, products, images, onAddToCart }) => {
  const [quantities, setQuantities] = useState({});

  const getDisplayName = (key) => {
    const nameMap = {
      // Dairy products
      milk: "Aavin Full Cream Fresh Milk",
      curd: "Hatsun Curd",
      tonedMilk: "Aavin Toned Fresh Milk",
      bread: "Modern Sandwich Supreme White Bread",
      butter: "Amul Salted Butter",
      eggs: "K.K.P Eggs White Eggs",
      
      // Rolling products
      brownRipper: "Brown Ripper Rolling Paper 32 Leaves + 32 Roach",
      ultimate: "Ultimate Rolling Paper with Filter Tips & Roach",
      brownCones: "Brown Rolling Paper Cones - Stash Pro",
      whiteRipper: "White Ripper Tipper Rolling Paper with Roach",
      ultimateFilter: "Ultimate Rolling Paper with Filter Tips & Roach",
      perfectCones: "Perfect Rolled Cones (Natural) - Bongchie",
      
      // Snack products
      cheetos: "Cheetos Cheez Puffs",
      kodubale: "Granamma Kodubale / Ring Murukku Namkeen",
      cheeseBalls: "Kab's Jackpot Cheese Balls",
      chips: "Jacker Hot & Spicy Potato Chips",
      murukku: "Granamma Butter Murukku Namkeen",
      kettle: "Kettle Studio Sharp Jalapenos & Cream Chips"
    };
    return nameMap[key] || key;
  };

  const handleIncrement = (product) => {
    setQuantities(prev => {
      const newQty = (prev[product.id] || 0) + 1;
      onAddToCart({ ...product, quantity: 1 });
      return { ...prev, [product.id]: newQty };
    });
  };

  const handleDecrement = (product) => {
    setQuantities(prev => {
      const currentQty = prev[product.id] || 0;
      if (currentQty > 0) {
        onAddToCart({ ...product, quantity: -1 });
        return { ...prev, [product.id]: currentQty - 1 };
      }
      return prev;
    });
  };

  return (
    <div className="product-section">
      <div className="section-header">
        <h2>{title}</h2>
        <a href="#" className="see-all">See All</a>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {product.earliest && (
              <span className="earliest-tag">EARLIEST</span>
            )}
            {product.discount && (
              <span className="discount-tag">{product.discount}</span>
            )}
            <div className="product-image">
              <img src={images[product.name]} alt={getDisplayName(product.name)} style={{width: '140px', height: '140px', objectFit: 'cover'}} />
            </div>
            <h3>{getDisplayName(product.name)}</h3>
            <p className="quantity">{product.quantity}</p>
            <div className="price-row">
              <div className="price-container">
              <span className="price">₹{product.price}</span>
                {product.mrp && (
                  <span className="mrp">₹{product.mrp}</span>
                )}
              </div>
              {quantities[product.id] ? (
                <div className="quantity-control">
                  <button className="quantity-btn" onClick={() => handleDecrement(product)}>-</button>
                  <span className="quantity-display">{quantities[product.id]}</span>
                  <button className="quantity-btn" onClick={() => handleIncrement(product)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => handleIncrement(product)}>ADD</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (product) => {
    const productWithImage = {
      ...product,
      image: products[product.category]?.[product.name] || ''
    };

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If quantity becomes 0, remove the item
        if (existingItem.quantity + product.quantity <= 0) {
          return prevItems.filter(item => item.id !== product.id);
        }
        // Otherwise update the quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      // Only add new item if quantity is positive
      if (product.quantity > 0) {
        return [...prevItems, { ...productWithImage, quantity: product.quantity }];
      }
      return prevItems;
    });
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Featured Categories Data
  const categories = [
    {
      title: "Pharmacy at your doorstep!",
      description: "Cough syrups, pain relief sprays & more",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
    },
    {
      title: "Pet Care supplies in minutes",
      description: "Food, treats, toys & more",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
    },
    {
      title: "No time for a diaper run?",
      description: "Get baby care essentials in minutes",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
    }
  ];

  // Product Categories Data
  const productCategories = [
    { 
      title: "Paan Corner", 
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png" 
    },
    { title: "Dairy, Bread & Eggs", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png" },
    { title: "Fruits & Vegetables", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png" },
    { title: "Cold Drinks & Juices", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png" },
    { title: "Snacks & Munchies", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png" },
    { title: "Breakfast & Instant Food", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png" },
    { title: "Sweet Tooth", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png" },
    { title: "Bakery & Biscuits", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png" },
    { title: "Tea, Coffee & Health Drink", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png" },
    { title: "Atta, Rice & Dal", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png" },
    { title: "Masala, Oil & More", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png" },
    { title: "Sauces & Spreads", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png" },
    { title: "Chicken, Meat & Fish", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png" },
    { title: "Organic & Healthy Living", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png" },
    { title: "Baby Care", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png" },
    { title: "Pharma & Wellness", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png" },
    { title: "Clening Essentials", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png" },
    { title: "Home & Office", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png" },
    { title: "Personal Care", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png" },
    { title: "Pet Care", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png" },
  ];

  return (
    <div className="app">
      <Header onCartClick={handleCartToggle} cartCount={cartCount} cartTotal={cartTotal} />
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        cartTotal={cartTotal}
      />
      <main className="main-content">
        <Banner />
        
        {/* Featured Categories Section */}
        <section className="featured-categories">
          <div className="category-grid">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                title={category.title}
                description={category.description}
                image={category.image}
              />
            ))}
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="product-categories">
          <div className="product-grid">
            {productCategories.map((category, index) => (
              <ProductCategory
                key={index}
                title={category.title}
                image={category.image}
              />
            ))}
          </div>
        </section>

        <ProductSection
          title="Dairy & Breakfast"
          products={dairyProducts.map(p => ({ ...p, category: 'dairy' }))}
          images={products.dairy}
          onAddToCart={handleAddToCart}
        />

        <ProductSection
          title="Rolling paper & tobacco"
          products={rollingProducts.map(p => ({ ...p, category: 'rolling' }))}
          images={products.rolling}
          onAddToCart={handleAddToCart}
        />

        <ProductSection
          title="Snacks & Munchies"
          products={snackProducts.map(p => ({ ...p, category: 'snacks' }))}
          images={products.snacks}
          onAddToCart={handleAddToCart}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
