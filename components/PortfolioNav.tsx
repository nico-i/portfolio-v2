import Image from "next/image";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../public/images/emblem.png";

export default function PortfolioNav(props) {
  const pages = ["über mich", "projekte", "kontakt"];
  const links = ["#about", "#projects", "#contact"];
  return (
    <div className="sticky-top px-lg-5 pt-lg-3 px-md-4 px-3 pt-2">
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="#home">
          <Image priority alt="Logo" className="mw-100" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle
          className="border-0 pb-1"
        />
        <div className="d-none d-md-flex flex-grow-1"></div>
        <div className="d-none d-md-flex">
          <Nav defaultActiveKey="#home">
            {pages.map((page, index) => (
              <Nav.Link
                className="p-0 mx-3 pb-1 mt-1"
                key={"nav-" + index}
                href={links[index]}
              >
                {page.toString()}
              </Nav.Link>
            ))}
          </Nav>
        </div>
        <Navbar.Offcanvas
          id="menu-1"
          aria-labelledby="menu-1-label"
          placement="end"
        >
          <Offcanvas.Header className="pb-0" closeButton>
            <Offcanvas.Title id="menu-1-label">
              <Image priority alt="Logo" className="mw-100" src={logo} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav defaultActiveKey="#home" className="flex-grow-1 d-sm-none">
              {pages.map((page, index) => (
                <Nav.Link
                  className="p-0 mx-3 pb-1 mt-1"
                  key={"canvas-" + index}
                  href={links[index]}
                >
                  {page.toString()}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}