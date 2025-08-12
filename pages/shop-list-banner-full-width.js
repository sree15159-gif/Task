import Link from 'next/link';

const ShopListBannerFullWidth = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Shop List Banner Full Width</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Shop List Banner Full Width</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <section className="mn-banner m-b-30">
        <div className="container-fluid">
          <div className="mn-banner-content">
            <h3>Shop List Banner Full Width</h3>
            <p>Featured banner content will be displayed here in full width.</p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="mn-shop p-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mn-shop-content">
                <h3>Shop List Banner Full Width Page</h3>
                <p>This is the shop page with list view, banner and full width layout.</p>
                {/* Product list will be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopListBannerFullWidth;