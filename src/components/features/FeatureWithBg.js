/* eslint-disable @next/next/no-img-element */
import React from 'react';

import SectionTitle from '../common/SectionTitle';

const FeatureWithBg = () => {
  return (
    <>
      <section className="feature-section">
        <div className="container-fluid">
          <div className="feature-container mx-xl-5 position-relative bg-gradient ptb-120 rounded-custom">
            <img
              src="/feature-bg-1.jpg"
              alt="feature-bg"
              className="feature-bg-mockup position-absolute w-100 h-100 left-0 right-0 top-0 bottom-0 rounded-custom"
            />
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="feature-bg-img-content position-relative z-5">
                    <SectionTitle
                      title="Build Interactions Visually Website for Your Company"
                      description="  Intrinsicly impact resource sucking initiatives with
                        24/7 relationships communicate integrated products via
                        synergistic leadership skills. Conveniently pursue
                        future-proof web services through empowered bandwidth."
                    />
                    <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5 mb-0">
                      <li className="py-3">
                        <h3 className="feature-number text-primary mb-2">
                          55%
                        </h3>
                        <p>
                          Compellingly engage corporate scenarios for monetize.{' '}
                        </p>
                      </li>
                      <li className="py-3">
                        <h3 className="feature-number text-primary mb-2">
                          5K+
                        </h3>
                        <p>
                          Conveniently target enterprise vortals for
                          process-centric.{' '}
                        </p>
                      </li>
                      <li className="py-3">
                        <h3 className="feature-number text-primary mb-2">
                          15M+
                        </h3>
                        <p>
                          Completely strategize long-term high-impact paradigms.{' '}
                        </p>
                      </li>
                      <li className="py-3">
                        <h3 className="feature-number text-primary mb-2">
                          95%
                        </h3>
                        <p>
                          Uniquely negotiate compelling platforms via
                          standardized.{' '}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureWithBg;
