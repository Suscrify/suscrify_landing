import React from "react";
import Link  from "next/link"
import Image from "next/image";
import{FaGithub,FaDribbble,FaInstagram,FaFacebookF} from 'react-icons/fa';

const FooterTwo = () => {
  return (
    <footer className="cyber-footer bg-gradient">
      <div className="cyber-footer-top ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
              <div className="">
                <div className="footer-single-col mb-4">
                  <Image
                    src="/logo-white.png"
                    alt="logo"
                    width={113}
                    height={36}
                    className="img-fluid logo-white"
                  />
                </div>
                <p className="text-white">
                  Our latest news, articles, and resources, we will sent to your
                  inbox weekly. Our latest news, articles, and resources, we
                  will sent to your inbox weekly.
                </p>
                <ul className="list-unstyled list-inline cyber-footer-social-list mb-0">
                  <li className="list-inline-item">
                    <a href="/#">
                      <i><FaFacebookF/></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/#">
                      <i><FaInstagram/></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/#">
                      <i><FaDribbble/></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/#">
                      <i><FaGithub/></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 mt-4 mt-md-0 mt-lg-0">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h3 className="h5 mb-4 text-white">Company Services</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li>
                        <Link href="/" >
                          <a className="text-decoration-none">Threat Hunter</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about-us" >
                          <a className="text-decoration-none">Incident Responder</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" >
                            <a className="text-decoration-none">Secure Managed IT</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/career">
                          <a  className="text-decoration-none">Compliance</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/integrations"
                        >
                          <a className="text-decoration-none">Cyber Security</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/integration-single"
                        >
                            <a className="text-decoration-none">  Disaster Planning</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h3 className="h5 mb-4 text-white">Quick Links</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li>
                        <Link href="/contact-us" >
                            <a className="text-decoration-none"> Contact Us</a>                      
                        </Link>
                      </li>
                      <li>
                        <Link href="/about-us" >
                        <a className="text-decoration-none">FAQ</a>
                          
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" >
                        <a className="text-decoration-none">   Privacy Policy</a>
                       
                        </Link>
                      </li>
                      <li>
                        <Link href="/career" >
                        <a className="text-decoration-none">Terms & Conditions</a>
                          
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/integrations"
                         
                        >
                             <a className="text-decoration-none">Team</a>
                          
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="">
                    <h3 className="h5 mb-4 text-white">Contact Info</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li className="fw-medium">    
                          Phone: +61-821-456
                      </li>
                      <li className="fw-medium">
                          Email: hello@vaximo.com
                      </li>
                      <li className="fw-medium">
                          Address: 123, Western Road, Melbourne Australia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cyber-footer-bottom">
        <div className="container">
          <p className="mb-0 py-4 text-center">
            Copyright @2022 All Rights Reserved by
            <a
              href="https://www.themetags.com"
              className="text-decoration-none ms-2"
            >
              ThemeTags
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
