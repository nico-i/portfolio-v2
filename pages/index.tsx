import Head from "next/head";
import Image from "next/image";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import NavBar from "../components/Navbar";
import Skill from "../components/skill";
import profileImage from "../public/images/profile.png";
import skills from "../utils/skills";

interface Props {}
interface State {}

//TODO https://blog.logrocket.com/complete-guide-internationalization-nextjs/
//TODO https://spacejelly.dev/posts/how-to-use-cloudinary-images-in-next-js-with-blurred-placeholders/

export default function Home(props: Props) {
  const {ref, inView} = useInView({
    threshold: 0,
  });
  return (
    <>
      <Head>
        <title>Nico Ismaili</title>
        <meta property="og:title" content="Portfolio von Nico Ismaili" />
        <meta name="description" content="Willkommen zu meinem Portfolio!" />
        <meta property="og:url" content="https://nico-ismaili.netlify.app/" />
        <meta
          property="og:description"
          content="Willkommen zu meinem Portfolio! Hier finden Sie meine Kontaktdaten, vergangene Projekte und Qualifikationen."
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
                    'Mein Name ist<br/><span class="text-primary">Nico</span> Ismaili.',
                    'Ich bin ein<span class="d-none d-lg-inline"> </span><br class="d-block d-lg-none"/><span class="text-primary">Full-Stack<br />Entwickler</span> aus<span class="d-none d-md-inline"> </span><br class="d-block d-md-none"/>Wiesbaden, <br /> Deutsch&shyland.',
                    'Willkommen <br class="d-lg-none d-block"/>zu <br class="d-none d-lg-block"/>meinem <br class="d-lg-none d-block"/><span class="text-primary">Portfolio.</span>',
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
      <Container className="section__greeting">
        <Row>
          <Col xs={6} md={4} className="mx-auto my-3 d-none d-lg-block">
            <Image
              priority
              alt="Profile image"
              className="rounded-pill img-fluid"
              src={profileImage}
            />
          </Col>
          <Col>
            <h2>
              Darf ich mich <span className="text--primary">vorstellen?</span>
            </h2>
            <p>
              Wie bereits erwähnt heiße ich Nico. Ich studiere{" "}
              <a className="link--underlined" href="#">
                <span className="text--underlined">Medieninformatik</span>
              </a>{" "}
              im 5. Semester an der{" "}
              <a className="link--underlined" href="#">
                <span className="text--underlined">Hochschule RheinMain</span>
              </a>{" "}
              in Wiesbaden.
            </p>
            <p>
              Parallel zu meinem Studium arbeite ich als Werkstudent bei{" "}
              <a className="link--underlined" href="#">
                <span className="text--underlined">forsuxess</span>
              </a>
              , ein Unternehmen dass sich auf HR-IT spezialisiert.
            </p>
            <p>
              In meiner Freizeit widme ich mich der{" "}
              <a href="#">
                <span className="text--underlined">Fotografie</span>
              </a>{" "}
              oder halte mich auf dem Laufenden was die neueste Technik angeht.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="section">
        <Row>
          <Col>
            <h2 className="text-center">
              Was ich in <span className="text--primary">letzter Zeit</span> so
              getrieben habe?
            </h2>
          </Col>
        </Row>
      </Container>
      <Container className="section" style={{maxWidth:'600px'}}>
        <Row className="justify-content-center" ref={ref}>
          {skills.map((entry) => (
            <Col
              sm={4}
              md={3}
              lg={2}
              key={entry.skill}
              className="pb-4"
              style={{ width: 100 }}
            >
              <Skill
                endPercentage={entry.percentage}
                skill={entry.skill}
                backgroundColor="#007dff"
                pathColor="#f7f7f7"
                icon={entry.icon.name}
                isInView={inView}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
