import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
export default function Fix() {
  return (
    <section className="fix">
      <Container>
        <Row>
          <Col md={6}>
            <div className="hero-image text-center border rounded">
              <Image
                src={"/images/hero/hero.png"}
                width={360}
                height={226}
                alt=" hero image"
              />
            </div>
            <div className="our-serve text-center py-3">
              <Link href={"/node_modules"}>
                <button className="btn-prim">our service </button>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-info">
              <h2>We fix all kinds of (keyword) issues</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, corporis dolorem tempora adipisci repudiandae
                reprehenderit at illum laboriosam alias molestiae? Ullam
                deserunt ex totam recusandae?
              </p>
              <div className="cta d-flex justify-content-start align-items-center gap-3">
                <p className="mb-0">(XXX) 123 - 4567</p>
                <Link href={"/node_modules"}>
                  <button className="btn-prim">phone number</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
