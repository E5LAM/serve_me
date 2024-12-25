import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function MoreAbout() {
  return (
    <section className="more-about">
      <Container>
        <h2 className="text-center my-3" >Learn More about Our (Keyword) Services</h2>
        <Row>
          <Col md={4}>
            <div className="more-about-box">
              <div className="more-about-header d-flex align-items-center gap-3">
                <FontAwesomeIcon icon={faX} />
                <h3>Service 1</h3>
                
              </div>
              <div className="slug"></div>
              <div className="more-about-desc">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                </p>
              </div>
              <div className="btn-more-about text-center">
                <Link href={"#"} className="">
                  <button className="btn-prim mt-4">(services)</button>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="more-about-box">
              <div className="more-about-header d-flex align-items-center gap-3">
                <FontAwesomeIcon icon={faX} />
                <h3>Service 1</h3>
              </div>
              <div className="more-about-desc">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                </p>
              </div>
              <div className="btn-more-about text-center">
                <Link href={"#"} className="">
                  <button className="btn-prim mt-4">(services)</button>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="more-about-box">
              <div className="more-about-header d-flex align-items-center gap-3">
                <FontAwesomeIcon icon={faX} />
                <h3>Service 1</h3>
              </div>
              <div className="more-about-desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, officiis
                </p>
              </div>
              <div className="btn-more-about text-center">
                <Link href={"#"} className="">
                  <button className="btn-prim mt-4">(services)</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
