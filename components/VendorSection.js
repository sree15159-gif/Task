import { useState, useEffect } from 'react';
import Link from 'next/link';

const VendorSection = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Featured vendors data
  const featuredVendors = [
    {
      id: 'restaurant-1',
      name: 'Pizza Palace',
      rating: 4.5,
      deliveryTime: '25-30 mins',
      image: '/assets/img/vendors/pizza-palace.jpg',
      category: 'Restaurant',
      distance: '1.2 km',
      isOpen: true,
      deliveryFee: 2.99,
      tags: ['Italian', 'Pizza', 'Fast Food'],
      description: 'Authentic Italian pizzas made with fresh ingredients'
    },
    {
      id: 'grocery-1',
      name: 'Fresh Mart',
      rating: 4.3,
      deliveryTime: '45-60 mins',
      image: '/assets/img/vendors/fresh-mart.jpg',
      category: 'Supermarket',
      distance: '1.5 km',
      isOpen: true,
      deliveryFee: 0,
      tags: ['Fresh Produce', 'Organic', 'Daily Essentials'],
      description: 'Your neighborhood supermarket for fresh groceries'
    },
    {
      id: 'pharmacy-1',
      name: 'HealthCare Plus',
      rating: 4.8,
      deliveryTime: '15-20 mins',
      image: '/assets/img/vendors/healthcare-plus.jpg',
      category: 'Pharmacy',
      distance: '0.5 km',
      isOpen: true,
      deliveryFee: 0,
      tags: ['24/7', 'Prescription', 'Healthcare'],
      description: '24/7 pharmacy service with prescription medications'
    },
    {
      id: 'restaurant-2',
      name: 'Burger Hub',
      rating: 4.2,
      deliveryTime: '20-25 mins',
      image: '/assets/img/vendors/burger-hub.jpg',
      category: 'Fast Food',
      distance: '0.8 km',
      isOpen: true,
      deliveryFee: 1.99,
      tags: ['American', 'Burgers', 'Fast Food'],
      description: 'Juicy burgers and crispy fries made fresh to order'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchVendors = async () => {
      setLoading(true);
      try {
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setVendors(featuredVendors);
      } catch (error) {
        console.error('Error fetching vendors:', error);
        setVendors(featuredVendors); // Fallback to static data
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  if (loading) {
    return (
      <section className="mn-vendor-section p-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mn-title text-center">
                <h2>Featured <span>Vendors</span></h2>
                <p>Discover amazing local businesses and services near you</p>
              </div>
            </div>
          </div>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading featured vendors...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mn-vendor-section p-tb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="mn-title text-center">
              <h2>Featured <span>Vendors</span></h2>
              <p>Discover amazing local businesses and services near you</p>
            </div>
          </div>
        </div>

        {/* Vendor Categories Quick Access */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="vendor-categories-nav text-center">
              <Link href="/vendors?category=food" className="category-link">
                <div className="category-icon">
                  <i className="ri-restaurant-line"></i>
                </div>
                <span>Restaurants</span>
              </Link>
              <Link href="/vendors?category=groceries" className="category-link">
                <div className="category-icon">
                  <i className="ri-shopping-cart-line"></i>
                </div>
                <span>Groceries</span>
              </Link>
              <Link href="/vendors?category=medicine" className="category-link">
                <div className="category-icon">
                  <i className="ri-heart-pulse-line"></i>
                </div>
                <span>Pharmacy</span>
              </Link>
              <Link href="/vendors?category=services" className="category-link">
                <div className="category-icon">
                  <i className="ri-tools-line"></i>
                </div>
                <span>Services</span>
              </Link>
              <Link href="/vendors?category=shop" className="category-link">
                <div className="category-icon">
                  <i className="ri-store-line"></i>
                </div>
                <span>Shopping</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Vendors Grid */}
        <div className="row">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4">
              <div className="mn-vendor-card">
                <div className="vendor-card-inner">
                  {/* Vendor Image */}
                  <div className="vendor-image position-relative">
                    <Link href={`/vendor/${vendor.id}`}>
                      <img 
                        src={vendor.image} 
                        alt={vendor.name}
                        className="w-100"
                        style={{ height: '200px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.src = '/assets/img/product/13.jpg'
                        }}
                      />
                    </Link>
                    
                    {/* Status Badge */}
                    <div className="vendor-status">
                      <span className={`badge ${vendor.isOpen ? 'bg-success' : 'bg-danger'}`}>
                        {vendor.isOpen ? 'Open' : 'Closed'}
                      </span>
                    </div>

                    {/* Delivery Time */}
                    <div className="delivery-time">
                      <span className="badge bg-dark bg-opacity-75">
                        <i className="ri-time-line me-1"></i>
                        {vendor.deliveryTime}
                      </span>
                    </div>
                  </div>

                  {/* Vendor Info */}
                  <div className="vendor-info">
                    <div className="vendor-header">
                      <h5 className="vendor-name">
                        <Link href={`/vendor/${vendor.id}`}>{vendor.name}</Link>
                      </h5>
                      <div className="vendor-rating">
                        <i className="ri-star-fill text-warning"></i>
                        <span>{vendor.rating}</span>
                      </div>
                    </div>

                    <p className="vendor-description">{vendor.description}</p>

                    {/* Tags */}
                    <div className="vendor-tags mb-3">
                      {vendor.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="tag-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Vendor Meta */}
                    <div className="vendor-meta">
                      <div className="meta-item">
                        <i className="ri-map-pin-line"></i>
                        <span>{vendor.distance}</span>
                      </div>
                      <div className="meta-item">
                        <i className="ri-truck-line"></i>
                        <span>{vendor.deliveryFee === 0 ? 'Free' : `$${vendor.deliveryFee}`}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="vendor-action">
                      <Link 
                        href={`/vendor/${vendor.id}`}
                        className={`btn w-100 ${vendor.isOpen ? 'btn-primary' : 'btn-outline-secondary'}`}
                      >
                        {vendor.isOpen ? 'Order Now' : 'View Store'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="row">
          <div className="col-12 text-center mt-4">
            <Link href="/vendors" className="btn btn-outline-primary btn-lg">
              <i className="ri-store-line me-2"></i>
              View All Vendors
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mn-vendor-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .vendor-categories-nav {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .category-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: #6c757d;
          transition: all 0.3s ease;
          padding: 1rem;
          border-radius: 15px;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          min-width: 100px;
        }

        .category-link:hover {
          color: #0d6efd;
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .category-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .category-icon i {
          font-size: 1.5rem;
          color: white;
        }

        .category-link:hover .category-icon {
          transform: scale(1.1);
        }

        .mn-vendor-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          height: 100%;
        }

        .mn-vendor-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .vendor-image {
          position: relative;
          overflow: hidden;
        }

        .vendor-image img {
          transition: transform 0.3s ease;
        }

        .mn-vendor-card:hover .vendor-image img {
          transform: scale(1.05);
        }

        .vendor-status {
          position: absolute;
          top: 15px;
          left: 15px;
        }

        .delivery-time {
          position: absolute;
          bottom: 15px;
          right: 15px;
        }

        .vendor-info {
          padding: 1.5rem;
        }

        .vendor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .vendor-name a {
          color: #2d3748;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .vendor-name a:hover {
          color: #0d6efd;
        }

        .vendor-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 600;
          color: #2d3748;
        }

        .vendor-description {
          color: #6c757d;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .vendor-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .vendor-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e9ecef;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6c757d;
          font-size: 0.9rem;
        }

        .meta-item i {
          color: #0d6efd;
        }

        .vendor-action .btn {
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .vendor-action .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
        }

        .vendor-action .btn:hover {
          transform: translateY(-2px);
        }

        .badge {
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
        }

        @media (max-width: 768px) {
          .vendor-categories-nav {
            gap: 1rem;
          }
          
          .category-link {
            min-width: 80px;
            padding: 0.75rem;
          }
          
          .category-icon {
            width: 40px;
            height: 40px;
          }
          
          .category-icon i {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 576px) {
          .vendor-categories-nav {
            justify-content: space-around;
          }
          
          .vendor-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .vendor-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VendorSection;