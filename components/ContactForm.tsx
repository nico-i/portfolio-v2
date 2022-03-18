import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {
  FaInstagram,
  FaLinkedin,
  FaUnsplash,
  FaYoutube,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
interface Props {
  //budgetOptions: string[];
}

//TODO Create contact form

export default function ContactForm(props: Props) {
  return (
    <Form className="mb-3 mb-md-2 px-2 px-md-0">
      <Row>
        <Col xs={12} lg={3}>
          <h2 className="text-start mb-4">
            Lassen Sie <br className="d-none d-lg-block" />
            uns <br className="d-block d-md-none" />
            etwas
            <span className="text--primary"> großartiges </span>
            <br className="d-none d-md-block" />
            zusammen <br className="d-none d-lg-block" />
            schaffen.
          </h2>
          <Form.Group
            className="mb-3 w-100"
            controlId="contactForm.BudgetSelect"
          >
            <Form.Label>Budget</Form.Label>
            <Form.Select aria-label="Budget selection">
              <option value="1000">€1.000 – €1.500</option>
              <option value="1500">€1.500 – €2.000</option>
              <option value="2500">€2.500 – €3.000</option>
              <option value="3000">€3.000+</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3 w-100"
            controlId="contactForm.NameInput"
          >
            <Form.Label>Vor- & Nachname</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>
          <Form.Group
            className="mb-3 w-100"
            controlId="contactForm.EmailInput"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Col>
        <Col xs={12} lg={9}>
          <Form.Group
            className="mb-3 w-100"
            controlId="contactForm.MessageTextarea"
          >
            <Form.Label>Nachricht</Form.Label>
            <Form.Control className="mb-lg-4" as="textarea" rows={14} />
          </Form.Group>
          <Row>
            <Col xs={12} className="d-block d-lg-none mb-0 mb-md-4">
              <div className="d-grid gap-2">
                <Button variant="primary" size="sm">
                  Abschicken
                </Button>
              </div>
            </Col>
            <Col xs={12} className="d-block d-md-none text-center py-4">
              oder
            </Col>
            <Col xs={12} md={4} lg={3}className="ps-3 mb-2 mb-lg-0">
              {" "}
              <a
                href="https://www.instagram.com/nico.ismaili/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={25} />
                <span className="ms-2">@nico.ismaili</span>
              </a>
            </Col>
            <Col xs={12} md={4} lg={3} className="ps-3 mb-2 mb-lg-0">
              {" "}
              <a
                href="https://www.linkedin.com/in/ismailinico"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={25} />
                <span className="ms-2">ismailinico</span>
              </a>
            </Col>
            <Col xs={12} md={4} lg={3} className="ps-3 mb-2 mb-lg-0">
              {" "}
              <a
                href="https://www.youtube.com/channel/UCZmR0vqCMM1BWo-OkvX99EA"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube size={25} />
                <span className="ms-2">Nico Ismaili</span>
              </a>
            </Col>
            <Col xs={12} lg={3} className="d-none d-lg-block">
              <div className="d-grid gap-2">
                <Button variant="primary" size="sm">
                  Abschicken
                </Button>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3} className="ps-3 mb-2 mb-lg-0">
              <a
                href="https://unsplash.com/@nicoismaili"
                target="_blank"
                rel="noreferrer"
              >
                <FaUnsplash size={25} />
                <span className="ms-2">@nicoismaili</span>
              </a>
            </Col>
            <Col xs={12} md={4} lg={3} className="ps-3 mb-2 mb-lg-0">
              <a
                href="https://github.com/ismailinico"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={25} />
                <span className="ms-2">ismailinico</span>
              </a>
            </Col>
            <Col xs={12} md={4} lg={3} className="ps-3 mb-2 mb-lg-0">
              <a href="mailto:nico@ismaili.de" target="_blank" rel="noreferrer">
                <FaEnvelope size={25} />
                <span className="ms-2">nico@ismaili.de</span>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
