import Image from 'next/image'
import React from 'react'

const CustomerTwo = () => {
  return (
    <section className="brand-logo ptb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-10">
          <div className="section-heading text-center">
            <h2>+ de 8 años en el mercado</h2>
            <p>Estas son algunas de las entidades privadas y estatales que confian en nosotros:</p>
          </div>
        </div>
      </div>
      <div className="row">
        <ul className="brand-logo-grid list-unstyled">
          <li>
            <Image src="/clients/super.png" width={144} height={62} alt="brand logo" />
          </li>
          <li>
            <Image src="/clients/credicorp.png" width={153} height={62}  alt="brand logo" />
          </li>
          <li>
            <Image src="/clients/mincomercio2.png" width={189} height={62}  alt="brand logo" />
          </li>
          <li>
            <Image src="/clients/armada.png" width={185} height={62}  alt="brand logo" />
          </li>
          <li>
            <Image src="/clients/presidencia.png" width={185} height={62}  alt="brand logo" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default CustomerTwo