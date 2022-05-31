/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaBezierCurve, FaUserFriends, FaWifi } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';

const PromoTwo = () => {
  return (
    <>
      <section className="promo-section ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                title="We Help you Stay Connected"
                description=" Dynamically initiate market positioning total linkage with
                  clicks-and-mortar technology procrastinate compelling data for
                  markets."
                centerAlign
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fas text-primary fa-3x">
                    <FaWifi />
                  </i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Stay Connected</h3>
                  <p className="mb-0">
                    Interactively disintermediate resource maximizing portals
                    vertical models maintainable systems.
                  </p>
                </div>
                {/* <!--pattern start--> */}
                <div className="dot-shape-bg position-absolute z--1 left--40 top--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fas text-success fa-3x">
                    <FaUserFriends />
                  </i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Encourage Participation</h3>
                  <p className="mb-0">
                    Interactively disintermediate resource maximizing portals
                    vertical models maintainable systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fas text-danger fa-3x">
                    <FaBezierCurve />
                  </i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Build Connections</h3>
                  <p className="mb-0">
                    Interactively disintermediate resource maximizing portals
                    vertical models maintainable systems.
                  </p>
                </div>
                {/* <!--pattern start--> */}
                <div className="dot-shape-bg position-absolute z--1 right--40 bottom--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
          </div>
          <div className="customer-section pt-60">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-12">
                  <div className="customer-logos-grid text-center">
                    <img
                      src="/clients/client-logo-1.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="/clients/client-logo-2.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="/clients/client-logo-3.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="/clients/client-logo-4.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="/clients/client-logo-5.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="/clients/client-logo-6.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="/clients/client-logo-7.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                    <img
                      src="/clients/client-logo-8.svg"
                      width="150"
                      alt="clients logo"
                      className="img-fluid p-1 px-md-2 p-lg-3 m-auto"
                    />
                  </div>
                  <p className="text-center mt-5 mb-0 h6">
                    Trusted More than 25,00+ Companies Around the World
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoTwo;
