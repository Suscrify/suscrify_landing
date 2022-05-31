/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaGrinStars, FaShieldAlt, FaViber } from 'react-icons/fa';

import SectionTitle from '../common/SectionTitle';

const FeatureFour = () => {
  return (
    <>
      <section className="feature-section ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <SectionTitle
                subtitle="Build Quality"
                title="Our Special Features"
                description="Authoritatively underwhelm excellent methodologies via premium
                  expertise competitive than open-source imperatives
                  disseminate."
                centerAlign
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2">
                  <div className="feature-icon d-inline-block bg-primary-soft rounded-circle mb-32">
                    <i className="fad text-primary fa-2x">
                      <FaShieldAlt />
                    </i>
                  </div>
                  <h3 className="h5">Quality First</h3>
                  <p className="mb-0">
                    Professionally integrate high standards applications before
                    user friendly leadership skills.
                  </p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 left--40 top--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0">
                  <div className="feature-icon d-inline-block bg-danger-soft rounded-circle mb-32">
                    <i className="fad text-danger fa-2x">
                      <FaViber />
                    </i>
                  </div>
                  <h3 className="h5">Communication</h3>
                  <p className="mb-0">
                    Professionally integrate high standards applications before
                    user friendly leadership skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0">
                  <div className="feature-icon d-inline-block bg-success-soft rounded-circle mb-32">
                    <i className="fad text-success fa-2x">
                      <FaGrinStars />
                    </i>
                  </div>
                  <h3 className="h5">Reliability</h3>
                  <p className="mb-0">
                    Professionally integrate high standards applications before
                    user friendly leadership skills.
                  </p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 right--40 bottom--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFour;
