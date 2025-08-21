import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Head from 'next/head';

const VendorPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useApp();
  
  const [vendor, setVendor] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Enhanced mock data with more comprehensive vendor information
  const mockVendorsData = {
    'restaurant-1': {
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
      email: 'contact@pizzapalace.com',
      description: 'Authentic Italian pizzas made with fresh ingredients and traditional recipes. Family-owned restaurant serving the community for over 20 years.',
      tags: ['Italian', 'Pizza', 'Fast Food', 'Family Friendly'],
      products: [
        { id: 'p1', name: 'Margherita Pizza', price: 12.99, originalPrice: 15.99, image: '/assets/img/product/1.jpg', rating: 4.3, category: 'Pizza', inStock: true, description: 'Classic pizza with fresh mozzarella, tomatoes, and basil' },
        { id: 'p2', name: 'Pepperoni Pizza', price: 15.99, originalPrice: 18.99, image: '/assets/img/product/2.jpg', rating: 4.5, category: 'Pizza', inStock: true, description: 'Traditional pepperoni pizza with extra cheese' },
        { id: 'p3', name: 'Veggie Supreme', price: 14.99, originalPrice: 17.99, image: '/assets/img/product/3.jpg', rating: 4.2, category: 'Pizza', inStock: true, description: 'Loaded with fresh vegetables and herbs' },
        { id: 'p4', name: 'Caesar Salad', price: 8.99, originalPrice: 10.99, image: '/assets/img/product/4.jpg', rating: 4.1, category: 'Salads', inStock: true, description: 'Fresh romaine lettuce with caesar dressing' },
        { id: 'p5', name: 'Garlic Bread', price: 5.99, originalPrice: 7.99, image: '/assets/img/product/5.jpg', rating: 4.4, category: 'Sides', inStock: true, description: 'Homemade garlic bread with herbs' }
      ]
    },
    'restaurant-2': {
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
      email: 'info@burgerhub.com',
      description: 'Juicy burgers and crispy fries made fresh to order. Using only premium beef and fresh ingredients.',
      tags: ['American', 'Burgers', 'Fast Food', 'Casual Dining'],
      products: [
        { id: 'p6', name: 'Classic Burger', price: 8.99, originalPrice: 10.99, image: '/assets/img/product/6.jpg', rating: 4.1, category: 'Burgers', inStock: true, description: 'Beef patty with lettuce, tomato, and special sauce' },
        { id: 'p7', name: 'Cheese Burger', price: 9.99, originalPrice: 11.99, image: '/assets/img/product/7.jpg', rating: 4.4, category: 'Burgers', inStock: true, description: 'Classic burger with melted cheese' },
        { id: 'p8', name: 'Chicken Burger', price: 10.99, originalPrice: 12.99, image: '/assets/img/product/8.jpg', rating: 4.3, category: 'Burgers', inStock: true, description: 'Grilled chicken breast with fresh toppings' },
        { id: 'p9', name: 'French Fries', price: 4.99, originalPrice: 6.99, image: '/assets/img/product/9.jpg', rating: 4.2, category: 'Sides', inStock: true, description: 'Crispy golden fries with sea salt' },
        { id: 'p10', name: 'Milkshake', price: 5.99, originalPrice: 7.99, image: '/assets/img/product/10.jpg', rating: 4.5, category: 'Beverages', inStock: true, description: 'Creamy vanilla milkshake' }
      ]
    },
    'grocery-1': {
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
      email: 'contact@freshmart.com',
      description: 'Your neighborhood supermarket for fresh groceries and daily essentials. Committed to providing quality products at affordable prices.',
      tags: ['Fresh Produce', 'Organic', 'Daily Essentials', 'Local'],
      products: [
        { id: 'g1', name: 'Fresh Apples (1kg)', price: 4.99, originalPrice: 5.99, image: '/assets/img/product/11.jpg', rating: 4.2, category: 'Fruits', inStock: true, description: 'Crisp and sweet red apples' },
        { id: 'g2', name: 'Organic Bananas (1kg)', price: 3.99, originalPrice: 4.99, image: '/assets/img/product/12.jpg', rating: 4.1, category: 'Fruits', inStock: true, description: 'Organic bananas rich in potassium' },
        { id: 'g3', name: 'Fresh Milk (1L)', price: 2.99, originalPrice: 3.99, image: '/assets/img/product/13.jpg', rating: 4.4, category: 'Dairy', inStock: true, description: 'Fresh whole milk from local farms' },
        { id: 'g4', name: 'Whole Wheat Bread', price: 3.49, originalPrice: 4.49, image: '/assets/img/product/14.jpg', rating: 4.3, category: 'Bakery', inStock: true, description: 'Freshly baked whole wheat bread' },
        { id: 'g5', name: 'Free Range Eggs (12)', price: 5.99, originalPrice: 6.99, image: '/assets/img/product/15.jpg', rating: 4.5, category: 'Dairy', inStock: true, description: 'Farm fresh free-range eggs' }
      ]
    },
    'pharmacy-1': {
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
      email: 'info@healthcareplus.com',
      description: '24/7 pharmacy service with prescription and over-the-counter medications. Licensed pharmacists available for consultation.',
      tags: ['24/7', 'Prescription', 'Healthcare', 'Emergency'],
      products: [
        { id: 'm1', name: 'Paracetamol 500mg', price: 5.99, originalPrice: 7.99, image: '/assets/img/product/16.jpg', rating: 4.7, category: 'Pain Relief', inStock: true, description: 'Effective pain relief tablets' },
        { id: 'm2', name: 'Vitamin C Tablets', price: 12.99, originalPrice: 15.99, image: '/assets/img/product/17.jpg', rating: 4.5, category: 'Vitamins', inStock: true, description: 'Immune system support vitamins' },
        { id: 'm3', name: 'Hand Sanitizer', price: 3.99, originalPrice: 5.99, image: '/assets/img/product/18.jpg', rating: 4.6, category: 'Hygiene', inStock: true, description: '70% alcohol hand sanitizer' },
        { id: 'm4', name: 'Digital Thermometer', price: 19.99, originalPrice: 24.99, image: '/assets/img/product/19.jpg', rating: 4.4, category: 'Medical Devices', inStock: true, description: 'Fast and accurate digital thermometer' },
        { id: 'm5', name: 'First Aid Kit', price: 29.99, originalPrice: 34.99, image: '/assets/img/product/20.jpg', rating: 4.8, category: 'Medical Supplies', inStock: true, description: 'Complete first aid kit for emergencies' }
      ]
    }
  };

  useEffect(() => {
    const fetchVendorData = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In real app: const response = await fetch(`/api/vendors/${id}`);
        const vendorData = mockVendorsData[id];
        
        if (vendorData) {
          setVendor(vendorData);
          setProducts(vendorData.products || []);
          setFilteredProducts(vendorData.products || []);
        } else {
          // Fallback for numeric IDs (backward compatibility)
          const numericVendorData = {
            1: mockVendorsData['restaurant-1'],
            2: mockVendorsData['restaurant-2'],
            3: mockVendorsData['grocery-1']
          };
          const fallbackVendor = numericVendorData[id];
          if (fallbackVendor) {
            setVendor(fallbackVendor);
            setProducts(fallbackVendor.products || []);
            setFilteredProducts(fallbackVendor.products || []);
          }
        }
      } catch (error) {
        console.error('Error fetching vendor data:', error);
        // Use fallback data
        const vendorData = mockVendorsData[id];
        if (vendorData) {
          setVendor(vendorData);
          setProducts(vendorData.products || []);
          setFilteredProducts(vendorData.products || []);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVendorData();
  }, [id]);

  // Filter products based on category and search
  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);

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

  const toggleFavorite = () => {
    setVendor(prev => ({
      ...prev,
      isFavorite: !prev.isFavorite
    }));
  };

  // Get unique product categories
  const productCategories = ['all', ...new Set(products.map(p => p.category))];

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="wrapper sb-default">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading vendor details...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!vendor) {
    return (
      <>
        <Header />
        <main className="wrapper sb-default">
          <div className="text-center py-5">
            <i className="ri-store-line display-1 text-muted"></i>
            <h4 className="mt-3">Vendor not found</h4>
            <p className="text-muted">The vendor you're looking for doesn't exist.</p>
            <Link href="/vendors" className="btn btn-primary">
              Browse All Vendors
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{vendor.name} - Vendor | Mantu</title>
        <meta name="description" content={vendor.description} />
      </Head>

      <Header />
      <main className="wrapper sb-default">
        {/* Vendor Header with Cover Image */}
        <div className="vendor-header position-relative">
          <div 
            className="vendor-cover"
            style={{
              backgroundImage: `url(${vendor.coverImage || vendor.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              position: 'relative'
            }}
          >
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>
            
            <div className="container position-relative h-100 d-flex align-items-end">
              <div className="row w-100 pb-4">
                <div className="col-12">
                  {/* Breadcrumb */}
                  <nav aria-label="breadcrumb" className="mb-3">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/" className="text-white text-decoration-none">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link 
                          href="/vendors" 
                          className="text-white text-decoration-none"
                        >
                          Vendors
                        </Link>
                      </li>
                      <li className="breadcrumb-item active text-white" aria-current="page">
                        {vendor.name}
                      </li>
                    </ol>
                  </nav>

                  <div className="d-flex align-items-center">
                    <img 
                      src={vendor.image}
                      alt={vendor.name}
                      className="rounded-circle me-4"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = '/assets/img/product/13.jpg'
                      }}
                    />
                    <div className="text-white">
                      <div className="d-flex align-items-center mb-2">
                        <h1 className="h2 mb-0 me-3">{vendor.name}</h1>
                        <button 
                          className={`btn btn-sm ${vendor.isFavorite ? 'btn-danger' : 'btn-outline-light'}`}
                          onClick={toggleFavorite}
                        >
                          <i className={`ri-heart-${vendor.isFavorite ? 'fill' : 'line'}`}></i>
                        </button>
                      </div>
                      <p className="mb-2">{vendor.description}</p>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className={`badge me-2 ${vendor.isOpen ? 'bg-success' : 'bg-danger'}`}>
                          {vendor.isOpen ? 'Open' : 'Closed'}
                        </span>
                        <span className="me-3">
                          <i className="ri-star-fill text-warning me-1"></i>
                          {vendor.rating}
                        </span>
                        <span className="me-3">
                          <i className="ri-time-line me-1"></i>
                          {vendor.deliveryTime}
                        </span>
                        <span className="me-3">
                          <i className="ri-map-pin-line me-1"></i>
                          {vendor.distance}
                        </span>
                        <span>
                          <i className="ri-truck-line me-1"></i>
                          {vendor.deliveryFee === 0 ? 'Free delivery' : `$${vendor.deliveryFee} delivery`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Info Bar */}
        <div className="bg-light border-bottom">
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <i className="ri-map-pin-line text-muted me-2"></i>
                  <span className="me-4">{vendor.address}</span>
                  <i className="ri-phone-line text-muted me-2"></i>
                  <span>{vendor.phone}</span>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <span className="text-muted">
                  Minimum order: <strong>${vendor.minOrder}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="container py-4">
          <div className="row">
            <div className="col-12">
              {/* Search and Filter Bar */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Menu ({filteredProducts.length} items)</h3>
                <div className="d-flex align-items-center">
                  <input 
                    type="text"
                    className="form-control me-3"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '250px' }}
                  />
                  <select 
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ width: '150px' }}
                  >
                    {productCategories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category Tags */}
              <div className="mb-4">
                {vendor.tags.map((tag, index) => (
                  <span key={index} className="badge bg-primary me-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="row">
                  {filteredProducts.map(product => {
                    const isInWishlistProduct = isInWishlist(product.id);
                    
                    return (
                      <div key={product.id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100 shadow-sm border-0">
                          <div className="position-relative">
                            <img 
                              src={product.image}
                              alt={product.name}
                              className="card-img-top"
                              style={{ height: '200px', objectFit: 'cover' }}
                              onError={(e) => {
                                e.target.src = '/assets/img/product/13.jpg'
                              }}
                            />
                            <button 
                              className={`btn btn-sm position-absolute top-0 end-0 m-2 ${
                                isInWishlistProduct ? 'btn-danger' : 'btn-outline-light'
                              }`}
                              onClick={() => handleWishlistToggle(product)}
                            >
                              <i className={`ri-heart-${isInWishlistProduct ? 'fill' : 'line'}`}></i>
                            </button>
                            
                            {/* Discount Badge */}
                            {product.originalPrice > product.price && (
                              <div className="position-absolute top-0 start-0 m-2">
                                <span className="badge bg-danger">
                                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h5 className="card-title mb-0">{product.name}</h5>
                              <span className="badge bg-light text-dark">{product.category}</span>
                            </div>
                            
                            <p className="card-text text-muted small mb-2">{product.description}</p>
                            
                            <div className="d-flex align-items-center mb-2">
                              <div className="me-2">
                                {[...Array(5)].map((_, i) => (
                                  <i 
                                    key={i} 
                                    className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-warning`}
                                    style={{ fontSize: '14px' }}
                                  ></i>
                                ))}
                              </div>
                              <span className="small text-muted">({product.rating})</span>
                            </div>
                            
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <span className="h5 text-primary mb-0">${product.price}</span>
                                {product.originalPrice > product.price && (
                                  <span className="text-muted text-decoration-line-through ms-2 small">
                                    ${product.originalPrice}
                                  </span>
                                )}
                              </div>
                              <button 
                                className="btn btn-primary btn-sm"
                                onClick={() => handleAddToCart(product)}
                                disabled={!vendor.isOpen || !product.inStock}
                              >
                                <i className="ri-shopping-cart-line me-1"></i>
                                {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-5">
                  <i className="ri-search-line display-1 text-muted"></i>
                  <h4 className="mt-3">No products found</h4>
                  <p className="text-muted">Try adjusting your search or category filter.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VendorPage;