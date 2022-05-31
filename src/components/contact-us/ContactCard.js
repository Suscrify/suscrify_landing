import React from 'react';
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ContactCard = () => {
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillChatSquareTextFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Habla con nosotros</h5>
                <p>
                  Tenemos un equipo que esta dispuesto a ayudarte{' '}
                  <strong>Lunes a Viernes</strong> desde
                  <strong>8am to 5pm BOGOTÁ.</strong>
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+573007602388&text=hola%20estoy%20interesado%20en%20una%20licencia"
                className="btn btn-link mt-auto"
              >
                Mensaje por Whatsapp
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Enviar un E-mail</h5>
                <p>
                  Envianos un correo a:{' '}
                  <strong>suscrify@gmail.com</strong>
                  y en 12 horas te estaremos respondiendo
                </p>
              </div>
              <a
                href="mailto:hellothemetags@gmail.com"
                className="btn btn-primary mt-auto"
              >
                Enviar Email
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Danos una llamada</h5>
                <p>
                  Llamanos entre{' '}
                  <strong>lunes a Vienres</strong> from
                  <strong>9am to 4pm BOGOTÁ.</strong>
                </p>
              </div>
              <a href="tel:+57 3007602388" className="btn btn-link mt-auto">
                +57 3007602388
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
