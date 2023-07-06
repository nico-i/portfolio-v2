import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Script from "next/script";
import React from "react";
import "../globals.css";

/**
 *
 * @param {AppProps} param0
 * @return {React.ReactNode}
 */
function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default PortfolioApp;
