import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';

const ContactUs = () => {
  return (
    <>
  
      
<div className="">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">Contact us Page</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">Contact us Page</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact us section */}
  <section className="mn-contact p-b-15">
    <div className="mn-title d-none">
      <h2>
        Get in <span>Touch</span>
      </h2>
      <p>
        Please select a topic below related to you inquiry. If you don't fint
        what you need, fill out our contact form.
      </p>
    </div>
    <div className="row p-t-80">
      <div className="col-md-6 mn-contact-detail m-b-m-30">
        <div className="mn-box m-b-30">
          <div className="detail">
            <div className="icon">
              <i className="ri-mail-send-line" />
            </div>
            <div className="info">
              <h3 className="title">Contact Mail</h3>
              <p>mail.example@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mn-box m-b-30">
          <div className="detail">
            <div className="icon">
              <i className="ri-customer-service-2-line" />
            </div>
            <div className="info">
              <h3 className="title">Contact Phone</h3>
              <p>(+91)-9876XXXXX</p>
            </div>
          </div>
        </div>
        <div className="mn-box m-b-30">
          <div className="detail">
            <div className="icon">
              <i className="ri-map-pin-line" />
            </div>
            <div className="info">
              <h3 className="title">Address</h3>
              <p>Ruami Moraes Filho, Salvador - MA, 40352, Brazil.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 m-t-767">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="umail"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="message"
              rows={5}
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <button type="submit" className="mn-btn-2">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</div>


      
    </>
  );
};

export default ContactUs;