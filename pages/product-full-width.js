import Link from 'next/link';

const ProductFullWidth = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Product Full Width</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item"><Link href="/shop-right-sidebar">Shop</Link></li>
                  <li className="mn-breadcrumb-item active">Product Full Width</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-product-detail p-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="mn-product-images">
                <h4>Product Images</h4>
                <p>Product image gallery will be displayed here in full width.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="mn-product-info">
                <h3>Product Full Width Page</h3>
                <p>This is the product page with full width layout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductFullWidth;