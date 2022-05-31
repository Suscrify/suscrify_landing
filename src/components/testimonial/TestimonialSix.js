import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import Image from "next/image";
import Link from 'next/link';

SwiperCore.use([Pagination]);

const TestimonialSix = () => {
  const swiperOption = {
    slidesperview: 1,
    speed: 700,
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    slidespergroup: 2, 
    loop: true,
    breakpoints: {
      320: {
        slidesperview: 1,
        spaceBetween: 30,
      },
      768: {
        slidesperview: 1,
      },
      991: {
        slidesperview: 1,
      },
    },
  };
  return (
    <section
      className="cyber-testimonial pt-100"
      style={{
        background: "url('/Map.png') no-repeat center center / cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10">
            <div className="cyber-testimonial pe-5 mb-30 mb-lg-0">
              <h5 className="h6 text-primary">Testimonial</h5>
              <h2 className="">What they Say about Our Services.</h2>
              <p>
                If you use this site regularly and would like to help keep the
                site pay for the hosting and bandwidth bill
              </p>
              <div className="action-btn mt-5">
                <Link href="/request-demo" >
                    <a className="btn btn-primary me-3">More Testimonial</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cyber-testimonial-slider">
              <Swiper>
                <SwiperSlide {...swiperOption}>
                  <div className="cyber-single-testimonial">
                    <div className="cyber-t-q mb-4">
                    <Image src="/quoate.png" alt="quoate" width={54} height={54}/>
                    </div>
                    <p className="mb-30">
                      If you use this site regularly and would like to help keep
                      the site on the hosting and bandwidth bill. If you use
                      this site regularly and would like to help keep the site
                      on the Internet, please consider donating a small sum to
                      help pay for the hosting and bandwidth bill.
                    </p>
                    <div className="cyber-auth-info d-flex">
                      <div className="pe-3 cyber-testimonial-author-img">
                        <Image
                          src="/testimonial/app-testimonial-3.png"
                          alt="auth "
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="cyber-testimonial-author">
                        <h5 className="mb-0 h6">Neaj Morshed</h5>
                        <span>FrontEnd Developer.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cyber-single-testimonial">
                    <div className="cyber-t-q mb-4">
                    <Image src="/quoate.png" alt="quoate" width={54} height={54}/>
                    </div>
                    <p className="mb-30">
                      If you use this site regularly and would like to help keep
                      the site on the hosting and bandwidth bill. If you use
                      this site regularly and would like to help keep the site
                      on the Internet, please consider donating a small sum to
                      help pay for the hosting and bandwidth bill.
                    </p>
                    <div className="cyber-auth-info d-flex">
                      <div className="pe-3 cyber-testimonial-author-img">
                        <Image
                          src="/testimonial/app-testimonial-1.png"
                          alt="auth "
                        />
                      </div>
                      <div className="cyber-testimonial-author">
                        <h5 className="mb-0 h6">The Good</h5>
                        <span>CEO, Founder.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cyber-single-testimonial">
                    <div className="cyber-t-q mb-4">
                      <Image src="/quoate.png" alt="quoate" width={54} height={54}/>
                    </div>
                    <p className="mb-30">
                      If you use this site regularly and would like to help keep
                      the site on the hosting and bandwidth bill. If you use
                      this site regularly and would like to help keep the site
                      on the Internet, please consider donating a small sum to
                      help pay for the hosting and bandwidth bill.
                    </p>
                    <div className="cyber-auth-info d-flex">
                      <div className="pe-3 cyber-testimonial-author-img">
                        <Image
                          src="/testimonial/app-testimonial-2.png"
                          alt="auth "
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="cyber-testimonial-author">
                        <h5 className="mb-0 h6">Kate Winslate</h5>
                        <span>CEO, Founder.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSix;
