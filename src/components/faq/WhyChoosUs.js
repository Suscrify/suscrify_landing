import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaRegCheckCircle,FaArrowRight} from 'react-icons/fa'

const WhyChoosUs = () => {
  return (
    <section className="ptb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-left text-lg-center mb-32 mb-lg-0">
              <Image src="/about.jpg" width={523} height={626} alt="About" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <h4 className="text-primary h5 mb-3">Why Choose Us</h4>
              <h2 className="mb-4">
                We are working with <br />
                15 years exprience
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
              <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                <li className="py-1">
                  <div className="d-flex about-icon-box align-items-center">
                    <div className="me-3 why-icon">
                      <Image src="/pie-chart.png" width={30} height={30} alt="pie" />
                    </div>
                    <div>
                      <h5>Expert around the world</h5>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex about-icon-box align-items-center">
                    <div className="me-3 why-icon">
                      <Image src="/team.png" width={30} height={30} alt="team" />
                    </div>
                    <div>
                      <h5>Best Practice For Business</h5>
                    </div>
                  </div>
                </li>
              </ul>

              <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                <li className="py-1">
                  <i className=" me-2 text-primary">
                    <FaRegCheckCircle/>
                  </i>
                  Digital Conference
                </li>
                <li className="py-1">
                  <i className=" me-2 text-primary">     <FaRegCheckCircle/></i>
                  Greate Speckers
                </li>
                <li className="py-1">
                  <i className=" me-2 text-primary">     <FaRegCheckCircle/></i>Event
                  Management
                </li>
                <li className="py-1">
                  <i className=" me-2 text-primary">     <FaRegCheckCircle/></i>
                  Have Fun on Event
                </li>
                <li className="py-1">
                  <i className=" me-2 text-primary">     <FaRegCheckCircle/></i>Sales
                  compliance
                </li>
                <li className="py-1">
                  <i className=" me-2 text-primary">     <FaRegCheckCircle/></i>
                  Showcasing success
                </li>
              </ul>
              <Link href="/about-us">
              <a
                className="link-with-icon text-decoration-none mt-3 btn btn-primary"
              >
                Learn More
                <i><FaArrowRight/></i>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoosUs