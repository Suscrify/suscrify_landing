import React from 'react';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';
import { FaBezierCurve, FaFingerprint } from 'react-icons/fa';
import { BsHeadset } from 'react-icons/bs';

const FeatureImgSix = () => {
  return (
    <>
      <section className="feature-section-two ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="feature-content-wrap">
                <SectionTitle
                  title="We are development experts on all technologies"
                  description=" Quickly incubate functional channels with multidisciplinary
                    architectures authoritatively fabricate formulate
                    exceptional innovation."
                  leftAlign
                />
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <span className="fas text-white">
                        <FaBezierCurve className="fa-lg" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">Pixel Perfect Design</h3>
                      <p>
                        Progressively foster enterprise-wide systems whereas
                        equity invested web-readiness harness installed expedite
                        virtual networks.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-danger rounded me-4">
                      <span className="fas text-white">
                        <FaFingerprint />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">Unique &amp; Minimal Design</h3>
                      <p>
                        Dramatically administrate progressive metrics without
                        error-free globally simplify standardized plagiarize
                        technically sound.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4 mb-lg-0">
                    <div className="icon-box bg-dark rounded me-4">
                      <span className="fas text-white">
                        <BsHeadset />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h5">24/7 Free Online Support</h3>
                      <p>
                        Interactively whiteboard transparent testing procedures
                        before bricks-and-clicks initiatives competencies.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="feature-img-wrap">
                <Image
                  width={120}
                  height={100}
                  layout="responsive"
                  src="/feature-hero-img.svg"
                  alt="feature"
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgSix;
