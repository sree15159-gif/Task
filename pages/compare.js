import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';


const Compare = () => {
  return (
    <>
<div className="">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">Compare Page</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">Compare Page</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Compare section */}
  <section className="mn-compare-list p-b-15">
    <h2 className="d-none">Compare</h2>
    <div className="row">
      <div className="col-md-12">
        <div className="mn-compare-box">
          <div className="mn-compare-col title-col">
            <div className="mn-compare-cell">
              <div className="title">
                <h5>Product Image</h5>
              </div>
            </div>
            <div className="mn-compare-cell">
              <h5>Name</h5>
            </div>
            <div className="mn-compare-cell">
              <h5>Category</h5>
            </div>
            <div className="mn-compare-cell">
              <h5>Ratings</h5>
            </div>
            <div className="mn-compare-cell">
              <h5>Availability</h5>
            </div>
            <div className="mn-compare-cell">
              <h5>location</h5>
            </div>
            <div className="mn-compare-cell">
              <h5>Brand</h5>
            </div>
            <div className="mn-compare-cell">
              <h5>SKU</h5>
            </div>
            <div className="mn-compare-cell">
              <h5>Quantity</h5>
            </div>
            <div className="mn-compare-cell">
              <h5>Size</h5>
            </div>
            <div className="mn-compare-cell">
              <div className="desc">
                <h5>Description</h5>
              </div>
            </div>
          </div>
          <div className="mn-compare-col product-col">
            <a href="javascript:void(0)" className="remove-compare-product">
              <i className="ri-close-large-line" />
            </a>
            <div className="mn-compare-cell">
              <div className="list">
                <img src="assets/img/product/31.jpg" alt="product" />
                <div className="mn-action">
                  <ul>
                    <li>
                      <a
                        className="mn-btn-group wishlist mn-wishlist"
                        title="Wishlist"
                      >
                        <i className="ri-heart-line" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        title="Add To Cart"
                        className="mn-btn-group add-to-cart mn-add-cart"
                      >
                        <i className="ri-shopping-cart-line" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mn-compare-cell">
              <p>Men office suit cotton</p>
            </div>
            <div className="mn-compare-cell">
              <p>Snack &amp; Spices</p>
            </div>
            <div className="mn-compare-cell">
              <span className="mn-pro-rating">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill grey" />
              </span>
              <p className="rating-info">(15 Review)</p>
            </div>
            <div className="mn-compare-cell">
              <p className="i-stock">In Stock</p>
            </div>
            <div className="mn-compare-cell">
              <p>In Store , Online</p>
            </div>
            <div className="mn-compare-cell">
              <p>Bhisma Fashion</p>
            </div>
            <div className="mn-compare-cell">
              <p>54786</p>
            </div>
            <div className="mn-compare-cell">
              <p>1</p>
            </div>
            <div className="mn-compare-cell">
              <p>XL</p>
            </div>
            <div className="mn-compare-cell">
              <div className="desc">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
            </div>
          </div>
          <div className="mn-compare-col product-col">
            <a href="javascript:void(0)" className="remove-compare-product">
              <i className="ri-close-large-line" />
            </a>
            <div className="mn-compare-cell">
              <div className="list">
                <img src="assets/img/product/1.jpg" alt="product" />
                <div className="mn-action">
                  <ul>
                    <li>
                      <a
                        className="mn-btn-group wishlist mn-wishlist"
                        title="Wishlist"
                      >
                        <i className="ri-heart-line" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        title="Add To Cart"
                        className="mn-btn-group add-to-cart mn-add-cart"
                      >
                        <i className="ri-shopping-cart-line" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mn-compare-cell">
              <p>Round neck cotton t-shirt</p>
            </div>
            <div className="mn-compare-cell">
              <p>T-shirt</p>
            </div>
            <div className="mn-compare-cell">
              <span className="mn-pro-rating">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
              </span>
              <p className="rating-info">(654 Review)</p>
            </div>
            <div className="mn-compare-cell">
              <p className="o-stock">Out Of Stock</p>
            </div>
            <div className="mn-compare-cell">
              <p>Online</p>
            </div>
            <div className="mn-compare-cell">
              <p>Darsh Store</p>
            </div>
            <div className="mn-compare-cell">
              <p>85725</p>
            </div>
            <div className="mn-compare-cell">
              <p>2</p>
            </div>
            <div className="mn-compare-cell">
              <p>L</p>
            </div>
            <div className="mn-compare-cell">
              <div className="desc">
                <p>
                  Recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="mn-compare-col product-col">
            <a href="javascript:void(0)" className="remove-compare-product">
              <i className="ri-close-large-line" />
            </a>
            <div className="mn-compare-cell">
              <div className="list">
                <img src="assets/img/product/17.jpg" alt="product" />
                <div className="mn-action">
                  <ul>
                    <li>
                      <a
                        className="mn-btn-group wishlist mn-wishlist"
                        title="Wishlist"
                      >
                        <i className="ri-heart-line" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        title="Add To Cart"
                        className="mn-btn-group add-to-cart mn-add-cart"
                      >
                        <i className="ri-shopping-cart-line" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mn-compare-cell">
              <p>T-shirt for womens</p>
            </div>
            <div className="mn-compare-cell">
              <p>Clothes</p>
            </div>
            <div className="mn-compare-cell">
              <span className="mn-pro-rating">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill grey" />
                <i className="ri-star-fill grey" />
              </span>
              <p className="rating-info">(264 Review)</p>
            </div>
            <div className="mn-compare-cell">
              <p className="i-stock">In Stock</p>
            </div>
            <div className="mn-compare-cell">
              <p>In Store</p>
            </div>
            <div className="mn-compare-cell">
              <p>Peoples Store</p>
            </div>
            <div className="mn-compare-cell">
              <p>2546</p>
            </div>
            <div className="mn-compare-cell">
              <p>1</p>
            </div>
            <div className="mn-compare-cell">
              <p>M</p>
            </div>
            <div className="mn-compare-cell">
              <div className="desc">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
          </div>
          <div className="mn-compare-col product-col">
            <a href="javascript:void(0)" className="remove-compare-product">
              <i className="ri-close-large-line" />
            </a>
            <div className="mn-compare-cell">
              <div className="list">
                <img src="assets/img/product/35.jpg" alt="product" />
                <div className="mn-action">
                  <ul>
                    <li>
                      <a
                        className="mn-btn-group wishlist mn-wishlist"
                        title="Wishlist"
                      >
                        <i className="ri-heart-line" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        title="Add To Cart"
                        className="mn-btn-group add-to-cart mn-add-cart"
                      >
                        <i className="ri-shopping-cart-line" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mn-compare-cell">
              <p>Tshirt with jacket</p>
            </div>
            <div className="mn-compare-cell">
              <p>Fashion</p>
            </div>
            <div className="mn-compare-cell">
              <span className="mn-pro-rating">
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill grey" />
                <i className="ri-star-fill grey" />
              </span>
              <p className="rating-info">(325 Review)</p>
            </div>
            <div className="mn-compare-cell">
              <p className="i-stock">In Stock</p>
            </div>
            <div className="mn-compare-cell">
              <p>In Store</p>
            </div>
            <div className="mn-compare-cell">
              <p>Mariyas Store</p>
            </div>
            <div className="mn-compare-cell">
              <p>6542</p>
            </div>
            <div className="mn-compare-cell">
              <p>2</p>
            </div>
            <div className="mn-compare-cell">
              <p>XL</p>
            </div>
            <div className="mn-compare-cell">
              <div className="desc">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </p>
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

export default Compare;