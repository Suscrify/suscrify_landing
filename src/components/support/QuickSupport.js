import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import SectionTitle from '../common/SectionTitle';
import ServiceForm from '../services/ServiceForm';

const QuickSupport = () => {
  return (
    <section className="contact-us ptb-120 position-relative overflow-hidden">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12">
            <SectionTitle
              subtitle="Quick Support"
              title="Get in Touch Today!"
              description=" Proactively deliver seamless core competencies with
                    scalable. Completely fabricate transparent paradigms."
            />
            <div className="row justify-content-between pb-5">
              <div
                className="col-sm-6 mb-4 mb-md-0 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft">
                  <span className="fas fa-2x text-primary">
                    <FaPhoneAlt />
                  </span>
                </div>
                <div className="contact-info">
                  <h5>Call Us</h5>
                  <p>
                    Questions about our product or pricing? Call for support
                  </p>
                  <a
                    href="tel:(415)231-59687"
                    className="read-more-link text-decoration-none"
                  >
                    <span className="far me-2">
                      <FaPhoneAlt className="mb-1" />
                    </span>{' '}
                    (415)231-59687
                  </a>
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft">
                  <span className="fas fa-2x text-danger">
                    <BiCommentDetail />
                  </span>
                </div>
                <div className="contact-info">
                  <h5>Chat Us</h5>
                  <p>
                    Our support will help you from
                    <strong> 9am to 5pm EST.</strong>
                  </p>
                  <Link href="/contact-us">
                    <a className="read-more-link text-decoration-none">
                      <span className="far me-2">
                        <BiCommentDetail className="mb-1" />
                      </span>{' '}
                      Live Chat Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ServiceForm />
        </div>
      </div>
      <div
        className="bg-dark position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 py-5"
        style={{
          background:
            " url('/shape/dot-dot-wave-shape.svg')no-repeat center top",
        }}
      >
        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
        <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
      </div>
    </section>
  );
};

export default QuickSupport;
