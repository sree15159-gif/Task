import Link from 'next/link';
import { useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 548,
      name: 'T-shirt for womens',
      price: 25,
      image: '/assets/img/product/1.jpg',
      date: '13 Aug 2026',
      status: 'out',
      statusText: 'Out Of Stock'
    },
    {
      id: 684,
      name: "Women's winter coat",
      price: 360,
      image: '/assets/img/product/23.jpg',
      date: '20 Jul 2027',
      status: 'available',
      statusText: 'Available'
    },
    {
      id: 548,
      name: 'Mantu smart watch',
      price: 74,
      image: '/assets/img/product/11.jpg',
      date: '28 Mar 2024',
      status: 'disabled',
      statusText: 'Disabled'
    },
    {
      id: 684,
      name: 'Leather textured bag',
      price: 245,
      image: '/assets/img/product/15.jpg',
      date: '16 Apr 2026',
      status: 'available',
      statusText: 'Available'
    }
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    // Add to cart logic here
    console.log('Added to cart:', item);
  };

  return (
    <>
      {/* Loader */}
      <div id="mn-overlay">
        <div className="loader">
          <img src="/assets/img/logo/loader.png" alt="loader" />
          <span className="shape"></span>
        </div>
      </div>

      {/* Sidebar */}
      <div className="mn-sidebar-overlay"></div>
      <div className="mn-sidebar">
        <div className="mn-sidebar-body">
          <button type="button" className="side-close" title="Close"></button>
          <ul className="mn-sb-list">
            <li className="mn-sb-title condense"><span>Fashion</span></li>
            <li className="mn-sb-item sb-drop-item">
              <a href="javascript:void(0)" className="mn-drop-toggle">
                <img src="/assets/img/icons/clothes-2.svg" alt="clothes" />
                <span className="condense">Clothes<i className="drop-arrow ri-arrow-down-s-line"></i></span>
              </a>
              <ul className="mn-sb-drop">
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">T-shirts</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Shirts</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">gowns</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Dresses</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">sharees</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">jeans</Link>
                </li>
              </ul>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/shoes.svg" alt="clothes" />
                <span className="condense">Shoes</span>
              </Link>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/glasses.svg" alt="glasses" />
                <span className="condense">glasses</span>
              </Link>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <a href="javascript:void(0)" className="mn-drop-toggle">
                <img src="/assets/img/icons/bag.svg" alt="bag" />
                <span className="condense">Bags<i className="drop-arrow ri-arrow-down-s-line"></i></span>
              </a>
              <ul className="mn-sb-drop">
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Purse</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Bags</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">wallet</Link>
                </li>
              </ul>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/hat.svg" alt="hat" />
                <span className="condense">Hat</span>
              </Link>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <a href="javascript:void(0)" className="mn-drop-toggle">
                <img src="/assets/img/icons/makeup.svg" alt="makeup" />
                <span className="condense">Makeup<i className="drop-arrow ri-arrow-down-s-line"></i></span>
              </a>
              <ul className="mn-sb-drop">
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Lipstick</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">eye liner</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">nail paint</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Makeup kit</Link>
                </li>
              </ul>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <a href="javascript:void(0)" className="mn-drop-toggle">
                <img src="/assets/img/icons/cosmetics.svg" alt="cosmetics" />
                <span className="condense">Cosmetics<i className="drop-arrow ri-arrow-down-s-line"></i></span>
              </a>
              <ul className="mn-sb-drop">
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Shampoo</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">face wash</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">body wash</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">sunscreen</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">serum</Link>
                </li>
              </ul>
            </li>
            <li className="mn-sb-title condense"><span>Bakery</span></li>
            <li className="mn-sb-item sb-drop-item">
              <a href="javascript:void(0)" className="mn-drop-toggle">
                <img src="/assets/img/icons/cake.svg" alt="Cake" />
                <span className="condense">Cake<i className="drop-arrow ri-arrow-down-s-line"></i></span>
              </a>
              <ul className="mn-sb-drop">
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">cup cake</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">pastry</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Cake</Link>
                </li>
              </ul>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/bread.svg" alt="Bread" />
                <span className="condense">Bread</span>
              </Link>
            </li>
            <li className="mn-sb-title condense"><span>Vegetables</span></li>
            <li className="mn-sb-item sb-drop-item">
              <a href="javascript:void(0)" className="mn-drop-toggle">
                <img src="/assets/img/icons/tuber.svg" alt="tuber" />
                <span className="condense">tuber root<i className="drop-arrow ri-arrow-down-s-line"></i></span>
              </a>
              <ul className="mn-sb-drop">
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Sweet Potato</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">Ginger</Link>
                </li>
                <li className="list">
                  <Link href="/shop-right-sidebar" className="mn-page-link drop">cassava</Link>
                </li>
              </ul>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/tomato.svg" alt="tomato" />
                <span className="condense">Tomato</span>
              </Link>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/lemon.svg" alt="lemon" />
                <span className="condense">Lemon</span>
              </Link>
            </li>
            <li className="mn-sb-title condense"><span>Fruits</span></li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/avocado.svg" alt="avocado" />
                <span className="condense">avocado</span>
              </Link>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/strawberry.svg" alt="strawberry" />
                <span className="condense">strawberry</span>
              </Link>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/cherry.svg" alt="cherry" />
                <span className="condense">cherry</span>
              </Link>
            </li>
            <li className="mn-sb-item sb-drop-item">
              <Link href="/shop-right-sidebar" className="mn-drop-toggle">
                <img src="/assets/img/icons/lychee.svg" alt="Lychee" />
                <span className="condense">Lychee</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Wishlist Page</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="mn-breadcrumb-item active">Wishlist Page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist section */}
      <section className="mn-wishlist-page p-b-15">
        <div className="mn-title d-none">
          <h2>Product <span>Wishlist</span></h2>
          <p>Your product wish is our first priority.</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mn-vendor-dashboard-card">
              <div className="mn-vendor-card-header">
                <h5>Wishlist</h5>
                <div className="mn-header-btn">
                  <Link className="mn-btn-2" href="/shop-full-width">
                    <span>Shop Now</span>
                  </Link>
                </div>
              </div>
              <div className="mn-vendor-card-body">
                <div className="mn-vendor-card-table">
                  <table className="mn-table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product</th>
                        <th scope="col">Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="wish-empt">
                      {wishlistItems.map((item, index) => (
                        <tr key={index} className="pro-gl-content">
                          <td><span>{item.id}</span></td>
                          <td data-label="Product" className="mn-cart-pro-name">
                            <Link href="/product-detail" className="mn-item">
                              <img className="prod-img" src={item.image} alt="product image" />
                              {item.name}
                            </Link>
                          </td>
                          <td><span>{item.date}</span></td>
                          <td><span>${item.price}</span></td>
                          <td>
                            <span className={item.status}>
                              {item.statusText}
                            </span>
                          </td>
                          <td>
                            <span className="tbl-btn">
                              <a 
                                className="mn-btn-2 add-to-cart mn-add-cart" 
                                href="javascript:void(0)"
                                title="Add To Cart"
                                onClick={() => addToCart(item)}
                              >
                                <span><i className="ri-shopping-cart-line"></i></span>
                              </a>
                              <a 
                                className="mn-btn-1 mn-remove-wish btn"
                                href="javascript:void(0)" 
                                title="Remove From List"
                                onClick={() => removeFromWishlist(item.id)}
                              >
                                <span><i className="ri-close-line"></i></span>
                              </a>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;