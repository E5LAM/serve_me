import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-info text-capitalize">
              <h2>Logo</h2>
              <h3>Company Name (Here)</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, corporis dolorem tempora adipisci repudiandae
                reprehenderit at illum Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Mollitia, corporis dolorem tempora adipisci
                repudiandae reprehenderit at illum
              </p>

              <div className="info">
                <h3>Lic # XX - XXXXXXX</h3>
                <div className="send-mail d-flex">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#fff", width: "30px", height: "30px" }}
                  />
                  <span>info@thewebsite.com</span>
                </div>
                <div className="social-media-icons my-4">
                  <h5 className="mb-3">find us online </h5>
                  <ul className="list-unstyled d-flex gap-3">
                    <li>
                      <Link href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-area-we-serve">
              <h3>Areas We Serve</h3>
              <ul>
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-services">
              <h3>Our (Keyword) Services</h3>
              <ul>
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>{" "}
                <li>
                  <Link href="#">Area Page Link</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-contact-information">
              <h3>Contact Information</h3>
              <ul>
                <li>
                  <Link href="#">1234 Anywhere Place</Link>
                </li>
                <li>
                  <Link href="#">(123) 456 - 7890</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-terms-condition">
              <h3>Terms & Condition</h3>
              <ul>
                <li>
                  <Link href="#">Terms & Condition</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Sitemap</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="footer-location">
          <Row>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
            <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3"> Location Specific Business Name </h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 Anywhere Place City Name Here, XX 123456 </p>
                  <Link href={"#"}>Find us on the map</Link>
                </div>

                <div className="phone">
                  <h5>Phone Number</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
