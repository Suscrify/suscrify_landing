/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ServiceForm from './ServiceForm';

const SingleServiceRegister = () => {
  return (
    <section className="sign-up-in-section bg-dark ptb-120 position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="text-white">Start Your Project with Us</h2>
              <p>
                Whatever your goal or project size we will handel it utilize
                standards compliant. We hope you will be 100% satisfied.
              </p>
              <hr />
              <div
                className="tab-content testimonial-tab-content text-white-80"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="testimonial-tab-1"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                    &quot;Globally actualize economically sound alignments before
                      tactical systems. Rapidiously actualize processes
                      technically sound infomediaries. Holisticly pursue team
                      building catalysts htmlFor change before team driven
                      products.&quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">Veronica P. Byrd</span>
                    <span className="d-block small">Veterinary technician</span>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="testimonial-tab-2"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                    &quot;Synergistically evisculate market positioning technology
                      vis-a-vis team driven innovation. Phosfluorescently morph
                      tactical communities htmlFor superior applications.
                      Distinctively pontificate resource-leveling infomediaries
                      and parallel models.&quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">Raymond H. Gilbert</span>
                    <span className="d-block small">Forest fire inspector</span>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="testimonial-tab-3"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                    &quot;Professionally myocardinate corporate e-commerce through
                      alternative functionalities. Compellingly matrix
                      distributed convergence with goal-oriented synergy.
                      Professionally embrace interactive opportunities through
                      parallel innovation.&quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">Donna R. Book</span>
                    <span className="d-block small">Extractive engineer</span>
                  </div>
                </div>
              </div>
              <ul
                className="nav nav-pills mb-0 testimonial-tab-indicator mt-5"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-1"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/1.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-2"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/4.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-3"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/6.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <ServiceForm />
        </div>
        {/* <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
        <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div> */}
      </div>
    </section>
  );
};

export default SingleServiceRegister;
