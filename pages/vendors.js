import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useApp } from '../context/AppContext';

const VendorsPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useApp();
  
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [filters, setFilters] = useState({
    isOpen: false,
    rating: 0,
    deliveryTime: 'all',
    deliveryFee: 'all',
    sortBy: 'rating'
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mock API data - Replace with real API call
  const mockVendorsData = {
    food: [
      {
        id: 'restaurant-1',
        name: 'Pizza Palace',
        rating: 4.5,
        deliveryTime: '25-30 mins',
        image: '/assets/img/vendors/pizza-palace.jpg',
        coverImage: '/assets/img/vendors/covers/pizza-palace-cover.jpg',
        category: 'Restaurant',
        isFavorite: false,
        distance: '1.2 km',
        isOpen: true,
        deliveryFee: 2.99,
        minOrder: 15,
        address: '123 Pizza Street, Downtown',
        phone: '+1 (555) 123-4567',
        description: 'Authentic Italian pizzas made with fresh ingredients and traditional recipes.',
        tags: ['Italian', 'Pizza', 'Fast Food', 'Family Friendly'],
        products: [
          { id: 'p1', name: 'Margherita Pizza', price: 12.99, image: '/assets/img/product/1.jpg', rating: 4.3, category: 'Pizza' },
          { id: 'p2', name: 'Pepperoni Pizza', price: 15.99, image: '/assets/img/product/2.jpg', rating: 4.5, category: 'Pizza' },
          { id: 'p3', name: 'Veggie Supreme', price: 14.99, image: '/assets/img/product/3.jpg', rating: 4.2, category: 'Pizza' }
        ]
      },
      {
        id: 'restaurant-2',
        name: 'Burger Hub',
        rating: 4.2,
        deliveryTime: '20-25 mins',
        image: '/assets/img/vendors/burger-hub.jpg',
        coverImage: '/assets/img/vendors/covers/burger-hub-cover.jpg',
        category: 'Fast Food',
        isFavorite: false,
        distance: '0.8 km',
        isOpen: true,
        deliveryFee: 1.99,
        minOrder: 10,
        address: '456 Burger Lane, City Center',
        phone: '+1 (555) 987-6543',
        description: 'Juicy burgers and crispy fries made fresh to order.',
        tags: ['American', 'Burgers', 'Fast Food', 'Casual Dining'],
        products: [
          { id: 'p4', name: 'Classic Burger', price: 8.99, image: '/assets/img/product/4.jpg', rating: 4.1, category: 'Burgers' },
          { id: 'p5', name: 'Cheese Burger', price: 9.99, image: '/assets/img/product/5.jpg', rating: 4.4, category: 'Burgers' },
          { id: 'p6', name: 'Chicken Burger', price: 10.99, image: '/assets/img/product/6.jpg', rating: 4.3, category: 'Burgers' }
        ]
      },
      {
        id: 'restaurant-3',
        name: 'Spice Garden',
        rating: 4.7,
        deliveryTime: '30-35 mins',
        image: '/assets/img/vendors/spice-garden.jpg',
        coverImage: '/assets/img/vendors/covers/spice-garden-cover.jpg',
        category: 'Indian Cuisine',
        isFavorite: false,
        distance: '2.1 km',
        isOpen: false,
        deliveryFee: 3.99,
        minOrder: 20,
        address: '789 Spice Road, Little India',
        phone: '+1 (555) 456-7890',
        description: 'Authentic Indian cuisine with traditional spices and flavors.',
        tags: ['Indian', 'Spicy', 'Vegetarian Options', 'Traditional'],
        products: [
          { id: 'p7', name: 'Butter Chicken', price: 16.99, image: '/assets/img/product/7.jpg', rating: 4.6, category: 'Main Course' },
          { id: 'p8', name: 'Biryani Special', price: 14.99, image: '/assets/img/product/8.jpg', rating: 4.5, category: 'Rice' },
          { id: 'p9', name: 'Dal Makhani', price: 12.99, image: '/assets/img/product/9.jpg', rating: 4.4, category: 'Vegetarian' }
        ]
      }
    ],
    groceries: [
      {
        id: 'grocery-1',
        name: 'Fresh Mart',
        rating: 4.3,
        deliveryTime: '45-60 mins',
        image: '/assets/img/vendors/fresh-mart.jpg',
        coverImage: '/assets/img/vendors/covers/fresh-mart-cover.jpg',
        category: 'Supermarket',
        isFavorite: false,
        distance: '1.5 km',
        isOpen: true,
        deliveryFee: 0,
        minOrder: 25,
        address: '321 Fresh Avenue, Suburb',
        phone: '+1 (555) 321-9876',
        description: 'Your neighborhood supermarket for fresh groceries and daily essentials.',
        tags: ['Fresh Produce', 'Organic', 'Daily Essentials', 'Local'],
        products: [
          { id: 'g1', name: 'Fresh Apples (1kg)', price: 4.99, image: '/assets/img/product/10.jpg', rating: 4.2, category: 'Fruits' },
          { id: 'g2', name: 'Organic Bananas (1kg)', price: 3.99, image: '/assets/img/product/11.jpg', rating: 4.1, category: 'Fruits' },
          { id: 'g3', name: 'Fresh Milk (1L)', price: 2.99, image: '/assets/img/product/12.jpg', rating: 4.4, category: 'Dairy' }
        ]
      },
      {
        id: 'grocery-2',
        name: 'Green Valley',
        rating: 4.6,
        deliveryTime: '30-45 mins',
        image: '/assets/img/vendors/green-valley.jpg',
        coverImage: '/assets/img/vendors/covers/green-valley-cover.jpg',
        category: 'Organic Store',
        isFavorite: false,
        distance: '2.3 km',
        isOpen: true,
        deliveryFee: 4.99,
        minOrder: 30,
        address: '654 Green Street, Eco District',
        phone: '+1 (555) 654-3210',
        description: 'Premium organic products for a healthy lifestyle.',
        tags: ['Organic', 'Healthy', 'Premium', 'Eco-Friendly'],
        products: [
          { id: 'g4', name: 'Organic Vegetables Mix', price: 7.99, image: '/assets/img/product/13.jpg', rating: 4.5, category: 'Vegetables' },
          { id: 'g5', name: 'Brown Rice (5kg)', price: 18.99, image: '/assets/img/product/14.jpg', rating: 4.3, category: 'Grains' },
          { id: 'g6', name: 'Organic Honey', price: 12.99, image: '/assets/img/product/15.jpg', rating: 4.6, category: 'Natural' }
        ]
      }
    ],
    medicine: [
      {
        id: 'pharmacy-1',
        name: 'HealthCare Plus',
        rating: 4.8,
        deliveryTime: '15-20 mins',
        image: '/assets/img/vendors/healthcare-plus.jpg',
        coverImage: '/assets/img/vendors/covers/healthcare-plus-cover.jpg',
        category: 'Pharmacy',
        isFavorite: false,
        distance: '0.5 km',
        isOpen: true,
        deliveryFee: 0,
        minOrder: 10,
        address: '147 Health Street, Medical District',
        phone: '+1 (555) 147-2580',
        description: '24/7 pharmacy service with prescription and over-the-counter medications.',
        tags: ['24/7', 'Prescription', 'Healthcare', 'Emergency'],
        products: [
          { id: 'm1', name: 'Paracetamol 500mg', price: 5.99, image: '/assets/img/product/16.jpg', rating: 4.7, category: 'Pain Relief' },
          { id: 'm2', name: 'Vitamin C Tablets', price: 12.99, image: '/assets/img/product/17.jpg', rating: 4.5, category: 'Vitamins' },
          { id: 'm3', name: 'Hand Sanitizer', price: 3.99, image: '/assets/img/product/18.jpg', rating: 4.6, category: 'Hygiene' }
        ]
      }
    ],
    services: [
      {
        id: 'service-1',
        name: 'CleanPro Services',
        rating: 4.6,
        deliveryTime: '2-4 hours',
        image: '/assets/img/vendors/cleanpro.jpg',
        coverImage: '/assets/img/vendors/covers/cleanpro-cover.jpg',
        category: 'Cleaning',
        isFavorite: false,
        distance: '3.2 km',
        isOpen: true,
        deliveryFee: 0,
        minOrder: 50,
        address: '258 Service Lane, Business District',
        phone: '+1 (555) 258-3690',
        description: 'Professional cleaning services for homes and offices.',
        tags: ['Professional', 'Reliable', 'Insured', 'Same Day'],
        products: [
          { id: 's1', name: 'House Deep Cleaning', price: 89.99, image: '/assets/img/product/22.jpg', rating: 4.7, category: 'Cleaning' },
          { id: 's2', name: 'Kitchen Cleaning', price: 49.99, image: '/assets/img/product/23.jpg', rating: 4.5, category: 'Cleaning' },
          { id: 's3', name: 'Bathroom Cleaning', price: 39.99, image: '/assets/img/product/24.jpg', rating: 4.6, category: 'Cleaning' }
        ]
      }
    ],
    shop: [
      {
        id: 'shop-1',
        name: 'Fashion Hub',
        rating: 4.4,
        deliveryTime: '1-2 days',
        image: '/assets/img/vendors/fashion-hub.jpg',
        coverImage: '/assets/img/vendors/covers/fashion-hub-cover.jpg',
        category: 'Clothing',
        isFavorite: false,
        distance: '5.2 km',
        isOpen: true,
        deliveryFee: 5.99,
        minOrder: 40,
        address: '369 Fashion Street, Shopping District',
        phone: '+1 (555) 369-1470',
        description: 'Trendy fashion and accessories for all ages.',
        tags: ['Fashion', 'Trendy', 'Affordable', 'All Ages'],
        products: [
          { id: 'sh1', name: 'Cotton T-Shirt', price: 19.99, image: '/assets/img/product/28.jpg', rating: 4.3, category: 'Clothing' },
          { id: 'sh2', name: 'Denim Jeans', price: 49.99, image: '/assets/img/product/29.jpg', rating: 4.5, category: 'Clothing' },
          { id: 'sh3', name: 'Summer Dress', price: 39.99, image: '/assets/img/product/30.jpg', rating: 4.2, category: 'Clothing' }
        ]
      }
    ]
  };

  // Simulate API call
  useEffect(() => {
    const fetchVendors = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In real app, this would be: const response = await fetch('/api/vendors');
        // For now, use mock data
        const allVendors = Object.values(mockVendorsData).flat();
        setVendors(allVendors);
        setFilteredVendors(allVendors);
      } catch (error) {
        console.error('Error fetching vendors:', error);
        // Fallback to mock data
        const allVendors = Object.values(mockVendorsData).flat();
        setVendors(allVendors);
        setFilteredVendors(allVendors);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  // Filter and sort vendors
  useEffect(() => {
    let filtered = [...vendors];

    // Category filter
    if (selectedCategory !== 'all') {
      const categoryVendors = mockVendorsData[selectedCategory] || [];
      filtered = categoryVendors;
    }

    // Open now filter
    if (filters.isOpen) {
      filtered = filtered.filter(vendor => vendor.isOpen);
    }

    // Rating filter
    if (filters.rating > 0) {
      filtered = filtered.filter(vendor => vendor.rating >= filters.rating);
    }

    // Delivery time filter
    if (filters.deliveryTime !== 'all') {
      const maxTime = parseInt(filters.deliveryTime);
      filtered = filtered.filter(vendor => {
        const vendorTime = parseInt(vendor.deliveryTime.split('-')[1]);
        return vendorTime <= maxTime;
      });
    }

    // Delivery fee filter
    if (filters.deliveryFee !== 'all') {
      const maxFee = parseFloat(filters.deliveryFee);
      filtered = filtered.filter(vendor => vendor.deliveryFee <= maxFee);
    }

    // Sort vendors
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'deliveryTime':
          return parseInt(a.deliveryTime.split('-')[0]) - parseInt(b.deliveryTime.split('-')[0]);
        case 'distance':
          return parseFloat(a.distance) - parseFloat(b.distance);
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredVendors(filtered);
  }, [vendors, selectedCategory, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      isOpen: false,
      rating: 0,
      deliveryTime: 'all',
      deliveryFee: 'all',
      sortBy: 'rating'
    });
  };

  const toggleFavorite = (vendorId) => {
    setFilteredVendors(prev => 
      prev.map(vendor => 
        vendor.id === vendorId 
          ? { ...vendor, isFavorite: !vendor.isFavorite }
          : vendor
      )
    );
  };

  const getCategoryTitle = (cat) => {
    const titles = {
      food: 'Food & Restaurants',
      groceries: 'Groceries & Supermarkets',
      medicine: 'Pharmacy & Healthcare',
      services: 'Home Services',
      shop: 'Local Shops & Stores',
      all: 'All Vendors'
    };
    return titles[cat] || cat;
  };

  const nearbyVendors = filteredVendors.filter(vendor => parseFloat(vendor.distance) <= 2);
  const favoriteVendors = filteredVendors.filter(vendor => vendor.isFavorite);
  const otherVendors = filteredVendors.filter(vendor => 
    parseFloat(vendor.distance) > 2 && !vendor.isFavorite
  );

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{getCategoryTitle(selectedCategory)} - Vendors | Mantu</title>
        <meta name="description" content={`Find the best ${getCategoryTitle(selectedCategory).toLowerCase()} vendors near you`} />
      </Head>

      <Header />
      
      <main className="wrapper sb-default">
        {/* Breadcrumb */}
        <div className="mn-breadcrumb m-b-30">
          <div className="row">
            <div className="col-12">
              <div className="row gi_breadcrumb_inner">
                <div className="col-md-6 col-sm-12">
                  <h2 className="mn-breadcrumb-title">{getCategoryTitle(selectedCategory)}</h2>
                </div>
                <div className="col-md-6 col-sm-12">
                  <ul className="mn-breadcrumb-list">
                    <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="mn-breadcrumb-item active">{getCategoryTitle(selectedCategory)}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Stats */}
        <div className="vendor-header-stats m-b-30">
          <div className="row">
            <div className="col-md-8">
              <h1 className="h3 mb-2">{getCategoryTitle(selectedCategory)}</h1>
              <p className="text-muted mb-0">{filteredVendors.length} vendors available</p>
            </div>
            <div className="col-md-4 text-md-end">
              <button 
                className="btn btn-outline-primary d-md-none"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <i className="ri-filter-line me-2"></i>
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Sidebar */}
          <div className={`col-lg-3 ${sidebarOpen ? 'd-block' : 'd-none d-lg-block'}`}>
            <div className="vendor-sidebar">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-bottom">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">
                      <i className="ri-filter-line me-2"></i>
                      Filters
                    </h5>
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={clearFilters}
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                <div className="card-body">
                  {/* Category Filter */}
                  <div className="filter-section mb-4">
                    <h6 className="fw-bold mb-3">
                      <i className="ri-list-check text-primary me-2"></i>
                      Category
                    </h6>
                    <select 
                      className="form-select"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="all">All Categories</option>
                      <option value="food">Food & Restaurants</option>
                      <option value="groceries">Groceries</option>
                      <option value="medicine">Medicine</option>
                      <option value="services">Services</option>
                      <option value="shop">Shopping</option>
                    </select>
                  </div>

                  {/* Open Now Filter */}
                  <div className="filter-section mb-4">
                    <div className="form-check form-switch">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="openNow"
                        checked={filters.isOpen}
                        onChange={(e) => handleFilterChange('isOpen', e.target.checked)}
                      />
                      <label className="form-check-label fw-bold" htmlFor="openNow">
                        <i className="ri-time-line text-success me-2"></i>
                        Open Now
                      </label>
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div className="filter-section mb-4">
                    <h6 className="fw-bold mb-3">
                      <i className="ri-star-line text-warning me-2"></i>
                      Minimum Rating
                    </h6>
                    <div className="rating-filters">
                      {[4.5, 4.0, 3.5, 3.0].map(rating => (
                        <div key={rating} className="form-check">
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name="rating"
                            id={`rating-${rating}`}
                            checked={filters.rating === rating}
                            onChange={() => handleFilterChange('rating', rating)}
                          />
                          <label className="form-check-label" htmlFor={`rating-${rating}`}>
                            <div className="d-flex align-items-center">
                              {[...Array(5)].map((_, i) => (
                                <i 
                                  key={i}
                                  className={`ri-star-${i < rating ? 'fill' : 'line'} text-warning me-1`}
                                  style={{ fontSize: '14px' }}
                                ></i>
                              ))}
                              <span className="ms-1">& up</span>
                            </div>
                          </label>
                        </div>
                      ))}
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="rating"
                          id="rating-all"
                          checked={filters.rating === 0}
                          onChange={() => handleFilterChange('rating', 0)}
                        />
                        <label className="form-check-label" htmlFor="rating-all">
                          All Ratings
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Time Filter */}
                  <div className="filter-section mb-4">
                    <h6 className="fw-bold mb-3">
                      <i className="ri-time-line text-primary me-2"></i>
                      Delivery Time
                    </h6>
                    <select 
                      className="form-select"
                      value={filters.deliveryTime}
                      onChange={(e) => handleFilterChange('deliveryTime', e.target.value)}
                    >
                      <option value="all">Any Time</option>
                      <option value="30">Under 30 min</option>
                      <option value="45">Under 45 min</option>
                      <option value="60">Under 1 hour</option>
                      <option value="180">Under 3 hours</option>
                    </select>
                  </div>

                  {/* Delivery Fee Filter */}
                  <div className="filter-section mb-4">
                    <h6 className="fw-bold mb-3">
                      <i className="ri-truck-line text-info me-2"></i>
                      Delivery Fee
                    </h6>
                    <select 
                      className="form-select"
                      value={filters.deliveryFee}
                      onChange={(e) => handleFilterChange('deliveryFee', e.target.value)}
                    >
                      <option value="all">Any Fee</option>
                      <option value="0">Free Delivery</option>
                      <option value="2.99">Under $3</option>
                      <option value="4.99">Under $5</option>
                      <option value="9.99">Under $10</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div className="filter-section mb-4">
                    <h6 className="fw-bold mb-3">
                      <i className="ri-sort-desc text-secondary me-2"></i>
                      Sort By
                    </h6>
                    <select 
                      className="form-select"
                      value={filters.sortBy}
                      onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    >
                      <option value="rating">Highest Rated</option>
                      <option value="deliveryTime">Fastest Delivery</option>
                      <option value="distance">Nearest First</option>
                      <option value="name">Name A-Z</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading vendors...</p>
              </div>
            ) : (
              <>
                {/* Quick Stats */}
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="card border-0 bg-primary text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">{nearbyVendors.length}</h5>
                        <p className="card-text small mb-0">Nearby Vendors</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border-0 bg-success text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">{favoriteVendors.length}</h5>
                        <p className="card-text small mb-0">Favorite Vendors</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border-0 bg-info text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">{filteredVendors.filter(v => v.isOpen).length}</h5>
                        <p className="card-text small mb-0">Open Now</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nearby Vendors */}
                {nearbyVendors.length > 0 && (
                  <div className="vendor-section mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="mb-0">
                        <i className="ri-map-pin-line text-primary me-2"></i>
                        Nearby Vendors
                      </h4>
                      <span className="badge bg-primary ms-2">{nearbyVendors.length}</span>
                    </div>
                    <div className="row">
                      {nearbyVendors.map(vendor => (
                        <div key={vendor.id} className="col-md-6 col-lg-4 mb-4">
                          <VendorCard 
                            vendor={vendor}
                            onToggleFavorite={toggleFavorite}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Favorite Vendors */}
                {favoriteVendors.length > 0 && (
                  <div className="vendor-section mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="mb-0">
                        <i className="ri-heart-fill text-danger me-2"></i>
                        Your Favorites
                      </h4>
                      <span className="badge bg-danger ms-2">{favoriteVendors.length}</span>
                    </div>
                    <div className="row">
                      {favoriteVendors.map(vendor => (
                        <div key={vendor.id} className="col-md-6 col-lg-4 mb-4">
                          <VendorCard 
                            vendor={vendor}
                            onToggleFavorite={toggleFavorite}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Vendors */}
                {otherVendors.length > 0 && (
                  <div className="vendor-section mb-5">
                    <div className="d-flex align-items-center mb-3">
                      <h4 className="mb-0">
                        <i className="ri-store-line text-secondary me-2"></i>
                        All Vendors
                      </h4>
                      <span className="badge bg-secondary ms-2">{otherVendors.length}</span>
                    </div>
                    <div className="row">
                      {otherVendors.map(vendor => (
                        <div key={vendor.id} className="col-md-6 col-lg-4 mb-4">
                          <VendorCard 
                            vendor={vendor}
                            onToggleFavorite={toggleFavorite}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Vendors Found */}
                {filteredVendors.length === 0 && !loading && (
                  <div className="text-center py-5">
                    <i className="ri-store-line display-1 text-muted"></i>
                    <h4 className="mt-3">No vendors found</h4>
                    <p className="text-muted">Try adjusting your filters or check back later.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

// Vendor Card Component
const VendorCard = ({ vendor, onToggleFavorite }) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(vendor.id);
  };

  return (
    <div className="vendor-card">
      <div className="card h-100 shadow-sm border-0 position-relative">
        {/* Favorite Button */}
        <button 
          className={`btn btn-sm position-absolute top-0 end-0 m-2 z-index-1 ${
            vendor.isFavorite ? 'btn-danger' : 'btn-outline-light'
          }`}
          onClick={handleFavoriteClick}
          style={{ zIndex: 10 }}
        >
          <i className={`ri-heart-${vendor.isFavorite ? 'fill' : 'line'}`}></i>
        </button>

        {/* Vendor Image */}
        <div className="position-relative">
          <img 
            src={vendor.image} 
            alt={vendor.name}
            className="card-img-top"
            style={{ height: '200px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = '/assets/img/product/13.jpg'
            }}
          />
          
          {/* Status Badge */}
          <div className="position-absolute top-0 start-0 m-2">
            <span className={`badge ${vendor.isOpen ? 'bg-success' : 'bg-danger'}`}>
              {vendor.isOpen ? 'Open' : 'Closed'}
            </span>
          </div>

          {/* Delivery Time Badge */}
          <div className="position-absolute bottom-0 end-0 m-2">
            <span className="badge bg-dark bg-opacity-75">
              <i className="ri-time-line me-1"></i>
              {vendor.deliveryTime}
            </span>
          </div>
        </div>

        <div className="card-body">
          {/* Vendor Name & Rating */}
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0 text-truncate" style={{ maxWidth: '70%' }}>
              {vendor.name}
            </h5>
            <div className="d-flex align-items-center">
              <i className="ri-star-fill text-warning me-1"></i>
              <span className="fw-bold">{vendor.rating}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-2">
            {vendor.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="badge bg-light text-dark me-1 small">
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="card-text text-muted small mb-3" style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {vendor.description}
          </p>

          {/* Delivery Info */}
          <div className="row text-center mb-3">
            <div className="col-4">
              <div className="small text-muted">Distance</div>
              <div className="fw-bold small">{vendor.distance}</div>
            </div>
            <div className="col-4">
              <div className="small text-muted">Delivery</div>
              <div className="fw-bold small">
                {vendor.deliveryFee === 0 ? 'Free' : `$${vendor.deliveryFee}`}
              </div>
            </div>
            <div className="col-4">
              <div className="small text-muted">Min Order</div>
              <div className="fw-bold small">${vendor.minOrder}</div>
            </div>
          </div>

          {/* Action Button */}
          <Link 
            href={`/vendor/${vendor.id}`}
            className={`btn w-100 ${vendor.isOpen ? 'btn-primary' : 'btn-outline-secondary'}`}
          >
            {vendor.isOpen ? 'View Store' : 'Currently Closed'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;