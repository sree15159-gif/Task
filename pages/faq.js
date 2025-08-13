import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
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
                <h2 className="mn-breadcrumb-title">Frequently Asked Questions</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-faq p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mn-faq-content">
                <h3>Frequently Asked Questions</h3>
                <div className="mn-faq-list">
                  <div className="mn-faq-item">
                    <h4>How do I place an order?</h4>
                    <p>You can place an order by browsing our products, adding items to your cart, and proceeding to checkout.</p>
                  </div>
                  <div className="mn-faq-item">
                    <h4>What payment methods do you accept?</h4>
                    <p>We accept all major credit cards, PayPal, and other secure payment methods.</p>
                  </div>
                  <div className="mn-faq-item">
                    <h4>How long does shipping take?</h4>
                    <p>Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.</p>
                  </div>
                  <div className="mn-faq-item">
                    <h4>What is your return policy?</h4>
                    <p>We offer a 30-day return policy for all unused items in their original packaging.</p>
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

export default FAQ;