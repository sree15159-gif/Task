import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShopBannerRightSidebar = () => {
  return (
    <>
      <Header />
      
      <main className="wrapper sb-default">
        {/* Sidebar */}
        <div className="mn-sidebar-overlay"></div>
        <div className="mn-sidebar">
          <div className="mn-sidebar-body">
            <button type="button" className="side-close" title="Close"></button>
            <ul className="mn-sb-list">
              <li className="mn-sb-title condense"><span>Categories</span></li>
              <li className="mn-sb-item sb-drop-item">
                <a href="#" className="mn-drop-toggle">
                  <img src="/assets/img/icons/clothes-2.svg" alt="clothes" />
                  <span className="condense">
                    Clothes<i className="drop-arrow ri-arrow-down-s-line"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mn-main-content">
          <div className="row">
            <div className="col-xxl-12">
              <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Shop Banner Right Sidebar</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Shop Banner Right Sidebar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <section className="mn-banner m-b-30">
        <div className="container">
          <div className="mn-banner-content">
            <h3>Shop Banner</h3>
            <p>Featured banner content will be displayed here.</p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="mn-shop p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="mn-shop-content">
                <h3>Shop Banner Right Sidebar Page</h3>
                <p>This is the shop page with banner and right sidebar layout.</p>
                {/* Product grid will be added here */}
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="mn-shop-sidebar">
                <h4>Sidebar</h4>
                <p>Filters and categories will be displayed here.</p>
                {/* Sidebar content will be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ShopBannerRightSidebar;