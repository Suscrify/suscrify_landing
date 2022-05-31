import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from 'react-icons/hi';
import { SiSimpleanalytics } from 'react-icons/si';
import { IoGitCompareOutline } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';

const ServiceOne = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? 'bg-dark' : 'bg-light'}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                subtitle="Beneficios"
                title="Programa de capacitación."
                description="Contamos con cursos especializados en las licencias o suscripciones que adquieras."
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                subtitle="Beneficios"
                title="Programa de capacitación."
                description="Contamos con cursos especializados en las licencias o suscripciones que adquieras."
                centerAlign
              />
            )}
            <div className="feature-grid">
              <div
                className={`shadow-sm highlight-card rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                  <span className="fal">
                    <SiSimpleanalytics className="h4 text-primary" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Cursos avanzados y personalizados.</h3>
                  <p>
                    Servicios de formación y recursos de aprendizaje.
                  </p>
                  <p>
                    {' '}
                    El conocimiento sobre la implementación, el uso, el mantenimiento y la optimización de los servicios en la nube.
                  </p>
                  <h6 className="mt-4">Algunas licencias...</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Office 365
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Google analyst
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      AWS
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Core
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Altair
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Adobe Cloud Create
                    </li>
                  </ul>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    Ver detalles{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Soporte Personalizado</h3>
                  <p className="mb-0">
                  Brindamos soluciones y servicios de calidad con un alto  nivel en el soporte.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    Ver detalles{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className="h3 text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Haz parte de nuestros socios</h3>
                  <p className="mb-0">
                    Contamos con un plan que te ayudará a tener mayores ingresos.
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    Ver detalles{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <IoGitCompareOutline className="h3 text-dark" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Compará con otros productos</h3>
                  <p className="mb-0">
                    En ocasiones puede ser mas eficiente ver otras opciones. 
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    Ver detalles{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className="h3 text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Eventos mensuales</h3>
                  <p className="mb-0">
                    Tenemos eventos todos los meses de capacitaciones, networking, y muchos más. 
                  </p>
                </div>
                <Link href="/service-single">
                  <a className="link-with-icon text-decoration-none mt-3">
                    Ver detalles{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
