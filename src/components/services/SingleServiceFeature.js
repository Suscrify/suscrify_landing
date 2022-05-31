import React from 'react';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import { BsWatch } from 'react-icons/bs';

const SingleServiceFeature = () => {
  return (
    <section className="feature-section ptb-120">
      <div className="container">
        <div className="row align-items-lg-center justify-content-between">
          <div className="col-lg-5 order-lg-2 mb-7 mb-lg-0">
            <div className="mb-4">
              <h2>Experience your product grow business</h2>
              <p>
                Conveniently drive stand-alone total linkage for process-centric
                content. Enthusiastically administrate robust initiatives
                quickly unleash collaborative with client-focused.{' '}
              </p>
            </div>
            <ul className="list-unstyled d-flex flex-wrap list-two-col mt-5">
              <li>
                <span>
                  <i className="fal fa-2x text-primary mb-4">
                    <FaRegUser />
                  </i>
                </span>
                <h3 className="h5">Customer analysis</h3>
                <p>Objectively exceptional via customized intellectual.</p>
              </li>
              <li>
                <span>
                  <i className="fal fa-2x text-primary mb-4">
                    <BsWatch />
                  </i>
                </span>
                <h3 className="h5">Real time metrics</h3>
                <p>Interactively integrate extensible directed developer. </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="pr-lg-4 mt-md-4 position-relative">
              <div className="bg-light text-center rounded-custom overflow-hidden p-lg-5 p-4 mx-lg-auto">
                <Image
                  width={540}
                  height={407}
                  src="/dashboard-img.png"
                  alt=""
                  className="img-fluid shadow-sm rounded-custom"
                />
                <div className="position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceFeature;
