/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BiCommand, BiLink } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';

const FeatureImgContentSeven = () => {
  return (
    <section className="app-two-feature-three bg-light ptb-120">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-5 col-xl-5 col-sm-12">
            <div className="app-two-feature-three-left">
              <div className="app-content-feature-wrap">
                <h2>We provide Quality works for developed App</h2>
                <p>
                  Car boot absolutely bladdered posh burke the wireless mush
                  some dodgy chav you mug. Energistically conceptualize scalable
                  quality vectors through wireless channels. .
                </p>
              </div>
              <div
                className="accordion faq-accordion mt-5"
                id="accordionExample"
              >
                <div className="accordion-item active border-0">
                  <h5 className="accordion-header" id="faq-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                    >
                      <i className="far pe-3">
                        <BsBell />
                      </i>{' '}
                      How does back pricing work?
                    </button>
                  </h5>
                  <div
                    id="collapse-1"
                    className="accordioncollapse collapse show"
                    aria-labelledby="faq-1"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Dramatically formulate cross-unit products with
                      web-enabled action items. Quickly maximize extensible
                      methods of empowerment.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h5 className="accordion-header" id="faq-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                    >
                      <i className="far pe-3">
                        <BiCommand />
                      </i>
                      Can you show me an example?
                    </button>
                  </h5>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-2"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Continually innovate technically sound internal or
                      organic sources with market positioning content.
                      Completely drive optimal intellectual.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h5 className="accordion-header" id="faq-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                    >
                      <i className="fas pe-3">
                        <BiLink />
                      </i>
                      How do I processing I need?
                    </button>
                  </h5>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-3"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Phosfluorescently deliver cooperative testing procedures
                      after integrated communities. Dramatically simplify
                      resource-leveling models with unique.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col-sm-12">
            <div className="app-two-feature-three-img position-relative text-center mt-5 mt-lg-0">
              <div className="feature-three-shape">
                <img
                  src="/app-two-feature-blob-shape.png"
                  alt="app screen"
                  className="feature-three-blob img-fluid"
                />
              </div>
              <img
                src="/app-two-feature-phone-without-shape.png"
                alt="app screen"
                className="position-relative z-5"
              />
              <div className="img-peice d-none d-lg-block">
                <img
                  src="/app-two-file.png"
                  alt="app screen"
                  className="img-one position-absolute custom-shadow"
                />
                <img
                  src="/app-two-video-shape.png"
                  alt="app screen"
                  className="img-two position-absolute custom-shadow"
                />
                <img
                  src="/app-two-chart.png"
                  alt="app screen"
                  className="img-three position-absolute custom-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentSeven;
