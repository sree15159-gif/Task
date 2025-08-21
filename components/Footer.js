import Link from 'next/link';

const Footer = () => {
  return (
      <footer className="m-t-15">
          <div className="mn-footer">
              <div className="footer-container">
                  <div className="footer-top p-tb-30">
                      <div className="row m-minus-991">
                          <div className="col-sm-12 col-lg-3 mn-footer-cat">
                              <div className="mn-footer-widget mn-footer-company">
                                  <img src="/assets/img/logo/logo.png" className="mn-footer-logo" alt="footer logo" />
                                  <img src="/assets/img/logo/logo.png" className="mn-footer-dark-logo"
                                      alt="footer logo" />
                                  <p className="mn-footer-detail">The Mantu is the biggest market of grocery products. Get
                                      your daily needs from our store.</p>
                                  <div className="mn-app-store">
                                      <Link
                                          href="#"
                                          onClick={(e) => e.preventDefault()}
                                          className="app-img"
                                          legacyBehavior>
                                          <img src="/assets/img/footer/android.png" className="adroid" alt="apple" />
                                      </Link>
                                      <Link
                                          href="#"
                                          onClick={(e) => e.preventDefault()}
                                          className="app-img"
                                          legacyBehavior>
                                          <img src="/assets/img/footer/apple.png" className="apple" alt="apple" />
                                      </Link>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-12 col-lg-2 mn-footer-info">
                              <div className="mn-footer-widget">
                                  <h4 className="mn-footer-heading">Category</h4>
                                  <div className="mn-footer-links mn-footer-dropdown">
                                      <ul className="align-items-center">
                                          <li className="mn-footer-link">
                                              <Link href="/shop-right-sidebar">Fashion</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/shop-right-sidebar">Cosmetics</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/shop-right-sidebar">Bags & Purse</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/shop-right-sidebar">Shoes</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/shop-right-sidebar">Belts</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/shop-right-sidebar">Perfumes</Link>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-12 col-lg-2 mn-footer-account">
                              <div className="mn-footer-widget">
                                  <h4 className="mn-footer-heading">Company</h4>
                                  <div className="mn-footer-links mn-footer-dropdown">
                                      <ul className="align-items-center">
                                          <li className="mn-footer-link">
                                              <Link href="/about">About us</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/track-order">Delivery</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/faq">Legal Notice</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/terms">Terms of use</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/checkout">Secure payment</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/contact-us">Contact us</Link>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-12 col-lg-2 mn-footer-service">
                              <div className="mn-footer-widget">
                                  <h4 className="mn-footer-heading">Account</h4>
                                  <div className="mn-footer-links mn-footer-dropdown">
                                      <ul className="align-items-center">
                                          <li className="mn-footer-link">
                                              <Link href="/login">Sign In</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/cart">View Cart</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/faq">Return Policy</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/shop-right-sidebar">Become a Vendor</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/product-detail">Affiliate Program</Link>
                                          </li>
                                          <li className="mn-footer-link">
                                              <Link href="/checkout">Payments</Link>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-12 col-lg-3 mn-footer-cont-social">
                              <div className="mn-footer-contact">
                                  <div className="mn-footer-widget">
                                      <h4 className="mn-footer-heading">Contact</h4>
                                      <div className="mn-footer-links mn-footer-dropdown">
                                          <ul className="align-items-center">
                                              <li className="mn-footer-link mn-foo-location">
                                                  <span className="mt-15px">
                                                      <i className="ri-map-pin-line"></i>
                                                  </span>
                                                  <p>1234 Elm Street Springfield Avenue, Brooklyn den, IL 62704 USA.
                                                  </p>
                                              </li>
                                              <li className="mn-footer-link mn-foo-call">
                                                  <span>
                                                      <i className="ri-whatsapp-line"></i>
                                                  </span>
                                                  <Link href="tel:+009876543210">+00 9876543210</Link>
                                              </li>
                                              <li className="mn-footer-link mn-foo-mail">
                                                  <span>
                                                      <i className="ri-mail-line"></i>
                                                  </span>
                                                  <Link href="mailto:example@email.com">example@email.com</Link>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="mn-footer-social">
                                  <div className="mn-footer-widget">
                                      <div className="mn-footer-links mn-footer-dropdown">
                                          <ul className="align-items-center">
                                              <li className="mn-footer-link">
                                                  <Link href="#" onClick={(e) => e.preventDefault()} legacyBehavior><i className="ri-facebook-fill"></i></Link>
                                              </li>
                                              <li className="mn-footer-link">
                                                  <Link href="#" onClick={(e) => e.preventDefault()} legacyBehavior><i className="ri-twitter-fill"></i></Link>
                                              </li>
                                              <li className="mn-footer-link">
                                                  <Link href="#" onClick={(e) => e.preventDefault()} legacyBehavior><i className="ri-linkedin-fill"></i></Link>
                                              </li>
                                              <li className="mn-footer-link">
                                                  <Link href="#" onClick={(e) => e.preventDefault()} legacyBehavior><i className="ri-instagram-line"></i></Link>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="footer-bottom">
                      <div className="row">
                          <div className="mn-bottom-info">
                              <div className="footer-copy">
                                  <div className="footer-bottom-copy ">
                                      <div className="mn-copy">Copyright © <span id="copyright_year"></span>
                                          <Link href="/" className="site-name">The Mantu</Link> all rights reserved.
                                      </div>
                                  </div>
                              </div>
                              <div className="footer-bottom-right">
                                  <div className="footer-bottom-payment d-flex justify-content-center">
                                      <div className="payment-link">
                                          <img src="/assets/img/footer/payment.png" alt="payment" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
