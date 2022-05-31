/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import Rating from '../common/Rating';
import SectionTitle from '../common/SectionTitle';
import { TestimonialData } from '../../utils/data';

SwiperCore.use([Navigation]);

const TestimonialTwo = ({ dark, bgWhite }) => {
  const swiperOption = {
    slidesPerView: 2,
    mousewheel: true,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
      nextEl: '.swiper-nav-control .swiper-button-next',
      prevEl: '.swiper-nav-control .swiper-button-prev',
    },
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
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };
  return (
    <>
      <section
        className={`testimonial-section ${
          dark ? 'bg-dark' : 'bg-light'
        } ptb-120 ${bgWhite ? 'bg-white' : ''}`}
      >
        <div className="container">
          <div className="row justify-content-center align-content-center">
            <div className="col-md-10 col-lg-6">
              {dark ? (
                <SectionTitle
                  subtitle="Testimonial"
                  title="What They Say About Us"
                  description="Dynamically initiate market positioning total linkage with
                  clicks-and-mortar technology compelling data for cutting-edge
                  markets."
                  darkBg
                  centerAlign
                />
              ) : (
                <SectionTitle
                  subtitle="Testimonial"
                  title="What They Say About Us"
                  description="Dynamically initiate market positioning total linkage with
                clicks-and-mortar technology compelling data for cutting-edge
                markets."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="position-relative">
                <Swiper {...swiperOption}>
                  {TestimonialData.map((data) => (
                    <SwiperSlide key={data.id}>
                      <div
                        className={`p-5 rounded-custom position-relative ${
                          dark
                            ? 'bg-custom-light text-white'
                            : 'border border-2'
                        }   `}
                      >
                        <img
                          src="/testimonial/quotes-dot.svg"
                          alt="quotes"
                          width="100"
                          className="position-absolute left-0 top-0 z--1 p-3"
                        />
                        <div className="d-flex mb-32 align-items-center">
                          <Image
                            width={60}
                            height={60}
                            src={data.authorImg}
                            className="img-fluid rounded"
                            alt="user"
                          />
                          <div className="author-info ms-3">
                            <h6 className="mb-0">{data.authorName}</h6>
                            <small>{data.authorTitle}</small>
                          </div>
                        </div>
                        <blockquote>
                          <h6>{data.quoteTitle}</h6>
                          {data.authorQuote}
                        </blockquote>
                        <Rating />
                      </div>
                    </SwiperSlide>
                  ))}
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
    </>
  );
};

export default TestimonialTwo;
