import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function MainServiceHero() {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col md={6}>
            <div className="hero-info">
              <h1>(الخدمة المقدمة)</h1>
              <p>
                لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                موليتيا، كوربوريس دولوريم تيمبورا أديبسي ريبودياندي
                ريهريبريت آت إلوم لابوريوسام ألياس موليستي؟ أولام ديسيرنت إكس
                توتام ريكوساند؟
              </p>
              <div className="cta d-flex justify-content-start align-items-center gap-3">
                <p className="mb-0">(XXX) 123 - 4567</p>
                <Link href={"/node_modules"}>
                  <button className="btn-prim">إجراء هنا</button>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image text-center border rounded">
              <Image
                src={"/images/hero/hero.png"}
                width={300}
                height={220}
                alt="صورة البطل"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
