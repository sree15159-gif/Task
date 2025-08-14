import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';


const ShopListFullWidth = () => {
  return (
    <>
      
      <main className="wrapper sb-default">
      

        {/* <div className="mn-main-content"> */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Shop List Full Width</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Shop List Full Width</li>
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
                <h3>Shop List Full Width Page</h3>
                <p>This is the shop page with list view and full width layout.</p>
                {/* Product list will be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
          </div>
        {/* </div> */}
      </main>
      
      
    </>
  );
};

export default ShopListFullWidth;