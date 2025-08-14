import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';


const Checkout = () => {
  return (
    <>
<div className="">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">Checkout Page</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">Checkout Page</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Checkout section */}
  <section className="mn-checkout-section p-b-15">
    <h2 className="d-none">Checkout Page</h2>
    <div className="row">
      <div className="mn-checkout-leftside col-lg-8 col-md-12">
        {/* checkout content Start */}
        <div className="mn-checkout-content">
          <div className="mn-checkout-inner">
            <div className="mn-checkout-wrap m-b-30">
              <div className="mn-checkout-block mn-check-new">
                <h3 className="mn-checkout-title">New Customer</h3>
                <div className="mn-check-block-content">
                  <div className="mn-check-subtitle">Checkout Options</div>
                  <form action="#">
                    <span className="mn-new-option">
                      <span className="m-b-15">
                        <input
                          type="radio"
                          id="account1"
                          name="radio-group"
                          defaultChecked=""
                        />
                        <label htmlFor="account1">Register Account</label>
                      </span>
                      <span className="m-b-15">
                        <input type="radio" id="account2" name="radio-group" />
                        <label htmlFor="account2">Guest Account</label>
                      </span>
                    </span>
                  </form>
                  <div className="mn-new-desc">
                    By creating an account you will be able to shop faster, be
                    up to date on an order's status, and keep track of the
                    orders you have previously made.
                  </div>
                  <div className="mn-new-btn">
                    <a href="#" className="mn-btn-2">
                      <span>Continue</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mn-checkout-block mn-check-login">
                <h3 className="mn-checkout-title">Returning Customer</h3>
                <div className="mn-check-login-form">
                  <form action="#" method="post">
                    <span className="mn-check-login-wrap">
                      <label>Email Address</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your email address"
                        required=""
                      />
                    </span>
                    <span className="mn-check-login-wrap">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required=""
                      />
                    </span>
                    <span className="mn-check-login-wrap mn-check-login-btn">
                      <button className="mn-btn-2" type="submit">
                        <span>Login</span>
                      </button>
                      <a className="mn-check-login-fp" href="#">
                        Forgot Password?
                      </a>
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="mn-checkout-wrap m-b-30 padding-bottom-3">
              <div className="mn-checkout-block mn-check-bill">
                <h3 className="mn-checkout-title">Billing Details</h3>
                <div className="mn-bl-block-content">
                  <div className="mn-check-subtitle">Checkout Options</div>
                  <span className="mn-bill-option">
                    <span className="m-b-15">
                      <input type="radio" id="bill1" name="radio-group" />
                      <label htmlFor="bill1">
                        I want to use an existing address
                      </label>
                    </span>
                    <span className="m-b-15">
                      <input
                        type="radio"
                        id="bill2"
                        name="radio-group"
                        defaultChecked=""
                      />
                      <label htmlFor="bill2">I want to use new address</label>
                    </span>
                  </span>
                  <div className="mn-check-bill-form">
                    <form action="#" method="post">
                      <span className="mn-bill-wrap mn-bill-half">
                        <label>First Name*</label>
                        <input
                          type="text"
                          name="firstname"
                          placeholder="Enter your first name"
                          required=""
                        />
                      </span>
                      <span className="mn-bill-wrap mn-bill-half">
                        <label>Last Name*</label>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Enter your last name"
                          required=""
                        />
                      </span>
                      <span className="mn-bill-wrap">
                        <label>Address</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address Line 1"
                        />
                      </span>
                      <span className="mn-bill-wrap mn-bill-half">
                        <label>City *</label>
                        <span className="mn-bl-select-inner">
                          <select
                            name="gi_select_city"
                            id="mn-select-city"
                            className="mn-bill-select"
                          >
                            <option selected="" disabled="">
                              City
                            </option>
                            <option value={1}>City 1</option>
                            <option value={2}>City 2</option>
                            <option value={3}>City 3</option>
                            <option value={4}>City 4</option>
                            <option value={5}>City 5</option>
                          </select>
                        </span>
                      </span>
                      <span className="mn-bill-wrap mn-bill-half">
                        <label>Post Code</label>
                        <input
                          type="text"
                          name="postalcode"
                          placeholder="Post Code"
                        />
                      </span>
                      <span className="mn-bill-wrap mn-bill-half">
                        <label>Country *</label>
                        <span className="mn-bl-select-inner">
                          <select
                            name="gi_select_country"
                            id="mn-select-country"
                            className="mn-bill-select"
                          >
                            <option selected="" disabled="">
                              Country
                            </option>
                            <option value={1}>Country 1</option>
                            <option value={2}>Country 2</option>
                            <option value={3}>Country 3</option>
                            <option value={4}>Country 4</option>
                            <option value={5}>Country 5</option>
                          </select>
                        </span>
                      </span>
                      <span className="mn-bill-wrap mn-bill-half">
                        <label>Region State</label>
                        <span className="mn-bl-select-inner">
                          <select
                            name="gi_select_state"
                            id="mn-select-state"
                            className="mn-bill-select"
                          >
                            <option selected="" disabled="">
                              Region/State
                            </option>
                            <option value={1}>Region/State 1</option>
                            <option value={2}>Region/State 2</option>
                            <option value={3}>Region/State 3</option>
                            <option value={4}>Region/State 4</option>
                            <option value={5}>Region/State 5</option>
                          </select>
                        </span>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <span className="mn-check-order-btn m-t-30">
              <a className="mn-btn-2" href="#">
                <span>Place Order</span>
              </a>
            </span>
          </div>
        </div>
        {/*cart content End */}
      </div>
      {/* Sidebar Area Start */}
      <div className="mn-checkout-rightside col-lg-4 col-md-12 m-t-991">
        <div className="mn-sidebar-wrap">
          {/* Sidebar Summary Block */}
          <div className="mn-sidebar-block">
            <div className="mn-sb-title">
              <h3 className="mn-sidebar-title">Summary</h3>
            </div>
            <div className="mn-sb-block-content">
              <div className="mn-checkout-summary">
                <div>
                  <span className="text-left">Sub-Total</span>
                  <span className="text-right">$295.00</span>
                </div>
                <div>
                  <span className="text-left">Delivery Charges</span>
                  <span className="text-right">$80.00</span>
                </div>
                <div>
                  <span className="text-left">Coupan Discount</span>
                  <span className="text-right">
                    <a className="mn-checkout-coupan">Apply Coupan</a>
                  </span>
                </div>
                <div className="mn-checkout-coupan-content">
                  <form
                    className="mn-checkout-coupan-form"
                    name="mn-checkout-coupan-form"
                    method="post"
                    action="#"
                  >
                    <input
                      className="mn-coupan"
                      type="text"
                      required=""
                      placeholder="Enter Your Coupan Code"
                      name="mn-coupan"
                      defaultValue=""
                    />
                    <button
                      className="mn-coupan-btn mn-btn-2"
                      type="submit"
                      name="subscribe"
                      value=""
                    >
                      <span>Apply</span>
                    </button>
                  </form>
                </div>
                <div className="mn-checkout-summary-total">
                  <span className="text-left">Total Amount</span>
                  <span className="text-right">$375.00</span>
                </div>
              </div>
              <div className="mn-checkout-pro">
                <div className="col-sm-12 mb-6">
                  <div className="mn-product-inner">
                    <div className="mn-pro-image-outer">
                      <div className="mn-pro-image">
                        <a href="product-detail.html" className="image">
                          <img
                            className="main-image"
                            src="assets/img/product/1.jpg"
                            alt="Product"
                          />
                          <img
                            className="hover-image"
                            src="assets/img/product/2.jpg"
                            alt="Product"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="mn-pro-content">
                      <h5 className="mn-pro-title">
                        <a href="product-detail.html">
                          Round neck cotton t-shirt
                        </a>
                      </h5>
                      <div className="mn-pro-rating">
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill grey" />
                      </div>
                      <span className="mn-price">
                        <span className="old-price">$58.00</span>
                        <span className="new-price">$45.00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 mb-0">
                  <div className="mn-product-inner">
                    <div className="mn-pro-image-outer">
                      <div className="mn-pro-image">
                        <a href="product-detail.html" className="image">
                          <img
                            className="main-image"
                            src="assets/img/product/11.jpg"
                            alt="Product"
                          />
                          <img
                            className="hover-image"
                            src="assets/img/product/12.jpg"
                            alt="Product"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="mn-pro-content">
                      <h5 className="mn-pro-title">
                        <a href="product-detail.html">Digital smart watch</a>
                      </h5>
                      <div className="mn-pro-rating">
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                        <i className="ri-star-fill" />
                      </div>
                      <span className="mn-price">
                        <span className="old-price">$265.00</span>
                        <span className="new-price">$250.00</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar Summary Block */}
        </div>
        <div className="mn-sidebar-wrap mn-checkout-del-wrap">
          {/* Sidebar Summary Block */}
          <div className="mn-sidebar-block">
            <div className="mn-sb-title">
              <h3 className="mn-sidebar-title">Delivery Method</h3>
            </div>
            <div className="mn-sb-block-content">
              <div className="mn-checkout-del">
                <div className="mn-del-desc">
                  Please select the preferred shipping method to use on this
                  order.
                </div>
                <form action="#">
                  <span className="mn-del-option">
                    <span>
                      <span className="mn-del-opt-head">Free Shipping</span>
                      <input
                        type="radio"
                        id="del1"
                        name="radio-group"
                        defaultChecked=""
                      />
                      <label htmlFor="del1">Rate - $0 .00</label>
                    </span>
                    <span>
                      <span className="mn-del-opt-head">Flat Rate</span>
                      <input type="radio" id="del2" name="radio-group" />
                      <label htmlFor="del2">Rate - $5.00</label>
                    </span>
                  </span>
                </form>
              </div>
            </div>
          </div>
          {/* Sidebar Summary Block */}
        </div>
        <div className="mn-sidebar-wrap mn-checkout-del-wrap">
          {/* Sidebar Payment Block */}
          <div className="mn-sidebar-block">
            <div className="mn-sb-title">
              <h3 className="mn-sidebar-title">Payment Method</h3>
            </div>
            <div className="mn-sb-block-content">
              <div className="mn-checkout-pay">
                <div className="mn-pay-desc">
                  Please select the preferred payment method to use on this
                  order.
                </div>
                <form action="#">
                  <span className="mn-pay-option m-b-15">
                    <span>
                      <input
                        type="radio"
                        id="pay1"
                        name="radio-group"
                        defaultChecked=""
                      />
                      <label htmlFor="pay1">Cash On Delivery</label>
                    </span>
                  </span>
                  <span className="mn-pay-commemt">
                    <span className="mn-pay-opt-head">Add extra note</span>
                    <textarea
                      name="your-commemt"
                      placeholder="Comments"
                      defaultValue={""}
                    />
                  </span>
                  <span className="mn-pay-agree">
                    <input type="checkbox" defaultValue="" />I have agree with{" "}
                    <a href="#">Terms &amp; Conditions.</a>
                    <span className="checked" />
                  </span>
                </form>
              </div>
            </div>
          </div>
          {/* Sidebar Payment Block */}
        </div>
        <div className="mn-sidebar-wrap mn-checkout-del-wrap">
          {/* Sidebar Payment Block */}
          <div className="mn-sidebar-block">
            <div className="mn-sb-title">
              <h3 className="mn-sidebar-title">Payment Method</h3>
            </div>
            <div className="mn-sb-block-content">
              <div className="mn-check-pay-img-inner">
                <div className="mn-check-pay-img">
                  <img src="assets/img/footer/payment.png" alt="payment" />
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar Payment Block */}
        </div>
      </div>
    </div>
  </section>
</div>

 
    </>
  );
};

export default Checkout;