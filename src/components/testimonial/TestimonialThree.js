/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import Rating from '../common/Rating';

SwiperCore.use([Navigation]);

const TestimonialThree = () => {
  const swiperOption = {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <>
      <section className="cutomer-review-app-two ptb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <div className="mb-4 mb-sm-5">
                <h2>Our Happy Clients say about us.</h2>
                <p className="m-0">
                  Oxford hunky dory super so I said bender arse over blog.so I
                  said bender arse over blog.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-12 text-end d-none d-lg-block">
              <div className="appTwoReviewSwiper-Controller ms-md-auto position-relative">
                <span className="swiper-button-next"></span>
                <span className="swiper-button-prev"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="appTwoReviewSwiper">
                <Swiper {...swiperOption}>
                  <SwiperSlide>
                    <div className=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <Rating />
                      <h5 className="h6">5 review average in our app</h5>
                      <p>
                        Blinding shot excuse my french willia david tosser
                        jeffrey bubble and sque bleeder mush.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src="/testimonial/app-testimonial-1.png"
                          className="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div className="author-info">
                          <h6 className="mb-0">Chauffina Carr</h6>
                          <small>Founder</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <Rating />
                      <h5 className="h6">35+ minutes per session</h5>
                      <p>
                        Blinding shot excuse my french willia david tosser
                        jeffrey bubble and sque bleeder mush.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src="/testimonial/app-testimonial-2.png"
                          className="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div className="author-info">
                          <h6 className="mb-0">Hugh Saturation</h6>
                          <small>UX Designer</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <Rating />
                      <h5 className="h6">$0.00 everything is FREE</h5>
                      <p>
                        Blinding shot excuse my french willia david tosser
                        jeffrey bubble and sque bleeder mush.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src="/testimonial/app-testimonial-3.png"
                          className="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div className="author-info">
                          <h6 className="mb-0">Richard Tea</h6>
                          <small>Manager</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialThree;
