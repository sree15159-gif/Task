import Link from 'next/link';

const ProductDetail = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Product Detail</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item"><Link href="/shop-right-sidebar">Shop</Link></li>
                  <li className="mn-breadcrumb-item active">Product Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Content */}
      <section className="mn-product-detail p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="mn-product-images">
                <h4>Product Images</h4>
                <p>Product image gallery will be displayed here.</p>
                {/* Product images will be added here */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="mn-product-info">
                <h3>Product Detail Page</h3>
                <p>This is the product detail page. Product information, pricing, and purchase options will be displayed here.</p>
                {/* Product details will be added here */}
              </div>
            </div>
          </div>
          
          {/* Product Description */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="mn-product-description">
                <h4>Product Description</h4>
                <p>Detailed product description and specifications will be displayed here.</p>
                {/* Product description tabs will be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;