import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
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
                <h2 className="mn-breadcrumb-title">Contact Us</h2>
              </div>
              <div className="col-md-6 col-sm-12">
                <ul className="mn-breadcrumb-list">
                  <li className="mn-breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="mn-breadcrumb-item active">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mn-contact p-b-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="mn-contact-form">
                <h3>Get In Touch</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="col-12">
                      <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="mn-btn-1 btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="mn-contact-info">
                <h3>Contact Information</h3>
                <div className="mn-contact-item">
                  <h4>Address</h4>
                  <p>123 Main Street, City, Country</p>
                </div>
                <div className="mn-contact-item">
                  <h4>Phone</h4>
                  <p>+1 234 567 8900</p>
                </div>
                <div className="mn-contact-item">
                  <h4>Email</h4>
                  <p>info@mantu.com</p>
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

export default ContactUs;