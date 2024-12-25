import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const Main = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col md={6}>
            <div className="hero-info">
              <h1 className="">(الخدمة المقدمة)</h1>
              <p>
                لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                موليتيا، كوربوريس دولوريم تيمبورا أديبسي ريبودياندي ريهريبريت آت
                إلوم لابوريوسام ألياس موليستي؟ أولام ديسيرنت إكس توتام ريكوساند؟
                لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                موليتيا، كوربوريس دولوريم تيمبورا أديبسي ريبودياندي ريهريبريت آت
                إلوم لابوريوسام ألياس موليستي؟ أولام ديسيرنت إكس توتام ريكوساند؟
                لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                موليتيا، كوربوريس دولوريم تيمبورا أديبسي ريبودياندي ريهريبريت آت
                إلوم لابوريوسام ألياس موليستي؟ أولام ديسيرنت إكس توتام ريكوساند؟
              </p>
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
