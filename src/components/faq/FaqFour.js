import Image from 'next/image'
import React from 'react'

const FaqFour = () => {
  return (
    <section className="cyber-faq pt-120 pb-60">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-6">
          <div className="section-heading text-center mb-5">
            <h5 className="h6 text-primary">Faq</h5>
            <h2>General Questions Frequently Asked Questions?</h2>
            <p>
              Uniquely promote adaptive quality vectors rather than
              stand-alone e-markets. pontificate alternative architectures
              whereas iterate
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="cyber-faq-wrapper">
            <div className="accordion faq-accordion" id="accordionExample">
              <div className="accordion-item border border-2 rounded active">
                <h5 className="accordion-header" id="faq-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                  >
                    How Is Encryption Different From Hacking?
                  </button>
                </h5>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="faq-1"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    prueba vamos a ver y a decir algo.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-2 rounded">
                <h5 className="accordion-header" id="faq-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                  >
                    What Is Firewall And Why It Is Used?
                  </button>
                </h5>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-2"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                   Hola mundo
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-2 rounded">
                <h5 className="accordion-header" id="faq-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                  >
                    What Steps Will You Take To Secure Server?
                  </button>
                </h5>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-3"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    prueba vamos a ver y a decir algo.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-2 rounded">
                <h5 className="accordion-header" id="faq-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                  >
                    What is The Difference Between IDS And IBS?
                  </button>
                </h5>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="faq-4"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    prueba vamos a ver y a decir algo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cyber-faq-img text-lg-center mt-5 mt-lg-0 0">
            <Image
              src="/cb_faq.jpg"
              alt="cyber security"
              className="img-fluid"
              width={562}
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FaqFour