"use client";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function ContactUs() {
  return (
    <section className="contact-section">
      <Container>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>الاسم</Form.Label>
                <Form.Control type="text" placeholder="أدخل الاسم" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>عنوان البريد الإلكتروني</Form.Label>
                <Form.Control type="email" placeholder="أدخل البريد الإلكتروني" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>الموضوع</Form.Label>
                <Form.Control type="text" placeholder="أدخل الموضوع" />
              </Form.Group>
              <Form.Control
                as="textarea"
                placeholder="اكتب تعليق هنا"
                style={{ height: "100px" }}
              />

              <div className="send text-center">
                <button className="btn-prim ">إرسال</button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div className="contact-info">
              <h2>نداء للعمل هنا لصفحة الاتصال</h2>
              <p>
                لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                موليتيا، كوربوريس دولوريم تيمبورا أديبسي ريبودياندي
                ريهريبريت آت إلوم لابوريوسام ألياس موليستي؟ أولام ديسيرنت إكس
                توتام ريكوساند؟ لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ
                إيليت. موليتيا، كوربوريس دولوريم تيمبورا أديبسي ريبودياندي
                ريهريبريت آت إلوم لابوريوسام ألياس موليستي؟ أولام ديسيرنت إكس
                توتام ريكوساند؟
              </p>
              <div className="send ">
                <button className="btn-prim ">نداء للعمل هنا</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
