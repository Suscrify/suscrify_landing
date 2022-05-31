import Image from 'next/image'
import React from 'react'


const HowItAllStarted = () => {
  return (
    <section className="ptb-60 bg-dark-black">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-5">
              <h2 className="mb-4">How it All Started</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="crypto-timeline bg-soft-black mb-4 mb-lg-0">
              <div className="crypto-timeline-icon">
                <Image src="/Padlock.svg" alt="Padlock" width={28} height={28}/>
              </div>
              <p>
                In publishing and graphic design, Lorem used to demonstrate the
                visual form of relying on meaningful content.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="crypto-timeline bg-soft-black mb-4 mb-lg-0">
              <div className="crypto-timeline-icon">
                <Image src="/star.svg" alt="Padlock" width={28} height={28}/>
              </div>
              <p>
                In publishing and graphic design, Lorem used to demonstrate the
                visual form of relying on meaningful content.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="crypto-timeline bg-soft-black mb-4 mb-lg-0">
              <div className="crypto-timeline-icon">
                <Image src="/bitcoin.svg" alt="Padlock" width={28} height={28}/>
              </div>
              <p>
                In publishing and graphic design, Lorem used to demonstrate the
                visual form of relying on meaningful content.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="crypto-timeline bg-soft-black">
              <div className="crypto-timeline-icon">
                <Image src="/glowing-star.svg" alt="Padlock" width={28} height={28} />
              </div>
              <p>
                In publishing and graphic design, Lorem used to demonstrate the
                visual form of relying on meaningful content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItAllStarted