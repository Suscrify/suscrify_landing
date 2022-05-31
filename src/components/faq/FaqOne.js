import React from 'react';
import Image from 'next/image';

const FaqOne = () => {
  return (
    <section className="faq-section ptb-120 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">FAQ</h4>
              <h2>Frequently Asked Questions</h2>
              <p>
                Conveniently mesh cooperative services via magnetic outsourcing.
                Dynamically grow value whereas accurate e-commerce vectors.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-12">
            <div className="faq-wrapper">
              <div className="faq-item mb-5">
                <h5>
                  <span className="h3 text-primary me-2">1.</span> How does back
                  pricing work?
                </h5>
                <p>
                  Progressively e-enable collaborative inexpensive supply
                  chains. Efficiently maintain economically methods of
                  empowerment for synergistic sound scenarios.
                </p>
              </div>
              <div className="faq-item mb-5">
                <h5>
                  <span className="h3 text-primary me-2">2.</span> How do I
                  calculate how much price?
                </h5>
                <p>
                  Globally benchmark customized mindshare before
                  clicks-and-mortar partnerships. Efficiently maintain
                  economically sound scenarios and whereas client-based
                  progressively.{' '}
                </p>
              </div>
              <div className="faq-item">
                <h5>
                  <span className="h3 text-primary me-2">3.</span> Can you show
                  me an example?
                </h5>
                <p>
                  {' '}
                  Dynamically visualize whereas competitive relationships.
                  Progressively benchmark customized partnerships generate
                  interdependent benefits rather sound scenarios and robust
                  alignments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center mt-4 mt-lg-0 mt-md-0">
              <Image
                width={636}
                height={522}
                src="/faq.svg"
                alt="faq"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
