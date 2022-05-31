/* eslint-disable @next/next/no-img-element */
import React from 'react';

import SectionTitle from '../common/SectionTitle';
import { FaFingerprint } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const FeatureImgFive = () => {
  return (
    <>
      <section className="feature-section ptb-120">
        <div className="container">
          <div className="row align-items-lg-center justify-content-between">
            <div className="col-lg-5 mb-7 mb-lg-0">
              <div className="mb-4" data-aos="fade-up">
                <SectionTitle
                  title="View Your Business Growth use App"
                  description=" Enthusiastically administrate robust initiatives quickly
                  unleash collaborative with client-focused paradigms.
                  Re-engineer granular innovation rather than best-of-breed
                  processes."
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
                      <FaFingerprint />
                    </i>
                  </span>
                  <h3 className="h5">Humans on hand</h3>
                  <p>Objectively exceptional via customized via expertise.</p>
                </li>
                <li>
                  <span className="d-block mb-4">
                    <i className="fal fa-2x text-primary">
                      <BsShieldCheck />
                    </i>
                  </span>
                  <h3 className="h5">Strong privacy</h3>
                  <p>Interactively integrate extensible users resource. </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="pr-lg-4 position-relative" data-aos="fade-up">
                {/* <!--animated shape start--> */}
                <ul className="position-absolute animate-element parallax-element shape-service z--1 hide-medium">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/image-3.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/color-shape/feature-1.svg"
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
                <div className="bg-light text-center shadow-sm rounded-custom overflow-hidden pt-5 px-3 px-lg-5 mx-lg-auto">
                  <div className="mb-5">
                    <h3 className="fw-medium h4">
                      We deliver best quality app for your business
                    </h3>
                  </div>
                  <div className="position-relative w-75 mx-auto">
                    <img
                      className="position-relative z-2 w-100 h-auto"
                      src="/screen/half-iphone.svg"
                      alt=" Description"
                    />
                    <img
                      className="position-absolute half-screen"
                      src="/screen/app-screen-2.jpg"
                      alt=" Description"
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

export default FeatureImgFive;
