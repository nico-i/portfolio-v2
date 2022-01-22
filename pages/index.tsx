import Head from "next/head";
import NavBar from "../components/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typewriter from "typewriter-effect";

import React, { Component } from "react";

interface Props {}
interface State {
  isTyping: boolean;
}

export default class Home extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isTyping: true,
    };
  }

  handleTypingToggle() {}

  render() {
    const { isTyping } = this.state;
    return (
      <>
        <Head>
          <title>Nico Ismaili</title>
          <link rel="icon" href="images/favicon.png" />
        </Head>
        <NavBar />
        <div className="typed-heading mx-lg-5 mx-3">
          <Row>
            <Col>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      'Hi.',
                      'Mein Name ist <span class="text-primary">Nico</span> Ismaili.',
                      'Ich bin ein <span class="text-primary">Full-Stack Entwickler </span>aus Wiesbaden, Deutsch&shyland.',
                      'Willkommen zu meiner <span class="text-primary">Portfolio</span> Website.'
                    ],
                    autoStart: true,
                    loop: true,
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
