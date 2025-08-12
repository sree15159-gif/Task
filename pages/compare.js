import Link from 'next/link';

const Compare = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Compare Products</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Compare</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-compare p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mn-compare-content">
                <h3>Product Comparison</h3>
                <p>Compare different products side by side to make the best choice.</p>
                <div className="mn-compare-table">
                  <p>Product comparison table will be displayed here.</p>
                  {/* Comparison table will be added here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compare;