import React from 'react';
import './Footer.css';

const Footer = () => {
  const usefulLinks = {
    company: [
      { title: 'About', link: '/about' },
      { title: 'Careers', link: '/careers' },
      { title: 'Blog', link: '/blog' },
      { title: 'Press', link: '/press' },
      { title: 'Lead', link: '/lead' },
      { title: 'Value', link: '/value' }
    ],
    policy: [
      { title: 'Privacy', link: '/privacy' },
      { title: 'Terms', link: '/terms' },
      { title: 'FAQs', link: '/faqs' },
      { title: 'Security', link: '/security' },
      { title: 'Mobile', link: '/mobile' },
      { title: 'Contact', link: '/contact' }
    ],
    partners: [
      { title: 'Partner', link: '/partner' },
      { title: 'Franchise', link: '/franchise' },
      { title: 'Seller', link: '/seller' },
      { title: 'Warehouse', link: '/warehouse' },
      { title: 'Deliver', link: '/deliver' },
      { title: 'Resources', link: '/resources' }
    ]
  };

  const categories = [
    ['Vegetables & Fruits', 'Cold Drinks & Juices', 'Bakery & Biscuits', 'Dry Fruits, Masala & Oil', 'Paan Corner'],
    ['Dairy & Breakfast', 'Instant & Frozen Food', 'Sweet Tooth', 'Sauces & Spreads', 'Organic & Premium'],
    ['Munchies', 'Tea, Coffee & Health Drinks', 'Atta, Rice & Dal', 'Chicken, Meat & Fish', 'Baby Care']
  ];

  const additionalCategories = [
    'Pharma & Wellness', 'Ice Creams & Frozen Desserts', 'Beauty & Cosmetics', 'Stationery Needs', 'Print Store',
    'Cleaning Essentials', 'Personal Care', 'Fashion & Accessories', 'Books', 'E-Gift Cards',
    'Home & Office', 'Pet Care', 'Electronics & Electricals', 'Toys & Games'
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Useful Links Section */}
        <div className = "footer-top-section" style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <div className="useful-links">
            <div>
              {usefulLinks.company.map((link, index) => (
                <a key={index} href={link.link}>{link.title}</a>
              ))}
            </div>
            <div>
              {usefulLinks.policy.map((link, index) => (
                <a key={index} href={link.link}>{link.title}</a>
              ))}
            </div>
            <div>
              {usefulLinks.partners.map((link, index) => (
                <a key={index} href={link.link}>{link.title}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="footer-section">
          <div className="categories-header">
            <h3>Categories</h3>
            <a href="/categories" className="see-all">see all</a>
          </div>
          <div className="categories-grid">
            {categories.map((column, columnIndex) => (
              <div key={columnIndex} className="category-column">
                {column.map((category, index) => (
                  <a key={index} href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className="additional-categories">
            {additionalCategories.map((category, index) => (
              <a key={index} href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {category}
              </a>
            ))}
          </div>
        </div>
        </div>
        {/* Download App Section */}
        <div className="footer-bottom">
          <div className="copyright">
            © Blink Commerce Private Limited, 2016-2025
          </div>
          <div className="download-section">
            <span>Download App</span>
            <a href="https://apps.apple.com/" className="app-store">
              <img 
                src="https://blinkit.com/d61019073b700ca49d22.png"
                alt="Download on App Store"
                width="120"
                height="40"
              />
            </a>
            <a href="https://play.google.com/" className="play-store">
              <img 
                src="https://blinkit.com/8ed033800ea38f24c4f0.png"
                alt="Get it on Google Play"
                width="120" 
                height="40"
              />
            </a>
          </div>
          <div className="social-links">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://threads.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-threads"></i>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          "Blinkit" is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to "GROFFR.COM" which is a real estate services business operated by "Redstone Consultancy Services Private Limited".
        </div>
      </div>
    </footer>
  );
};

export default Footer; 