import React from 'react';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';

const FeatureImgEight = ({ paddingTop }) => {
  return (
    <>
      <section
        className={`feature-section ${
          paddingTop ? 'ptb-120' : 'pt-60 pb-120'
        } `}
      >
        <div className="container">
          <div className="row align-items-lg-center justify-content-between">
            <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
              <div className="mb-4" data-aos="fade-up">
                <SectionTitle
                  title="Experience your Product with Integration"
                  description="Conveniently drive stand-alone total linkage for
                  process-centric content enthusiastically administrate robust
                  collaborative."
                />
              </div>
              <ul
                className="list-unstyled d-flex flex-wrap list-two-col mt-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <li>
                  <span className="d-block mb-4">
                    <i className="fal fa-user fa-2x text-primary"></i>
                  </span>
                  <h3 className="h5">Customer analysis</h3>
                  <p>
                    Objectively exceptional via customized capital expertise.
                  </p>
                </li>
                <li>
                  <span className="d-block mb-4">
                    <i className="fal fa-watch fa-2x text-primary"></i>
                  </span>
                  <h3 className="h5">Real time metrics</h3>
                  <p>Interactively integrate extensible users resource. </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pr-lg-4 mt-md-4 position-relative">
                <div
                  className="bg-light text-center rounded-custom overflow-hidden p-5 mx-lg-auto"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <Image
                    width={120}
                    height={100}
                    layout="responsive"
                    src="/dashboard-img.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgEight;
