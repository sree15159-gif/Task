import Link from 'next/link';
import { useState } from 'react';

const Checkout = () => {
  const [customerType, setCustomerType] = useState('new');
  const [billingType, setBillingType] = useState('new');
  const [deliveryMethod, setDeliveryMethod] = useState('free');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postCode: '',
    country: '',
    regionState: '',
    comments: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const orderItems = [
    {
      id: 1,
      name: 'Round neck cotton t-shirt',
      image: '/assets/img/product/1.jpg',
      oldPrice: 58.00,
      newPrice: 45.00,
      rating: 4
    },
    {
      id: 2,
      name: 'Digital smart watch',
      image: '/assets/img/product/11.jpg',
      oldPrice: 285.00,
      newPrice: 250.00,
      rating: 5
    }
  ];

  const subtotal = 295.00;
  const deliveryCharges = 80.00;
  const total = 375.00;

  return (
    <>
      <style jsx>{`
        .checkout-container {
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
        
        .checkout-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          display: flex;
          gap: 40px;
        }
        
        .checkout-form {
          flex: 1;
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .form-section {
          margin-bottom: 40px;
        }
        
        .section-title {
          font-size: 20px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 20px;
        }
        
        .section-subtitle {
          font-size: 14px;
          color: #6c757d;
          margin-bottom: 15px;
        }
        
        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .radio-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .radio-item input[type="radio"] {
          margin: 0;
        }
        
        .radio-item label {
          color: #2c3e50;
          font-weight: 500;
          cursor: pointer;
        }
        
        .form-description {
          color: #6c757d;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        
        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          flex: 1;
          margin-bottom: 20px;
        }
        
        .form-group.half {
          flex: 0.5;
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
        
        .form-control select {
          cursor: pointer;
        }
        
        .btn-primary {
          background: #3498db;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background: #2980b9;
        }
        
        .btn-link {
          background: none;
          border: none;
          color: #3498db;
          text-decoration: underline;
          cursor: pointer;
          font-size: 14px;
        }
        
        .checkout-sidebar {
          width: 400px;
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          height: fit-content;
        }
        
        .summary-title {
          font-size: 20px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 25px;
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
        
        .product-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid #f8f9fa;
        }
        
        .product-item:last-child {
          border-bottom: none;
        }
        
        .product-image {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
        }
        
        .product-info {
          flex: 1;
        }
        
        .product-name {
          font-weight: 500;
          color: #2c3e50;
          margin: 0 0 5px;
          font-size: 14px;
        }
        
        .product-rating {
          display: flex;
          gap: 2px;
          margin-bottom: 5px;
        }
        
        .product-price {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        
        .old-price {
          text-decoration: line-through;
          color: #6c757d;
          font-size: 12px;
        }
        
        .new-price {
          color: #e74c3c;
          font-weight: 600;
          font-size: 14px;
        }
        
        .delivery-section {
          margin: 30px 0;
          padding: 20px 0;
          border-top: 1px solid #f8f9fa;
          border-bottom: 1px solid #f8f9fa;
        }
        
        .delivery-title {
          font-size: 16px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 10px;
        }
        
        .delivery-subtitle {
          font-size: 12px;
          color: #6c757d;
          margin-bottom: 15px;
        }
        
        .delivery-options {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        
        .delivery-option {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .payment-section {
          margin: 30px 0;
        }
        
        .payment-title {
          font-size: 16px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0 0 10px;
        }
        
        .payment-subtitle {
          font-size: 12px;
          color: #6c757d;
          margin-bottom: 15px;
        }
        
        .payment-method {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
        }
        
        .comments-section {
          margin: 20px 0;
        }
        
        .comments-textarea {
          width: 100%;
          min-height: 80px;
          padding: 12px;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          resize: vertical;
          font-family: inherit;
        }
        
        .terms-section {
          margin: 20px 0;
        }
        
        .terms-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        
        .terms-text {
          font-size: 12px;
          color: #6c757d;
        }
        
        .terms-link {
          color: #3498db;
          text-decoration: none;
        }
        
        .payment-icons {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }
        
        .payment-icon {
          width: 40px;
          height: 25px;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          color: #6c757d;
        }
        
        .place-order-btn {
          width: 100%;
          background: #3498db;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }
        
        .place-order-btn:hover {
          background: #2980b9;
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 1024px) {
          .checkout-content {
            flex-direction: column;
            gap: 30px;
          }
          
          .checkout-sidebar {
            width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .breadcrumb-content {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          
          .page-title {
            font-size: 20px;
          }
          
          .checkout-content {
            padding: 20px 15px;
          }
          
          .checkout-form {
            padding: 20px;
          }
          
          .checkout-sidebar {
            padding: 20px;
          }
          
          .form-row {
            flex-direction: column;
            gap: 0;
          }
          
          .section-title {
            font-size: 18px;
          }
          
          .summary-title {
            font-size: 18px;
          }
          
          .product-item {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
          
          .product-image {
            width: 80px;
            height: 80px;
          }
          
          .product-info {
            text-align: center;
          }
          
          .delivery-options {
            flex-direction: column;
            gap: 10px;
          }
          
          .payment-icons {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .radio-group {
            gap: 15px;
          }
          
          .radio-item {
            padding: 10px;
            background: #f8f9fa;
            border-radius: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .checkout-content {
            padding: 15px 10px;
          }
          
          .checkout-form {
            padding: 15px;
          }
          
          .checkout-sidebar {
            padding: 15px;
          }
          
          .form-control {
            padding: 10px;
            font-size: 14px;
          }
          
          .btn-primary {
            padding: 10px 20px;
            font-size: 14px;
          }
          
          .place-order-btn {
            padding: 12px;
            font-size: 14px;
          }
          
          .product-name {
            font-size: 12px;
          }
          
          .summary-row {
            font-size: 14px;
          }
          
          .comments-textarea {
            min-height: 60px;
          }
          
          .section-title {
            font-size: 16px;
          }
          
          .summary-title {
            font-size: 16px;
          }
          
          .delivery-title {
            font-size: 14px;
          }
          
          .payment-title {
            font-size: 14px;
          }
        }
        
        /* Tablet Responsive Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .checkout-content {
            padding: 30px 20px;
          }
          
          .checkout-form {
            padding: 25px;
          }
          
          .checkout-sidebar {
            padding: 25px;
          }
          
          .form-row {
            gap: 15px;
          }
        }
        
        /* Large Mobile Landscape */
        @media (min-width: 481px) and (max-width: 768px) {
          .form-row {
            flex-direction: row;
            gap: 15px;
          }
          
          .product-item {
            flex-direction: row;
            text-align: left;
          }
          
          .product-info {
            text-align: left;
          }
          
          .delivery-options {
            flex-direction: row;
            justify-content: space-around;
          }
        }
      `}</style>

      <div className="checkout-container">
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
          <div className="breadcrumb-content">
            <h1 className="page-title">Checkout Page</h1>
            <div className="breadcrumb-nav">
              <Link href="/">Home</Link> → Checkout Page
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="checkout-content">
          {/* Left Form Section */}
          <div className="checkout-form">
            {/* New Customer Section */}
            <div className="form-section">
              <h2 className="section-title">New Customer</h2>
              <div className="section-subtitle">Checkout Options</div>
              
              <div className="radio-group">
                <div className="radio-item">
                  <input 
                    type="radio" 
                    id="register" 
                    name="customer-type" 
                    value="register"
                    checked={customerType === 'register'}
                    onChange={(e) => setCustomerType(e.target.value)}
                  />
                  <label htmlFor="register">Register Account</label>
                </div>
                <div className="radio-item">
                  <input 
                    type="radio" 
                    id="guest" 
                    name="customer-type" 
                    value="guest"
                    checked={customerType === 'guest'}
                    onChange={(e) => setCustomerType(e.target.value)}
                  />
                  <label htmlFor="guest">Guest Account</label>
                </div>
              </div>
              
              <div className="form-description">
                By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
              </div>
              
              <button className="btn-primary">Continue</button>
            </div>

            {/* Returning Customer Section */}
            <div className="form-section">
              <h2 className="section-title">Returning Customer</h2>
              
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <button className="btn-primary">Login</button>
                <button className="btn-link">Forgot Password?</button>
              </div>
            </div>

            {/* Billing Details Section */}
            <div className="form-section">
              <h2 className="section-title">Billing Details</h2>
              
              <div className="radio-group">
                <div className="radio-item">
                  <input 
                    type="radio" 
                    id="existing-address" 
                    name="billing-type" 
                    value="existing"
                    checked={billingType === 'existing'}
                    onChange={(e) => setBillingType(e.target.value)}
                  />
                  <label htmlFor="existing-address">I want to use an existing address</label>
                </div>
                <div className="radio-item">
                  <input 
                    type="radio" 
                    id="new-address" 
                    name="billing-type" 
                    value="new"
                    checked={billingType === 'new'}
                    onChange={(e) => setBillingType(e.target.value)}
                  />
                  <label htmlFor="new-address">I want to use new address</label>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Address *</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Address Line 1"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">City *</label>
                  <select 
                    className="form-control"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  >
                    <option value="">Please select</option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Post Code *</label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Post Code"
                    value={formData.postCode}
                    onChange={(e) => handleInputChange('postCode', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Country *</label>
                  <select 
                    className="form-control"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                  >
                    <option value="">Please select</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Region / State *</label>
                  <select 
                    className="form-control"
                    value={formData.regionState}
                    onChange={(e) => handleInputChange('regionState', e.target.value)}
                  >
                    <option value="">Please select</option>
                    <option value="ny">New York</option>
                    <option value="ca">California</option>
                    <option value="tx">Texas</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="checkout-sidebar">
            <h3 className="summary-title">Summary</h3>
            
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
              <span>$0.00</span>
            </div>
            
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Product Items */}
            <div style={{marginTop: '30px'}}>
              {orderItems.map((item) => (
                <div key={item.id} className="product-item">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="product-image"
                  />
                  <div className="product-info">
                    <h4 className="product-name">{item.name}</h4>
                    <div className="product-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{color: i < item.rating ? '#ffc107' : '#e9ecef'}}>★</span>
                      ))}
                    </div>
                    <div className="product-price">
                      <span className="old-price">${item.oldPrice.toFixed(2)}</span>
                      <span className="new-price">${item.newPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Method */}
            <div className="delivery-section">
              <h4 className="delivery-title">Delivery Method</h4>
              <div className="delivery-subtitle">Please select the preferred shipping method to use on this order.</div>
              
              <div className="delivery-options">
                <div className="delivery-option">
                  <input 
                    type="radio" 
                    id="free-shipping" 
                    name="delivery" 
                    value="free"
                    checked={deliveryMethod === 'free'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  />
                  <label htmlFor="free-shipping">Free Shipping - $0.00</label>
                </div>
                <div className="delivery-option">
                  <input 
                    type="radio" 
                    id="flat-rate" 
                    name="delivery" 
                    value="flat"
                    checked={deliveryMethod === 'flat'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  />
                  <label htmlFor="flat-rate">Flat Rate - $80.00</label>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="payment-section">
              <h4 className="payment-title">Payment Method</h4>
              <div className="payment-subtitle">Please select the preferred payment method to use on this order.</div>
              
              <div className="payment-method">
                <input 
                  type="radio" 
                  id="cod" 
                  name="payment" 
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="cod">Cash On Delivery</label>
              </div>

              {/* Comments */}
              <div className="comments-section">
                <textarea 
                  className="comments-textarea"
                  placeholder="Add extra notes about your order..."
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                />
              </div>

              {/* Terms */}
              <div className="terms-section">
                <div className="terms-checkbox">
                  <input 
                    type="checkbox" 
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <label htmlFor="terms" className="terms-text">
                    I have read and agree to the <Link href="/terms" className="terms-link">Terms & Conditions</Link>
                  </label>
                </div>
              </div>

              {/* Payment Icons */}
              <div className="payment-icons">
                <div className="payment-icon">VISA</div>
                <div className="payment-icon">MC</div>
                <div className="payment-icon">PAYPAL</div>
                <div className="payment-icon">SKRILL</div>
                <div className="payment-icon">AMEX</div>
              </div>

              {/* Place Order Button */}
              <button 
                className="place-order-btn"
                disabled={!agreeTerms}
                style={{opacity: agreeTerms ? 1 : 0.6}}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;