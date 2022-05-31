import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import Footer from '@layout/Footer/Footer';
import SupportOne from '@components/support/SupportOne';
import IntegrationTwo from '@components/integration/IntegrationTwo';
import WorkProcessTwo from '@components/workprocess/WorkProcessTwo';
import HeroSectionOne from '@components/hero-section/HeroSectionOne';
import FeatureImgContentOne from '@components/feature-img-content/FeatureImgContentOne';
import CustomerTwo from '@components/customer/CustomerTwo';


export default function Home() {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionOne />
      <IntegrationTwo />  
      <FeatureImgContentOne />
      <WorkProcessTwo />
      <CustomerTwo/>
      <SupportOne />
      <Footer footerGradient />
    </Layout>
  );
}
