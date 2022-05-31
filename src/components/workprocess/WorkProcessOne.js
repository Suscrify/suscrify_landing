import React from 'react';
import Image from 'next/image';
import { FaBezierCurve } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { RiNodeTree } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';

const WorkProcessOne = () => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Process</h4>
              <h2>We Follow Our Work Process</h2>
              <p>
                Enthusiastically engage cross-media leadership skills for
                alternative experiences. Proactively drive vertical systems than
                intuitive architectures.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              <Image
                width={526}
                height={621}
                src="/office-img-1.jpg"
                alt="work process"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul className="work-process-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <RiNodeTree />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Step 1</span>
                  <h3 className="h5 mb-2">Research and Content Planing</h3>
                  <p>
                    Progressively foster enterprise-wide systems whereas equity
                    invested web-readiness harness installed base bandwidth.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-3x">
                    {' '}
                    <FaBezierCurve />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Step 2</span>
                  <h3 className="h5 mb-2">Publishing and Execution</h3>
                  <p>
                    Dramatically administrate progressive metrics without
                    error-free globally simplify standardized alignments
                    plagiarize distributed.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <GrResources />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Step 3</span>
                  <h3 className="h5 mb-2">Product Prototyping</h3>
                  <p>
                    Interactively whiteboard transparent testing procedures
                    before bricks-and-clicks initiatives administrate
                    competencies.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4 mb-lg-0">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    {' '}
                    <FiTruck />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Step 4</span>
                  <h3 className="h5 mb-2">Deliver the Final Product</h3>
                  <p>
                    Dramatically plagiarize distributed progressive metrics
                    without error-free globally simplify standardized
                    alignments.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
