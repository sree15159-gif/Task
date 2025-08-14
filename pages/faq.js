import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';


const faq = () => {
  return (
    <>
<div className="">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">FAQ Page</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">FAQ Page</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Faq section */}
  <section className="mn-faq p-b-15">
    <div className="mn-title d-none">
      <h2>
        frequently asked <span>questions</span>
      </h2>
      <p>Customer service management.</p>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="mn-accordion style-1">
          <div className="mn-accordion-item">
            <h4 className="mn-accordion-header">
              What is the multi vendor services?
            </h4>
            <div className="mn-accordion-body show">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
              <code>dummy text</code> ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book.
            </div>
          </div>
          <div className="mn-accordion-item">
            <h4 className="mn-accordion-header">
              How to buy many products at a time?
            </h4>
            <div className="mn-accordion-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
              <code>dummy text</code> ever. unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="mn-accordion-item">
            <h4 className="mn-accordion-header">Refund policy for customer.</h4>
            <div className="mn-accordion-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="mn-accordion-item">
            <h4 className="mn-accordion-header">
              Exchange policy for customer.
            </h4>
            <div className="mn-accordion-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
              <code>dummy text</code> ever since the 1500s, when an Ipsum has
              been the industry's unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="mn-accordion-item">
            <h2 className="mn-accordion-header">
              Give a way products available.
            </h2>
            <div className="mn-accordion-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
              <code>dummy text</code> ever since the 1500s, when an Ipsum has
              been the industry's standard <code>dummy text</code> ever since
              the 1500s. unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 m-t-991">
        <div className="mn-accordion style-1">
          <div className="mn-accordion-item">
            <h4 className="mn-accordion-header">Refund policy for customer.</h4>
            <div className="mn-accordion-body show">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
              <code>dummy text</code> ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book.
            </div>
          </div>
          <div className="mn-accordion-item">
            <h4 className="mn-accordion-header">
              Exchange policy for customer.
            </h4>
            <div className="mn-accordion-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
              <code>dummy text</code> ever since the 1500s, when an Ipsum has
              been the industry's unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="mn-accordion-item">
            <h4 className="mn-accordion-header">
              How to buy many products at a time?
            </h4>
            <div className="mn-accordion-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
              <code>dummy text</code> ever. unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="mn-accordion-item">
            <h2 className="mn-accordion-header">
              Give a way products available.
            </h2>
            <div className="mn-accordion-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
              <code>dummy text</code> ever since the 1500s, when an Ipsum has
              been the industry's standard <code>dummy text</code> ever since
              the 1500s. unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </div>
          </div>
          <div className="mn-accordion-item">
            <h4 className="mn-accordion-header">
              What is the multi vendor services?
            </h4>
            <div className="mn-accordion-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



 
    </>
  );
};

export default faq;