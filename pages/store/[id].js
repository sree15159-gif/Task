import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const StorePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (id) {
      // Mock store data - in real app, fetch from API
      const mockStoreData = {
        1: {
          name: 'Pizza Palace',
          rating: 4.5,
          reviews: 324,
          deliveryTime: '25-35 min',
          deliveryFee: 2.99,
          image: '/assets/img/stores/pizza-palace.jpg',
          banner: '/assets/img/stores/pizza-palace-banner.jpg',
          cuisine: 'Italian',
          address: '123 Main Street, Downtown',
          phone: '+1 234 567 8900',
          isOpen: true,
          openingHours: '10:00 AM - 11:00 PM',
          description: 'Authentic Italian pizzas made with fresh ingredients and traditional recipes.',
          categories: ['Pizza', 'Pasta', 'Salads', 'Desserts']
        },
        2: {
          name: 'Burger House',
          rating: 4.2,
          reviews: 256,
          deliveryTime: '20-30 min',
          deliveryFee: 1.99,
          image: '/assets/img/stores/burger-house.jpg',
          banner: '/assets/img/stores/burger-house-banner.jpg',
          cuisine: 'American',
          address: '456 Oak Avenue, City Center',
          phone: '+1 234 567 8901',
          isOpen: true,
          openingHours: '11:00 AM - 12:00 AM',
          description: 'Juicy burgers and crispy fries made fresh to order.',
          categories: ['Burgers', 'Fries', 'Shakes', 'Sides']
        }
      };

      const mockProducts = {
        1: [
          {
            id: 101,
            name: 'Margherita Pizza',
            price: 12.99,
            originalPrice: 15.99,
            image: '/assets/img/product/pizza-1.jpg',
            category: 'Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
            rating: 4.6,
            isPopular: true,
            customizations: ['Size', 'Crust', 'Extra Toppings']
          },
          {
            id: 102,
            name: 'Pepperoni Pizza',
            price: 14.99,
            originalPrice: 17.99,
            image: '/assets/img/product/pizza-2.jpg',
            category: 'Pizza',
            description: 'Delicious pizza topped with pepperoni and mozzarella cheese',
            rating: 4.4,
            isPopular: true,
            customizations: ['Size', 'Crust', 'Extra Toppings']
          },
          {
            id: 103,
            name: 'Chicken Alfredo Pasta',
            price: 16.99,
            originalPrice: 19.99,
            image: '/assets/img/product/pasta-1.jpg',
            category: 'Pasta',
            description: 'Creamy alfredo pasta with grilled chicken and parmesan',
            rating: 4.5,
            isPopular: false,
            customizations: ['Portion Size', 'Extra Chicken']
          },
          {
            id: 104,
            name: 'Caesar Salad',
            price: 8.99,
            originalPrice: 10.99,
            image: '/assets/img/product/salad-1.jpg',
            category: 'Salads',
            description: 'Fresh romaine lettuce with caesar dressing and croutons',
            rating: 4.2,
            isPopular: false,
            customizations: ['Dressing', 'Add Protein']
          }
        ]
      };

      setStoreData(mockStoreData[id]);
      setProducts(mockProducts[id] || []);
      setLoading(false);
    }
  }, [id]);

  const addToCart = (product) => {
    // Add to cart logic here
    console.log('Added to cart:', product);
  };

  const addToWishlist = (product) => {
    // Add to wishlist logic here
    console.log('Added to wishlist:', product);
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  if (loading) {
    return (
      <>
        <Header />
        <main className="wrapper sb-default">
          <div className="mn-main-content">
            <div className="container">
              <div className="loading-container">
                <p>Loading store...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!storeData) {
    return (
      <>
        <Header />
        <main className="wrapper sb-default">
          <div className="mn-main-content">
            <div className="container">
              <div className="error-container">
                <h3>Store not found</h3>
                <Link href="/" className="mn-btn-1 btn">Go Home</Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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
                        <h2 className="mn-breadcrumb-title">{storeData.name}</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item"><Link href="/category/food">Food</Link></li>
                          <li className="mn-breadcrumb-item active">{storeData.name}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-store-detail p-b-15">
                <div className="container">
                  {/* Store Header */}
                  <div className="store-header">
                    <div className="store-banner">
                      <img src={storeData.banner} alt={storeData.name} />
                    </div>
                    <div className="store-info-header">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="store-basic-info">
                            <div className="store-logo">
                              <img src={storeData.image} alt={storeData.name} />
                            </div>
                            <div className="store-details">
                              <h1>{storeData.name}</h1>
                              <p className="store-cuisine">{storeData.cuisine} Cuisine</p>
                              <p className="store-description">{storeData.description}</p>
                              <div className="store-meta">
                                <div className="meta-item">
                                  <i className="ri-star-fill"></i>
                                  <span>{storeData.rating} ({storeData.reviews} reviews)</span>
                                </div>
                                <div className="meta-item">
                                  <i className="ri-time-line"></i>
                                  <span>{storeData.deliveryTime}</span>
                                </div>
                                <div className="meta-item">
                                  <i className="ri-truck-line"></i>
                                  <span>Delivery: ${storeData.deliveryFee}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="store-status">
                            <div className={`status-badge ${storeData.isOpen ? 'open' : 'closed'}`}>
                              <i className={`ri-${storeData.isOpen ? 'check' : 'close'}-circle-line`}></i>
                              {storeData.isOpen ? 'Open Now' : 'Closed'}
                            </div>
                            <p className="opening-hours">{storeData.openingHours}</p>
                            <div className="store-contact">
                              <p><i className="ri-map-pin-line"></i> {storeData.address}</p>
                              <p><i className="ri-phone-line"></i> {storeData.phone}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Categories */}
                  <div className="product-categories">
                    <ul className="category-tabs">
                      <li 
                        className={activeCategory === 'all' ? 'active' : ''}
                        onClick={() => setActiveCategory('all')}
                      >
                        All Items
                      </li>
                      {storeData.categories.map((category) => (
                        <li 
                          key={category}
                          className={activeCategory === category ? 'active' : ''}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Products Grid */}
                  <div className="store-products">
                    <div className="row">
                      {filteredProducts.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                          <div className="product-card">
                            <div className="product-image">
                              <img src={product.image} alt={product.name} />
                              {product.isPopular && (
                                <div className="popular-badge">Popular</div>
                              )}
                              <div className="product-actions">
                                <button 
                                  className="action-btn wishlist-btn"
                                  onClick={() => addToWishlist(product)}
                                >
                                  <i className="ri-heart-line"></i>
                                </button>
                                <Link
                                  href={`/product-detail?id=${product.id}`}
                                  className="action-btn view-btn"
                                  legacyBehavior>
                                  <i className="ri-eye-line"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="product-info">
                              <h4 className="product-name">{product.name}</h4>
                              <p className="product-description">{product.description}</p>
                              <div className="product-rating">
                                <div className="stars">
                                  {[...Array(5)].map((_, i) => (
                                    <i 
                                      key={i} 
                                      className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'}`}
                                    ></i>
                                  ))}
                                </div>
                                <span className="rating-text">({product.rating})</span>
                              </div>
                              <div className="product-price">
                                <span className="current-price">${product.price}</span>
                                {product.originalPrice > product.price && (
                                  <span className="original-price">${product.originalPrice}</span>
                                )}
                              </div>
                              {product.customizations && (
                                <div className="customizations">
                                  <small>Customizable: {product.customizations.join(', ')}</small>
                                </div>
                              )}
                              <div className="product-actions-bottom">
                                <button 
                                  className="mn-btn-1 btn w-100"
                                  onClick={() => addToCart(product)}
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="no-products-found">
                      <div className="no-products-content">
                        <i className="ri-shopping-bag-line empty-icon"></i>
                        <h3>No products found</h3>
                        <p>Try selecting a different category</p>
                      </div>
                    </div>
                  )}
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

export default StorePage;