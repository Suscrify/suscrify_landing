import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCheckCircle } from 'react-icons/fa';

const FeatureImgContentSix = () => {
  return (
    <section className="app-two-feature-two pt-60 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 col-xl-6 col-md-12">
            <div className="app-two-feature-two-img">
              <Image
                width={636}
                height={643}
                src="/app-two-feature-phone-with-shape.png"
                alt="feature"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="app-two-feature-two-right">
              <div className="feature-content-wrap">
                <h4 className="h6">Best Features</h4>
                <h2>Boost up your Phone in just one click</h2>
                <p>
                  Completely evolve orthogonal sources via cooperative data.
                  Dynamically promote high standards in resources after timely
                  catalysts for alignments and visionary quality vectors.
                </p>
              </div>
              <div className="app-two-feature-two-content">
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4">
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Based on Bootstrap Grid
                  </li>
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Online Learning
                  </li>
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Track your spending
                  </li>
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Unlimited Download
                  </li>
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>
                    Responisve Design
                  </li>
                  <li className="py-1">
                    <i>
                      <FaRegCheckCircle className="fad me-2" />
                    </i>{' '}
                    Always Be in Touch
                  </li>
                </ul>
                <div className="action-btns mt-5">
                  <Link href="/about-us">
                    <a className="btn app-two-btn">Learn About More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentSix;
