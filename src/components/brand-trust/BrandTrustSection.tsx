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
              <p>اخدمني</p>
              <p>
                لوريم إيبسوم دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                لابوروم، إينفينتوري دوكيموس سابينتي بوسيموس سيميليكوي فيرو بورو
                آت فوجا دولوريم كوربوريس فيليت كوروبتي ماغني إيم موليستياس
                إيتاكوي وولوبات إندي مينما وولوباتيم!
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

          <Testimonials cols={6} />
        </Row>
      </Container>
    </section>
  );
}
