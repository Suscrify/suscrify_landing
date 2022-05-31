import Document, { Html, Head, Main, NextScript } from 'next/document';

//  const APP_NAME = 'Suscrify Controla tus gastos y comra tu software en un solo lugar';
//  const APP_DESCRIPTION =
//    'Suscrify, Marketplace de software en un solo lugar y controla tus gastos en software.';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          >

          </link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
