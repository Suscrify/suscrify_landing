import React from 'react';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';

const FeatureImgThree = ({ paddingTop }) => {
  return (
    <>
      <section
        className={`feature-section-two ${
          paddingTop ? 'ptb-120' : 'pt-60 pb-120'
        } `}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-12">
              <SectionTitle
                subtitle="Features"
                title="Powerful Solutions for Your Business Needs"
                description="Quickly incubate functional channels with multidisciplinary
                  architectures authoritatively fabricate."
              />
              <div>
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
            <div className="col-lg-6 col-md-7">
              <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
                <ul className="img-overlay-list list-unstyled position-absolute">
                  <li
                    className="d-flex align-items-center bg-white rounded shadow-sm p-3"
                    data-aos="fade-right"
                    data-aos-delay="50"
                  >
                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                    <h6 className="mb-0">Create a Free Account</h6>
                  </li>
                  <li
                    className="d-flex align-items-center bg-white rounded shadow-sm p-3"
                    data-aos="fade-right"
                    data-aos-delay="100"
                  >
                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                    <h6 className="mb-0">Install Our Tracking Pixel</h6>
                  </li>
                  <li
                    className="d-flex align-items-center bg-white rounded shadow-sm p-3"
                    data-aos="fade-right"
                    data-aos-delay="150"
                  >
                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                    <h6 className="mb-0">Start Tracking your Website</h6>
                  </li>
                </ul>
                <Image
                  width={120}
                  height={100}
                  layout="responsive"
                  src="/feature-img3.jpg"
                  alt="feature"
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgThree;
