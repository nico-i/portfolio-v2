import Image from "next/image";
import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

interface Props {}

interface State {}

const pages = ["über mich", "projekte", "kontakt"];
const links = ["#about", "#projects", "#contact"];
export default class NavBar extends Component<Props, State> {
  render() {
    return (
      <div className="sticky-top px-lg-5 pt-lg-3 px-md-4 ps-4 pe-3 pt-2">
        <Navbar collapseOnSelect bg="white" expand="md">
            <Navbar.Brand href="#home">
              <Image
                className="mw-100"
                src="/images/emblem.png"
                height={50}
                width={50}
              />
            </Navbar.Brand>
            <Navbar.Toggle className="border-0 pb-1" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav defaultActiveKey="#home">
                {pages.map((page, index) => (
                  <Nav.Link className="themed-nav p-0 mx-3 pb-1 mt-1" key={"nav-" + index} href={links[index]}>
                    {page.toString()}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

/*
 <div className="navigation navbar-expand-lg d-flex justify-content-between">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              
            </ul>
          </div>
        </div>
      </div>
*/
