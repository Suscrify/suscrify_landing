/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import { integrationFeature } from '../../utils/data';

const RelatedIntegration = () => {
  return (
    <section className="related-integration ptb-120 bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12">
            <div className="section-heading">
              <h4 className="h5 text-primary">Integration</h4>
              <h2>Integrate Third-party Custom App</h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="text-lg-end mb-4 mb-xl-0 mb-lg-0">
              <Link href="/integrations">
                <a className="btn btn-primary">View All Integration</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {integrationFeature.slice(0, 3).map((integration, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <Link href="/integration-single">
                <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 promo-border-hover bg-white mt-0 mt-xl-0 mt-lg-0 transition-base rounded-custom d-block overflow-hidden p-5">
                  <div className="position-relative connected-app-content">
                    <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                      <img
                        src={integration.logo}
                        width="40"
                        alt="integration"
                        className="img-fluid"
                      />
                    </div>
                    <h5>{integration.title} </h5>
                    <p className="mb-0 text-muted">{integration.info}</p>
                  </div>
                  <span
                    className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                  >
                    {integration.type}
                  </span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedIntegration;
