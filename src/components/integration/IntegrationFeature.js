/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { integrationFeature } from '../../utils/data';

const IntegrationFeature = () => {
  return (
    <section className="our-integration ptb-120 bg-light">
      <div className="container">
        <div className="position-relative w-100">
          <div className="row">
            {integrationFeature.map((integration, i,) => (
              <div key={i + 1} className="col-lg-4 col-md-6">
                <Link href={integration.href}>
                  <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
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
      </div>
    </section>
  );
};

export default IntegrationFeature;
