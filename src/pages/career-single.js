import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import SupportOne from '@components/support/SupportOne';
import CareerSingleHeader from '@components/career/CareerSingleHeader';

const CareerSingle = () => {
  return (
    <Layout title="Career Single" desc="This is career single page">
      <Navbar classOption="navbar-light" />
      <CareerSingleHeader />
      <JobDetails />
      <RelatedJob />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default CareerSingle;
