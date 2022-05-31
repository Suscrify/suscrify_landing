import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import FaqTwo from '@components/faq/FaqTwo';
import PricingOne from '@components/pricing/PricingOne';
import PageHeader from '@components/common/PageHeader';
import TestimonialTwo from '@components/testimonial/TestimonialTwo';

const Pricing = () => {
  return (
    <Layout title="Pricing" desc="this is pricing page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Price Suit to Your Business"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />

      <PricingOne />
      <FaqTwo />
      <TestimonialTwo />
      <Footer footerLight />
    </Layout>
  );
};

export default Pricing;
