import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Promo from '@components/promo/Promo';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import PortfolioTab from '@components/tabs/PortfolioTab';


const Integrations = () => {
  return (
    <Layout title="Integrations" desc="This is integrations page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Nuestro Portafolio"
        desc="Somos partners de los mejores empresas del software y siempre al mejor precio."/>
      <PortfolioTab/>
      <Promo bgWhite />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Integrations;
