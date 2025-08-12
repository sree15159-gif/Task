import Link from 'next/link';

const BlogDetailFullWidth = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Blog Detail Full Width</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item"><Link href="/blog-full-width">Blog</Link></li>
                  <li className="mn-breadcrumb-item active">Blog Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-blog-detail p-b-15">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="mn-blog-detail-content">
                <h3>Blog Post Title - Full Width</h3>
                <div className="mn-blog-meta text-center">
                  <span>By Admin</span>
                  <span>January 15, 2024</span>
                  <span>Fashion, Lifestyle</span>
                </div>
                <div className="mn-blog-image">
                  <p>[Blog featured image will be displayed here in full width]</p>
                </div>
                <div className="mn-blog-text">
                  <p>This is the detailed content of the blog post in full width layout. The full article content will be displayed here with proper formatting and styling.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                  <h4>Subheading</h4>
                  <p>More detailed content continues here with additional paragraphs and information. The full width layout provides more space for content display.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
                <div className="mn-blog-tags text-center">
                  <h5>Tags:</h5>
                  <a href="#">Fashion</a>
                  <a href="#">Style</a>
                  <a href="#">Shopping</a>
                  <a href="#">Lifestyle</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailFullWidth;