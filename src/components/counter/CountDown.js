import Image from "next/image";
import React from "react";

const CountDown = () => {
  return (
    <section className="crypto-count-down bg-dark-black pt-60 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="coin-img text-center mb-5 mb-lg-0">
              <Image src="/coin.png" className="img-fluid" width={507} height={541} alt="Coin" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="crypto-count-right">
              <div className="section-title">
                <h2 className="mb-4">Crypto ICO Starts In</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected
                </p>
              </div>
              <div className="timer-grid">
                <div className="grid-item bg-primary-dark">
                  <h5 className="h5">235</h5>
                  <span>Days</span>
                </div>
                <div className="grid-item bg-primary-dark">
                  <h5 className="h5">09</h5>
                  <span>Hours</span>
                </div>
                <div className="grid-item bg-primary-dark">
                  <h5 className="h5">08</h5>
                  <span>Minutes</span>
                </div>
                <div className="grid-item bg-primary-dark">
                  <h5 className="h5">40</h5>
                  <span>Seceonds</span>
                </div>
              </div>
              <div className="crypto-progress">
                <h5>$35, 356 543 Contribution Recived</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
