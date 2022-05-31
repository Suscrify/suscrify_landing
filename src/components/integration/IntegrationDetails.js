import React from 'react';
import Image from 'next/image';
import IntegrationForm from './IntegrationForm';

const IntegrationDetails = () => {
  return (
    <section className="integration-details ptb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-8 pe-5">
            <div className="integration-details-wrap">
              <h2>Integration Details</h2>
              <p>
                Objectively restore stand-alone markets rather than
                enterprise-wide products. Uniquely underwhelm best-of-breed
                mindshare through adaptive niches via team building testing
                procedures. Seamlessly parallel task open-source content without
                resource sucking technology.
              </p>
              <div className="integration-feature-info mt-5">
                <h3 className="h5">What is included in this integration</h3>
                <ul className="content-list list-unstyled">
                  <li>
                    Be involved in every step of the product design cycle from
                    discovery and user acceptance testing.
                  </li>
                  <li>
                    Work with BAs, product managers and tech teams to lead the
                    Product Design
                  </li>
                  <li>
                    Maintain quality of the design process and ensure that when
                    designs are translated into code they accurately.
                  </li>
                  <li>
                    Accurately estimate design tickets during planning sessions.
                  </li>
                  <li>
                    Contribute to sketching sessions involving
                    non-designersCreate, and pattern libraries.
                  </li>
                  <li>
                    Design pixel perfect responsive UI’s and understand that
                    adopting common interface
                  </li>
                  <li>
                    Interface patterns is better for UX than reinventing the
                    wheel
                  </li>
                  <li>
                    Interactively plagiarize covalent outside the box thinking
                    vis-a-vis.
                  </li>
                  <li>
                    Holisticly communicate integrated channels via backend
                    interfaces. Authoritatively.
                  </li>
                  <li>
                    Globally actualize effective processes through synergistic
                    ROI. Interactively.
                  </li>
                </ul>
              </div>
              <blockquote className="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                <p className="text-muted">
                  <i className="fas fa-quote-left me-2 text-primary"></i>{' '}
                  Globally network long-term high-impact schemas vis-a-vis
                  distinctive e-commerce cross-media infrastructures rather than
                  ethical. Credibly visualize distinctive testing procedures
                  without end-to-end ROI. Seamlessly brand cross-platform
                  communities with backend markets. Assertively utilize business
                  services through robust solutions. Rapidiously deliver
                  cross-unit infrastructures rather than accurate metrics.
                  <i className="fas fa-quote-right ms-2 text-primary"></i>
                </p>
              </blockquote>

              <div className="integration-feature-info mt-5">
                <h3 className="h5">
                  Focus on increasing customer retention first
                </h3>
                <ul className="content-list list-unstyled">
                  <li>
                    You have at least 3 years’ experience working as a Product
                    Designer.
                  </li>
                  <li>
                    You have experience using Sketch and InVision or Framer X
                  </li>
                  <li>
                    You have some previous experience working in an agile
                    environment – Think two-week sprints.
                  </li>
                  <li>
                    You are familiar using Jira and Confluence in your workflow
                  </li>
                </ul>
              </div>

              <Image
                width={820}
                height={351}
                src="/tab-feature-img-4.png"
                className="img-fluid mt-4 rounded-custom"
                alt="apply"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <IntegrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationDetails;
