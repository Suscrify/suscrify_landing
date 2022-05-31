import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';
import { brandName } from '../../utils/data';

const IntegrationTwo = ({ dark, bgWhite }) => {
  return (
    <section className={`integration-section bg-light ptb-120 ${
      dark ? 'bg-dark' : 'bg-light'
    } ptb-120 ${bgWhite ? 'bg-white' : ''}`}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 col-md-12">
            <SectionTitle
              subtitle="Colaboramos con las mejores empresas de software"
              title="Licencias disponibles"
              description="Cotiza, solicita, factura y aprovisiona tus productos en la nube en un solo lugar, todo con una factura mensual."
              leftAlign
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="text-lg-end mb-5 mb-lg-0" data-aos="fade-left">
              <Link href="/integrations">
                <a className="btn btn-primary">Ver todas las licencias</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="integration-wrapper position-relative w-100">
              <ul className="integration-list list-unstyled mb-0">
                {brandName.map((brand, i) => (
                  <li key={i + 1} data-aos="fade-up" data-aos-delay="50">
                    <div className="single-integration">
                      <Image
                        width={35}
                        height={35}
                        src={brand.image}
                        alt="integration"
                        className="img-fluid"
                      />
                      <h6 className="mb-0 mt-4">{brand.brand} </h6>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationTwo;
