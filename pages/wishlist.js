import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Fresh Organic Apples',
      price: 4.99,
      originalPrice: 6.99,
      image: '/assets/img/product/1.jpg',
      inStock: true,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Premium Olive Oil',
      price: 12.99,
      originalPrice: 15.99,
      image: '/assets/img/product/2.jpg',
      inStock: true,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Organic Honey',
      price: 8.99,
      originalPrice: 10.99,
      image: '/assets/img/product/3.jpg',
      inStock: false,
      rating: 4.3
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    // Add to cart logic here
    console.log('Added to cart:', item);
  };

  return (
    <>
      <Header />
      
      <main className="wrapper sb-default">
        <div className="mn-main-content">
          <div className="row">
            <div className="col-xxl-12">
              <div className="mn-breadcrumb m-b-30">
                <div className="row">
                  <div className="col-12">
                    <div className="row gi_breadcrumb_inner">
                      <div className="col-md-6 col-sm-12">
                        <h2 className="mn-breadcrumb-title">My Wishlist</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item active">Wishlist</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-wishlist p-b-15">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="mn-wishlist-header">
                        <h3>My Wishlist ({wishlistItems.length} items)</h3>
                        <p>Save your favorite items for later</p>
                      </div>

                      {wishlistItems.length > 0 ? (
                        <div className="mn-wishlist-content">
                          <div className="row">
                            {wishlistItems.map((item) => (
                              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="mn-wishlist-item">
                                  <div className="mn-wishlist-img">
                                    <img src={item.image} alt={item.name} />
                                    <button 
                                      className="remove-wishlist"
                                      onClick={() => removeFromWishlist(item.id)}
                                    >
                                      <i className="ri-close-line"></i>
                                    </button>
                                    {!item.inStock && (
                                      <div className="out-of-stock-badge">Out of Stock</div>
                                    )}
                                  </div>
                                  <div className="mn-wishlist-details">
                                    <h4 className="product-name">{item.name}</h4>
                                    <div className="product-rating">
                                      <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                          <i 
                                            key={i} 
                                            className={`ri-star-${i < Math.floor(item.rating) ? 'fill' : 'line'}`}
                                          ></i>
                                        ))}
                                      </div>
                                      <span className="rating-text">({item.rating})</span>
                                    </div>
                                    <div className="product-price">
                                      <span className="current-price">${item.price}</span>
                                      {item.originalPrice > item.price && (
                                        <span className="original-price">${item.originalPrice}</span>
                                      )}
                                    </div>
                                    <div className="wishlist-actions">
                                      <button 
                                        className={`mn-btn-1 btn ${!item.inStock ? 'disabled' : ''}`}
                                        onClick={() => item.inStock && addToCart(item)}
                                        disabled={!item.inStock}
                                      >
                                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                                      </button>
                                      <Link href={`/product-detail?id=${item.id}`} className="mn-btn-2 btn">
                                        View Details
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="mn-empty-wishlist">
                          <div className="empty-wishlist-content">
                            <i className="ri-heart-line empty-icon"></i>
                            <h3>Your wishlist is empty</h3>
                            <p>Start adding items you love to your wishlist</p>
                            <Link href="/shop-full-width" className="mn-btn-1 btn">
                              Continue Shopping
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Wishlist;