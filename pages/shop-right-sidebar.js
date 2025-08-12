import Link from 'next/link';

const ShopRightSidebar = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Shop Right Sidebar</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Shop Right Sidebar</li>
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
                <h3>Shop Right Sidebar Page</h3>
                <p>This is the shop page with right sidebar layout. Product listings will be displayed here.</p>
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
  );
};

export default ShopRightSidebar;