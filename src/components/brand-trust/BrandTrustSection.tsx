import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Testimonials from "../testimonials/Testimonials";

export default function BrandTrustSection() {
  return (
    <section className="testimonials">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="testi-info text-center">
              <p>Logo</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, inventore ducimus sapiente possimus similique vero
                porro at fuga dolorem corporis velit corrupti magni eum
                molestias itaque voluptate unde minima voluptatem!
              </p>
              <div className="testi-images d-flex justify-content-center align-items-center gap-5">
                <Image
                  src={"/images/testimonials/google.png"}
                  width={250}
                  height={150}
                  alt="Google Logo"
                />
                <Image
                  src={"/images/testimonials/yelp.png"}
                  width={250}
                  height={150}
                  alt="Yelp Logo"
                />
              </div>
            </div>
          </Col>

          <Testimonials md={6} />
        </Row>
      </Container>
    </section>
  );
}
