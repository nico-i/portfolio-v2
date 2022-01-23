import Head from "next/head";
import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Typewriter from "typewriter-effect";
import NavBar from "../components/navbar";

interface Props {}
interface State {}

export default class Home extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <title>Nico Ismaili</title>
          <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
          <link
            rel="icon"
            sizes="16x16 32x32 64x64"
            href="/images/favicon/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="/images/favicon/favicon-192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="160x160"
            href="/images/favicon/favicon-160.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/favicon/favicon-96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="/images/favicon/favicon-64.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon/favicon-16.png"
          />
          <link rel="apple-touch-icon" href="/images/favicon/favicon-57.png" />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/favicon/favicon-114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/favicon/favicon-72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/favicon/favicon-144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/images/favicon/favicon-60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/favicon/favicon-120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/favicon/favicon-76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/favicon/favicon-152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/favicon-180.png"
          />
          <meta name="msapplication-TileColor" content="#F7F7F7" />
          <meta
            name="msapplication-TileImage"
            content="/images/favicon/favicon-144.png"
          />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio von Nico Ismaili" />
          <meta name="description" content="Willkommen zu meinem Portfolio!" />
          <meta property="og:url" content="https://nico-ismaili.netlify.app/" />
          <meta
            property="og:description"
            content="Willkommen zu meinem Portfolio! Hier finden Sie meine Kontaktdaten, vergangene Projekte und Qualifikationen."
          ></meta>
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image"
            content="https://nico-ismaili.netlify.app/images/social.webp"
          ></meta>
        </Head>
        <NavBar />
        <div className="typed-heading mx-lg-5 mx-3">
          <Row>
            <Col>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Hi.",
                      'Mein Name ist<br class="d-block d-lg-none"/> <span class="text-primary">Nico</span> Ismaili.',
                      'Ich bin ein <span class="text-primary">Full-<br class="d-block d-lg-none"/>Stack <br class="d-none d-lg-block" /> Entwickler</span> aus Wiesbaden, <br /> Deutsch&shyland.',
                      'Willkommen <br class="d-md-none d-block"/>zu <br class="d-none d-md-block"/>meinem <br class="d-md-none d-block"/><span class="text-primary">Portfolio</span>.',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: Math.floor(Math.random() * (130 - 90 + 1)) + 90,
                  }}
                />
              </h1>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
