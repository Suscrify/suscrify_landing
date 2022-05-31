import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


const CustomerLogoSlider = () => {
  const swiperOption = {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      991: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <section className="cyber-brand-logo pt-80">
      <div className="container">
        <div className="row">
          <div className="brand-logo-slider">
            <Swiper {...swiperOption}>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/clients/slack_logo.png" width={135} height={34} alt="logo"  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/clients/logo2.png" width={172} height={28}  alt="logo " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/clients/logo3.png" width={161} height={29}  alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/clients/logo4.png" width={150} height={26}  alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/clients/logo5.png" width={153} height={29}  alt="logo" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogoSlider;
