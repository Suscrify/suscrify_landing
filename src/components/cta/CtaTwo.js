/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const CtaTwo = () => {
  return (
    <>
      <section
        className="app-two-cta ptb-120 text-white"
        style={{ background: "url('/app-two-mockup-bg.png')" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 col-xl-6">
              <div className="app-two-mockup position-relative text-center pe-5">
                <img
                  src="/app-two-mockup.png"
                  alt="App mockup"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-10">
              <div className="app-two-cta-right px-md-0 pt-5 pt-md-0">
                <div className="section-heading text-white">
                  <h2 className="text-white">
                    Powerful Solutions for Your Business Needs
                  </h2>
                  <p>
                    Quickly incubate functional channels with multidisciplinary
                    architectures authoritatively fabricate.
                  </p>
                </div>
                <div className="cta-count">
                  <ul className="list-unstyled d-flex">
                    <li className="me-4">
                      <h3 className="text-white mb-0">72k+</h3>
                      <span>Happy users</span>
                    </li>
                    <li className="me-4">
                      <h3 className="text-white mb-0">16</h3>
                      <span>Good reviews</span>
                    </li>
                    <li className="me-4">
                      <h3 className="text-white mb-0">28k+</h3>
                      <span>App download</span>
                    </li>
                  </ul>
                </div>
                <div className="action-btns mt-5">
                  <Link href="/contact-us">
                    <a className="btn btn-outline-light">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaTwo;
