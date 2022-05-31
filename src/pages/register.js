/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@layout/Layout';
// import Rating from '@components/common/Rating';
// import { registerTestimonial, registerTestimonialTarget } from '@utils/data';

const Register = () => {
  return (
    <Layout title="Sign Up" desc="This is sign up page">
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{
          background: "url('/page-header-bg.svg')no-repeat right bottom",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg">
                <div className="price-feature-col pricing-feature-info text-white left-radius p-5 order-1 order-lg-0">
                  <Link href="/">
                    <a className="mb-5 d-none d-xl-block d-lg-block">
                      <Image
                        width={113}
                        height={36}
                        src="/logo-white.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </a>
                  </Link>
                  
                  <div className="row justify-content-center mt-60">
                    <div className="col-12">
                      <p>Algunas de las compañias que confian en nosotros</p>
                      <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                          <img
                            src="/clients/super.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/mincomercio.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/credicorp.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/gsa.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/presidencia.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/armada.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/fundacion7r.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/set.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/logo_blumbee.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/workudy.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/matisa.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/dronius.png"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="price-feature-col pricing-action-info p-5 right-radius bg-light order-0 order-lg-1">
                  <a
                    href="index.html"
                    className="mb-5 d-block d-xl-none d-lg-none"
                  >
                    <img
                      src="/logo-color.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                  <h1 className="h3">Crea tu cuenta</h1>
                  <p className="text-muted">
                    Comienza ahora con tu cuenta en suscrify por 14 dias gratis. Sin tarjeta de credito.            
                  </p>

                  <form action="#" className="mt-5 register-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="name" className="mb-1">
                          Nombre <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            id="name"
                            required
                            aria-label="name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 ">
                        <label htmlFor="email" className="mb-1">
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                            required
                            aria-label="email"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="company" className="mb-1">
                          Empresa 
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            id="company"
                            aria-label="company"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="password" className="mb-1">
                          Contraseña <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            id="password"
                            required
                            aria-label="Password"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check d-flex">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            He leido y estoy de acuerdo con {' '}
                            <a href="#" className="text-decoration-none">
                              Terminos & Condiciones
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-4 d-block w-100"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                    <div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
                      <span className="divider-bar"></span>
                      <h6 className="position-absolute text-center divider-text bg-light mb-0">
                        O
                      </h6>
                    </div>
                    <div className="action-btns">
                      <a
                        href="#"
                        className="btn google-btn mt-4 d-block bg-white shadow-sm d-flex align-items-center text-decoration-none justify-content-center"
                      >
                        <Image
                          width={30}
                          height={29}
                          src="/google-icon.svg"
                          alt="google"
                        />
                        <span className="mx-2">Ingresar con Google</span>
                      </a>
                    </div>
                    <p className="text-center text-muted mt-4 mb-0 fw-medium font-monospace">
                      ¿Ya tienes una cuenta?{' '}
                      <Link href="/login">
                        <a className="text-decoration-none">Ingresar</a>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
