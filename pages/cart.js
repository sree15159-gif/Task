import Link from 'next/link';

const Cart = () => {
  return (
    <div className="mn-main-content">
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
  );
};

export default Cart;