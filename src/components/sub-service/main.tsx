import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col md={6}>
            <div className="hero-info">
              <h1>(Sub Service Name)</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, corporis dolorem tempora adipisci repudiandae
                reprehenderit at illum laboriosam alias molestiae? Ullam
                deserunt ex totam recusandae?
              </p>
              <div className="cta d-flex justify-content-start align-items-center gap-3">
                <p className="mb-0">(XXX) 123 - 4567</p>
                <Link href={"/node_modules"}>
                  <button className="btn-prim">cta here</button>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image text-center border rounded">
              <Image
                src={"/images/service1.jpeg"}
                width={360}
                height={226}
                alt=" hero image"
                className="rounded w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
