import Link from 'next/link';
import { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Mantu smart watch',
      price: 516.00,
      quantity: 1,
      image: '/assets/img/product/11.jpg'
    },
    {
      id: 2,
      name: 'Leather bag',
      price: 75.00,
      quantity: 1,
      image: '/assets/img/product/15.jpg'
    },
    {
      id: 3,
      name: 'Cotton fabric T-shirt',
      price: 48.00,
      quantity: 1,
      image: '/assets/img/product/21.jpg'
    },
    {
      id: 4,
      name: 'Special sport shoes',
      price: 95.00,
      quantity: 1,
      image: '/assets/img/product/9.jpg'
    }
  ]);

  const [shippingInfo, setShippingInfo] = useState({
    country: 'United States',
    state: '',
    zipCode: ''
  });

  const [showCouponForm, setShowCouponForm] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleShippingChange = (field, value) => {
    setShippingInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharges = 80.00;
  const total = subtotal + deliveryCharges;

  return (
    <>
      <style jsx>{`
        .cart-container {
          background-color: #f8f9fa;
          min-height: 100vh;
          padding: 0;
        }
        
        .breadcrumb-section {
          background: white;
          padding: 20px 0;
          border-bottom: 1px solid #e9ecef;
        }
        
        .breadcrumb-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .page-title {
          font-size: 24px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0;
        }
        
        .breadcrumb-nav {
          color: #6c757d;
          font-size: 14px;
        }
        
        .breadcrumb-nav a {
          color: #6c757d;
          text-decoration: none;
        }
        
        .cart-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          display: flex;
          gap: 40px;
        }
        
        .cart-items {
          flex: 1;
        }
        
        .cart-table {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .table-header {
          background: #f8f9fa;
          padding: 20px;
          border-bottom: 1px solid #e9ecef;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr auto;
          gap: 20px;
          align-items: center;
          font-weight: 600;
          color: #2c3e50;
        }
        
        .cart-item {
          padding: 20px;
          border-bottom: 1px solid #e9ecef;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr auto;
          gap: 20px;
          align-items: center;
        }
        
        .cart-item:last-child {
          border-bottom: none;
        }
        
        .product-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .product-image {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
        }
        
        .product-name {
          font-weight: 500;
          color: #2c3e50;
          margin: 0;
        }
        
        .price {
          font-weight: 600;
          color: #2c3e50;
        }
        
        .quantity-control {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .quantity-btn {
          width: 32px;
          height: 32px;
          border: 1px solid #e9ecef;
          background: white;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .quantity-btn:hover {
          background: #f8f9fa;
          border-color: #3498db;
        }
        
        .quantity-input {
          width: 50px;
          text-align: center;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          padding: 8px;
          font-weight: 500;
        }
        
        .remove-btn {
          color: #e74c3c;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .remove-btn:hover {
          background: #fee;
        }
        
        .cart-actions {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8f9fa;
        }
        
        .continue-shopping {
          color: #3498db;
          text-decoration: none;
          font-weight: 500;
        }
        
        .checkout-btn {
          background: #3498db;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .checkout-btn:hover {
          background: #2980b9;
        }
        
        .cart-summary {
          width: 350px;
        }
        
        .summary-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .summary-title {
          font-size: 20px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 20px;
        }
        
        .shipping-form {
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #2c3e50;
        }
        
        .form-control {
          width: 100%;
          padding: 12px;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }
        
        .form-control:focus {
          outline: none;
          border-color: #3498db;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .summary-row.total {
          font-weight: 600;
          font-size: 18px;
          padding-top: 15px;
          border-top: 1px solid #e9ecef;
          margin-top: 20px;
        }
        
        .coupon-toggle {
          color: #3498db;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          text-decoration: underline;
        }
        
        .coupon-form {
          margin-top: 15px;
          display: flex;
          gap: 10px;
        }
        
        .coupon-input {
          flex: 1;
          padding: 10px;
          border: 1px solid #e9ecef;
          border-radius: 6px;
        }
        
        .apply-btn {
          background: #27ae60;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
        }
        
        .empty-cart {
          text-align: center;
          padding: 60px 20px;
          color: #6c757d;
        }
        
        .empty-cart h3 {
          margin-bottom: 10px;
          color: #2c3e50;
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 1024px) {
          .cart-content {
            flex-direction: column;
            gap: 30px;
          }
          
          .cart-summary {
            width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .breadcrumb-content {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          
          .cart-content {
            padding: 20px 15px;
          }
          
          .table-header {
            display: none;
          }
          
          .cart-item {
            display: block;
            padding: 20px 15px;
            border-radius: 8px;
            margin-bottom: 15px;
            background: #f8f9fa;
          }
          
          .product-info {
            margin-bottom: 15px;
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
          
          .product-image {
            width: 80px;
            height: 80px;
          }
          
          .mobile-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #e9ecef;
          }
          
          .mobile-row:last-child {
            border-bottom: none;
          }
          
          .mobile-label {
            font-weight: 600;
            color: #2c3e50;
          }
          
          .quantity-control {
            justify-content: center;
          }
          
          .cart-actions {
            flex-direction: column;
            gap: 15px;
          }
          
          .summary-card {
            padding: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .page-title {
            font-size: 20px;
          }
          
          .breadcrumb-nav {
            font-size: 12px;
          }
          
          .cart-content {
            padding: 15px 10px;
          }
          
          .product-info {
            gap: 8px;
          }
          
          .product-image {
            width: 60px;
            height: 60px;
          }
          
          .product-name {
            font-size: 14px;
          }
          
          .mobile-row {
            font-size: 14px;
          }
          
          .quantity-btn {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }
          
          .quantity-input {
            width: 40px;
            padding: 6px;
          }
          
          .summary-card {
            padding: 15px;
          }
          
          .summary-title {
            font-size: 18px;
          }
        }
        
        /* Tablet Responsive Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .cart-content {
            padding: 30px 20px;
          }
          
          .table-header {
            grid-template-columns: 2fr 1fr 1fr 1fr auto;
            padding: 15px;
          }
          
          .cart-item {
            grid-template-columns: 2fr 1fr 1fr 1fr auto;
            padding: 15px;
          }
          
          .product-image {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
      <div className="cart-container">
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
          <div className="breadcrumb-content">
            <h1 className="page-title">Cart Page</h1>
            <div className="breadcrumb-nav">
              <Link href="/" legacyBehavior>Home</Link> → Cart Page
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="cart-content">
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some products to your cart to see them here</p>
                <Link href="/" className="continue-shopping" legacyBehavior>Continue Shopping</Link>
              </div>
            ) : (
              <div className="cart-table">
                {/* Desktop Table Header */}
                <div className="table-header">
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Total</div>
                  <div>Remove</div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    {/* Desktop Layout */}
                    <div className="product-info">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="product-image"
                      />
                      <h4 className="product-name">{item.name}</h4>
                    </div>
                    
                    <div className="price">${item.price.toFixed(2)}</div>
                    
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="quantity-input"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      />
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="price">${(item.price * item.quantity).toFixed(2)}</div>
                    
                    <button 
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                      title="Remove item"
                    >
                      ×
                    </button>

                    {/* Mobile Layout */}
                    <div className="mobile-row" style={{display: 'none'}}>
                      <span className="mobile-label">Price:</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                    <div className="mobile-row" style={{display: 'none'}}>
                      <span className="mobile-label">Total:</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}

                {/* Cart Actions */}
                <div className="cart-actions">
                  <Link href="/" className="continue-shopping" legacyBehavior>
                    ← Continue Shopping
                  </Link>
                  <Link href="/checkout" className="checkout-btn" legacyBehavior>
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="cart-summary">
              <div className="summary-card">
                <h3 className="summary-title">Cart Summary</h3>
                
                {/* Shipping Calculator */}
                <div className="shipping-form">
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select 
                      className="form-control"
                      value={shippingInfo.country}
                      onChange={(e) => handleShippingChange('country', e.target.value)}
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">State/Province</label>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Enter state/province"
                      value={shippingInfo.state}
                      onChange={(e) => handleShippingChange('state', e.target.value)}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Zip/Postal Code</label>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Enter zip code"
                      value={shippingInfo.zipCode}
                      onChange={(e) => handleShippingChange('zipCode', e.target.value)}
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="summary-row">
                  <span>Sub-Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Delivery Charges:</span>
                  <span>${deliveryCharges.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Coupon Discount:</span>
                  <button 
                    className="coupon-toggle"
                    onClick={() => setShowCouponForm(!showCouponForm)}
                  >
                    Apply Coupon
                  </button>
                </div>
                
                {showCouponForm && (
                  <div className="coupon-form">
                    <input 
                      type="text" 
                      className="coupon-input"
                      placeholder="Enter coupon code"
                    />
                    <button className="apply-btn">Apply</button>
                  </div>
                )}
                
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .cart-item .mobile-row {
            display: flex !important;
          }
          
          .cart-item > .price:not(.mobile-row .price) {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Cart;