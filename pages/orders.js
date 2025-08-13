import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 45.99,
      items: 3,
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-18',
      products: [
        { name: 'Fresh Organic Apples', quantity: 2, price: 4.99 },
        { name: 'Premium Olive Oil', quantity: 1, price: 12.99 },
        { name: 'Organic Honey', quantity: 1, price: 8.99 }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'In Transit',
      total: 78.50,
      items: 5,
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2024-01-25',
      products: [
        { name: 'Whole Grain Bread', quantity: 2, price: 3.99 },
        { name: 'Greek Yogurt', quantity: 3, price: 5.99 },
        { name: 'Almond Milk', quantity: 1, price: 4.99 }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-22',
      status: 'Processing',
      total: 32.75,
      items: 2,
      trackingNumber: 'TRK456789123',
      estimatedDelivery: '2024-01-28',
      products: [
        { name: 'Organic Spinach', quantity: 1, price: 2.99 },
        { name: 'Free Range Eggs', quantity: 2, price: 6.99 }
      ]
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'success';
      case 'In Transit': return 'warning';
      case 'Processing': return 'info';
      case 'Cancelled': return 'danger';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return 'ri-check-double-line';
      case 'In Transit': return 'ri-truck-line';
      case 'Processing': return 'ri-time-line';
      case 'Cancelled': return 'ri-close-circle-line';
      default: return 'ri-information-line';
    }
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
                        <h2 className="mn-breadcrumb-title">My Orders</h2>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul className="mn-breadcrumb-list">
                          <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="mn-breadcrumb-item active">Orders</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mn-orders p-b-15">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="mn-orders-header">
                        <h3>Order History</h3>
                        <p>Track and manage your orders</p>
                      </div>

                      {orders.length > 0 ? (
                        <div className="mn-orders-content">
                          {orders.map((order) => (
                            <div key={order.id} className="mn-order-card">
                              <div className="order-header">
                                <div className="order-info">
                                  <h4 className="order-id">Order #{order.id}</h4>
                                  <p className="order-date">Placed on {new Date(order.date).toLocaleDateString()}</p>
                                </div>
                                <div className="order-status">
                                  <span className={`status-badge status-${getStatusColor(order.status)}`}>
                                    <i className={getStatusIcon(order.status)}></i>
                                    {order.status}
                                  </span>
                                </div>
                              </div>

                              <div className="order-body">
                                <div className="row">
                                  <div className="col-md-8">
                                    <div className="order-products">
                                      <h5>Items ({order.items})</h5>
                                      <div className="products-list">
                                        {order.products.map((product, index) => (
                                          <div key={index} className="product-item">
                                            <span className="product-name">{product.name}</span>
                                            <span className="product-quantity">Qty: {product.quantity}</span>
                                            <span className="product-price">${product.price}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="order-summary">
                                      <div className="summary-item">
                                        <span>Total Amount:</span>
                                        <strong>${order.total}</strong>
                                      </div>
                                      {order.trackingNumber && (
                                        <div className="summary-item">
                                          <span>Tracking:</span>
                                          <span className="tracking-number">{order.trackingNumber}</span>
                                        </div>
                                      )}
                                      {order.estimatedDelivery && (
                                        <div className="summary-item">
                                          <span>Est. Delivery:</span>
                                          <span>{new Date(order.estimatedDelivery).toLocaleDateString()}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="order-actions">
                                <Link href={`/track-order?id=${order.id}`} className="mn-btn-2 btn">
                                  Track Order
                                </Link>
                                <Link href={`/order-details?id=${order.id}`} className="mn-btn-1 btn">
                                  View Details
                                </Link>
                                {order.status === 'Delivered' && (
                                  <button className="mn-btn-3 btn">
                                    Reorder
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mn-empty-orders">
                          <div className="empty-orders-content">
                            <i className="ri-shopping-bag-line empty-icon"></i>
                            <h3>No orders yet</h3>
                            <p>Start shopping to see your orders here</p>
                            <Link href="/shop-full-width" className="mn-btn-1 btn">
                              Start Shopping
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

export default Orders;