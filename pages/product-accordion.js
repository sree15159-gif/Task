import Link from 'next/link';

const ProductAccordion = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Product Accordion</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item"><Link href="/shop-right-sidebar">Shop</Link></li>
                  <li className="mn-breadcrumb-item active">Product Accordion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-product-detail p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="mn-product-images">
                <h4>Product Images</h4>
                <p>Product image gallery will be displayed here.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="mn-product-info">
                <h3>Product Accordion Page</h3>
                <p>This is the product page with accordion-style information display.</p>
              </div>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col-12">
              <div className="mn-product-accordion">
                <h4>Product Information (Accordion Style)</h4>
                <p>Product details will be displayed in accordion format here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductAccordion;