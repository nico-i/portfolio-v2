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
    <Container className="m-0 ms-4 mt-5 ">
        <Row>
          <Col>
            <h1>
              Hi, ich bin
              <br />
              <span className="text-primary">Nico</span> Ismaili.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              Ein <span className="text-primary">Full-Stack Entwickler</span>{" "}
              aus
              <br />
              Wiesbaden, Deutschland.
            </h2>
          </Col>
        </Row>
        </Container>
      </>
  );
}
