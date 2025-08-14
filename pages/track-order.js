import Link from 'next/link';
import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';

const TrackOrder = () => {
  

  return (
    <>
 
      
<div className="">
  <div className="mn-breadcrumb m-b-30">
    <div className="row">
      <div className="col-12">
        <div className="row gi_breadcrumb_inner">
          <div className="col-md-6 col-sm-12">
            <h2 className="mn-breadcrumb-title">Track Order</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* mn-breadcrumb-list start */}
            <ul className="mn-breadcrumb-list">
              <li className="mn-breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="mn-breadcrumb-item active">Track Order</li>
            </ul>
            {/* mn-breadcrumb-list end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Track Order section */}
  <section className="mn-track p-b-15">
    <div className="mn-title d-none">
      <h2>
        Track<span> Order</span>
      </h2>
      <p>We delivering happiness and needs, Faster than you can think.</p>
    </div>
    <div className="row">
      <div className="container">
        <div className="mn-track-box">
          {/* Details*/}
          <div className="row m-b-m-30">
            <div className="col-lg-3 col-sm-6 col-12 m-b-30">
              <div className="mn-track-card">
                <span className="mn-track-title">order</span>
                <span>#5874</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 m-b-30">
              <div className="mn-track-card">
                <span className="mn-track-title">Men's T-shirt</span>
                <span>m975mn</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 m-b-30">
              <div className="mn-track-card">
                <span className="mn-track-title">Expected date</span>
                <span>June 15, 2026</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 m-b-30">
              <div className="mn-track-card">
                <span className="mn-track-title">Progress</span>
                <span>Quality Check</span>
              </div>
            </div>
          </div>
          {/* Progress*/}
          <div className="mn-steps">
            <div className="mn-steps-body">
              <div className="mn-step mn-step-completed">
                <span className="mn-step-indicator">
                  <i className="ri-check-line" />
                </span>
                <span className="mn-step-icon">
                  <i className="ri-shield-check-line" />
                </span>
                Order
                <br /> confirmed
              </div>
              <div className="mn-step mn-step-completed">
                <span className="mn-step-indicator">
                  <i className="ri-check-line" />
                </span>
                <span className="mn-step-icon">
                  <i className="ri-settings-5-line" />
                </span>
                Processing
                <br /> order
              </div>
              <div className="mn-step mn-step-active">
                <span className="mn-step-icon">
                  <i className="ri-gift-line" />
                </span>
                Quality
                <br /> check
              </div>
              <div className="mn-step">
                <span className="mn-step-icon">
                  <i className="ri-truck-line" />
                </span>
                Product
                <br /> dispatched
              </div>
              <div className="mn-step">
                <span className="mn-step-icon">
                  <i className="ri-home-4-line" />
                </span>
                Product
                <br /> delivered
              </div>
            </div>
            <div className="mn-steps-header">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
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

export default TrackOrder;