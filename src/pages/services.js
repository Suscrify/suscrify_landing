import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ServiceOne from '@components/services/ServiceOne';
import SupportOne from '@components/support/SupportOne';



const services = () => {
  return (
    <Layout title="Services" desc="this is services page  ">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Benefíciese de nuestra amplia cartera de proveedores"
        desc="Benefíciese de una gama de nuevos proveedores y nuevas categorías de productos a través de la nuestra plataforma, incluida la gestión de identidades, SaaS, IaaS y DaaS,  migración y documentación de TI.."
      />

      <ServiceOne />
      <SupportOne className="true" />
      <Footer footerLight />
    </Layout>
  );
};

export default services;
