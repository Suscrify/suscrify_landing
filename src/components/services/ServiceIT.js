import { ItServiceData } from "@utils/data";
import Image from "next/image";
import React from "react";

const ServiceIt = () => {
  return (
    <section className="services-icon ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>Services We Provide</h2>
              <p>
                Credibly grow premier ideas rather than bricks-and-clicks
                strategic theme areas distributed for stand-alone web-readiness.
              </p>
            </div>
            ,
          </div>
        </div>
        <div className="row justify-content-center">
            {ItServiceData.map((service,i)=>(
                <div className="col-lg-4 col-md-6 p-0" key={i+1}>
                <div className={`single-service p-lg-5 p-4 text-center  ${service.className}`}>
                  <div className="service-icon icon-center">
                    <Image
                      src={service.serviceImg}
                      alt="service icon"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="service-info-wrap">
                    <h3 className="h5">{service.serviceTitle}</h3>
                    <p>
                      {service.serviceDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIt;
