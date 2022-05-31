import React from 'react';
import { BiDownload, BiStreetView } from 'react-icons/bi';
import { FaBezierCurve, FaUserShield } from 'react-icons/fa';

import SectionTitle from '../common/SectionTitle';

const WorkProcessThree = () => {
  return (
    <section className="process-section bg-light ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center" data-aos="fade-up">
              <SectionTitle
                subtitle="Instant Setup"
                title="Simple & Effortless Process"
                description=" Phosfluorescently enabled growth strategies after worldwide
                  proactive partnerships cooperative convergence via orthogonal
                  experiences."
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="setup-process-wrap">
              <ul className="setup-process-list list-unstyled text-center mb-0">
                <li className="setup-process-item py-4 px-2" data-aos="fade-up">
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <BiDownload />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 1
                  </span>
                  <h6 className="mt-3 mb-0">Download the app</h6>
                </li>
                <li
                  className="setup-process-item py-4 px-2"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <BiStreetView />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 2
                  </span>
                  <h6 className="mt-3 mb-0">Invite teammates</h6>
                </li>
                <li
                  className="setup-process-item py-4 px-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <FaBezierCurve />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 3
                  </span>
                  <h6 className="mt-3 mb-0">Create workspace</h6>
                </li>
                <li
                  className="setup-process-item py-4 px-2"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <FaUserShield />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 4
                  </span>
                  <h6 className="mt-3 mb-0">Track performance</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessThree;
