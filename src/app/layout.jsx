"use client";

import Script from 'next/script';

import Header from "@/app/components/header";
import Footer from '@/app/components/footer';

import "./globals.css";
import "../../public/assets/css/plugins/bootstrap.min.css";
import "../../public/assets/css/plugins/lightgallery.min.css";
import "../../public/assets/css/plugins/slick.css";
import "../../public/assets/css/plugins/animate.css";
import "../../public/assets/css/style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Laralink" />
        <link rel="icon" href="../../assets/img/favicon.png" />
        <title>ويبيفاي - Webify</title>
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        <Script src="/assets/js/plugins/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/isotope.pkg.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jquery.counter.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jquery.slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/lightgallery.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/ripples.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/wow.min.js" strategy="afterInteractive" />

      </body>

    </html>
  );
}
