import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';

import { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fresh Organic Apples',
      price: 4.99,
      originalPrice: 6.99,
      quantity: 2,
      image: '/assets/img/product/1.jpg',
      store: 'Fresh Market',
      inStock: true,
      maxQuantity: 10
    },
    {
      id: 2,
      name: 'Premium Olive Oil',
      price: 12.99,
      originalPrice: 15.99,
      quantity: 1,
      image: '/assets/img/product/2.jpg',
      store: 'Organic Store',
      inStock: true,
      maxQuantity: 5
    },
    {
      id: 3,
      name: 'Whole Grain Bread',
      price: 3.99,
      originalPrice: 4.99,
      quantity: 1,
      image: '/assets/img/product/3.jpg',
      store: 'Bakery Corner',
      inStock: false,
      maxQuantity: 0
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (id) => {
    // Move item to wishlist logic
    removeItem(id);
    console.log('Moved to wishlist:', id);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const deliveryFee = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + tax + deliveryFee;

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
                        <h2 className="mn-breadcrumb-title">Shopping Cart</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item active">Cart</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-cart p-b-15">
                <div className="container">
                  {cartItems.length > 0 ? (
                    <div className="row">
                      <div className="col-lg-8 col-md-12">
                        <div className="mn-cart-table">
                          <div className="cart-header">
                            <h3>Shopping Cart ({cartItems.length} items)</h3>
                            <button className="clear-cart-btn" onClick={() => setCartItems([])}>
                              Clear All
                            </button>
                          </div>

                          <div className="cart-items">
                            {cartItems.map((item) => (
                              <div key={item.id} className="cart-item">
                                <div className="item-image">
                                  <img src={item.image} alt={item.name} />
                                  {!item.inStock && (
                                    <div className="out-of-stock-overlay">Out of Stock</div>
                                  )}
                                </div>

                                <div className="item-details">
                                  <h4 className="item-name">{item.name}</h4>
                                  <p className="item-store">
                                    <i className="ri-store-line"></i>
                                    {item.store}
                                  </p>
                                  <div className="item-price">
                                    <span className="current-price">${item.price}</span>
                                    {item.originalPrice > item.price && (
                                      <span className="original-price">${item.originalPrice}</span>
                                    )}
                                  </div>
                                  {item.originalPrice > item.price && (
                                    <div className="savings">
                                      You save: ${((item.originalPrice - item.price) * item.quantity).toFixed(2)}
                                    </div>
                                  )}
                                </div>

                                <div className="item-quantity">
                                  <div className="quantity-controls">
                                    <button 
                                      className="qty-btn minus"
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      disabled={item.quantity <= 1}
                                    >
                                      <i className="ri-subtract-line"></i>
                                    </button>
                                    <input 
                                      type="number" 
                                      value={item.quantity}
                                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                      min="1"
                                      max={item.maxQuantity}
                                      className="qty-input"
                                    />
                                    <button 
                                      className="qty-btn plus"
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      disabled={item.quantity >= item.maxQuantity}
                                    >
                                      <i className="ri-add-line"></i>
                                    </button>
                                  </div>
                                  {!item.inStock && (
                                    <p className="stock-status out-of-stock">Out of Stock</p>
                                  )}
                                </div>

                                <div className="item-total">
                                  <span className="total-price">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </span>
                                </div>

                                <div className="item-actions">
                                  <button 
                                    className="action-btn wishlist-btn"
                                    onClick={() => moveToWishlist(item.id)}
                                    title="Move to Wishlist"
                                  >
                                    <i className="ri-heart-line"></i>
                                  </button>
                                  <button 
                                    className="action-btn remove-btn"
                                    onClick={() => removeItem(item.id)}
                                    title="Remove Item"
                                  >
                                    <i className="ri-delete-bin-line"></i>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="cart-actions">
                            <Link href="/shop-full-width" className="mn-btn-2 btn">
                              <i className="ri-arrow-left-line"></i>
                              Continue Shopping
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-12">
                        <div className="mn-cart-summary">
                          <h4>Order Summary</h4>
                          
                          <div className="summary-details">
                            <div className="summary-row">
                              <span>Subtotal ({cartItems.length} items)</span>
                              <span>${subtotal.toFixed(2)}</span>
                            </div>
                            {savings > 0 && (
                              <div className="summary-row savings-row">
                                <span>Total Savings</span>
                                <span className="savings-amount">-${savings.toFixed(2)}</span>
                              </div>
                            )}
                            <div className="summary-row">
                              <span>Delivery Fee</span>
                              <span>
                                {deliveryFee === 0 ? (
                                  <span className="free-delivery">FREE</span>
                                ) : (
                                  `$${deliveryFee.toFixed(2)}`
                                )}
                              </span>
                            </div>
                            <div className="summary-row">
                              <span>Tax</span>
                              <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row total-row">
                              <span><strong>Total</strong></span>
                              <span><strong>${total.toFixed(2)}</strong></span>
                            </div>
                          </div>

                          {deliveryFee > 0 && (
                            <div className="delivery-notice">
                              <i className="ri-information-line"></i>
                              Add ${(50 - subtotal).toFixed(2)} more for FREE delivery
                            </div>
                          )}

                          <div className="checkout-actions">
                            <Link href="/checkout" className="mn-btn-1 btn w-100 mb-3">
                              Proceed to Checkout
                            </Link>
                            <div className="payment-methods">
                              <span>We accept:</span>
                              <div className="payment-icons">
                                <i className="ri-visa-line"></i>
                                <i className="ri-mastercard-line"></i>
                                <i className="ri-paypal-line"></i>
                                <i className="ri-apple-line"></i>
                              </div>
                            </div>
                          </div>

                          <div className="security-badges">
                            <div className="security-item">
                              <i className="ri-shield-check-line"></i>
                              <span>Secure Checkout</span>
                            </div>
                            <div className="security-item">
                              <i className="ri-truck-line"></i>
                              <span>Fast Delivery</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mn-empty-cart">
                      <div className="empty-cart-content">
                        <i className="ri-shopping-cart-line empty-icon"></i>
                        <h3>Your cart is empty</h3>
                        <p>Looks like you haven't added any items to your cart yet</p>
                        <Link href="/shop-full-width" className="mn-btn-1 btn">
                          Start Shopping
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
   
    </>
  );
};

export default Cart;