"use client";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function PrimaryNavbar() {
  return (
    <section className="primary-navbar">
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
                <li className="position-relative sub-menu ">
                  <span className="dropdown-link">
                    <FontAwesomeIcon icon={faChevronDown} />
                    <span>الخدمات الفرعية</span>
                  </span>
                  <div className="mega-menu position-absolute">
                    <Container>
                      <Row>
                        <Col md={4}>
                          <ul className="list-unstyled ">
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </Col>
                        <Col md={4}>
                          <ul className="list-unstyled">
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </Col>
                        <Col md={4}>
                          <ul className="list-unstyled">
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link href="#action/3.1">
                                <div className="li-link d-flex justify-content-between align-items-start">
                                  <div className="link-content">
                                    <h6>العنوان</h6>
                                    <p>لوريم ايبسوم دولور سيت</p>
                                  </div>
                                  <div className="link-pic">
                                    <FontAwesomeIcon icon={faWordpress} />
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </div>
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
