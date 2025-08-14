import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const VendorPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useApp();
  
  const [vendor, setVendor] = useState(null);
  const [products, setProducts] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (id) {
      // Sample vendor data
      const vendorData = {
        1: {
          id: 1,
          name: 'Fresh Market Store',
          rating: 4.5,
          deliveryTime: '30-45 min',
          image: '/assets/img/vendor/1.jpg',
          description: 'Your trusted partner for fresh groceries and daily essentials.',
          address: '123 Market Street, Downtown',
          phone: '+1 (555) 123-4567',
          email: 'contact@freshmarket.com',
          categories: ['Fruits', 'Vegetables', 'Dairy', 'Bakery']
        },
        2: {
          id: 2,
          name: 'Quick Delivery Hub',
          rating: 4.2,
          deliveryTime: '20-30 min',
          image: '/assets/img/vendor/2.jpg',
          description: 'Fast delivery service for all your urgent needs.',
          address: '456 Speed Lane, City Center',
          phone: '+1 (555) 987-6543',
          email: 'info@quickdelivery.com',
          categories: ['Electronics', 'Fashion', 'Home & Garden']
        },
        3: {
          id: 3,
          name: 'Premium Store',
          rating: 4.8,
          deliveryTime: '45-60 min',
          image: '/assets/img/vendor/3.jpg',
          description: 'Premium quality products with exceptional service.',
          address: '789 Luxury Ave, Uptown',
          phone: '+1 (555) 456-7890',
          email: 'hello@premiumstore.com',
          categories: ['Luxury Items', 'Gourmet Food', 'Premium Fashion']
        }
      };

      // Sample products for each vendor
      const vendorProducts = {
        1: [
          {
            id: 101,
            name: 'Fresh Organic Apples',
            price: 4.99,
            originalPrice: 6.99,
            image: '/assets/img/product/1.jpg',
            category: 'Fruits',
            rating: 4.5,
            inStock: true,
            vendorId: 1
          },
          {
            id: 102,
            name: 'Organic Bananas',
            price: 2.99,
            originalPrice: 3.99,
            image: '/assets/img/product/2.jpg',
            category: 'Fruits',
            rating: 4.3,
            inStock: true,
            vendorId: 1
          },
          {
            id: 103,
            name: 'Fresh Milk',
            price: 3.49,
            originalPrice: 4.49,
            image: '/assets/img/product/3.jpg',
            category: 'Dairy',
            rating: 4.7,
            inStock: true,
            vendorId: 1
          }
        ],
        2: [
          {
            id: 201,
            name: 'Smart Watch',
            price: 199.99,
            originalPrice: 249.99,
            image: '/assets/img/product/11.jpg',
            category: 'Electronics',
            rating: 4.3,
            inStock: true,
            vendorId: 2
          },
          {
            id: 202,
            name: 'Wireless Headphones',
            price: 89.99,
            originalPrice: 119.99,
            image: '/assets/img/product/12.jpg',
            category: 'Electronics',
            rating: 4.5,
            inStock: true,
            vendorId: 2
          }
        ],
        3: [
          {
            id: 301,
            name: 'Premium Leather Bag',
            price: 299.99,
            originalPrice: 399.99,
            image: '/assets/img/product/15.jpg',
            category: 'Fashion',
            rating: 4.8,
            inStock: true,
            vendorId: 3
          },
          {
            id: 302,
            name: 'Luxury Watch',
            price: 599.99,
            originalPrice: 799.99,
            image: '/assets/img/product/16.jpg',
            category: 'Luxury Items',
            rating: 4.9,
            inStock: true,
            vendorId: 3
          }
        ]
      };

      setVendor(vendorData[id]);
      setProducts(vendorProducts[id] || []);
    }
  }, [id]);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const handleWishlistToggle = (product) => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  if (!isClient || !vendor) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      
      <main className="wrapper sb-default">
        <div className="row">
          <div className="col-xxl-12">
            {/* Breadcrumb */}
            <div className="mn-breadcrumb m-b-30">
              <div className="row">
                <div className="col-12">
                  <div className="row gi_breadcrumb_inner">
                    <div className="col-md-6 col-sm-12">
                      <h2 className="mn-breadcrumb-title">{vendor.name}</h2>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <ul className="mn-breadcrumb-list">
                        <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="mn-breadcrumb-item active">{vendor.name}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Info Section */}
            <section className="mn-vendor-info p-b-30">
              <div className="vendor-header">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="vendor-logo">
                      <img 
                        src={vendor.image} 
                        alt={vendor.name}
                        onError={(e) => {e.target.src = '/assets/img/vendor/default.jpg'}}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="vendor-details">
                      <h1>{vendor.name}</h1>
                      <p className="vendor-description">{vendor.description}</p>
                      <div className="vendor-meta">
                        <div className="meta-item">
                          <i className="ri-star-fill"></i>
                          <span>{vendor.rating} Rating</span>
                        </div>
                        <div className="meta-item">
                          <i className="ri-time-line"></i>
                          <span>{vendor.deliveryTime}</span>
                        </div>
                        <div className="meta-item">
                          <i className="ri-map-pin-line"></i>
                          <span>{vendor.address}</span>
                        </div>
                      </div>
                      <div className="vendor-categories">
                        <strong>Categories: </strong>
                        {vendor.categories.map((category, index) => (
                          <span key={index} className="category-tag">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Products Section */}
            <section className="mn-vendor-products p-b-15">
              <div className="mn-title">
                <h2>Products from <span>{vendor.name}</span></h2>
              </div>
              
              {products.length > 0 ? (
                <div className="row">
                  {products.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                      <div className="mn-product-card">
                        <div className="mn-product-img">
                          <div className="mn-img">
                            <Link href={`/product-detail?id=${product.id}`} className="image">
                              <img className="main-img" src={product.image} alt={product.name}/>
                            </Link>
                            <div className="mn-options">
                              <ul>
                                <li>
                                  <button 
                                    type="button"
                                    onClick={() => handleWishlistToggle(product)}
                                    data-tooltip 
                                    title={isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                                    className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                                  >
                                    <i className={`ri-heart-${isInWishlist(product.id) ? 'fill' : 'line'}`}></i>
                                  </button>
                                </li>
                                <li>
                                  <button 
                                    type="button"
                                    onClick={() => handleAddToCart(product)}
                                    data-tooltip 
                                    title="Add To Cart"
                                    className="mn-add-cart"
                                  >
                                    <i className="ri-shopping-cart-line"></i>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="mn-product-detail">
                          <div className="cat">
                            <span>{product.category}</span>
                          </div>
                          <h5><Link href={`/product-detail?id=${product.id}`}>{product.name}</Link></h5>
                          <div className="mn-price">
                            <div className="mn-price-new">${product.price}</div>
                            {product.originalPrice > product.price && (
                              <div className="mn-price-old">${product.originalPrice}</div>
                            )}
                          </div>
                          <div className="mn-rating">
                            {[...Array(5)].map((_, i) => (
                              <i 
                                key={i} 
                                className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'}`}
                              ></i>
                            ))}
                            <span>({product.rating})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <p>No products available from this vendor at the moment.</p>
                </div>
              )}
            </section>

            {/* Contact Section */}
            <section className="mn-vendor-contact p-b-15">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-item">
                      <i className="ri-phone-line"></i>
                      <span>{vendor.phone}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-item">
                      <i className="ri-mail-line"></i>
                      <span>{vendor.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default VendorPage;