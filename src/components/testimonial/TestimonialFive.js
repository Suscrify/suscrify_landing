import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import Image from "next/image";
import {FaStar} from 'react-icons/fa'

SwiperCore.use([Navigation]);

const TestimonialFive = () => {
  const swiperOption = {
    slidesPerView: 3,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1142: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-nav-control .swiper-button-next",
      prevEl: ".swiper-nav-control .swiper-button-prev",
    },
  };
  return (
    <section className="testimonial-section bg-light ptb-120">
      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center" data-aos="fade-up">
              <h4 className="h5">Testimonial</h4>
              <h2>What’s Clients Say</h2>
              <p>
                Credibly grow premier ideas rather than bricks-and-clicks
                strategic theme areas distributed for stand-alone web-readiness.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="position-relative w-100"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <Swiper {...swiperOption}>
                <SwiperSlide>
                  <div className="p-4 bg-white rounded-custom position-relative shadow-sm">
                    <p>
                      Pellentesque nec nam aliquam sem. Ultricies lacus sed
                      turpis tincidunt id aliquet risus. Consequat nisl vel
                      pretium lectus quam id.
                    </p>

                    <div className="author d-flex">
                      <div className="author-img me-3">
                        <Image
                          src="/testimonial/author3.jpg"
                          alt="author "
                          className="rounded-circle"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="author-info">
                        <h6 className="m-0">Alex Loverty</h6>
                        <span>Product Designer</span>
                        <ul className="review-rate mb-0 list-unstyled list-inline">
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" p-4 bg-white rounded-custom position-relative shadow-sm">
                    <p>
                      Pellentesque nec nam aliquam sem. Ultricies lacus sed
                      turpis tincidunt id aliquet risus. Consequat nisl vel
                      pretium lectus quam id.
                    </p>

                    <div className="author d-flex">
                      <div className="author-img me-3">
                      <Image
                          src="/testimonial/author1.jpg"
                          alt="author "
                          className="rounded-circle"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="author-info">
                        <h6 className="m-0">Aminul Islam</h6>
                        <span>Product Designer</span>
                        <ul className="review-rate mb-0 list-unstyled list-inline">
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide p-4 bg-white rounded-custom position-relative shadow-sm">
                    <p>
                      Pellentesque nec nam aliquam sem. Ultricies lacus sed
                      turpis tincidunt id aliquet risus. Consequat nisl vel
                      pretium lectus quam id.
                    </p>

                    <div className="author d-flex">
                      <div className="author-img me-3">
                        <Image
                          src="/testimonial/author2.jpg"
                          alt="author "
                          className="rounded-circle"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="author-info">
                        <h6 className="m-0">Neaj Morshed</h6>
                        <span>FrontEnd Developer</span>
                        <ul className="review-rate mb-0 list-unstyled list-inline">
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="text-warning"><FaStar/></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-nav-control">
                <span className="swiper-button-next"></span>
                <span className="swiper-button-prev"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialFive;
