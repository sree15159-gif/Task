import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';


const ShopFullWidth = () => {
  return (
    <>
      
     <div className="">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">Shop Page</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">Shop Page</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xxl-12">
      {/* Shop section */}
      <section className="mn-shop">
        <div className="row">
          {/* Sidebar Area Start */}
          <div className="filter-sidebar-overlay" />
          <div className="mn-shop-sidebar mn-filter-sidebar col-lg-3 col-md-12">
            <div id="shop_sidebar">
              <div className="mn-sidebar-wrap">
                {/* Sidebar Filters Block */}
                <div className="mn-sidebar-block drop">
                  <div className="mn-sb-title">
                    <h3 className="mn-sidebar-title">Filters</h3>
                    <a href="javascript:void(0)" className="filter-close">
                      <i className="ri-close-large-line" />
                    </a>
                  </div>
                  <div className="mn-sb-block-content p-t-15">
                    <ul>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="mn-sidebar-block-item main drop"
                        >
                          clothes
                        </a>
                        <ul style={{ display: "block" }}>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="#">
                                Men
                                <span>-25</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="#">
                                Women
                                <span>-52</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="#">
                                Boy
                                <span>-40</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="mn-sb-block-content">
                    <ul>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="mn-sidebar-block-item main drop"
                        >
                          cosmetics
                        </a>
                        <ul>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="shop-right-sidebar.html">
                                Shampoo
                                <span>-25</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="shop-right-sidebar.html">
                                Body Wash
                                <span>-52</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="shop-right-sidebar.html">
                                Sunscreen
                                <span>-40</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="shop-right-sidebar.html">
                                Makeup
                                <span>-35</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="mn-sb-block-content">
                    <ul>
                      <li>
                        <a
                          href="shop-right-sidebar.html"
                          className="mn-sidebar-block-item main"
                        >
                          shoes<span>-15</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mn-sb-block-content">
                    <ul>
                      <li>
                        <a
                          href="shop-right-sidebar.html"
                          className="mn-sidebar-block-item main"
                        >
                          bag<span>-27</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mn-sb-block-content">
                    <ul>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="mn-sidebar-block-item main drop"
                        >
                          electronics
                        </a>
                        <ul>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="shop-right-sidebar.html">
                                Laptop
                                <span>-25</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="shop-right-sidebar.html">
                                Air Conditioner
                                <span>-52</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="shop-right-sidebar.html">
                                Trimmer
                                <span>-40</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="shop-right-sidebar.html">
                                Watches
                                <span>-35</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Sidebar Brand Block */}
                <div className="mn-sidebar-block">
                  <div className="mn-sb-title">
                    <h3 className="mn-sidebar-title">Brand</h3>
                  </div>
                  <div className="mn-sb-block-content">
                    <ul>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultChecked="" />
                          <a href="javascript:void(0)">
                            <span>Zencart Mart</span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" />
                          <a href="javascript:void(0)">
                            <span>Xeta Store</span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" />
                          <a href="javascript:void(0)">
                            <span>Pili Market</span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" />
                          <a href="javascript:void(0)">
                            <span>Indiana Store</span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Sidebar Weight Block */}
                <div className="mn-sidebar-block">
                  <div className="mn-sb-title">
                    <h3 className="mn-sidebar-title">Size</h3>
                  </div>
                  <div className="mn-sb-block-content">
                    <ul>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input
                            type="checkbox"
                            defaultValue=""
                            defaultChecked=""
                          />
                          <a href="#">S - Size</a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <a href="#">M - Size</a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <a href="#">L - Size</a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <a href="#">XL - Size</a>
                          <span className="checked" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Sidebar Color item */}
                <div className="mn-sidebar-block color-block mn-sidebar-block-clr">
                  <div className="mn-sb-title">
                    <h3 className="mn-sidebar-title">Color</h3>
                  </div>
                  <div className="mn-sb-block-content">
                    <ul>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#c4d6f9" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#ff748b" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#000000" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li className="active">
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#2bff4a" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#ff7c5e" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#f155ff" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#ffef00" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#c89fff" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#7bfffa" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#56ffc1" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#ffdb9f" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#9f9f9f" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="mn-sidebar-block-item">
                          <input type="checkbox" defaultValue="" />
                          <span
                            className="mn-clr-block"
                            style={{ backgroundColor: "#6556ff" }}
                          />
                          <span className="checked" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Sidebar Price Block */}
                <div className="mn-sidebar-block">
                  <div className="mn-sb-title">
                    <h3 className="mn-sidebar-title">Price</h3>
                  </div>
                  <div className="mn-sb-block-content mn-price-range-slider es-price-slider">
                    <div className="mn-price-filter">
                      <div className="mn-price-input">
                        <label className="filter__label">
                          From
                          <input type="text" className="filter__input" />
                        </label>
                        <span className="mn-price-divider" />
                        <label className="filter__label">
                          To
                          <input type="text" className="filter__input" />
                        </label>
                      </div>
                      <div
                        id="mn-sliderPrice"
                        className="filter__slider-price"
                        data-min={0}
                        data-max={250}
                        data-step={10}
                      />
                    </div>
                  </div>
                </div>
                {/* Sidebar tags */}
                <div className="mn-sidebar-block">
                  <div className="mn-sb-title">
                    <h3 className="mn-sidebar-title">Tags</h3>
                  </div>
                  <div className="mn-tag-block mn-sb-block-content">
                    <a href="shop-right-sidebar.html">
                      <span>Clothes</span>
                    </a>
                    <a href="shop-right-sidebar.html">
                      <span>Fruits</span>
                    </a>
                    <a href="shop-right-sidebar.html">
                      <span>Snacks</span>
                    </a>
                    <a href="shop-right-sidebar.html">
                      <span>Dairy</span>
                    </a>
                    <a href="shop-right-sidebar.html">
                      <span>Seafood</span>
                    </a>
                    <a href="shop-right-sidebar.html">
                      <span>Fastfood</span>
                    </a>
                    <a href="shop-right-sidebar.html">
                      <span>Toys</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mn-shop-rightside col-md-12 m-t-991">
            {/* Shop Top Start */}
            <div className="mn-pro-list-top d-flex">
              <div className="col-md-6 mn-grid-list">
                <div className="mn-gl-btn">
                  <button className="grid-btn filter-toggle-icon">
                    <i className="ri-filter-2-line" />
                  </button>
                  <button className="grid-btn btn-grid-50 active">
                    <i className="ri-gallery-view-2" />
                  </button>
                  <button className="grid-btn btn-list-50">
                    <i className="ri-list-check-2" />
                  </button>
                </div>
              </div>
              <div className="col-md-6 mn-sort-select">
                <div className="mn-select-inner">
                  <select name="mn-select" id="mn-select">
                    <option selected="" disabled="">
                      Sort by
                    </option>
                    <option value={1}>Position</option>
                    <option value={2}>Relevance</option>
                    <option value={3}>Name, A to Z</option>
                    <option value={4}>Name, Z to A</option>
                    <option value={5}>Price, low to high</option>
                    <option value={6}>Price, high to low</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Shop Top End */}
            {/* Select Bar Start */}
            <div className="mn-select-bar d-flex">
              <span className="mn-select-btn">
                Clothes
                <a className="mn-select-cancel" href="javascript:void(0)">
                  ×
                </a>
              </span>
              <span className="mn-select-btn">
                Fruits
                <a className="mn-select-cancel" href="javascript:void(0)">
                  ×
                </a>
              </span>
              <span className="mn-select-btn">
                Snacks
                <a className="mn-select-cancel" href="javascript:void(0)">
                  ×
                </a>
              </span>
              <span className="mn-select-btn">
                Dairy
                <a className="mn-select-cancel" href="javascript:void(0)">
                  ×
                </a>
              </span>
              <span className="mn-select-btn">
                perfume
                <a className="mn-select-cancel" href="javascript:void(0)">
                  ×
                </a>
              </span>
              <span className="mn-select-btn">
                jewelry
                <a className="mn-select-cancel" href="javascript:void(0)">
                  ×
                </a>
              </span>
              <span className="mn-select-btn mn-select-btn-clear">
                <a className="mn-select-clear" href="javascript:void(0)">
                  Clear All
                </a>
              </span>
            </div>
            {/* Select Bar End */}
            {/* Shop content Start */}
            <div className="shop-pro-content">
              <div className="shop-pro-inner">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="lbl">
                          <span className="new">new</span>
                        </div>
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/17.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/18.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">T-shirt</a>
                          <ul>
                            <li>s</li>
                            <li>m</li>
                            <li>xl</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">Cotton fabric T-shirt</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$120</div>
                          <div className="mn-price-old">$130</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/19.jpg"
                                  data-src-hover="assets/img/product/20.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#de8abc" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/21.jpg"
                                  data-src-hover="assets/img/product/22.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#5e68ce" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/17.jpg"
                                  data-src-hover="assets/img/product/18.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span style={{ backgroundColor: "#eee" }} />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="lbl">
                          <span className="sale">Sale</span>
                        </div>
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/39.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/40.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">T-shirt</a>
                          <ul>
                            <li>s</li>
                            <li>l</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">Leather purse</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$90</div>
                          <div className="mn-price-old">$95</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/39.jpg"
                                  data-src-hover="assets/img/product/39.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#cfa394" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/40.jpg"
                                  data-src-hover="assets/img/product/40.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#705a82" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="lbl">
                          <span className="trending">trending</span>
                        </div>
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/5.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/6.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">T-shirt</a>
                          <ul>
                            <li>s</li>
                            <li>m</li>
                            <li>xl</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">Cotton fabric T-shirt</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$120</div>
                          <div className="mn-price-old">$130</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li className="active">
                                <a
                                  href="#"
                                  className="mn-opt-clr-img active"
                                  data-src="assets/img/product/5.jpg"
                                  data-src-hover="assets/img/product/5.jpg"
                                  data-tooltip="Gray"
                                >
                                  <span
                                    style={{
                                      backgroundImage:
                                        'url("assets/img/product/bg/5.jpg")'
                                    }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/6.jpg"
                                  data-src-hover="assets/img/product/6.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{
                                      backgroundImage:
                                        'url("assets/img/product/bg/6.jpg")'
                                    }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/7.jpg"
                                  data-src-hover="assets/img/product/7.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#e97e70" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/8.jpg"
                                  data-src-hover="assets/img/product/8.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#70e98a" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/9.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/10.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">Shoes</a>
                          <ul>
                            <li>7</li>
                            <li>8</li>
                            <li>10</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">Special sport shoes</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$55</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/9.jpg"
                                  data-src-hover="assets/img/product/9.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#0e0e0e" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/10.jpg"
                                  data-src-hover="assets/img/product/10.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#c54367" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist active"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="lbl">
                          <span className="new">new</span>
                        </div>
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/1.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/3.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">Top</a>
                          <ul>
                            <li>s</li>
                            <li>m</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">Cotton fabric Top</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$120</div>
                          <div className="mn-price-old">$130</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li className="active">
                                <a
                                  href="#"
                                  className="mn-opt-clr-img active"
                                  data-src="assets/img/product/1.jpg"
                                  data-src-hover="assets/img/product/3.jpg"
                                  data-tooltip="Gray"
                                >
                                  <span
                                    style={{ backgroundColor: "#f3f3f3" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/2.jpg"
                                  data-src-hover="assets/img/product/4.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#e8c2ff" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="lbl">
                          <span className="sale">sale</span>
                        </div>
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/11.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/12.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">watches</a>
                        </div>
                        <h5>
                          <a href="#">Mantu smart watch</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$955</div>
                          <div className="mn-price-old">$999</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/11.jpg"
                                  data-src-hover="assets/img/product/12.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#f3f3f3" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/12.jpg"
                                  data-src-hover="assets/img/product/11.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#242424" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="lbl">
                          <span className="discount">20% off</span>
                        </div>
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/13.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/14.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">belt</a>
                        </div>
                        <h5>
                          <a href="#">Mantu leather belt</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$10</div>
                          <div className="mn-price-old">$12</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/13.jpg"
                                  data-src-hover="assets/img/product/14.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#d48a5b" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/14.jpg"
                                  data-src-hover="assets/img/product/13.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#242424" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/15.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/16.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">Bag</a>
                          <ul>
                            <li>m</li>
                            <li>l</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">Leather bag</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$66</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/15.jpg"
                                  data-src-hover="assets/img/product/16.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#b75956" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/16.jpg"
                                  data-src-hover="assets/img/product/15.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#0e0e0e" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/23.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/24.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">Coats</a>
                          <ul>
                            <li>s</li>
                            <li>m</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">Cotton coat for womens</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$220</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/23.jpg"
                                  data-src-hover="assets/img/product/24.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#c9a68a" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/25.jpg"
                                  data-src-hover="assets/img/product/26.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#d7523e" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/29.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/30.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">T-shirt</a>
                          <ul>
                            <li>xl</li>
                            <li>xxl</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">T-shirt for womens</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$66</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/29.jpg"
                                  data-src-hover="assets/img/product/29.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#4a63a9" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/30.jpg"
                                  data-src-hover="assets/img/product/30.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#303035" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/31.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/32.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">Suit</a>
                          <ul>
                            <li>s</li>
                            <li>m</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">Official Men's Suits</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$524</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/31.jpg"
                                  data-src-hover="assets/img/product/32.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#485170" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/33.jpg"
                                  data-src-hover="assets/img/product/34.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#50814b" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-b-24 mn-product-box pro-gl-content">
                    <div className="mn-product-card">
                      <div className="mn-product-img">
                        <div className="mn-img">
                          <a href="product-detail.html" className="image">
                            <img
                              className="main-img"
                              src="assets/img/product/35.jpg"
                              alt="product"
                            />
                            <img
                              className="hover-img"
                              src="assets/img/product/36.jpg"
                              alt="product"
                            />
                          </a>
                          <div className="mn-pro-loader" />
                          <div className="mn-options">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Quick View"
                                  data-link-action="quickview"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickview_modal"
                                >
                                  <i className="ri-eye-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Compare"
                                  className="mn-compare"
                                >
                                  <i className="ri-repeat-line" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0)"
                                  data-tooltip=""
                                  title="Add To Cart"
                                  className="mn-add-cart"
                                >
                                  <i className="ri-shopping-cart-line" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-product-detail">
                        <div className="cat">
                          <a href="shop-right-sidebar.html">jacket</a>
                          <ul>
                            <li>m</li>
                            <li>l</li>
                          </ul>
                        </div>
                        <h5>
                          <a href="#">T-shirt with jacket for boy</a>
                        </h5>
                        <p className="mn-info">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="mn-price">
                          <div className="mn-price-new">$866</div>
                        </div>
                        <div className="mn-pro-option">
                          <div className="mn-pro-color">
                            <ul className="mn-opt-swatch mn-change-img">
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/35.jpg"
                                  data-src-hover="assets/img/product/36.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#3b607a" }}
                                  />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="mn-opt-clr-img"
                                  data-src="assets/img/product/36.jpg"
                                  data-src-hover="assets/img/product/35.jpg"
                                  data-tooltip="Orange"
                                >
                                  <span
                                    style={{ backgroundColor: "#19594f" }}
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            href="javascript:void(0);"
                            className="mn-wishlist"
                            data-tooltip=""
                            title="Wishlist"
                          >
                            <i className="ri-heart-line" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination Start */}
              <div className="mn-pro-pagination m-b-15">
                <span>Showing 1-12 of 21 item(s)</span>
                <ul className="mn-pro-pagination-inner">
                  <li>
                    <a className="active" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <span>...</span>
                  </li>
                  <li>
                    <a href="#">8</a>
                  </li>
                  <li>
                    <a className="next" href="#">
                      Next <i className="ri-arrow-right-double-line" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Pagination End */}
            </div>
            {/*Shop content End */}
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

      
     
    </>
  );
};

export default ShopFullWidth;