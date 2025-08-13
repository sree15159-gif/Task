import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (id) {
      // Mock product data - in real app, fetch from API
      const mockProduct = {
        id: id,
        name: 'Fresh Organic Apples',
        price: 4.99,
        originalPrice: 6.99,
        rating: 4.5,
        reviewCount: 128,
        description: 'Fresh, crispy organic apples sourced directly from local farms. These apples are perfect for snacking, baking, or adding to your favorite recipes. Rich in vitamins and fiber, they make a healthy choice for the whole family.',
        images: [
          '/assets/img/product/apple-1.jpg',
          '/assets/img/product/apple-2.jpg',
          '/assets/img/product/apple-3.jpg',
          '/assets/img/product/apple-4.jpg'
        ],
        variants: [
          { name: 'Small (1 lb)', price: 4.99, stock: 15 },
          { name: 'Medium (2 lbs)', price: 8.99, stock: 12 },
          { name: 'Large (5 lbs)', price: 19.99, stock: 8 }
        ],
        features: [
          'Certified Organic',
          'Locally Sourced',
          'Fresh Daily',
          'No Pesticides',
          'Rich in Vitamins'
        ],
        nutritionFacts: {
          calories: 95,
          carbs: '25g',
          fiber: '4g',
          sugar: '19g',
          protein: '0.5g',
          fat: '0.3g'
        },
        store: {
          name: 'Fresh Market',
          rating: 4.3,
          deliveryTime: '30-45 min'
        },
        inStock: true,
        category: 'Fruits',
        tags: ['organic', 'fresh', 'healthy', 'local']
      };

      const mockReviews = [
        {
          id: 1,
          user: 'Sarah Johnson',
          rating: 5,
          date: '2024-01-15',
          comment: 'Amazing quality apples! Very fresh and crispy. Will definitely order again.',
          helpful: 12
        },
        {
          id: 2,
          user: 'Mike Chen',
          rating: 4,
          date: '2024-01-10',
          comment: 'Good apples, delivered quickly. Slightly expensive but worth it for the quality.',
          helpful: 8
        },
        {
          id: 3,
          user: 'Emily Davis',
          rating: 5,
          date: '2024-01-08',
          comment: 'Perfect for my kids\' lunch boxes. They love the taste and I love that they\'re organic.',
          helpful: 15
        }
      ];

      const mockRelatedProducts = [
        {
          id: 2,
          name: 'Organic Bananas',
          price: 2.99,
          originalPrice: 3.99,
          image: '/assets/img/product/banana.jpg',
          rating: 4.2
        },
        {
          id: 3,
          name: 'Fresh Oranges',
          price: 5.99,
          originalPrice: 7.99,
          image: '/assets/img/product/orange.jpg',
          rating: 4.6
        },
        {
          id: 4,
          name: 'Organic Grapes',
          price: 8.99,
          originalPrice: 10.99,
          image: '/assets/img/product/grapes.jpg',
          rating: 4.4
        }
      ];

      setProduct(mockProduct);
      setReviews(mockReviews);
      setRelatedProducts(mockRelatedProducts);
      setSelectedVariant(mockProduct.variants[0].name);
    }
  }, [id]);

  const addToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedVariant,
      selectedPrice: product.variants.find(v => v.name === selectedVariant)?.price || product.price
    };
    console.log('Added to cart:', cartItem);
    // Add to cart logic here
  };

  const addToWishlist = () => {
    console.log('Added to wishlist:', product);
    // Add to wishlist logic here
  };

  if (!product) {
    return (
      <>
      
        <main className="wrapper sb-default">
          <div className="mn-main-content">
            <div className="container">
              <div className="loading-container">
                <p>Loading product...</p>
              </div>
            </div>
          </div>
        </main>
        
      </>
    );
  }

  const currentVariant = product.variants.find(v => v.name === selectedVariant);
  const currentPrice = currentVariant?.price || product.price;

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
                        <h2 className="mn-breadcrumb-title">{product.name}</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item"><Link href="/category/food">Food</Link></li>
                          <li className="mn-breadcrumb-item active">{product.name}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-product-detail p-b-15">
                <div className="container">
                  <div className="row">
                    {/* Product Images */}
                    <div className="col-lg-6 col-md-12">
                      <div className="product-images">
                        <div className="main-image">
                          <img 
                            src={product.images[selectedImage]} 
                            alt={product.name}
                            className="main-product-image"
                          />
                          {product.originalPrice > product.price && (
                            <div className="discount-badge">
                              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                            </div>
                          )}
                        </div>
                        <div className="image-thumbnails">
                          {product.images.map((image, index) => (
                            <div 
                              key={index}
                              className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                              onClick={() => setSelectedImage(index)}
                            >
                              <img src={image} alt={`${product.name} ${index + 1}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="col-lg-6 col-md-12">
                      <div className="product-info">
                        <div className="product-header">
                          <h1 className="product-title">{product.name}</h1>
                          <div className="product-meta">
                            <div className="rating">
                              <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                  <i 
                                    key={i} 
                                    className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'}`}
                                  ></i>
                                ))}
                              </div>
                              <span className="rating-text">({product.rating}) • {product.reviewCount} reviews</span>
                            </div>
                            <div className="product-category">
                              <span>Category: {product.category}</span>
                            </div>
                          </div>
                        </div>

                        <div className="product-pricing">
                          <div className="price-section">
                            <span className="current-price">${currentPrice}</span>
                            {product.originalPrice > currentPrice && (
                              <span className="original-price">${product.originalPrice}</span>
                            )}
                            {product.originalPrice > currentPrice && (
                              <span className="savings">
                                You save ${(product.originalPrice - currentPrice).toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="product-description">
                          <p>{product.description}</p>
                        </div>

                        <div className="product-features">
                          <h4>Key Features:</h4>
                          <ul>
                            {product.features.map((feature, index) => (
                              <li key={index}>
                                <i className="ri-check-line"></i>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Variants */}
                        <div className="product-variants">
                          <h4>Size Options:</h4>
                          <div className="variant-options">
                            {product.variants.map((variant) => (
                              <div 
                                key={variant.name}
                                className={`variant-option ${selectedVariant === variant.name ? 'selected' : ''}`}
                                onClick={() => setSelectedVariant(variant.name)}
                              >
                                <span className="variant-name">{variant.name}</span>
                                <span className="variant-price">${variant.price}</span>
                                <span className="variant-stock">({variant.stock} left)</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="product-quantity">
                          <h4>Quantity:</h4>
                          <div className="quantity-controls">
                            <button 
                              className="qty-btn minus"
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                            <input 
                              type="number" 
                              value={quantity}
                              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                              min="1"
                              max={currentVariant?.stock || 10}
                              className="qty-input"
                            />
                            <button 
                              className="qty-btn plus"
                              onClick={() => setQuantity(Math.min(currentVariant?.stock || 10, quantity + 1))}
                            >
                              <i className="ri-add-line"></i>
                            </button>
                          </div>
                          <span className="stock-info">
                            {currentVariant?.stock || 10} items available
                          </span>
                        </div>

                        {/* Store Info */}
                        <div className="store-info">
                          <div className="store-details">
                            <h4>Sold by: {product.store.name}</h4>
                            <div className="store-meta">
                              <span className="store-rating">
                                <i className="ri-star-fill"></i>
                                {product.store.rating}
                              </span>
                              <span className="delivery-time">
                                <i className="ri-truck-line"></i>
                                Delivery: {product.store.deliveryTime}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="product-actions">
                          <button 
                            className="mn-btn-1 btn add-to-cart-btn"
                            onClick={addToCart}
                            disabled={!product.inStock}
                          >
                            <i className="ri-shopping-cart-line"></i>
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                          <button 
                            className="mn-btn-2 btn wishlist-btn"
                            onClick={addToWishlist}
                          >
                            <i className="ri-heart-line"></i>
                            Add to Wishlist
                          </button>
                        </div>

                        {/* Product Tags */}
                        <div className="product-tags">
                          <h4>Tags:</h4>
                          <div className="tags-list">
                            {product.tags.map((tag, index) => (
                              <span key={index} className="tag">#{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details Tabs */}
                  <div className="row mt-5">
                    <div className="col-12">
                      <div className="product-details-tabs">
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <button 
                              className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                              onClick={() => setActiveTab('description')}
                            >
                              Description
                            </button>
                          </li>
                          <li className="nav-item">
                            <button 
                              className={`nav-link ${activeTab === 'nutrition' ? 'active' : ''}`}
                              onClick={() => setActiveTab('nutrition')}
                            >
                              Nutrition Facts
                            </button>
                          </li>
                          <li className="nav-item">
                            <button 
                              className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                              onClick={() => setActiveTab('reviews')}
                            >
                              Reviews ({product.reviewCount})
                            </button>
                          </li>
                        </ul>

                        <div className="tab-content">
                          {activeTab === 'description' && (
                            <div className="tab-pane active">
                              <div className="description-content">
                                <h4>Product Description</h4>
                                <p>{product.description}</p>
                                <h5>Features & Benefits:</h5>
                                <ul>
                                  {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {activeTab === 'nutrition' && (
                            <div className="tab-pane active">
                              <div className="nutrition-content">
                                <h4>Nutrition Facts (per serving)</h4>
                                <div className="nutrition-table">
                                  <div className="nutrition-row">
                                    <span>Calories</span>
                                    <span>{product.nutritionFacts.calories}</span>
                                  </div>
                                  <div className="nutrition-row">
                                    <span>Carbohydrates</span>
                                    <span>{product.nutritionFacts.carbs}</span>
                                  </div>
                                  <div className="nutrition-row">
                                    <span>Dietary Fiber</span>
                                    <span>{product.nutritionFacts.fiber}</span>
                                  </div>
                                  <div className="nutrition-row">
                                    <span>Sugars</span>
                                    <span>{product.nutritionFacts.sugar}</span>
                                  </div>
                                  <div className="nutrition-row">
                                    <span>Protein</span>
                                    <span>{product.nutritionFacts.protein}</span>
                                  </div>
                                  <div className="nutrition-row">
                                    <span>Total Fat</span>
                                    <span>{product.nutritionFacts.fat}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeTab === 'reviews' && (
                            <div className="tab-pane active">
                              <div className="reviews-content">
                                <div className="reviews-summary">
                                  <h4>Customer Reviews</h4>
                                  <div className="rating-summary">
                                    <div className="average-rating">
                                      <span className="rating-number">{product.rating}</span>
                                      <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                          <i 
                                            key={i} 
                                            className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'}`}
                                          ></i>
                                        ))}
                                      </div>
                                      <span>Based on {product.reviewCount} reviews</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="reviews-list">
                                  {reviews.map((review) => (
                                    <div key={review.id} className="review-item">
                                      <div className="review-header">
                                        <div className="reviewer-info">
                                          <h5>{review.user}</h5>
                                          <div className="review-rating">
                                            {[...Array(5)].map((_, i) => (
                                              <i 
                                                key={i} 
                                                className={`ri-star-${i < review.rating ? 'fill' : 'line'}`}
                                              ></i>
                                            ))}
                                          </div>
                                        </div>
                                        <div className="review-date">
                                          {new Date(review.date).toLocaleDateString()}
                                        </div>
                                      </div>
                                      <div className="review-content">
                                        <p>{review.comment}</p>
                                      </div>
                                      <div className="review-actions">
                                        <button className="helpful-btn">
                                          <i className="ri-thumb-up-line"></i>
                                          Helpful ({review.helpful})
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related Products */}
                  <div className="row mt-5">
                    <div className="col-12">
                      <div className="related-products">
                        <h4>Related Products</h4>
                        <div className="row">
                          {relatedProducts.map((relatedProduct) => (
                            <div key={relatedProduct.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                              <div className="product-card">
                                <div className="product-image">
                                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                                </div>
                                <div className="product-info">
                                  <h5>{relatedProduct.name}</h5>
                                  <div className="product-rating">
                                    <div className="stars">
                                      {[...Array(5)].map((_, i) => (
                                        <i 
                                          key={i} 
                                          className={`ri-star-${i < Math.floor(relatedProduct.rating) ? 'fill' : 'line'}`}
                                        ></i>
                                      ))}
                                    </div>
                                    <span>({relatedProduct.rating})</span>
                                  </div>
                                  <div className="product-price">
                                    <span className="current-price">${relatedProduct.price}</span>
                                    {relatedProduct.originalPrice > relatedProduct.price && (
                                      <span className="original-price">${relatedProduct.originalPrice}</span>
                                    )}
                                  </div>
                                  <Link 
                                    href={`/product-detail?id=${relatedProduct.id}`} 
                                    className="mn-btn-1 btn w-100"
                                  >
                                    View Product
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
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

export default ProductDetail;