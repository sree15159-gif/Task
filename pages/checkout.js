import Link from 'next/link';

const Checkout = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Checkout</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item"><Link href="/cart">Cart</Link></li>
                  <li className="mn-breadcrumb-item active">Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-checkout p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="mn-checkout-form">
                <h3>Billing Details</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="First Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className="col-12">
                      <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="col-12">
                      <input type="tel" placeholder="Phone Number" required />
                    </div>
                    <div className="col-12">
                      <textarea placeholder="Address" rows="3" required></textarea>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="City" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Postal Code" required />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="mn-checkout-summary">
                <h4>Order Summary</h4>
                <div className="mn-order-total">
                  <p>Subtotal: $0.00</p>
                  <p>Shipping: $0.00</p>
                  <p>Tax: $0.00</p>
                  <p><strong>Total: $0.00</strong></p>
                </div>
                <button className="mn-btn-1 btn w-100">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;