import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import HelpCenterDetails from '@components/help-center/HelpCenterDetails';
import HelpCenterHeader from '@components/help-center/HelpCenterHeader';


const HelpCenter = () => {
  return (
    <Layout title="Help Center" desc="This is help center page">
      <Navbar />
      <HelpCenterHeader />
      <HelpCenterDetails />
      <Footer />
    </Layout>
  );
};

export default HelpCenter;
