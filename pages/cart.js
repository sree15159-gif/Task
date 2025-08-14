import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';


const Cart = () => {
  return (
    <>
<div className="">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">Cart Page</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">Cart Page</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart section */}
  <section className="mn-cart-section p-b-15">
    <h2 className="d-none">Cart Page</h2>
    <div className="row">
      <div className="mn-cart-leftside col-lg-8 col-md-12">
        {/* cart content Start */}
        <div className="mn-cart-content">
          <div className="mn-cart-inner cart_list">
            <div className="row">
              <form action="#">
                <div className="table-content cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th style={{ textAlign: "center" }}>Quantity</th>
                        <th>Total</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="mn-cart-product">
                        <td data-label="Product" className="mn-cart-pro-name">
                          <a href="product-detail.html">
                            <img
                              className="mn-cart-pro-img"
                              src="assets/img/product/11.jpg"
                              alt=""
                            />
                            Mantu smart watch
                          </a>
                        </td>
                        <td data-label="Price" className="mn-cart-pro-price">
                          <span className="amount">$516.00</span>
                        </td>
                        <td
                          data-label="Quantity"
                          className="mn-cart-pro-qty"
                          style={{ textAlign: "center" }}
                        >
                          <div className="cart-qty-plus-minus">
                            <input
                              className="cart-plus-minus"
                              type="text"
                              name="cartqtybutton"
                              defaultValue={1}
                            />
                          </div>
                        </td>
                        <td data-label="Total" className="mn-cart-pro-subtotal">
                          $516.00
                        </td>
                        <td data-label="Remove" className="mn-cart-pro-remove">
                          <a href="#">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                      </tr>
                      <tr className="mn-cart-product">
                        <td data-label="Product" className="mn-cart-pro-name">
                          <a href="product-detail.html">
                            <img
                              className="mn-cart-pro-img"
                              src="assets/img/product/15.jpg"
                              alt=""
                            />
                            Leather bag
                          </a>
                        </td>
                        <td data-label="Price" className="mn-cart-pro-price">
                          <span className="amount">$75.00</span>
                        </td>
                        <td
                          data-label="Quantity"
                          className="mn-cart-pro-qty"
                          style={{ textAlign: "center" }}
                        >
                          <div className="cart-qty-plus-minus">
                            <input
                              className="cart-plus-minus"
                              type="text"
                              name="cartqtybutton"
                              defaultValue={1}
                            />
                          </div>
                        </td>
                        <td data-label="Total" className="mn-cart-pro-subtotal">
                          $75.00
                        </td>
                        <td data-label="Remove" className="mn-cart-pro-remove">
                          <a href="#">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                      </tr>
                      <tr className="mn-cart-product">
                        <td data-label="Product" className="mn-cart-pro-name">
                          <a href="product-detail.html">
                            <img
                              className="mn-cart-pro-img"
                              src="assets/img/product/21.jpg"
                              alt=""
                            />
                            Cotton fabric T-shirt
                          </a>
                        </td>
                        <td data-label="Price" className="mn-cart-pro-price">
                          <span className="amount">$48.00</span>
                        </td>
                        <td
                          data-label="Quantity"
                          className="mn-cart-pro-qty"
                          style={{ textAlign: "center" }}
                        >
                          <div className="cart-qty-plus-minus">
                            <input
                              className="cart-plus-minus"
                              type="text"
                              name="cartqtybutton"
                              defaultValue={1}
                            />
                          </div>
                        </td>
                        <td data-label="Total" className="mn-cart-pro-subtotal">
                          $48.00
                        </td>
                        <td data-label="Remove" className="mn-cart-pro-remove">
                          <a href="#">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                      </tr>
                      <tr className="mn-cart-product">
                        <td data-label="Product" className="mn-cart-pro-name">
                          <a href="product-detail.html">
                            <img
                              className="mn-cart-pro-img"
                              src="assets/img/product/9.jpg"
                              alt=""
                            />
                            Special sport shoes
                          </a>
                        </td>
                        <td data-label="Price" className="mn-cart-pro-price">
                          <span className="amount">$95.00</span>
                        </td>
                        <td
                          data-label="Quantity"
                          className="mn-cart-pro-qty"
                          style={{ textAlign: "center" }}
                        >
                          <div className="cart-qty-plus-minus">
                            <input
                              className="cart-plus-minus"
                              type="text"
                              name="cartqtybutton"
                              defaultValue={1}
                            />
                          </div>
                        </td>
                        <td data-label="Total" className="mn-cart-pro-subtotal">
                          $95.00
                        </td>
                        <td data-label="Remove" className="mn-cart-pro-remove">
                          <a href="#">
                            <i className="ri-delete-bin-line" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-12">
                  <div className="mn-cart-update-bottom">
                    <a href="#">Continue Shopping</a>
                    <button className="mn-btn-2">
                      <span>Check Out</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*cart content End */}
      </div>
      {/* Sidebar Area Start */}
      <div className="mn-cart-rightside col-lg-4 col-md-12 m-t-991">
        <div className="mn-sidebar-wrap">
          {/* Sidebar Summary Block */}
          <div className="mn-sidebar-block">
            <div className="mn-sb-title">
              <h3 className="mn-sidebar-title">Summary</h3>
            </div>
            <div className="mn-sb-block-content">
              <div className="mn-cart-form">
                <p>Enter your destination to get a shipping estimate</p>
                <form action="#" method="post">
                  <span className="mn-cart-wrap">
                    <label>Country *</label>
                    <span className="mn-cart-select-inner">
                      <select
                        name="gi_cart_country"
                        id="mn-cart-select-country"
                        className="mn-cart-select"
                      >
                        <option selected="" disabled="">
                          United States
                        </option>
                        <option value={1}>Country 1</option>
                        <option value={2}>Country 2</option>
                        <option value={3}>Country 3</option>
                        <option value={4}>Country 4</option>
                        <option value={5}>Country 5</option>
                      </select>
                    </span>
                  </span>
                  <span className="mn-cart-wrap">
                    <label>State/Province</label>
                    <span className="mn-cart-select-inner">
                      <select
                        name="gi_cart_state"
                        id="mn-cart-select-state"
                        className="mn-cart-select"
                      >
                        <option selected="" disabled="">
                          Please Select a region, state
                        </option>
                        <option value={1}>Region/State 1</option>
                        <option value={2}>Region/State 2</option>
                        <option value={3}>Region/State 3</option>
                        <option value={4}>Region/State 4</option>
                        <option value={5}>Region/State 5</option>
                      </select>
                    </span>
                  </span>
                  <span className="mn-cart-wrap">
                    <label>Zip/Postal Code</label>
                    <input
                      type="text"
                      name="postalcode"
                      placeholder="Zip/Postal Code"
                    />
                  </span>
                </form>
              </div>
            </div>
            <div className="mn-sb-block-content">
              <div className="mn-cart-summary-bottom">
                <div className="mn-cart-summary">
                  <div>
                    <span className="text-left">Sub-Total</span>
                    <span className="text-right">$734.00</span>
                  </div>
                  <div>
                    <span className="text-left">Delivery Charges</span>
                    <span className="text-right">$80.00</span>
                  </div>
                  <div>
                    <span className="text-left">Coupan Discount</span>
                    <span className="text-right">
                      <a className="mn-cart-coupan">Apply Coupan</a>
                    </span>
                  </div>
                  <div className="mn-cart-coupan-content">
                    <form
                      className="mn-cart-coupan-form"
                      name="mn-cart-coupan-form"
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
                        className="mn-btn-2"
                        type="submit"
                        name="subscribe"
                        value=""
                      >
                        <span>Apply</span>
                      </button>
                    </form>
                  </div>
                  <div className="mn-cart-summary-total">
                    <span className="text-left">Total Amount</span>
                    <span className="text-right">$814.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

 
    </>
  );
};

export default Cart;