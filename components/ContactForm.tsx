import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
interface Props {
  //budgetOptions: string[];
}

//TODO Create contact form

export default function ContactForm(props: Props) {
  return (
    <Form>
      <Row>
        <Col xs={4}>
          <h2 className="text-start">
            Lassen Sie
            <br />
            uns etwas
            <span className="text--primary"> großartiges</span> zusammen
            schaffen.
          </h2>
          <Form.Group
            className="mb-3 w-100"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Budget</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            className="mb-3 w-100"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Vor- & Nachname</Form.Label>
            <Form.Control type="text" placeholder="Max Mustermann" />
          </Form.Group>
          <Form.Group
            className="mb-3 w-100"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Col>
        <Col xs={8}>
          <Form.Group
            className="mb-3 w-100"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Nachricht</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Row>
            <Col md={3}>
              <p>Social Media</p>
            </Col>
            <Col md={3}>
              <p>Social Media</p>
            </Col>
            <Col md={3}>
              <p>Social Media</p>
            </Col>
            <Col md={3}>
              <div className="d-grid gap-2">
                <Button variant="primary" size="sm">
                  Abschicken
                </Button>
              </div>
            </Col>
            <Col md={3}>
              <p>Social Media</p>
            </Col>
            <Col md={3}>
              <p>Social Media</p>
            </Col>
            <Col md={3}>
              <p>Social Media</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
