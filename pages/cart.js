import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <>
      <Header />
      
      <main className="wrapper sb-default">
        {/* Sidebar */}
        <div className="mn-sidebar-overlay"></div>
        <div className="mn-sidebar">
          <div className="mn-sidebar-body">
            <button type="button" className="side-close" title="Close"></button>
            <ul className="mn-sb-list">
              <li className="mn-sb-title condense"><span>Categories</span></li>
              <li className="mn-sb-item sb-drop-item">
                <a href="#" className="mn-drop-toggle">
                  <img src="/assets/img/icons/clothes-2.svg" alt="clothes" />
                  <span className="condense">
                    Clothes<i className="drop-arrow ri-arrow-down-s-line"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mn-main-content">
          <div className="row">
            <div className="col-xxl-12">
              <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Shopping Cart</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-cart p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="mn-cart-table">
                <h3>Shopping Cart</h3>
                <p>Your cart items will be displayed here.</p>
                {/* Cart table will be added here */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="mn-cart-summary">
                <h4>Cart Summary</h4>
                <div className="mn-cart-total">
                  <p>Subtotal: $0.00</p>
                  <p>Tax: $0.00</p>
                  <p><strong>Total: $0.00</strong></p>
                </div>
                <div className="mn-cart-actions">
                  <button className="mn-btn-1 btn w-100 mb-2">Update Cart</button>
                  <button className="mn-btn-1 btn w-100">Proceed to Checkout</button>
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
      
      <Footer />
    </>
  );
};

export default Cart;