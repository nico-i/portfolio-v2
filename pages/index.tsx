import Head from "next/head";
import NavBar from "../components/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    <Container className="mt-lg-5 pt-lg-5 mx-lg-5 mx-2">
        <Row>
          <Col>
            <h1 className="display-1 mt-md-5 pt-md-5 pt-4">
              Hi, ich bin
              <br />
              <span className="text-primary display-1">Nico</span> Ismaili.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="display-5">
              Ein <span className="text-primary display-5">Full-Stack Entwickler</span>{" "}
              aus <br className="d-none d-lg-block"/>
              Wiesbaden, Deutschland.
            </h2>
          </Col>
        </Row>
        </Container>
      </>
  );
}
