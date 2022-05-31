import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGooglePlay, FaApple } from "react-icons/fa";
const CryptoCta = () => {
    return (
      <section className="bg-dark-black pt-120 pb-60">
        <div className="container">
          <div className="bg-soft-black p-4 rounded-custom">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="section-title mb-4">
                  <h2>Also Available on IOS & Android</h2>
                  <p>
                    This site regularly and would like to help keep the site on
                    the Internet please consider donating a small.
                  </p>
                </div>
                <div className="crypto-btn-wrapper">
                  <Link
                    href="https://play.google.com/store" 
                  >
                    <a className="crypto-app-btn me-3 text-decoration-none mb-3 mb-xl-0">
                    <span className="crypto-btn-content-wrapper">
                      <span className="crypto-btn-icon">
                        <i><FaGooglePlay/></i>
                      </span>
                      <span className="text-wrapper">
                        <span className="btn-tagline">Available on the </span>
                        <span className="crypto-btn-text">Play Store</span>
                      </span>
                    </span>
                    </a>
                  </Link>
                  <Link
                    href="https://www.apple.com/store"
                  >
                    <a className="crypto-app-btn me-3 text-decoration-none">
                    <span className="crypto-btn-content-wrapper">
                      <span className="crypto-btn-icon">
                        <i><FaApple/></i>
                      </span>
                      <span className="text-wrapper">
                        <span className="btn-tagline">Available on the </span>
                        <span className="crypto-btn-text">Play Store</span>
                      </span>
                    </span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="crypto-app-cta-img text-center text-lg-end mt-5 mt-lg-0">
                  <Image
                    src="/crypto-app-image.png"
                    className="img-fluid"
                    alt="Phone"
                    width={383}
                    height={384}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default CryptoCta;