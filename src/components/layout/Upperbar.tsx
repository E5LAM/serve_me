import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function uppdebar() {
  return (
    <section className="uppdebar">
      <Container>
        <Row className="align-items-center">
          <Col>
            <Row>
              <Col>
                <div className="contact">
                  <h4>(Business Name) </h4>
                  <p>1234 Anywhere Place, XX 1234567</p>
                  <p>(123) 456-7890</p>
                </div>
              </Col>
              <Col>
                <div className="contact">
                  <h4>(Business Name) </h4>
                  <p>1234 Anywhere Place, XX 1234567</p>
                  <p>(123) 456-7890</p>
                </div>
              </Col>
              <Col>
                <div className="hours-work">
                  <h4>Our Business Hours </h4>
                  <p>Mon - Fri: 8:00AM - 5:00 PM</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="social-icons ">
              <ul className="list-unstyled d-flex justify-content-end gap-3 ">
                <li>
                  <Link href="#">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "30px" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "30px" }}
                    />
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ width: "30px" }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
