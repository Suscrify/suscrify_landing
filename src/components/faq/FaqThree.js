import React from 'react';
import Link from 'next/link';
import { FaCodeBranch, FaMicrophone } from 'react-icons/fa';
import { BiCopyright, BiPlayCircle } from 'react-icons/bi';
import {
  HiOutlineClipboardCheck,
  HiOutlineClipboardList,
} from 'react-icons/hi';

import SectionTitle from '../common/SectionTitle';

const FaqThree = () => {
  return (
    <section className="faq-section ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <SectionTitle
              subtitle="FAQ"
              title="Frequently Asked Questions"
              description="Efficiently network cross-unit paradigms for premier
                  technologies scale 24/7 paradigms for process-centric data
                  interoperable."
              centerAlign
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div
              className="faq-content-wrap d-flex mb-5"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <span className="faq-icon me-3">
                <i className="text-primary">
                  <BiCopyright className="fal mb-2" />
                </i>
              </span>
              <div className="faq-info">
                <h5>Which license do I need to use an item in a commercial?</h5>
                <p className="mb-0">
                  Collaboratively iterate high-payoff content via high standards
                  in technology. economically sound methodologies via corporate.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div
              className="faq-content-wrap d-flex mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="faq-icon me-3">
                <i className="text-primary">
                  <HiOutlineClipboardList className="fal mb-2" />
                </i>
              </span>
              <div className="faq-info">
                <h5>What payment methods do you accept?</h5>
                <p className="mb-0">
                  Globally e-enable plug-and-play imperatives and seamless
                  e-markets. Intrinsicly negotiate resource maximizing e-tailers
                  after just in time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div
              className="faq-content-wrap d-flex mb-5"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <span className="faq-icon me-3">
                <i className="text-primary">
                  <HiOutlineClipboardCheck className="fal mb-2" />
                </i>
              </span>
              <div className="faq-info">
                <h5>How does the free trial work and what is included?</h5>
                <p className="mb-0">
                  Economically sound supply chains through distributed strategic
                  theme areas. Appropriately cultivate innovative web-readiness
                  whereas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div
              className="faq-content-wrap d-flex mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="faq-icon me-3">
                <i className="text-primary">
                  <FaMicrophone className="fal mb-2" />
                </i>
              </span>
              <div className="faq-info">
                <h5>What happens after my free trial ends?</h5>
                <p className="mb-0">
                  Progressively pontificate quality vectors without resource
                  maximizing bandwidth. Conveniently maximize turnkey testing
                  procedures for compelling.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div
              className="faq-content-wrap d-flex mb-5"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <span className="faq-icon me-3">
                <i className="text-primary">
                  <BiPlayCircle className="fal mb-2" />
                </i>
              </span>
              <div className="faq-info">
                <h5>Why do you ask for a video introduction?</h5>
                <p className="mb-0">
                  Maximizing e-enable imperatives and seamless e-markets.
                  Intrinsicly negotiate resource quality vectors without after
                  just in time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div
              className="faq-content-wrap d-flex mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="faq-icon me-3">
                <i className="text-primary">
                  <FaCodeBranch className="fal mb-2" />
                </i>
              </span>
              <div className="faq-info">
                <h5>Can I work from anywhere?</h5>
                <p className="mb-0">
                  Conveniently maximize turnkey sound supply chains through
                  distributed strategic theme areas. Appropriately cultivate
                  innovative web-readiness whereas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="bg-dark shadow-lg p-5 rounded-custom  mt-lg-4 mt-3"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <div className="cta-content">
                <h3 className="mb-2">Have More Questions?</h3>
                <p className="mb-lg-0 mb-xl-0">
                  Drop us a note and we’ll get back to you soon
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="action-btns text-lg-end">
                <Link href="/contact-us">
                  <a className="btn btn-light">Get in Touch</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqThree;
