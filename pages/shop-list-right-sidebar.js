import Link from 'next/link';

const ShopListRightSidebar = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Shop List Right Sidebar</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Shop List Right Sidebar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <section className="mn-shop p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="mn-shop-content">
                <h3>Shop List Right Sidebar Page</h3>
                <p>This is the shop page with list view and right sidebar layout.</p>
                {/* Product list will be added here */}
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
  );
};

export default ShopListRightSidebar;