import React from 'react';
import Link from 'next/link';
import { FaRegCheckCircle } from 'react-icons/fa';

import VideoModal from '../common/VideoModal';

const SupportOne = ({ className }) => {
  return (
    <section
      className={`${
        className
          ? 'cta-subscribe bg-dark ptb-120 position-relative overflow-hidden'
          : 'cta-subscribe pt-60 pb-120'
      }`}
    >
      <div className="container">
        <div
          className={`${
            className
              ? ''
              : 'bg-gradient ptb-120 px-4 position-relative overflow-hidden rounded-custom'
          }`}
        >
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="subscribe-info-wrap text-center position-relative z-2">
                <div className="section-heading">
                  <h4 className="h5 text-warning">
                     !!!Pruebalo Gratis!!!
                  </h4>
                  <h2>Comienza ahora con 14 dias </h2>
                  <p>
                   Podras controlar, comprar y eliminar tus gastos en una sola plataforma.
                  </p>
                </div>
                <div className="form-block-banner mw-60 m-auto mt-5">
                  <Link href="/contact-us">
                    <a className="btn btn-primary">Contactate</a>
                  </Link>

                  <VideoModal className="true" />
                </div>
                <ul className="nav justify-content-center subscribe-feature-list mt-4">
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                     Prueba de 14 dias
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Sin tarjeta de credito
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Soporte 24/7
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Cancela en cualquier momento
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
          <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
        </div>
      </div>
    </section>
  );
};

export default SupportOne;
