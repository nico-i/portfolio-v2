import Image from "next/image";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {}

interface State {}

const pages = ["über mich", "projekte", "kontakt"];
const links = ["#about", "#projects", "#contact"];
export default class NavBar extends Component<Props, State> {
  render() {
    return (
      <Row className="p-5">
        <Col xs={6}>
          <a href="#home">
            <Image src="/images/emblem.svg" height={50} width={50} />
          </a>
        </Col>
        <Col xs={6} className="text-end pt-1">
          {pages.map((page, index) => (
            <a href={links[index]} className="hover-line mx-3">{page.toString()}</a>
          ))}
        </Col>
      </Row>
    );
  }
}
