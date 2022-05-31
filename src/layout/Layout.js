import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title, desc, hasClass }) => {
  return (
    <div className={`main-wrapper ${hasClass ? 'overflow-hidden' : null}`}>
      <Head>
        <title>
          {title
            ? `Suscrify | ${title}`
            : 'Suscrify - Donde tu negocio compra y controla software'}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/favicon_suscrify.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
