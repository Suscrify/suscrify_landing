/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaFingerprint, FaRegPaperPlane } from 'react-icons/fa';
import { FiPieChart } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';

const Promo = ({ bgWhite }) => {
  return (
    <>
      <section
        className={`promo-section ptb-120 ${
          bgWhite ? 'bg-white' : 'bg-light'
        } `}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <SectionTitle
                title="Our Customers Get Results"
                description="Progressively deploy market positioning catalysts for change
                  and technically sound. Authoritatively with
                  backward-compatible e-services."
                centerAlign
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0 mt-md-0">
              <div
                className="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="promo-card-info mb-4">
                  <h3 className="display-5 fw-bold mb-4 text-white">
                    <i className="far text-warning me-2">
                      <FaFingerprint className="mb-3" />
                    </i>{' '}
                    10x
                  </h3>
                  <p className="text-white">
                    Embrace distinctive best practices after B2B syndicate
                    backend internal or whereas edge process improvements.{' '}
                  </p>
                </div>
                <div className="mt-auto">
                  <img
                    src="/clients/client-logo-4.svg"
                    width="120"
                    alt="clients"
                    className="img-fluid me-auto customer-logo"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0 mt-md-0">
              <div
                className="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="promo-card-info mb-4">
                  <h3 className="display-5 fw-bold mb-4 text-white">
                    <i className="far text-warning me-2">
                      <FaRegPaperPlane className="mb-3" />
                    </i>{' '}
                    5k
                  </h3>
                  <p className="text-white">
                    Rapidiously embrace distinctive best practices B2B syndicate
                    backend internal or whereas process improvements.{' '}
                  </p>
                </div>
                <div className="mt-auto">
                  <img
                    src="/clients/client-logo-2.svg"
                    width="120"
                    alt="clients"
                    className="img-fluid me-auto customer-logo"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
              <div
                className="bg-dark p-5 text-center d-flex flex-column h-100 rounded-custom"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="promo-card-info mb-4">
                  <h3 className="display-5 fw-bold mb-4 text-white">
                    <i className="far text-warning me-2">
                      <FiPieChart className="mb-3" />
                    </i>
                    95%
                  </h3>
                  <p className="text-white">
                    Distinctive best practices after B2B syndicate internal or
                    whereas bleeding-edge process improvements.{' '}
                  </p>
                </div>
                <div className="mt-auto">
                  <img
                    src="/clients/client-logo-3.svg"
                    width="120"
                    alt="clients"
                    className="img-fluid me-auto customer-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
