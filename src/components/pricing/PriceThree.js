import React from "react";
import Link from 'next/link'
import {FiCheck} from 'react-icons/fi'
const PriceThree = () => {
  return (
    <section className="cyber-price ptb-120 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="section-heading text-center mb-5">
              <h5 className="h6 text-primary">Pricing Table</h5>
              <h2>Affordable Price Plans</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-lg-4">
            <div className="cyber-price-chart">
              <div className="position-relative single-pricing-wrap rounded bg-white custom-shadow p-5 mb-4 mb-lg-0">
                <div className="pricing-header mb-32">
                  <h4 className="display-6 fw-semi-bold">$29/M</h4>
                  <span>Free Plan</span>
                </div>
                <div className="pricing-info mb-4">
                  <ul className="pricing-feature-list list-unstyled">
                    <li>
                      <i className="text-success me-2"><FiCheck/></i>1 Team
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Installed Agent
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Real-Time Feedback
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Video Dedicated Support
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Attacked Targets Per Month
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Team Collaboration Tools
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Attacked Targets Per Month
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Automated Updated Features
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      24/7 Life time Support
                    </li>
                  </ul>
                </div>
                <Link
                  href="/request-demo"
                >
                    <a className="btn btn-outline-primary mt-2"> Get Started Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-price-chart">
              <div className="position-relative single-pricing-wrap rounded bg-gradient text-white p-5 mb-4 mb-lg-0">
                <div className="pricing-header mb-32">
                  <h4 className="display-6 fw-semi-bold">$49/M</h4>
                  <span className="text-white">Free Plan</span>
                </div>
                <div className="pricing-info mb-4">
                  <ul className="pricing-feature-list list-unstyled">
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1 Team
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Installed Agent
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Real-Time Feedback
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Video Dedicated Support
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Attacked Targets Per Month
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Team Collaboration Tools
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Attacked Targets Per Month
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Automated Updated Features
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      24/7 Life time Support
                    </li>
                  </ul>
                </div>
                <Link href="/request-demo" >
                    <a className="btn btn-primary mt-2">Get Started Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-price-chart">
              <div className="position-relative single-pricing-wrap rounded bg-white custom-shadow p-5 mb-4 mb-lg-0">
                <div className="pricing-header mb-32">
                  <h4 className="display-6 fw-semi-bold">$29/M</h4>
                  <span>Free Plan</span>
                </div>
                <div className="pricing-info mb-4">
                  <ul className="pricing-feature-list list-unstyled">
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1 Team
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Installed Agent
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Real-Time Feedback
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Video Dedicated Support
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Attacked Targets Per Month
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Team Collaboration Tools
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>1
                      Attacked Targets Per Month
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      Automated Updated Features
                    </li>
                    <li>
                     <i className="text-success me-2"><FiCheck/></i>
                      24/7 Life time Support
                    </li>
                  </ul>
                </div>
                <Link
                  href="/request-demo"
                >
                    <a className="btn btn-outline-primary mt-2">Get Started Now</a>
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceThree;
