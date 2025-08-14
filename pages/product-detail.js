import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';


const productDetail = () => {
  return (
    <>
      
 <div className="">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">Product Page</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">Product Page</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xxl-12">
      <section className="mn-single-product">
        <div className="row">
          <div className="mn-pro-rightside mn-common-rightside col-lg-9 col-md-12 m-b-15">
            {/* Single product content Start */}
            <div className="single-pro-block">
              <div className="single-pro-inner">
                <div className="row">
                  <div className="single-pro-img">
                    <div className="single-product-scroll">
                      <div className="single-product-cover">
                        <div className="single-slide zoom-image-hover">
                          <img
                            className="img-responsive"
                            src="assets/img/product/27.html"
                            alt=""
                          />
                        </div>
                        <div className="single-slide zoom-image-hover">
                          <img
                            className="img-responsive"
                            src="assets/img/product/28.html"
                            alt=""
                          />
                        </div>
                        <div className="single-slide zoom-image-hover">
                          <img
                            className="img-responsive"
                            src="assets/img/product/29.jpg"
                            alt=""
                          />
                        </div>
                        <div className="single-slide zoom-image-hover">
                          <img
                            className="img-responsive"
                            src="assets/img/product/30.jpg"
                            alt=""
                          />
                        </div>
                        <div className="single-slide zoom-image-hover">
                          <img
                            className="img-responsive"
                            src="assets/img/product/29.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="single-nav-thumb">
                        <div className="single-slide">
                          <img
                            className="img-responsive"
                            src="assets/img/product/27.html"
                            alt=""
                          />
                        </div>
                        <div className="single-slide">
                          <img
                            className="img-responsive"
                            src="assets/img/product/28.html"
                            alt=""
                          />
                        </div>
                        <div className="single-slide">
                          <img
                            className="img-responsive"
                            src="assets/img/product/29.jpg"
                            alt=""
                          />
                        </div>
                        <div className="single-slide">
                          <img
                            className="img-responsive"
                            src="assets/img/product/30.jpg"
                            alt=""
                          />
                        </div>
                        <div className="single-slide">
                          <img
                            className="img-responsive"
                            src="assets/img/product/29.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-pro-desc m-t-991">
                    <div className="single-pro-content">
                      <h5 className="mn-single-title">
                        Mantu Women's Solid Slim Fit Classic Round Neck cotton
                        fabric T-Shirt.
                      </h5>
                      <div className="mn-single-rating-wrap">
                        <div className="mn-single-rating mn-pro-rating">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill grey" />
                        </div>
                        <span className="mn-read-review">
                          |&nbsp;&nbsp;
                          <a href="#mn-spt-nav-review">992 Ratings</a>
                        </span>
                      </div>
                      <div className="mn-single-price-stoke">
                        <div className="mn-single-price">
                          <div className="final-price">
                            $664.00<span className="price-des">-78%</span>
                          </div>
                          <div className="mrp">
                            M.R.P. : <span>$2,999.00</span>
                          </div>
                        </div>
                        <div className="mn-single-stoke">
                          <span className="mn-single-sku">SKU#: WH12</span>
                          <span className="mn-single-ps-title">IN STOCK</span>
                        </div>
                      </div>
                      <div className="mn-single-sales">
                        <div className="mn-single-sales-inner">
                          <div className="mn-single-sales-visitor">
                            Real time
                            <span>56</span> visitor right now!
                          </div>
                          <div className="mn-single-sales-countdown">
                            <div className="mn-single-countdown">
                              <div
                                className="timer1 timer dealend-timer"
                                data-date="September 30, 2026 19:15:10 PDT"
                              ></div>
                              <div className="mn-single-count-desc">
                                Time is Running Out!
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mn-single-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1990.
                      </div>
                      <div className="mn-single-list">
                        <ul>
                          <li>
                            <strong>Closure :</strong> Hook &amp; Loop
                          </li>
                          <li>
                            <strong>Sole :</strong> Polyvinyl Chloride
                          </li>
                          <li>
                            <strong>Width :</strong> Medium
                          </li>
                          <li>
                            <strong>Outer Material :</strong> A-Grade Standard
                            Quality
                          </li>
                        </ul>
                      </div>
                      <div className="mn-pro-variation">
                        <div className="mn-pro-variation-inner mn-pro-variation-size m-b-24">
                          <span>Size</span>
                          <div className="mn-pro-variation-content">
                            <ul>
                              <li className="active">
                                <span>s</span>
                              </li>
                              <li>
                                <span>m</span>
                              </li>
                              <li>
                                <span>l</span>
                              </li>
                              <li>
                                <span>xl</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mn-pro-variation-inner mn-pro-variation-color">
                          <span>Colors</span>
                          <div className="mn-pro-variation-content">
                            <ul>
                              <li className="active">
                                <span style={{ backgroundColor: "#1b4a87" }} />
                              </li>
                              <li>
                                <span style={{ backgroundColor: "#5f94d6" }} />
                              </li>
                              <li>
                                <span style={{ backgroundColor: "#72aea2" }} />
                              </li>
                              <li>
                                <span style={{ backgroundColor: "#c79782" }} />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mn-single-qty">
                        <div className="qty-plus-minus">
                          <input
                            className="qty-input"
                            type="text"
                            name="ms_qtybtn"
                            defaultValue={1}
                          />
                        </div>
                        <div className="mn-btns">
                          <div className="mn-single-cart">
                            <button className="btn btn-primary mn-btn-2 mn-add-cart">
                              <span>Add To Cart</span>
                            </button>
                          </div>
                          <div className="mn-single-wishlist">
                            <a
                              href="javascript:void(0)"
                              className="mn-btn-group wishlist mn-wishlist"
                              title="Wishlist"
                            >
                              <i className="ri-heart-line" />
                            </a>
                          </div>
                          <div className="mn-single-mn-compare">
                            <a
                              href="javascript:void(0)"
                              className="mn-btn-group mn-compare"
                              title="Quick view"
                            >
                              <i className="ri-repeat-line" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Single product content End */}
            {/* Add More and get discount content Start */}
            <div className="single-add-more m-tb-30">
              <div className="mn-add-more-slider owl-carousel">
                <div className="add-more-item">
                  <a href="javascript:void(0)" className="mn-btn-2">
                    <span>+</span>
                  </a>
                  <div className="add-more-img">
                    <img src="assets/img/product/1.jpg" alt="product" />
                  </div>
                  <div className="add-more-info">
                    <h5>Honey Spiced Nuts</h5>
                    <span className="mn-pro-rating">
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill grey" />
                      <i className="ri-star-fill grey" />
                    </span>
                    <span className="mn-price">
                      <span className="new-price">$32.00</span>
                      <span className="old-price">$45.00</span>
                    </span>
                  </div>
                </div>
                <div className="add-more-item">
                  <a href="javascript:void(0)" className="mn-btn-2">
                    <span>+</span>
                  </a>
                  <div className="add-more-img">
                    <img src="assets/img/product/31.jpg" alt="product" />
                  </div>
                  <div className="add-more-info">
                    <h5>Dates Value Pouch</h5>
                    <span className="mn-pro-rating">
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                    </span>
                    <span className="mn-price">
                      <span className="new-price">$56.00</span>
                      <span className="old-price">$60.00</span>
                    </span>
                  </div>
                </div>
                <div className="add-more-item">
                  <a href="javascript:void(0)" className="mn-btn-2">
                    <span>+</span>
                  </a>
                  <div className="add-more-img">
                    <img src="assets/img/product/17.jpg" alt="product" />
                  </div>
                  <div className="add-more-info">
                    <h5>Graps Mix Snack</h5>
                    <span className="mn-pro-rating">
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill grey" />
                      <i className="ri-star-fill grey" />
                      <i className="ri-star-fill grey" />
                    </span>
                    <span className="mn-price">
                      <span className="new-price">$28.00</span>
                      <span className="old-price">$35.00</span>
                    </span>
                  </div>
                </div>
                <div className="add-more-item">
                  <a href="javascript:void(0)" className="mn-btn-2">
                    <span>+</span>
                  </a>
                  <div className="add-more-img">
                    <img src="assets/img/product/35.jpg" alt="product" />
                  </div>
                  <div className="add-more-info">
                    <h5>Roasted Almonds Pack</h5>
                    <span className="mn-pro-rating">
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                    </span>
                    <span className="mn-price">
                      <span className="new-price">$16.00</span>
                      <span className="old-price">$23.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Single product tab start */}
            <div className="mn-single-pro-tab">
              <div className="mn-single-pro-tab-wrapper">
                <div className="mn-single-pro-tab-nav">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="details-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#mn-spt-nav-details"
                        type="button"
                        role="tab"
                        aria-controls="mn-spt-nav-details"
                        aria-selected="true"
                      >
                        Detail
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="info-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#mn-spt-nav-info"
                        type="button"
                        role="tab"
                        aria-controls="mn-spt-nav-info"
                        aria-selected="false"
                      >
                        Specifications
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="vendor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#mn-spt-nav-vendor"
                        type="button"
                        role="tab"
                        aria-controls="mn-spt-nav-vendor"
                        aria-selected="false"
                      >
                        Vendor
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#mn-spt-nav-review"
                        type="button"
                        role="tab"
                        aria-controls="mn-spt-nav-review"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content  mn-single-pro-tab-content">
                  <div
                    id="mn-spt-nav-details"
                    className="tab-pane fade show active"
                  >
                    <div className="mn-single-pro-tab-desc">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <ul>
                        <li>
                          Any Product types that You want - Simple, Configurable
                        </li>
                        <li>Downloadable/Digital Products, Virtual Products</li>
                        <li>Inventory Management with Backordered items</li>
                        <li>Flatlock seams throughout.</li>
                      </ul>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                      </p>
                    </div>
                  </div>
                  <div id="mn-spt-nav-info" className="tab-pane fade">
                    <div className="mn-single-pro-tab-moreinfo">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </p>
                      <ul>
                        <li>
                          <span>Model</span> SKU140
                        </li>
                        <li>
                          <span>Weight</span> 500 g
                        </li>
                        <li>
                          <span>Dimensions</span> 35 × 30 × 7 cm
                        </li>
                        <li>
                          <span>Color</span> Black, Pink, Red, White
                        </li>
                        <li>
                          <span>Size</span> 10 X 20
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="mn-spt-nav-vendor" className="tab-pane fade">
                    <div className="mn-single-pro-tab-moreinfo">
                      <div className="mn-product-vendor">
                        <div className="mn-vendor-info">
                          <span>
                            <img src="assets/img/vendor/1.html" alt="vendor" />
                          </span>
                          <div>
                            <h5>Ocean Crate</h5>
                            <p>Products : 358</p>
                            <p>Sales : 5587</p>
                          </div>
                        </div>
                        <div className="mn-detail">
                          <ul>
                            <li>
                              <span>Phone No. :</span> +00 987654321
                            </li>
                            <li>
                              <span>Email. :</span> Example@gmail.com
                            </li>
                            <li>
                              <span>Address. :</span> 2548 Broaddus Maple Court,
                              Madisonville KY 4783, USA.
                            </li>
                          </ul>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="mn-spt-nav-review" className="tab-pane fade">
                    <div className="row">
                      <div className="mn-t-review-wrapper mt-0">
                        <div className="mn-t-review-item">
                          <div className="mn-t-review-avtar">
                            <img src="assets/img/user/1.jpg" alt="user" />
                          </div>
                          <div className="mn-t-review-content">
                            <div className="mn-t-review-top">
                              <div className="mn-t-review-name">
                                Mariya Lykra
                              </div>
                              <div className="mn-t-review-rating mn-pro-rating">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill grey" />
                              </div>
                            </div>
                            <div className="mn-t-review-bottom">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type
                                specimen.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mn-t-review-item">
                          <div className="mn-t-review-avtar">
                            <img src="assets/img/user/2.jpg" alt="user" />
                          </div>
                          <div className="mn-t-review-content">
                            <div className="mn-t-review-top">
                              <div className="mn-t-review-name">
                                Moris Willson
                              </div>
                              <div className="mn-t-review-rating mn-pro-rating">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill grey" />
                                <i className="ri-star-fill grey" />
                              </div>
                            </div>
                            <div className="mn-t-review-bottom">
                              <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mn-ratting-content">
                        <h3>Add a Review</h3>
                        <div className="mn-ratting-form">
                          <form action="#">
                            <div className="mn-ratting-star">
                              <span>Your rating:</span>
                              <div className="mn-t-review-rating mn-pro-rating">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill grey" />
                                <i className="ri-star-fill grey" />
                                <i className="ri-star-fill grey" />
                              </div>
                            </div>
                            <div className="mn-ratting-input">
                              <input
                                name="your-name"
                                placeholder="Name"
                                type="text"
                              />
                            </div>
                            <div className="mn-ratting-input">
                              <input
                                name="your-email"
                                placeholder="Email*"
                                type="email"
                                required=""
                              />
                            </div>
                            <div className="mn-ratting-input form-submit">
                              <textarea
                                name="your-commemt"
                                placeholder="Enter Your Comment"
                                defaultValue={""}
                              />
                              <button
                                className="mn-btn-2"
                                type="submit"
                                value="Submit"
                              >
                                <span>Submit</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Related Section */}
            <section className="mn-related-product m-t-30">
              <div className="mn-title">
                <h2>
                  Related <span>Products</span>
                </h2>
              </div>
              <div className="mn-related owl-carousel">
                <div className="mn-product-card">
                  <div className="mn-product-img">
                    <div className="lbl">
                      <span className="trending">trending</span>
                    </div>
                    <div className="mn-img">
                      <a href="/product-detail" className="image">
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
                      <a href="/shop-right-sidebar">T-shirt</a>
                      <ul>
                        <li>s</li>
                        <li>m</li>
                        <li>xl</li>
                      </ul>
                    </div>
                    <h5>
                      <a href="#">Cotton fabric T-shirt</a>
                    </h5>
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
                              <span style={{ backgroundColor: "#e97e70" }} />
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
                              <span style={{ backgroundColor: "#70e98a" }} />
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
                <div className="mn-product-card">
                  <div className="mn-product-img">
                    <div className="mn-img">
                      <a href="product-detail" className="image">
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
                      <a href="/shop-right-sidebar">Shoes</a>
                      <ul>
                        <li>7</li>
                        <li>8</li>
                        <li>10</li>
                      </ul>
                    </div>
                    <h5>
                      <a href="#">Special sport shoes</a>
                    </h5>
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
                              <span style={{ backgroundColor: "#0e0e0e" }} />
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
                              <span style={{ backgroundColor: "#c54367" }} />
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
                <div className="mn-product-card">
                  <div className="mn-product-img">
                    <div className="lbl">
                      <span className="new">new</span>
                    </div>
                    <div className="mn-img">
                      <a href="/product-detail" className="image">
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
                      <a href="/shop-right-sidebar">Top</a>
                      <ul>
                        <li>s</li>
                        <li>m</li>
                      </ul>
                    </div>
                    <h5>
                      <a href="#">Cotton fabric Top</a>
                    </h5>
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
                              <span style={{ backgroundColor: "#f3f3f3" }} />
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
                              <span style={{ backgroundColor: "#e8c2ff" }} />
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
                <div className="mn-product-card">
                  <div className="mn-product-img">
                    <div className="lbl">
                      <span className="sale">sale</span>
                    </div>
                    <div className="mn-img">
                      <a href="/product-detail" className="image">
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
                      <a href="/shop-right-sidebar">watches</a>
                    </div>
                    <h5>
                      <a href="#">Mantu smart watch</a>
                    </h5>
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
                              <span style={{ backgroundColor: "#f3f3f3" }} />
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
                              <span style={{ backgroundColor: "#242424" }} />
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
                <div className="mn-product-card">
                  <div className="mn-product-img">
                    <div className="lbl">
                      <span className="discount">20% off</span>
                    </div>
                    <div className="mn-img">
                      <a href="/product-detail" className="image">
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
                      <a href="/shop-right-sidebar">belt</a>
                    </div>
                    <h5>
                      <a href="#">Mantu leather belt</a>
                    </h5>
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
                              <span style={{ backgroundColor: "#d48a5b" }} />
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
                              <span style={{ backgroundColor: "#242424" }} />
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
                <div className="mn-product-card">
                  <div className="mn-product-img">
                    <div className="mn-img">
                      <a href="/product-detail" className="image">
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
                      <a href="/shop-right-sidebar">Bag</a>
                      <ul>
                        <li>m</li>
                        <li>l</li>
                      </ul>
                    </div>
                    <h5>
                      <a href="#">Leather bag</a>
                    </h5>
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
                              <span style={{ backgroundColor: "#b75956" }} />
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
                              <span style={{ backgroundColor: "#0e0e0e" }} />
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
            </section>
          </div>
          {/* Sidebar Area Start */}
          <div className="mn-shop-sidebar col-lg-3 col-md-12 m-t-991">
            <div id="shop_sidebar">
              <div className="mn-sidebar-wrap">
                {/* Sidebar Filters Block */}
                <div className="mn-sidebar-block drop">
                  <div className="mn-sb-title">
                    <h3 className="mn-sidebar-title">Filters</h3>
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
                              <a href="/shop-right-sidebar">
                                Shampoo
                                <span>-25</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="/shop-right-sidebar">
                                Body Wash
                                <span>-52</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="/shop-right-sidebar">
                                Sunscreen
                                <span>-40</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="/shop-right-sidebar">
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
                          href="/shop-right-sidebar"
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
                          href="/shop-right-sidebar"
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
                              <a href="/shop-right-sidebar">
                                Laptop
                                <span>-25</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="/shop-right-sidebar">
                                Air Conditioner
                                <span>-52</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="/shop-right-sidebar">
                                Trimmer
                                <span>-40</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="mn-sidebar-sub-item">
                              <a href="/shop-right-sidebar">
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
                    <a href="/shop-right-sidebar">
                      <span>Clothes</span>
                    </a>
                    <a href="/shop-right-sidebar">
                      <span>Fruits</span>
                    </a>
                    <a href="/shop-right-sidebar">
                      <span>Snacks</span>
                    </a>
                    <a href="/shop-right-sidebar">
                      <span>Dairy</span>
                    </a>
                    <a href="/shop-right-sidebar">
                      <span>Seafood</span>
                    </a>
                    <a href="/shop-right-sidebar">
                      <span>Fastfood</span>
                    </a>
                    <a href="/shop-right-sidebar">
                      <span>Toys</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>


    </>
  );
};

export default productDetail;