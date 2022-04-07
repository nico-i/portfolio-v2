import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";

/**
 *
 * @param {AppProps} param0
 * @return {React.ReactNode}
 */
function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(PortfolioApp);
