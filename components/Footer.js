import Link from 'next/link';

const Footer = () => {
  return (
    // <footer className="mn-footer">
    //   <div className="mn-footer-inner">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-3 col-md-6 col-sm-12">
    //           <div className="mn-footer-widget">
    //             <div className="mn-footer-logo">
    //               <Link href="/">
    //                 <img src="/assets/img/logo/logo.png" alt="logo" />
    //               </Link>
    //             </div>
    //             <p>Your trusted eCommerce partner for quality products and exceptional service.</p>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6 col-sm-12">
    //           <div className="mn-footer-widget">
    //             <h4>Quick Links</h4>
    //             <ul>
    //               <li>
    //                 <Link href="/about">About Us</Link>
    //               </li>
    //               <li>
    //                 <Link href="/contact-us">Contact Us</Link>
    //               </li>
    //               <li>
    //                 <Link href="/faq">FAQ</Link>
    //               </li>
    //               <li>
    //                 <Link href="/login">Login</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6 col-sm-12">
    //           <div className="mn-footer-widget">
    //             <h4>Categories</h4>
    //             <ul>
    //               <li>
    //                 <Link href="/shop-right-sidebar">Fashion</Link>
    //               </li>
    //               <li>
    //                 <Link href="/shop-right-sidebar">Electronics</Link>
    //               </li>
    //               <li>
    //                 <Link href="/shop-right-sidebar">Home & Garden</Link>
    //               </li>
    //               <li>
    //                 <Link href="/shop-right-sidebar">Sports</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6 col-sm-12">
    //           <div className="mn-footer-widget">
    //             <h4>Contact Info</h4>
    //             <div className="mn-footer-contact">
    //               <p>
    //                 <i className="ri-map-pin-line"></i> 123 Main Street, City, Country
    //               </p>
    //               <p>
    //                 <i className="ri-phone-line"></i> +1 234 567 8900
    //               </p>
    //               <p>
    //                 <i className="ri-mail-line"></i> info@mantu.com
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-12">
    //           <div className="mn-footer-bottom">
    //             <p>&copy; 2024 Mantu. All rights reserved.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
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
										<a href="#" onClick={(e) => e.preventDefault()} className="app-img">
											<img src="/assets/img/footer/android.png" className="adroid" alt="apple" />
										</a>
										<a href="#" onClick={(e) => e.preventDefault()} className="app-img">
											<img src="/assets/img/footer/apple.png" className="apple" alt="apple" />
										</a>
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
												<Link href="/about-us">About us</Link>
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
													<a href="tel:+009876543210">+00 9876543210</a>
												</li>
												<li className="mn-footer-link mn-foo-mail">
													<span>
														<i className="ri-mail-line"></i>
													</span>
													<a href="mailto:example@email.com">example@email.com</a>
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
													<a href="#" onClick={(e) => e.preventDefault()}><i className="ri-facebook-fill"></i></a>
												</li>
												<li className="mn-footer-link">
													<a href="#" onClick={(e) => e.preventDefault()}><i className="ri-twitter-fill"></i></a>
												</li>
												<li className="mn-footer-link">
													<a href="#" onClick={(e) => e.preventDefault()}><i className="ri-linkedin-fill"></i></a>
												</li>
												<li className="mn-footer-link">
													<a href="#" onClick={(e) => e.preventDefault()}><i className="ri-instagram-line"></i></a>
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
