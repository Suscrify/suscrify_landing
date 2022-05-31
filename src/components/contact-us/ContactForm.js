import Image from 'next/image';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5voneni', 'template_zx379zk', form.current, 'mSwJgzH-0PuAeHsCY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2>Habla con nuestro equipo de Ventas & Marketing</h2>
              <p>
                Dejanos ser parte de tu equipo de IT y te ayudaremos a ahorrar tiempo. 
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="nombre" className="mb-1">
                    nombre <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      required
                      placeholder="Nombre"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="apellido" className="mb-1">
                    apellido
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="apellido"
                      placeholder="Apellido"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="celular" className="mb-1">
                    celular <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="celular"
                      required
                      placeholder="Celular"
                      aria-label="phone"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="mb-1">
                    email<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="mensaje" className="mb-1">
                    Mensaje <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      className="form-control"
                      name="mensaje"
                      required
                      placeholder="¿Como podemos ayudarte?"
                      style={{ height: '120px' }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Contacto
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <Image
                width={526}
                height={406}
                src="/contact-us-img-2.svg"
                alt="contact us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default ContactForm;