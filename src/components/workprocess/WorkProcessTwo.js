import React from 'react';
import { FiTruck } from 'react-icons/fi';
import { RiNodeTree } from 'react-icons/ri';
import { FaBezierCurve, FaLayerGroup } from 'react-icons/fa';

const WorkProcessTwo = () => {
  return (
    <section className="work-process ptb-120 bg-dark text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center" data-aos="fade-up">
              <h2>Comienza ahora comprando y controlando tus suscripciones</h2>
              <p>
              Ahora es más fácil con tecnologia. Recupera el control y aplica a constates descuentos
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-3">
            <div
              className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  <RiNodeTree />
                </i>
              </div>
              <h3 className="h5">Cotiza</h3>
              <p className="mb-0">
                Comentanos cual es tu necesidad y nosotros te cotizaremos las mejores 3 opciones.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {' '}
                  <FaBezierCurve />
                </i>
              </div>
              <h3 className="h5">Compra</h3>
              <p className="mb-0">
              Compra tus suscripciones o licencia en la nube en un solo lugar. 
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  <FaLayerGroup />
                </i>
              </div>
              <h3 className="h5">Aprovisiona</h3>
              <p className="mb-0">
              Aprovisiona instantáneamente a todos tus proveedores en nuestra plataforma.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {' '}
                  <FiTruck />
                </i>
              </div>
              <h3 className="h5">Controla.</h3>
              <p className="mb-0">
              En una sola factura podras gestionar las licencias que necesites 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTwo;
