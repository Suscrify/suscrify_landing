/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import SectionTitle from '../common/SectionTitle';
import { FaCheckCircle } from 'react-icons/fa';
import { BsArrowRight, BsShieldCheck } from 'react-icons/bs';

const FeatureImgContentFive = () => {
  return (
    <section className="why-choose-us pt-60 pb-120">
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-12">
            <div className="feature-img-holder my-4 my-lg-0 my-xl-0">
              <img
                src="/screen/widget-7.png"
                className="img-fluid"
                alt="feature"
              />
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="why-choose-content">
              <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
                <span className="fal fa-2x text-white">
                  <BsShieldCheck />
                </span>
              </div>
              <SectionTitle
                title="Advanced Analytics, Understand Business"
                description="Distinctively promote parallel vortals with ubiquitous
                  e-markets. Proactively benchmark turnkey optimize
                  next-generation strategic leadership without resource sucking
                  ideas."
              />
              <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                <li className="py-1">
                  <FaCheckCircle className="fas fa-check-circle me-2 text-primary" />
                  Thought leadership
                </li>
                <li className="py-1">
                  <FaCheckCircle className="fas fa-check-circle me-2 text-primary" />
                  Personal branding
                </li>
                <li className="py-1">
                  <FaCheckCircle className="fas fa-check-circle me-2 text-primary" />
                  Modernized prospecting
                </li>
                <li className="py-1">
                  <FaCheckCircle className="fas fa-check-circle me-2 text-primary" />
                  Better win rates
                </li>
                <li className="py-1">
                  <FaCheckCircle className="fas fa-check-circle me-2 text-primary" />
                  Showcasing success
                </li>
                <li className="py-1">
                  <FaCheckCircle className="fas fa-check-circle me-2 text-primary" />
                  Sales compliance
                </li>
              </ul>
              <Link href="/about-us">
                <a className="read-more-link text-decoration-none">
                  Know More About Us{' '}
                  <span className="far mb-1">
                    <BsArrowRight />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentFive;
