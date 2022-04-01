import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

/**
 *
 * @param {AppProps} param0
 * @return {React.ReactNode}
 */
function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default Application;
