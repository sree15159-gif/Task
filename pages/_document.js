// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="ecommerce, store, mart, fashion, grocery, super store, market, organic food, super market" />
        <meta name="description" content="Best multipurpose ecommerce html template for your online store." />
        <meta name="author" content="Maraviya Infotech" />
        
        {/* Favicon */}
        <link rel="icon" href="/assets/img/favicon/favicon.png" />

        {/* Vendor CSS */}
        <link rel="stylesheet" href="/assets/css/vendor/materialdesignicons.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/nouislider.css" />

        {/* Main CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
        <link rel="stylesheet" href="/assets/css/extra.css" />
        <link rel="stylesheet" href="/assets/css/rtl.css" />
        <link rel="stylesheet" href="/assets/css/rtl-custom.css" />
        <link rel="stylesheet" href="/assets/css/rtl-extra.css" />
        <link rel="stylesheet" href="/assets/css/print.css" />
        <link rel="stylesheet" href="/assets/css/print-rtl.css" />
        <link rel="stylesheet" href="/assets/css/print-custom.css" />
        <link rel="stylesheet" href="/assets/css/print-extra.css" />
        <link rel="stylesheet" href="/assets/css/print-rtl-custom.css" />

        {/* Fonts */}
        <link rel="preload" href="/assets/fonts/font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/font2.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
