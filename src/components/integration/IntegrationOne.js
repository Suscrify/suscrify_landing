/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { integrationOneLeft, integrationOneRight } from '../../utils/data';

const IntegrationOne = () => {
  return (
    <section className="integration-section ptb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
            <div className="integration-list-wrap">
              {integrationOneLeft.map((integration, i) => (
                <span key={i + 1}>
                  <Link href="/integration-single">
                    <a
                      className={integration.className}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Your Brand Name"
                    >
                      <Image
                        width={40}
                        height={40}
                        src={integration.image}
                        alt="integration"
                        className="img-fluid rounded-circle"
                      />
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="section-heading text-center my-5 my-lg-0 my-xl-0">
              <h4 className="text-primary h5">Integration</h4>
              <h2>We Collaborate with Top Software Company</h2>
              <Link href="/integrations">
                <a className="mt-4 btn btn-primary"> View all Integration</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="col-lg-4">
              <div className="integration-list-wrap">
                {integrationOneRight.map((integration, i) => (
                  <span key={i + 1}>
                    <Link href="/integration-single">
                      <a
                        className={integration.className}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Your Brand Name"
                      >
                        <Image
                          width={40}
                          height={40}
                          src={integration.image}
                          alt="integration"
                          className="img-fluid rounded-circle"
                        />
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-100">
          <div className="col-lg-5 col-md-12">
            <a
              href="integration-single"
              className="mb-4 mb-lg-0 mb-xl-0 position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5"
            >
              <div className="position-relative connected-app-content">
                <div className="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                  <img
                    src="/integations/4.png"
                    width="40"
                    alt="integration"
                    className="img-fluid"
                  />
                </div>
                <h5>Google Drive</h5>
                <p className="mb-0 text-body">
                  Competently generate unique e-services and client-based
                  models. Globally engage tactical niche
                </p>
              </div>
              <span className="position-absolute integration-badge badge px-3 py-2 bg-primary-soft text-primary">
                Connect
              </span>
            </a>
          </div>

          <div className="col-lg-5 col-md-12">
            <a
              href="integration-single"
              className="position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5"
            >
              <div className="position-relative connected-app-content">
                <div className="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                  <img
                    src="/integations/9.png"
                    width="40"
                    alt="integration"
                    className="img-fluid"
                  />
                </div>
                <h5>Google Drive</h5>
                <p className="mb-0 text-body">
                  Globally engage tactical niche markets rather than
                  client-based competently generate services
                </p>
              </div>
              <span className="position-absolute integration-badge badge px-3 py-2 bg-danger-soft text-danger">
                Connected
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationOne;
