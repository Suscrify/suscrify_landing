import React from 'react';
import Link from 'next/link';
import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';

const FooterShort = () => {
  return (
    <footer className="footer-section">
      {/* <!--footer bottom start--> */}
      <div className="footer-bottom bg-dark text-white py-4">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-7">
              <div className="copyright-text">
              <p className="mb-lg-0 mb-md-0">
                      &copy; 2022 Derechos reservados Suscrify. Diseñado por{' '}
                      <a
                        href=""
                        className="text-decoration-none"
                      >
                        Camo
                      </a>
                    </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="footer-single-col text-start text-lg-end text-md-end">
                <ul className="list-unstyled list-inline footer-social-list mb-0">
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
      </div>
      {/* <!--footer bottom end--> */}
    </footer>
  );
};

export default FooterShort;
