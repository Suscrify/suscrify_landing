import React from 'react';

const OurOffice = () => {
  return (
    <section className="office-address-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Our Office</h4>
              <h2>Located Around the World</h2>
              <p>
                Dynamically technically sound technologies with parallel task
                convergence quality vectors through excellent relationships.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/office-img-1.jpg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>Singapore</h5>
                  <address>
                    4636 Bombardier Way <br /> Sr,Worthington, <br />
                    California(CA), 94102
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/office-img-2.jpg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>Los Angeles</h5>
                  <address>
                    794 Mcallister <br /> St. Oak Harbor, <br />
                    Washington(WA), 98277
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/office-img-3.jpg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>New York</h5>
                  <address>
                    4219 Snowbird Lane <br /> St Carthage, <br />
                    New York(NY), 13619
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mt-xl-0">
            <div
              className="rounded-custom border d-block office-address overflow-hidden z-2"
              style={{
                background:
                  "url('/office-img-5.jpg')no-repeat center center / cover",
              }}
            >
              <div className="office-content text-center p-4">
                <span className="office-overlay"></span>
                <div className="office-info">
                  <h5>Barlin City</h5>
                  <address>
                    Brandenburgische Straße <br /> DE. Berlin Kreuzberg, <br />
                    Berlin(CA), 10997
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
