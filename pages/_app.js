import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/faux.css'
// import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <>
      {/* Global Head */}
      <Head>
        <title>Latest Products - DHUB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          /* Prevent hydration issues by ensuring consistent initial state */
          #mn-overlay {
            opacity: 1;
            visibility: visible;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: rgba(255, 255, 255, 0.9);
            animation: hideLoader 4s forwards;
          }
          
          @keyframes hideLoader {
            0% { opacity: 1; visibility: visible; }
            85% { opacity: 1; visibility: visible; }
            100% { opacity: 0; visibility: hidden; }
          }
          
          /* Ensure consistent rendering for category cards */
          .category-card {
            opacity: 1;
            transform: none;
          }
          
          /* Prevent style property warnings */
          .mn-cat-card span[style*="background-image"],
          .mn-cat-card span[style*="background-color"] {
            background-image: none !important;
            background-color: transparent !important;
          }
        `}</style>
      </Head>

      {/* Vendor Scripts (load before React hydration if required) */}
      <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/jquery.zoom.min.js" strategy="beforeInteractive" onLoad={() => console.log('jQuery zoom plugin loaded')} />
      <Script src="/assets/js/vendor/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/slick.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/swiper-bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/nouislider.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/countdownTimer.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/infiniteslidev2.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/smoothscroll.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/jquery.zoom.min.js" strategy="beforeInteractive" />

      {/* Main script loaded after hydration */}
      <Script 
        src="/assets/js/main.js" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Main.js loaded')
        }}
      />

      {/* Zoom & Loader fallback */}
      <Script id="zoom-fallback" strategy="afterInteractive">
        {`
          setTimeout(function() {
            $(document).ready(function() {
              $("#mn-overlay").fadeOut("fast");
              
              if (typeof $.fn.zoom === 'function') {
                $('.zoom-image-hover').zoom();
                console.log('Zoom function applied successfully');
              } else {
                console.warn('jQuery zoom plugin not available');
              }
            });
            
            $(window).on("load", function() {
              $("#mn-overlay").fadeOut("fast");
            });
          }, 100);
          
          setTimeout(function() {
            $("#mn-overlay").fadeOut("fast");
          }, 3000);
        `}
      </Script>

      {/* Layout Handling */}
      {isHomePage ? (
        <Component {...pageProps} />
      ) : (
        <main className="wrapper sb-default">
          <Header />
          <div className="mn-main-content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </main>
      )}
    </>
  )
}
