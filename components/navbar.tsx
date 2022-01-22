import Image from "next/image";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface Props {}

interface State {}

export default class NavBar extends Component<Props, State> {
  pages = ["über mich", "projekte", "kontakt"];

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image src="/images/emblem.svg" height={40} width={40} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="justify-content-end">
              <Nav>
                <Nav.Link href="#about">{this.pages[0]}</Nav.Link>
                <Nav.Link href="#projects">{this.pages[1]}</Nav.Link>
                <Nav.Link href="#contact">{this.pages[2]}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
