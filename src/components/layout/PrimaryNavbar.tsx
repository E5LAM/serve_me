"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function PrimaryNavbar() {
  return (
    <section className="primary-navbar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <ul className="list-unstyled d-flex gap-3 m-0">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>about</Link>
                </li>
                <li>
                  <Link href={"/main-service"}>main service</Link>
                </li>
                <li>
                  <Link href={"/contact"}>contact</Link>
                </li>
                <li>
                  <NavDropdown title="sub service" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
            </Nav>
            <div className="cta d-flex justify-content-center align-items-center gap-3">
              <p className="mb-0">(XXX) 123 - 4567</p>
              <button className="btn-prim">cta here</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
