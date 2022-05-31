import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import HelpCenterSingleDetails from '@components/help-center/HelpCenterSingleDetails';



const HelpCenterSingle = () => {
  return (
    <Layout title="Help Center Single" desc="This is help center single">
      <Navbar />
      <HelpCenterSingleDetails />
      <Footer />
    </Layout>
  );
};

export default HelpCenterSingle;
