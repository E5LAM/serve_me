"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function PrimaryNavbar() {
  return (
    <section className="primary-navbar ">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="navbar-brand">
            <Link href={"/"}>اخدمني</Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <ul className="list-unstyled d-flex gap-3 m-0">
                <li>
                  <Link href={"/"}>الرئيسية</Link>
                </li>
                <li>
                  <Link href={"/about"}>من نحن</Link>
                </li>
                <li>
                  <Link href={"/main-service"}>الخدمات الرئيسية</Link>
                </li>
                <li>
                  <Link href={"/contact"}>اتصل بنا</Link>
                </li>
                <li>
                  <NavDropdown title="الخدمات الفرعية" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1" >
                      الخدمة الأولى
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      الخدمة الثانية
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      خدمة أخرى
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      رابط منفصل
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
            </Nav>
            <div className="cta d-flex justify-content-center align-items-center gap-3">
              <p className="mb-0">123 - 4567 (XXX)</p>
              <button className="btn-prim">طلب الآن</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
