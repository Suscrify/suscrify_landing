import React from 'react';
import Link from 'next/link';
import { FaApple, FaGooglePlay, FaWindows } from 'react-icons/fa';

const CtaThree = () => {
  return (
    <>
      <section
        className="app-two-download-cta ptb-120"
        style={{
          background:
            "url('/app-download-cta.png')no-repeat center center / cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-6 col-md-10">
              <div className="section-heading text-center">
                <h2 className="text-white">
                  Get The App Now and Start Learning Today
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7 col-12">
              <div className="action-btns mt-3">
                <ul className="list-unstyled text-center">
                  <li className="d-inline-block me-2 mb-lg-0">
                    <Link href="#!">
                      <a className="d-flex align-items-center text-decoration-none rounded">
                        <i className="fab pe-2">
                          <FaApple className="mb-1" />
                        </i>
                        <span>
                          Available on the <span>App Store</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="d-inline-block me-2 mb-lg-0">
                    <Link href="#!">
                      <a className="d-flex align-items-center text-decoration-none rounded">
                        <i className="fab pe-2">
                          <FaGooglePlay className="mb-1" />
                        </i>
                        <span>
                          Available on the <span>Google Play</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="d-inline-block mb-lg-0">
                    <Link href="#!">
                      <a className="d-flex align-items-center text-decoration-none rounded">
                        <i className="fab pe-2">
                          <FaWindows className="mb-1" />
                        </i>
                        <span>
                          Available on the <span>Google Play</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaThree;
