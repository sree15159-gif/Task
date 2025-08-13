import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const TrackOrder = () => {
  const router = useRouter();
  const [orderData, setOrderData] = useState(null);
  const [trackingSteps, setTrackingSteps] = useState([]);

  useEffect(() => {
    // Simulate fetching order data based on ID from query params
    const orderId = router.query.id;
    if (orderId) {
      // Mock order data - in real app, fetch from API
      const mockOrderData = {
        id: orderId,
        date: '2024-01-20',
        status: 'In Transit',
        total: 78.50,
        trackingNumber: 'TRK987654321',
        estimatedDelivery: '2024-01-25',
        shippingAddress: {
          name: 'John Doe',
          address: '123 Main Street',
          city: 'New York',
          state: 'NY',
          zip: '10001'
        }
      };

      const mockTrackingSteps = [
        {
          status: 'Order Placed',
          date: '2024-01-20 10:30 AM',
          description: 'Your order has been placed successfully',
          completed: true,
          icon: 'ri-shopping-cart-line'
        },
        {
          status: 'Order Confirmed',
          date: '2024-01-20 11:15 AM',
          description: 'Order confirmed and being prepared',
          completed: true,
          icon: 'ri-check-line'
        },
        {
          status: 'Shipped',
          date: '2024-01-21 02:45 PM',
          description: 'Package shipped from warehouse',
          completed: true,
          icon: 'ri-truck-line'
        },
        {
          status: 'In Transit',
          date: '2024-01-22 09:20 AM',
          description: 'Package is on the way to your location',
          completed: true,
          current: true,
          icon: 'ri-map-pin-line'
        },
        {
          status: 'Out for Delivery',
          date: 'Expected: 2024-01-25 10:00 AM',
          description: 'Package will be delivered today',
          completed: false,
          icon: 'ri-car-line'
        },
        {
          status: 'Delivered',
          date: 'Expected: 2024-01-25 06:00 PM',
          description: 'Package delivered successfully',
          completed: false,
          icon: 'ri-check-double-line'
        }
      ];

      setOrderData(mockOrderData);
      setTrackingSteps(mockTrackingSteps);
    }
  }, [router.query.id]);

  if (!orderData) {
    return (
      <>
        <Header />
        <main className="wrapper sb-default">
          <div className="mn-main-content">
            <div className="container">
              <div className="loading-container">
                <p>Loading order details...</p>
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
                        <h2 className="mn-breadcrumb-title">Track Order</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item"><Link href="/orders">Orders</Link></li>
                          <li className="mn-breadcrumb-item active">Track Order</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-track-order p-b-15">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Order Summary */}
                      <div className="track-order-header">
                        <div className="row">
                          <div className="col-md-8">
                            <h3>Order #{orderData.id}</h3>
                            <p>Placed on {new Date(orderData.date).toLocaleDateString()}</p>
                            <p><strong>Tracking Number:</strong> {orderData.trackingNumber}</p>
                          </div>
                          <div className="col-md-4 text-end">
                            <div className="order-status-badge">
                              <span className="status-current">{orderData.status}</span>
                              <p>Est. Delivery: {new Date(orderData.estimatedDelivery).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tracking Timeline */}
                      <div className="tracking-timeline">
                        <h4>Order Progress</h4>
                        <div className="timeline-container">
                          {trackingSteps.map((step, index) => (
                            <div 
                              key={index} 
                              className={`timeline-step ${step.completed ? 'completed' : ''} ${step.current ? 'current' : ''}`}
                            >
                              <div className="timeline-icon">
                                <i className={step.icon}></i>
                              </div>
                              <div className="timeline-content">
                                <h5>{step.status}</h5>
                                <p className="timeline-date">{step.date}</p>
                                <p className="timeline-description">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shipping Information */}
                      <div className="shipping-info">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="info-card">
                              <h5>Shipping Address</h5>
                              <div className="address-details">
                                <p><strong>{orderData.shippingAddress.name}</strong></p>
                                <p>{orderData.shippingAddress.address}</p>
                                <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zip}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="info-card">
                              <h5>Order Summary</h5>
                              <div className="order-summary-details">
                                <p>Order Total: <strong>${orderData.total}</strong></p>
                                <p>Payment Method: Credit Card</p>
                                <p>Shipping Method: Standard Delivery</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="track-order-actions">
                        <Link href="/orders" className="mn-btn-2 btn">
                          Back to Orders
                        </Link>
                        <Link href="/contact-us" className="mn-btn-1 btn">
                          Contact Support
                        </Link>
                      </div>
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

export default TrackOrder;