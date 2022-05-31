/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import SectionTitle from '../common/SectionTitle';

const CtaThree = () => {
  return (
    <>
      <section className="cta-section bg-dark ptb-120 position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-12">
              <div className="position-relative z-5">
                <SectionTitle
                  title="Actionable Reports to Grow your Business"
                  description="   Conveniently syndicate client-centric users for transparent
                  scenarios. Uniquely evolve partnerships rather than
                  cross-platform interfaces."
                />
                <Link href="/contact-us">
                  <a className="btn btn-primary">Get Start Now</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row align-items-center justify-content-center position-relative z-2">
                <div className="col-md-6">
                  <div className="cta-card rounded-custom text-center shadow p-5 bg-white my-4">
                    <h3 className="display-5 fw-bold">9/10</h3>
                    <p className="mb-0">
                      Overall our customer satisfaction score
                    </p>
                  </div>
                  <div className="cta-card rounded-custom text-center shadow p-5 bg-white my-4">
                    <h3 className="display-5 fw-bold">15K+</h3>
                    <p className="mb-0">Happy customer in worldwide</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cta-card rounded-custom text-center shadow p-5 bg-white">
                    <h3 className="display-5 fw-bold">95%</h3>
                    <p className="mb-0">
                      Our Customer customer satisfaction score
                    </p>
                  </div>
                </div>
                <div className="bg-circle rounded-circle position-absolute z--1">
                  <img
                    src="/shape/blob.svg"
                    alt="feature"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-30"></div>
          <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning left-5"></div>
        </div>
      </section>
    </>
  );
};

export default CtaThree;
