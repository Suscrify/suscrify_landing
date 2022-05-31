import React from 'react';

import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import FooterShort from '@layout/Footer/FooterShort';
import SingleServiceRegister from '@components/services/SingleServiceRegister';


const RequestDemo = () => {
  return (
    <Layout title="Request Demo" desc="This is request demo page">
      <Navbar navDark />
      <section className="bg-dark ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <SingleServiceRegister />
          </div>
        </div>
      </section>

      <FooterShort />
    </Layout>
  );
};

export default RequestDemo;
