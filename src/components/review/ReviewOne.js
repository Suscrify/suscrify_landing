/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const ReviewOne = () => {
  return (
    <section className="customer-review pb-120 bg-dark">
      <div className="container">
        <div className="row">
          <div className="section-heading text-center" data-aos="fade-up">
            <h2 className="fw-medium h4">
              Rated 5 out of 5 stars by our customers
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div
              className="review-info-wrap text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <img
                src="/fb-logo-w.svg"
                width="130"
                alt="facebook"
                className="img-fluid m-auto"
              />
              <div className="review-info-content mt-2">
                <p className="mb-4">
                  4.9 out of 5 stars maintainable disseminate parallel team
                  effective standards communities.
                </p>
              </div>
              <Link href="/about-us">
                <a className="link-with-icon p-0 mt-auto text-decoration-none text-warning">
                  Read Reviews{' '}
                  <i>
                    <BsArrowRight className="far ms-2 mb-1" />
                  </i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="review-info-wrap text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/g-logo-w.svg"
                width="130"
                alt="google"
                className="img-fluid m-auto"
              />
              <div className="review-info-content mt-2">
                <p className="mb-4">
                  2k+ five star reviews excellent convergence without
                  professional methods of empowerment.
                </p>
              </div>
              <Link href="/about-us">
                <a className="link-with-icon p-0 mt-auto text-decoration-none text-warning">
                  Read Reviews{' '}
                  <i>
                    <BsArrowRight className="far ms-2 mb-1" />
                  </i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="review-info-wrap  text-center rounded-custom d-flex flex-column h-100 p-lg-5 p-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img
                src="/li-logo-w.svg"
                width="130"
                alt="linkedIn"
                className="img-fluid m-auto"
              />
              <div className="review-info-content mt-2">
                <p className="mb-4">
                  4.9 out of 5 stars maintainable disseminate parallel team
                  effective standards communities.
                </p>
              </div>
              <Link href="/about-us">
                <a className="link-with-icon p-0 mt-auto text-decoration-none text-warning">
                  Read Reviews{' '}
                  <i>
                    <BsArrowRight className="far ms-2 mb-1" />
                  </i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewOne;
