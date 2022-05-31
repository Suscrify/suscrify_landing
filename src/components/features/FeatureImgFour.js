/* eslint-disable @next/next/no-img-element */
import React from 'react';

import SectionTitle from '../common/SectionTitle';
import { BiUser } from 'react-icons/bi';
import { BsWatch } from 'react-icons/bs';

const FeatureImgFour = () => {
  return (
    <>
      <section className="feature-section ptb-120">
        <div className="container">
          <div className="row align-items-lg-center justify-content-between">
            <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
              <div className="mb-4" data-aos="fade-up">
                <SectionTitle
                  title="Experience your Product with Integration"
                  description="Conveniently drive stand-alone total linkage for
                  process-centric content enthusiastically administrate.
                  Dramatically grow high standards in customer service for
                  applications."
                  leftAlign
                />
              </div>
              <ul
                className="list-unstyled d-flex flex-wrap list-two-col mt-5"
                data-aos="fade-up"
              >
                <li>
                  <span className="d-block mb-4">
                    <i className="fal fa-2x text-primary">
                      <BiUser />
                    </i>
                  </span>
                  <h3 className="h5">Customer analysis</h3>
                  <p>Objectively productize exceptional via customized.</p>
                </li>
                <li>
                  <span className="d-block mb-4">
                    <i className="fal fa-2x text-primary">
                      <BsWatch />
                    </i>
                  </span>
                  <h3 className="h5">Real time metrics</h3>
                  <p>
                    Interactively integrate extensible users maximizing
                    resource.{' '}
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pr-lg-4 position-relative" data-aos="fade-up">
                {/* <!--animated shape start--> */}
                <ul className="position-absolute animate-element parallax-element shape-service z--1 hide-medium">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/image-2.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/color-shape/feature-2.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-2 z-5"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/feature-3.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-3"
                    />
                  </li>
                </ul>
                {/* <!--animated shape end--> */}
                <div className="bg-light text-center rounded-custom overflow-hidden pt-5 px-3 px-lg-5 mx-lg-auto">
                  <div className="mb-5">
                    <h3 className="fw-medium h4">
                      Best options to choose a Quiety, to make your own app and
                      grow your business
                    </h3>
                  </div>
                  <div className="position-relative w-75 mx-auto">
                    <img
                      className="position-relative z-2 w-100 h-auto"
                      src="/screen/half-iphone.svg"
                      alt="Description"
                    />
                    <img
                      className="position-absolute half-screen"
                      src="/screen/app-screen-1.jpg"
                      alt="Description"
                    />
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

export default FeatureImgFour;
