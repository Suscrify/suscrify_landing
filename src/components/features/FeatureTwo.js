import React from 'react';
import Link from 'next/link';

import SectionTitle from '../common/SectionTitle';

const FeatureTwo = ({ cardDark }) => {
  return (
    <>
      <section
        className={`feature-section ptb-120 ${
          cardDark ? 'bg-dark' : 'bg-light'
        }`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              {cardDark ? (
                <SectionTitle
                  subtitle="Services"
                  title="Best Services Grow Your Business Value"
                  description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                  centerAlign
                  dark
                />
              ) : (
                <SectionTitle
                  subtitle="Services"
                  title="Best Services Grow Your Business Value"
                  description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="feature-grid">
                <div
                  className={`shadow-sm highlight-card rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                    <i className="fal fa-analytics icon-sm text-primary"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Advanced analytics</h3>
                    <p>
                      Synergistically pursue accurate initiatives without
                      economically sound imperatives.
                    </p>
                    <p>
                      Professionally architect unique process improvements via
                      optimal.
                    </p>
                    <h6 className="mt-4">Included with...</h6>
                    <ul className="list-unstyled mb-0">
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        High-converting
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Personal branding
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Modernized prospecting
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Clean and modern
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Showcasing success
                      </li>
                      <li className="py-1">
                        <i
                          className={`fad fa-check-circle me-2 ${
                            cardDark ? 'text-warning' : 'text-primary'
                          }`}
                        ></i>
                        Bootstrap latest version
                      </li>
                    </ul>
                  </div>
                  <Link href="/single-service">
                    <a className="link-with-icon text-decoration-none mt-3">
                      {' '}
                      View Details <i className="far fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                    <i className="fal fa-file-chart-line icon-sm text-success"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Automated Reports</h3>
                    <p className="mb-0">
                      Synergistically pursue accurate initiatives without
                      economically imperatives.
                    </p>
                  </div>
                  <Link href="/single-service">
                    <a className="link-with-icon text-decoration-none mt-3">
                      {' '}
                      View Details <i className="far fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                    <i className="fal fa-user-friends icon-sm text-danger"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">User Journey Flow</h3>
                    <p className="mb-0">
                      Quickly productize prospective value before collaborative
                      benefits.
                    </p>
                  </div>
                  <Link href="/single-service">
                    <a className="link-with-icon text-decoration-none mt-3">
                      {' '}
                      View Details <i className="far fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="icon-box inline-block rounded-circle bg-dark-soft mb-32">
                    <i className="fal fa-spell-check icon-sm text-dark"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Compare A/B Testing</h3>
                    <p className="mb-0">
                      Credibly disintermediate functional processes for team
                      driven action.
                    </p>
                  </div>
                  <Link href="/single-service">
                    <a className="link-with-icon text-decoration-none mt-3">
                      View Details <i className="far fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                    <i className="fal fa-cog icon-sm text-warning"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5">Easy Customization</h3>
                    <p className="mb-0">
                      Dynamically develop ubiquitous opportunities whereas
                      relationships.
                    </p>
                  </div>
                  <Link href="/single-service">
                    <a className="link-with-icon text-decoration-none mt-3">
                      {' '}
                      View Details <i className="far fa-arrow-right"></i>
                    </a>
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

export default FeatureTwo;
