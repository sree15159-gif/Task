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
      <Head>
        <title>Latest Products - DHUB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          /* Hide loader after 3 seconds as CSS fallback */
          #mn-overlay {
            animation: hideLoader 3s forwards;
          }
          @keyframes hideLoader {
            0% { opacity: 1; visibility: visible; }
            90% { opacity: 1; visibility: visible; }
            100% { opacity: 0; visibility: hidden; }
          }
        `}</style>
      </Head>

      {/* Load jQuery first */}
      <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />
      
      {/* Load Bootstrap after jQuery */}
      <Script src="/assets/js/vendor/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      
      {/* Load jQuery plugins after jQuery but before main.js */}
      <Script 
        src="/assets/js/vendor/jquery.zoom.min.js" 
        strategy="beforeInteractive"
        onLoad={() => {
          // Ensure zoom plugin is loaded before other scripts
          console.log('jQuery zoom plugin loaded');
        }}
      />
      <Script src="/assets/js/vendor/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/slick.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/swiper-bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/nouislider.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/countdownTimer.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/infiniteslidev2.js" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/smoothscroll.min.js" strategy="beforeInteractive" />
      
      {/* Load main.js last after all plugins are loaded */}
      <Script 
        src="/assets/js/main.js" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Main.js loaded');
        }}
      />
      
      {/* Fallback script to handle zoom function and loader */}
      <Script id="zoom-fallback" strategy="afterInteractive">
        {`
          // Wait for DOM to be ready
          $(document).ready(function() {
            // Hide loader immediately when DOM is ready
            $("#mn-overlay").fadeOut("fast");
            
            // Check if zoom function exists before calling it
            if (typeof $.fn.zoom === 'function') {
              $('.zoom-image-hover').zoom();
              console.log('Zoom function applied successfully');
            } else {
              console.warn('jQuery zoom plugin not available');
            }
          });
          
          // Also hide loader on window load as backup
          $(window).on("load", function() {
            $("#mn-overlay").fadeOut("fast");
          });
          
          // Force hide loader after 2 seconds as final fallback
          setTimeout(function() {
            $("#mn-overlay").fadeOut("fast");
          }, 2000);
        `}
      </Script>

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



