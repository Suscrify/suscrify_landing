import React from "react";
import Link from 'next/link';
import { integrationFeature, 
  integrationFeatureAll,
  integrationFeatureTendencia,
  integrationFeatureComunicacion,
  integrationFeatureSeguridad,
  integrationFeatureInfra,
  integrationFeatureProducti,
  integrationFeatureOperaciones,
  integrationFeatureCreatividad,
 } from '../../utils/data';
 import Image from "next/image";


const PortfolioTab = () => {
  return (
    <section className="portfolio bg-light ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-6">
            <div className="tab-button mb-5">
              <ul
                className="nav nav-pills d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-controls="pills-all"
                    aria-selected="true"
                  >
                    Todas
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-tendencia-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tendencia"
                    type="button"
                    role="tab"
                    aria-controls="pills-tendencia"
                    aria-selected="false"
                  >
                    Tendencia
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-comunicacion-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-comunicacion"
                    type="button"
                    role="tab"
                    aria-controls="pills-comunicacion"
                    aria-selected="false"
                  >
                    Comunicaciones
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-seguridad-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-seguridad"
                    type="button"
                    role="tab"
                    aria-controls="pills-seguridad"
                    aria-selected="false"
                  >
                    Seguridad
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-infraestructura-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-infraestructura"
                    type="button"
                    role="tab"
                    aria-controls="pills-infraestructura"
                    aria-selected="false"
                  >
                    Infraestructura
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-redes-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-redes"
                    type="button"
                    role="tab"
                    aria-controls="pills-redes"
                    aria-selected="false"
                  >
                    Redes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-productividad-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-productividad"
                    type="button"
                    role="tab"
                    aria-controls="pills-productividad"
                    aria-selected="false"
                  >
                    Productividad
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-operaciones-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-operaciones"
                    type="button"
                    role="tab"
                    aria-controls="pills-operaciones"
                    aria-selected="false"
                  >
                    Operaciones
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Creatividad-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Creatividad"
                    type="button"
                    role="tab"
                    aria-controls="pills-Creatividad"
                    aria-selected="false"
                  >
                    Creatividad
                  </button>
                </li>
              </ul>
            </div>
          </div>

{/* FINALIZA EL MENU */}
{/* COMIENZA LOS PILLS POR TITULO */}

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
            >
              <div className="row">
                {integrationFeatureAll.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href={integration.href}>
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              height="40"
                              alt="integration"
                              className="img-fluid"
                             />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-tendencia"
              role="tabpanel"
              aria-labelledby="pills-tendencia-tab"
            >
              <div className="row">
                {integrationFeatureTendencia.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href="/integration-single">
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              alt="integration"
                              height="40"
                              
                            />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-comunicacion"
              role="tabpanel"
              aria-labelledby="pills-comunicacion-tab"
            >
              <div className="row">
                {integrationFeatureComunicacion.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href="/integration-single">
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              alt="integration"
                              className="img-fluid"
                              height="40"
                            />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-seguridad"
              role="tabpanel"
              aria-labelledby="pills-seguridad-tab"
            >
              <div className="row">
                {integrationFeatureSeguridad.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href="/integration-single">
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              alt="integration"
                              className="img-fluid"
                              height="40"
                            />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="pills-infraestructura"
              role="tabpanel"
              aria-labelledby="pills-infraestructura-tab"
            >
                <div className="row">
                {integrationFeatureInfra.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href="/integration-single">
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              alt="integration"
                              className="img-fluid"
                              height="40"
                            />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-redes"
              role="tabpanel"
              aria-labelledby="pills-redes-tab"
            > <div className="row">
                {integrationFeature.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href="/integration-single">
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              alt="integration"
                              className="img-fluid"
                              height="40"
                            />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-productividad"
              role="tabpanel"
              aria-labelledby="pills-productividad-tab"
            >
              <div className="row">
                {integrationFeatureProducti.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href="/integration-single">
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              alt="integration"
                              className="img-fluid"
                              height="40"
                            />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-operaciones"
              role="tabpanel"
              aria-labelledby="pills-operaciones-tab"
            >
              <div className="row">
                {integrationFeatureOperaciones.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href="/integration-single">
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              alt="integration"
                              className="img-fluid"
                              height="40"
                            />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Creatividad"
              role="tabpanel"
              aria-labelledby="pills-Creatividad-tab"
            >
              <div className="row">
                {integrationFeatureCreatividad.map((integration, i) => (
                  <div key={i + 1} className="col-lg-4 col-md-6">
                    <Link href={integration.href}>
                      <a className="position-relative text-decoration-none connected-app-single bg-white border border-2 bg-white my-4 mt-lg-0 mt-md-0 transition-base rounded-custom d-block overflow-hidden p-5">
                        <div className="position-relative connected-app-content">
                          <div className="integration-logo bg-white rounded-circle p-2 d-inline-block">
                            <Image
                              src={integration.logo}
                              width="40"
                              alt="integration"
                              className="img-fluid"
                              height="40"
                            />
                          </div>
                          <h5>{integration.title} </h5>
                          <p className="mb-0 text-muted">{integration.info}</p>
                        </div>
                        <span
                          className={`badge position-absolute integration-badge ${integration.class} px-3 py-2`}
                        >
                          {integration.type}
                        </span>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTab;
