import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import CareerPromo from '@components/career/CareerPromo';
import CareerFeature from '@components/career/CareerFeature';



const Career = () => {
  return (
    <Layout title="Career" desc="This is career page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Career"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <CareerFeature />
      <CareerPromo />
      {/* <OpenJobs />
      <CareerPromo />
      <CtaTwo /> */}
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Career;
