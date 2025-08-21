import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogFullWidth = () => {
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
                <h2 className="mn-breadcrumb-title">Blog Full Width</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Blog Full Width</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-blog p-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mn-blog-content">
                <h3>Blog Posts - Full Width</h3>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="mn-blog-post">
                      <h4>Sample Blog Post 1</h4>
                      <p>This is a sample blog post in full width layout.</p>
              <Link href="/blog-detail-full-width" className="read-more">Read More</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="mn-blog-post">
                      <h4>Sample Blog Post 2</h4>
                      <p>This is another sample blog post in full width layout.</p>
              <Link href="/blog-detail-full-width" className="read-more">Read More</Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="mn-blog-post">
                      <h4>Sample Blog Post 3</h4>
                      <p>This is a third sample blog post in full width layout.</p>
              <Link href="/blog-detail-full-width" className="read-more">Read More</Link>
                    </div>
                  </div>
                </div>
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

export default BlogFullWidth;