import React from 'react';
import Link from 'next/link';


const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
               <li>
                <Link href="integrations">
                  <a className="nav-link">Marketplace</a>
                </Link>
              </li>
              <li>
                <Link href="services">
                  <a className="nav-link">Beneficios</a>
                </Link>
              </li>

              <li>
                <Link href="contact-us">
                  <a className="nav-link">Contáctanos</a>
                </Link>
              </li>
              
      </ul>
      <div className="action-btns mt-4 ps-3">
        <Link href="/login">
          <a className="btn btn-outline-primary text-decoration-none me-2">Ingresar</a>
        </Link>
        <Link href="/request-demo">
          <a className="btn btn-primary">Comenzar ahora</a>
        </Link>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
