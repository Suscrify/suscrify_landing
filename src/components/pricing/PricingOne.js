import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsCalendar2Check, BsCalendarX, BsCreditCard } from 'react-icons/bs';

import Circle from '../common/Circle';
import { pricingData } from '../../utils/data';

const PricingOne = ({ header }) => {
  return (
    <section className="pricing-section pt-60 pb-120  position-relative z-2">
      <div className="container">
        {header && (
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="section-heading text-center">
                  <h4 className="h5 text-primary">Pricing</h4>
                  <h2>Check Our Valuable Price</h2>
                  <p>
                    Conveniently mesh cooperative services via magnetic
                    outsourcing. Dynamically grow value whereas accurate
                    e-commerce vectors.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-5">
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-primary-soft rounded-circle d-block me-3">
                    <span className="fal text-primary text-center">
                      <BsCreditCard />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                    No credit card required
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-success-soft rounded-circle d-block me-3">
                    <span className="fal text-success">
                      <BsCalendar2Check />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                    Get 30 day free trial
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-danger-soft rounded-circle d-block me-3">
                    <span className="fal text-danger">
                      <BsCalendarX />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                    Cancel anytime
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {pricingData.map((pricing, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div
                className={`position-relative single-pricing-wrap rounded-custom ${pricing.bgColor} custom-shadow p-5 mb-4 mb-lg-0`}
              >
                <div className="pricing-header mb-32">
                  <h3 className={`package-name ${pricing.textColor} d-block`}>
                    {' '}
                    {pricing.title}{' '}
                  </h3>
                  <h4 className="display-6 fw-semi-bold">
                    {pricing.price}
                    <span>{pricing.time} </span>
                  </h4>
                </div>
                <div className="pricing-info mb-4">
                  <ul className="pricing-feature-list list-unstyled">
                    {pricing.listItem.map((list, i) => (
                      <li key={i + 1}>
                        <Circle textColor={pricing.textColor} />
                        {list.li}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/request-demo">
                  <a className={`btn ${pricing.btnColor} mt-2`}>Buy Now</a>
                </Link>

                {pricing.shape && (
                  <div
                    className={`dot-shape-bg position-absolute z--1 ${pricing.shape}`}
                  >
                    <Image
                      width={258}
                      height={258}
                      src="/shape/dot-big-square.svg"
                      alt="shape"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingOne;
