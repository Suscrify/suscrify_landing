import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <section
      className="coming-soon-section min-vh-100 ptb-120 overflow-hidden position-relative w-100 d-flex flex-column justify-content-center"
      style={{
        background: "url('/page-header-bg.svg')no-repeat bottom right",
      }}
    >
      <div className="bg-dark fixed-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="coming-soon-content-wrap position-relative z-2">
              <Link href="/">
                <a className="mb-5 d-block">
                  <Image
                    width={113}
                    height={36}
                    src="/logo-white.png"
                    alt="logo"
                    className="img-fluid logo-color"
                  />
                </a>
              </Link>

              <h5 className="text-white">Pronto podras ganar muchos descuentos...</h5>
              <h1 className="text-white">
               Estamos trabajando para ti. 
              </h1>
              <div className="action-btns">
                <Link href="/contact-us">
                  <a className="btn btn-primary mt-5 popup-with-form">
                    Mantenme al tanto!
                  </a>
                </Link>
              </div>

              <div className="social-list-wrap mt-100">
                <ul className="list-unstyled author-social-list social-bg-ts list-inline mb-0">
                  <li className="list-inline-item">
                    <Link href="#">
                      <a>
                        <FaFacebook />
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <a>
                        <FaTwitter />
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <a>
                        <FaDribbble />
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#">
                      <a>
                        <FaGithub />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ul className="animated-circle list-unstyled z--1">
          <li className="transition-delay-1 bg-danger"></li>
          <li className="transition-delay-2 bg-warning"></li>
          <li className="transition-delay-3 bg-primary"></li>
        </ul>
      </div>
    </section>
  );
};

export default ComingSoon;
