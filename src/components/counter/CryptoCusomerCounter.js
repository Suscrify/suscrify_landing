import React from 'react'
import Image from 'next/image';
const CryptoCusomerCounter = () => {
  return (
    <section className="crypto-customer-counter bg-dark-black ptb-60">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="crypto-customer-counter">
            <div className="counter-content section-title mb-30">
              <h2 className="mb-4">
                Our Best Users Are all over the Worldwide Coverage
              </h2>
              <p>
                You might wonder why a designer would choose to use Morem text
                Paragraphs Lorem Ipsum available but the majority{" "}
              </p>
              <p>
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary, making this the first true generator on the
                Internet.
              </p>
            </div>
            <div className="counter-box mb-5 mb-lg-0">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="single-counter-box bg-soft-black mb-3 mb-md-0">
                    <h5 className="h4">150k+</h5>
                    <span>Pepole who Have Joined </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-counter-box bg-soft-black mb-3 mb-md-0">
                    <h5 className="h4">45k+</h5>
                    <span>Pepole who Have Joined </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-counter-box bg-soft-black">
                    <h5 className="h4">16k+</h5>
                    <span>Pepole Joined Altrawallet </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="maps-img text-lg-center">
            <Image src="/maps.png" className="img-fluid" width={636} height={362} alt="Maps" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CryptoCusomerCounter