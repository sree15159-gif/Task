import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';

const Compare = () => {
  const [compareItems, setCompareItems] = useState([
    {
      id: 1,
      name: 'Fresh Organic Apples',
      price: 4.99,
      originalPrice: 6.99,
      image: '/assets/img/product/apple.jpg',
      rating: 4.5,
      reviewCount: 89,
      store: 'Fresh Market',
      category: 'Fruits',
      inStock: true,
      features: {
        'Type': 'Organic',
        'Origin': 'Local Farm',
        'Weight': '1 lb',
        'Shelf Life': '7-10 days',
        'Nutritional Value': 'High in Fiber & Vitamin C'
      }
    },
    {
      id: 2,
      name: 'Premium Red Apples',
      price: 3.99,
      originalPrice: 5.99,
      image: '/assets/img/product/red-apple.jpg',
      rating: 4.2,
      reviewCount: 67,
      store: 'City Supermarket',
      category: 'Fruits',
      inStock: true,
      features: {
        'Type': 'Conventional',
        'Origin': 'Washington State',
        'Weight': '1 lb',
        'Shelf Life': '5-7 days',
        'Nutritional Value': 'Good source of Fiber'
      }
    },
    {
      id: 3,
      name: 'Gala Apples',
      price: 3.49,
      originalPrice: 4.99,
      image: '/assets/img/product/gala-apple.jpg',
      rating: 4.0,
      reviewCount: 45,
      store: 'Organic Valley',
      category: 'Fruits',
      inStock: false,
      features: {
        'Type': 'Organic',
        'Origin': 'New York',
        'Weight': '1 lb',
        'Shelf Life': '6-8 days',
        'Nutritional Value': 'Rich in Antioxidants'
      }
    }
  ]);

  const removeFromCompare = (id) => {
    setCompareItems(compareItems.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    console.log('Added to cart:', item);
    // Add to cart logic here
  };

  const addToWishlist = (item) => {
    console.log('Added to wishlist:', item);
    // Add to wishlist logic here
  };

  const allFeatures = [...new Set(compareItems.flatMap(item => Object.keys(item.features)))];

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
                        <h2 className="mn-breadcrumb-title">Compare Products</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item active">Compare</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-compare p-b-15">
                <div className="container">
                  {compareItems.length === 0 ? (
                    <div className="empty-compare">
                      <div className="empty-state">
                        <i className="ri-scales-line"></i>
                        <h3>No products to compare</h3>
                        <p>Add products to your comparison list to see them here</p>
                        <Link href="/" className="mn-btn-1 btn">
                          Continue Shopping
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-12">
                        <div className="compare-header">
                          <h3>Compare Products ({compareItems.length})</h3>
                          <p>Compare features, prices, and ratings to make the best choice</p>
                        </div>

                        <div className="compare-table-container">
                          <div className="compare-table">
                            {/* Product Images Row */}
                            <div className="compare-row compare-images">
                              <div className="compare-label">Product</div>
                              {compareItems.map((item) => (
                                <div key={item.id} className="compare-cell">
                                  <div className="product-compare-card">
                                    <button 
                                      className="remove-compare-btn"
                                      onClick={() => removeFromCompare(item.id)}
                                      title="Remove from comparison"
                                    >
                                      <i className="ri-close-line"></i>
                                    </button>
                                    <div className="product-image">
                                      <img src={item.image} alt={item.name} />
                                      {!item.inStock && (
                                        <div className="out-of-stock-badge">Out of Stock</div>
                                      )}
                                    </div>
                                    <h4>{item.name}</h4>
                                    <p className="store-name">{item.store}</p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Price Row */}
                            <div className="compare-row">
                              <div className="compare-label">Price</div>
                              {compareItems.map((item) => (
                                <div key={item.id} className="compare-cell">
                                  <div className="price-info">
                                    <span className="current-price">${item.price}</span>
                                    {item.originalPrice > item.price && (
                                      <span className="original-price">${item.originalPrice}</span>
                                    )}
                                    {item.originalPrice > item.price && (
                                      <span className="discount">
                                        {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Rating Row */}
                            <div className="compare-row">
                              <div className="compare-label">Rating</div>
                              {compareItems.map((item) => (
                                <div key={item.id} className="compare-cell">
                                  <div className="rating-info">
                                    <div className="stars">
                                      {[...Array(5)].map((_, i) => (
                                        <i 
                                          key={i} 
                                          className={`ri-star-${i < Math.floor(item.rating) ? 'fill' : 'line'}`}
                                        ></i>
                                      ))}
                                    </div>
                                    <span>{item.rating} ({item.reviewCount} reviews)</span>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Stock Status Row */}
                            <div className="compare-row">
                              <div className="compare-label">Availability</div>
                              {compareItems.map((item) => (
                                <div key={item.id} className="compare-cell">
                                  <span className={`stock-status ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
                                    <i className={`ri-${item.inStock ? 'check' : 'close'}-circle-line`}></i>
                                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Features Rows */}
                            {allFeatures.map((feature) => (
                              <div key={feature} className="compare-row">
                                <div className="compare-label">{feature}</div>
                                {compareItems.map((item) => (
                                  <div key={item.id} className="compare-cell">
                                    <span>{item.features[feature] || '-'}</span>
                                  </div>
                                ))}
                              </div>
                            ))}

                            {/* Action Buttons Row */}
                            <div className="compare-row compare-actions">
                              <div className="compare-label">Actions</div>
                              {compareItems.map((item) => (
                                <div key={item.id} className="compare-cell">
                                  <div className="action-buttons">
                                    <button 
                                      className="mn-btn-1 btn w-100 mb-2"
                                      onClick={() => addToCart(item)}
                                      disabled={!item.inStock}
                                    >
                                      <i className="ri-shopping-cart-line"></i>
                                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                                    </button>
                                    <button 
                                      className="mn-btn-2 btn w-100 mb-2"
                                      onClick={() => addToWishlist(item)}
                                    >
                                      <i className="ri-heart-line"></i>
                                      Add to Wishlist
                                    </button>
                                    <Link 
                                      href={`/product-detail?id=${item.id}`}
                                      className="mn-btn-2 btn w-100"
                                    >
                                      <i className="ri-eye-line"></i>
                                      View Details
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Comparison Summary */}
                        <div className="comparison-summary mt-4">
                          <h4>Comparison Summary</h4>
                          <div className="summary-cards">
                            <div className="summary-card">
                              <h5>Best Price</h5>
                              <div className="best-option">
                                {(() => {
                                  const cheapest = compareItems.reduce((prev, current) => 
                                    prev.price < current.price ? prev : current
                                  );
                                  return (
                                    <div className="option-info">
                                      <img src={cheapest.image} alt={cheapest.name} />
                                      <div>
                                        <span className="name">{cheapest.name}</span>
                                        <span className="price">${cheapest.price}</span>
                                      </div>
                                    </div>
                                  );
                                })()}
                              </div>
                            </div>

                            <div className="summary-card">
                              <h5>Highest Rated</h5>
                              <div className="best-option">
                                {(() => {
                                  const highest = compareItems.reduce((prev, current) => 
                                    prev.rating > current.rating ? prev : current
                                  );
                                  return (
                                    <div className="option-info">
                                      <img src={highest.image} alt={highest.name} />
                                      <div>
                                        <span className="name">{highest.name}</span>
                                        <span className="rating">
                                          <i className="ri-star-fill"></i>
                                          {highest.rating}
                                        </span>
                                      </div>
                                    </div>
                                  );
                                })()}
                              </div>
                            </div>

                            <div className="summary-card">
                              <h5>Best Value</h5>
                              <div className="best-option">
                                {(() => {
                                  const bestValue = compareItems.reduce((prev, current) => {
                                    const prevValue = prev.rating / prev.price;
                                    const currentValue = current.rating / current.price;
                                    return prevValue > currentValue ? prev : current;
                                  });
                                  return (
                                    <div className="option-info">
                                      <img src={bestValue.image} alt={bestValue.name} />
                                      <div>
                                        <span className="name">{bestValue.name}</span>
                                        <span className="value">Best Value</span>
                                      </div>
                                    </div>
                                  );
                                })()}
                              </div>
                            </div>
                          </div>
                        </div>
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

export default Compare;