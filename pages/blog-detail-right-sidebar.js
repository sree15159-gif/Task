import Link from 'next/link';

const BlogDetailRightSidebar = () => {
  return (
    <div className="mn-main-content">
      <div className="mn-breadcrumb m-b-30">
        <div className="row">
          <div className="col-12">
            <div className="row gi_breadcrumb_inner">
              <div className="col-md-6 col-sm-12">
                <h2 className="mn-breadcrumb-title">Blog Detail Right Sidebar</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item"><Link href="/blog-right-sidebar">Blog</Link></li>
                  <li className="mn-breadcrumb-item active">Blog Detail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-blog-detail p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="mn-blog-detail-content">
                <h3>Blog Post Title</h3>
                <div className="mn-blog-meta">
                  <span>By Admin</span>
                  <span>January 15, 2024</span>
                  <span>Fashion, Lifestyle</span>
                </div>
                <div className="mn-blog-image">
                  <p>[Blog featured image will be displayed here]</p>
                </div>
                <div className="mn-blog-text">
                  <p>This is the detailed content of the blog post. The full article content will be displayed here with proper formatting and styling.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h4>Subheading</h4>
                  <p>More detailed content continues here with additional paragraphs and information.</p>
                </div>
                <div className="mn-blog-tags">
                  <h5>Tags:</h5>
                  <a href="#">Fashion</a>
                  <a href="#">Style</a>
                  <a href="#">Shopping</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="mn-blog-sidebar">
                <h4>Blog Sidebar</h4>
                <div className="mn-sidebar-widget">
                  <h5>Recent Posts</h5>
                  <ul>
                    <li><a href="#">Recent blog post 1</Link></li>
                    <li><a href="#">Recent blog post 2</Link></li>
                    <li><a href="#">Recent blog post 3</Link></li>
                  </ul>
                </div>
                <div className="mn-sidebar-widget">
                  <h5>Categories</h5>
                  <ul>
                    <li><a href="#">Fashion</Link></li>
                    <li><a href="#">Lifestyle</Link></li>
                    <li><a href="#">Shopping</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailRightSidebar;