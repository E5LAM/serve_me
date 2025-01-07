import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import Testimonials from "../testimonials/Testimonials";

export default function BrandTrust() {
  return (
    <section className="testimonials">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="testi-info text-center">
              <p className="testimonials-logo">اخدمني</p>
              <p>
                لوريم إيبسوم دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                لابوروم، إينفينتوري دوكيموس سابينتي بوسيموس سيميليكوي فيرو بورو
                آت فوجا دولوريم كوربوريس فيليت كوروبتي ماغني إيم موليستياس
                إيتاكوي وولوبات إندي مينما وولوباتيم!
              </p>
              <div className="testi-images flex-wrap d-flex justify-content-center align-items-center gap-5">
                <Image
                  src={"/images/testimonials/google.png"}
                  width={250}
                  height={150}
                  alt="Google اخدمني"
                />
                <Image
                  src={"/images/testimonials/yelp.png"}
                  width={250}
                  height={150}
                  alt="Yelp اخدمني"
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
