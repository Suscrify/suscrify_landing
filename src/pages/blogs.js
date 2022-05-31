import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import BlogFeature from '@components/blogs/BlogFeature';
import PageHeader from '@components/common/PageHeader';

const Blogs = () => {
  return (
    <Layout title="Blog" desc="This is blog page">
      <Navbar />
      <PageHeader
        title="Our Latest News and Blogs"
        desc="Completely integrate equity invested partnerships without revolutionary systems. Monotonectally network pandemic e-services via bricks-and-clicks information."
        blogtags
      />
      <BlogFeature />
      <Footer />
    </Layout>
  );
};

export default Blogs;
