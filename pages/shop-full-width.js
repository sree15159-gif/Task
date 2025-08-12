import Link from 'next/link';

const ShopFullWidth = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Shop Full Width</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Shop Full Width</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <section className="mn-shop p-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mn-shop-content">
                <h3>Shop Full Width Page</h3>
                <p>This is the shop page with full width layout. Product listings will be displayed here.</p>
                {/* Product grid will be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopFullWidth;