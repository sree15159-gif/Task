import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [category, setCategory] = useState(null);
  const [stores, setStores] = useState([]);
  const [nearbyStores, setNearbyStores] = useState([]);
  const [favoriteStores, setFavoriteStores] = useState([]);
  const [activeTab, setActiveTab] = useState('nearby');
  const [userLocation, setUserLocation] = useState('New York, NY');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Mock category data - in real app, fetch from API
      const mockCategoryData = {
        food: {
          name: 'Food',
          description: 'Fresh and delicious food from local restaurants and vendors',
          icon: '🍽️',
          totalStores: 45,
          totalProducts: 450
        },
        groceries: {
          name: 'Groceries',
          description: 'Daily essentials and fresh groceries for your home',
          icon: '🛒',
          totalStores: 32,
          totalProducts: 320
        },
        medicine: {
          name: 'Medicine',
          description: 'Healthcare products and medicines from certified pharmacies',
          icon: '💊',
          totalStores: 18,
          totalProducts: 180
        },
        'home-services': {
          name: 'Home Services',
          description: 'Professional home services and maintenance',
          icon: '🏠',
          totalStores: 25,
          totalProducts: 95
        },
        shop: {
          name: 'Shop',
          description: 'Fashion, electronics, and lifestyle products',
          icon: '🛍️',
          totalStores: 38,
          totalProducts: 275
        }
      };

      const mockStores = {
        food: [
          {
            id: 1,
            name: 'Pizza Palace',
            rating: 4.5,
            deliveryTime: '25-35 min',
            deliveryFee: 2.99,
            image: '/assets/img/stores/pizza-palace.jpg',
            cuisine: 'Italian',
            isNearby: true,
            isFavorite: false,
            distance: '0.8 km'
          },
          {
            id: 2,
            name: 'Burger House',
            rating: 4.2,
            deliveryTime: '20-30 min',
            deliveryFee: 1.99,
            image: '/assets/img/stores/burger-house.jpg',
            cuisine: 'American',
            isNearby: true,
            isFavorite: true,
            distance: '1.2 km'
          },
          {
            id: 3,
            name: 'Sushi Express',
            rating: 4.7,
            deliveryTime: '30-40 min',
            deliveryFee: 3.99,
            image: '/assets/img/stores/sushi-express.jpg',
            cuisine: 'Japanese',
            isNearby: false,
            isFavorite: false,
            distance: '2.5 km'
          }
        ],
        groceries: [
          {
            id: 4,
            name: 'Fresh Market',
            rating: 4.3,
            deliveryTime: '45-60 min',
            deliveryFee: 4.99,
            image: '/assets/img/stores/fresh-market.jpg',
            category: 'Supermarket',
            isNearby: true,
            isFavorite: true,
            distance: '0.5 km'
          },
          {
            id: 5,
            name: 'Organic Store',
            rating: 4.6,
            deliveryTime: '50-70 min',
            deliveryFee: 5.99,
            image: '/assets/img/stores/organic-store.jpg',
            category: 'Organic',
            isNearby: true,
            isFavorite: false,
            distance: '1.8 km'
          }
        ],
        medicine: [
          {
            id: 6,
            name: 'HealthCare Pharmacy',
            rating: 4.8,
            deliveryTime: '15-25 min',
            deliveryFee: 0,
            image: '/assets/img/stores/healthcare-pharmacy.jpg',
            category: 'Pharmacy',
            isNearby: true,
            isFavorite: false,
            distance: '0.3 km'
          }
        ]
      };

      setCategoryData(mockCategoryData[slug]);
      setStores(mockStores[slug] || []);
      setLoading(false);
    }
  }, [slug]);

  const toggleFavorite = (storeId) => {
    setStores(stores.map(store => 
      store.id === storeId 
        ? { ...store, isFavorite: !store.isFavorite }
        : store
    ));
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="wrapper sb-default">
          <div className="mn-main-content">
            <div className="container">
              <div className="loading-container">
                <p>Loading category...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!categoryData) {
    return (
      <>
        <Header />
        <main className="wrapper sb-default">
          <div className="mn-main-content">
            <div className="container">
              <div className="error-container">
                <h3>Category not found</h3>
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
                        <h2 className="mn-breadcrumb-title">
                          <span className="category-icon">{categoryData.icon}</span>
                          {categoryData.name}
                        </h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item active">{categoryData.name}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-category-stores p-b-15">
                <div className="container">
                  {/* Category Header */}
                  <div className="category-header">
                    <div className="row">
                      <div className="col-md-8">
                        <h3>{categoryData.name} Stores</h3>
                        <p>{categoryData.description}</p>
                        <div className="category-stats">
                          <span className="stat-item">{categoryData.totalStores} Stores</span>
                          <span className="stat-item">{categoryData.totalProducts} Products</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="category-filters">
                          <select className="form-select">
                            <option>Sort by: Recommended</option>
                            <option>Rating: High to Low</option>
                            <option>Delivery Time</option>
                            <option>Distance</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Filter Tabs */}
                  <div className="store-filter-tabs">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a className="nav-link active" href="#all">All Stores</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#nearby">Nearby</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#favorites">Favorites</a>
                      </li>
                    </ul>
                  </div>

                  {/* Stores Grid */}
                  <div className="stores-grid">
                    <div className="row">
                      {stores.map((store) => (
                        <div key={store.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                          <div className="store-card">
                            <div className="store-image">
                              <img src={store.image} alt={store.name} />
                              <button 
                                className={`favorite-btn ${store.isFavorite ? 'active' : ''}`}
                                onClick={() => toggleFavorite(store.id)}
                              >
                                <i className={`ri-heart-${store.isFavorite ? 'fill' : 'line'}`}></i>
                              </button>
                              {store.isNearby && (
                                <div className="nearby-badge">Nearby</div>
                              )}
                            </div>
                            <div className="store-info">
                              <h4 className="store-name">{store.name}</h4>
                              <p className="store-category">
                                {store.cuisine || store.category}
                              </p>
                              <div className="store-meta">
                                <div className="rating">
                                  <i className="ri-star-fill"></i>
                                  <span>{store.rating}</span>
                                </div>
                                <div className="delivery-time">
                                  <i className="ri-time-line"></i>
                                  <span>{store.deliveryTime}</span>
                                </div>
                                <div className="distance">
                                  <i className="ri-map-pin-line"></i>
                                  <span>{store.distance}</span>
                                </div>
                              </div>
                              <div className="delivery-fee">
                                <span>Delivery: {store.deliveryFee === 0 ? 'Free' : `$${store.deliveryFee}`}</span>
                              </div>
                              <div className="store-actions">
                                <Link 
                                  href={`/store/${store.id}`} 
                                  className="mn-btn-1 btn w-100"
                                >
                                  View Store
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {stores.length === 0 && (
                    <div className="no-stores-found">
                      <div className="no-stores-content">
                        <i className="ri-store-line empty-icon"></i>
                        <h3>No stores found</h3>
                        <p>We're working to add more stores in this category</p>
                        <Link href="/" className="mn-btn-1 btn">
                          Explore Other Categories
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
      
      <Footer />
    </>
  );
};

export default CategoryPage;