import React from 'react';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';

const FeatureImgTwo = () => {
  return (
    <>
      <section className="feature-section two-bg-dark-light ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div
                className="image-wrap mb-5 mb-md-0 mb-lg-0 mb-xl-0"
                data-aos="fade-right"
              >
                <Image
                  width={120}
                  height={100}
                  layout="responsive"
                  src="/dashboard-img.png"
                  alt="feature img"
                  className="img-fluid shadow rounded-custom"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div
                className="feature-content-wrap"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <SectionTitle
                  subtitle="Advanced Features"
                  title="Actionable Sale Reports to Grow your Business"
                  description="     Intrinsicly network transparent services whereas B2C ROI.
                  Globally create installed base quality vectors after
                  innovative."
                  leftAlign
                />
                <ul className="list-unstyled mt-5">
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <i className="fas fa-bezier-curve text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">Pixel Perfect Design</h3>
                      <p>
                        Progressively foster enterprise-wide systems whereas
                        equity invested web-readiness harness installed.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-danger rounded me-4">
                      <i className="fas fa-fingerprint text-white"></i>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">Unique &amp; Minimal Design</h3>
                      <p>
                        Dramatically administrate progressive metrics without
                        error-free globally simplify standardized.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgTwo;
