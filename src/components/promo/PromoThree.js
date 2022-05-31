import React from 'react';
import SectionTitle from '../common/SectionTitle';

const PromoThree = ({ hasBg }) => {
  return (
    <>
      <section className={`promo-section ptb-120 ${hasBg ? 'bg-light' : ''}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <SectionTitle
                title="Everything We Do it With Love"
                description=" Progressively deploy market positioning catalysts for change
                  and technically sound authoritatively e-enable
                  resource-leveling infrastructures."
                centerAlign
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div
                className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="promo-card-info">
                  <h3 className="display-5 fw-medium mb-4">150+</h3>
                  <h2 className="h5">Completed Projects</h2>
                  <p className="mb-0">
                    Rapidiously embrace distinctive best practices after B2B
                    syndicate.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="promo-card-info">
                  <h3 className="display-5 fw-medium mb-4">1.5k</h3>
                  <h2 className="h5">Happy Client</h2>
                  <p className="mb-0">
                    Energistically impact synergistic convergence for
                    leadership..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-0"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="promo-card-info">
                  <h3 className="display-5 fw-medium mb-4">90%</h3>
                  <h2 className="h5">24/7 Support</h2>
                  <p className="mb-0">
                    Synergistically revolutionize leadership whereas platform.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoThree;
