import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Billing Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    
    // Delivery Options
    deliveryType: 'standard',
    deliveryTime: '',
    specialInstructions: '',
    
    // Payment
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing same as delivery
    sameAsDelivery: true
  });

  const [orderItems] = useState([
    {
      id: 1,
      name: 'Fresh Organic Apples',
      price: 4.99,
      quantity: 2,
      image: '/assets/img/product/1.jpg',
      store: 'Fresh Market'
    },
    {
      id: 2,
      name: 'Premium Olive Oil',
      price: 12.99,
      quantity: 1,
      image: '/assets/img/product/2.jpg',
      store: 'Organic Store'
    }
  ]);

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = formData.deliveryType === 'express' ? 9.99 : 4.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order
    console.log('Order submitted:', formData);
    // Redirect to success page
  };

  return (
    <>
     
      
      <main className="wrapper sb-default">
        <div className="mn-main-content">
          <div className="row">
            <div className="col-xxl-12">
              <div className="mn-breadcrumb m-b-30">
                <div className="row">
                  <div className="col-12">
                    <div className="row gi_breadcrumb_inner">
                      <div className="col-md-6 col-sm-12">
                        <h2 className="mn-breadcrumb-title">Checkout</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item"><Link href="/cart">Cart</Link></li>
                          <li className="mn-breadcrumb-item active">Checkout</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-checkout p-b-15">
                <div className="container">
                  {/* Checkout Steps */}
                  <div className="checkout-steps">
                    <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                      <div className="step-number">1</div>
                      <div className="step-title">Delivery Details</div>
                    </div>
                    <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                      <div className="step-number">2</div>
                      <div className="step-title">Delivery Options</div>
                    </div>
                    <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                      <div className="step-number">3</div>
                      <div className="step-title">Payment</div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <form onSubmit={handleSubmit}>
                        {/* Step 1: Delivery Details */}
                        {currentStep === 1 && (
                          <div className="checkout-step-content">
                            <h3>Delivery Details</h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>First Name*</label>
                                  <input 
                                    type="text" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter first name" 
                                    required 
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Last Name*</label>
                                  <input 
                                    type="text" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter last name" 
                                    required 
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Email Address*</label>
                                  <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter email address" 
                                    required 
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Phone Number*</label>
                                  <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter phone number" 
                                    required 
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label>Delivery Address*</label>
                                  <textarea 
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Enter complete address" 
                                    rows="3" 
                                    required
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label>City*</label>
                                  <input 
                                    type="text" 
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="Enter city" 
                                    required 
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label>State*</label>
                                  <input 
                                    type="text" 
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    placeholder="Enter state" 
                                    required 
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label>Postal Code*</label>
                                  <input 
                                    type="text" 
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    placeholder="Enter postal code" 
                                    required 
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 2: Delivery Options */}
                        {currentStep === 2 && (
                          <div className="checkout-step-content">
                            <h3>Delivery Options</h3>
                            <div className="delivery-options">
                              <div className="delivery-option">
                                <input 
                                  type="radio" 
                                  id="standard" 
                                  name="deliveryType" 
                                  value="standard"
                                  checked={formData.deliveryType === 'standard'}
                                  onChange={handleInputChange}
                                />
                                <label htmlFor="standard" className="delivery-option-label">
                                  <div className="option-info">
                                    <h4>Standard Delivery</h4>
                                    <p>Delivered within 45-60 minutes</p>
                                  </div>
                                  <div className="option-price">$4.99</div>
                                </label>
                              </div>
                              <div className="delivery-option">
                                <input 
                                  type="radio" 
                                  id="express" 
                                  name="deliveryType" 
                                  value="express"
                                  checked={formData.deliveryType === 'express'}
                                  onChange={handleInputChange}
                                />
                                <label htmlFor="express" className="delivery-option-label">
                                  <div className="option-info">
                                    <h4>Express Delivery</h4>
                                    <p>Delivered within 20-30 minutes</p>
                                  </div>
                                  <div className="option-price">$9.99</div>
                                </label>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Special Instructions (Optional)</label>
                              <textarea 
                                name="specialInstructions"
                                value={formData.specialInstructions}
                                onChange={handleInputChange}
                                placeholder="Any special delivery instructions..."
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        )}

                        {/* Step 3: Payment */}
                        {currentStep === 3 && (
                          <div className="checkout-step-content">
                            <h3>Payment Method</h3>
                            <div className="payment-methods">
                              <div className="payment-option">
                                <input 
                                  type="radio" 
                                  id="card" 
                                  name="paymentMethod" 
                                  value="card"
                                  checked={formData.paymentMethod === 'card'}
                                  onChange={handleInputChange}
                                />
                                <label htmlFor="card">Credit/Debit Card</label>
                              </div>
                              <div className="payment-option">
                                <input 
                                  type="radio" 
                                  id="paypal" 
                                  name="paymentMethod" 
                                  value="paypal"
                                  checked={formData.paymentMethod === 'paypal'}
                                  onChange={handleInputChange}
                                />
                                <label htmlFor="paypal">PayPal</label>
                              </div>
                              <div className="payment-option">
                                <input 
                                  type="radio" 
                                  id="cod" 
                                  name="paymentMethod" 
                                  value="cod"
                                  checked={formData.paymentMethod === 'cod'}
                                  onChange={handleInputChange}
                                />
                                <label htmlFor="cod">Cash on Delivery</label>
                              </div>
                            </div>

                            {formData.paymentMethod === 'card' && (
                              <div className="card-details">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label>Card Number*</label>
                                      <input 
                                        type="text" 
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        placeholder="1234 5678 9012 3456" 
                                        required 
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>Expiry Date*</label>
                                      <input 
                                        type="text" 
                                        name="expiryDate"
                                        value={formData.expiryDate}
                                        onChange={handleInputChange}
                                        placeholder="MM/YY" 
                                        required 
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>CVV*</label>
                                      <input 
                                        type="text" 
                                        name="cvv"
                                        value={formData.cvv}
                                        onChange={handleInputChange}
                                        placeholder="123" 
                                        required 
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label>Cardholder Name*</label>
                                      <input 
                                        type="text" 
                                        name="cardName"
                                        value={formData.cardName}
                                        onChange={handleInputChange}
                                        placeholder="Name on card" 
                                        required 
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="checkout-navigation">
                          {currentStep > 1 && (
                            <button type="button" className="mn-btn-2 btn" onClick={prevStep}>
                              <i className="ri-arrow-left-line"></i>
                              Previous
                            </button>
                          )}
                          {currentStep < 3 ? (
                            <button type="button" className="mn-btn-1 btn" onClick={nextStep}>
                              Next
                              <i className="ri-arrow-right-line"></i>
                            </button>
                          ) : (
                            <button type="submit" className="mn-btn-1 btn">
                              Place Order
                              <i className="ri-check-line"></i>
                            </button>
                          )}
                        </div>
                      </form>
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-4 col-md-12">
                      <div className="mn-checkout-summary">
                        <h4>Order Summary</h4>
                        
                        <div className="order-items">
                          {orderItems.map((item) => (
                            <div key={item.id} className="order-item">
                              <div className="item-image">
                                <img src={item.image} alt={item.name} />
                              </div>
                              <div className="item-details">
                                <h5>{item.name}</h5>
                                <p className="item-store">{item.store}</p>
                                <div className="item-price">
                                  <span>Qty: {item.quantity}</span>
                                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="order-totals">
                          <div className="total-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                          </div>
                          <div className="total-row">
                            <span>Delivery Fee</span>
                            <span>${deliveryFee.toFixed(2)}</span>
                          </div>
                          <div className="total-row">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                          </div>
                          <div className="total-row total-final">
                            <span><strong>Total</strong></span>
                            <span><strong>${total.toFixed(2)}</strong></span>
                          </div>
                        </div>

                        <div className="security-info">
                          <div className="security-item">
                            <i className="ri-shield-check-line"></i>
                            <span>Secure Payment</span>
                          </div>
                          <div className="security-item">
                            <i className="ri-truck-line"></i>
                            <span>Fast Delivery</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      
    </>
  );
};

export default Checkout;