import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Map() {
  return (
    <section className="map">
      <Container>
        <Row>
          <Col md={7}>
            <div className="map-location">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  />
                  <a href="https://sprunkin.com/">Sprunki Incredibox</a>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}",
                  }}
                />
              </div>
            </div>
          </Col>
          <Col md={5}>
            <h2>خدمات (الكلمة الرئيسية) في جميع أنحاء منطقة (الموقع)</h2>
            <p>
              لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت. موليتيا،
              كوربوريس دولوريم تمبورا أديبريسكي ريبوديندي ريهينديرت آت إيلوم
              لابوريام ألياس موليتي؟ أولام ديسيرونت
            </p>
            <Row>
              <Col md={6}>
                <div className="country">
                  <ul className="list-unstyled text-md-end text-center text-dark">
                    <li>
                      <Link href="/service-details">
                        <h4> أكسفورد </h4>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <h4> جيلدفورد </h4>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <h4> جودالمينج </h4>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <h4> لوتون </h4>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <h4> سانت ألبانز </h4>
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link href="/service-details">
                        <h4> ريدينج </h4>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <h4> سلو </h4>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <h4> هيميل هيمبستيد </h4>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={6}>
                <ul className="list-unstyled text-md-end text-center">
                  <li>
                    <Link href="/service-details">
                      <h4> غلوستر </h4>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <h4> تشيلمسفورد </h4>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <h4> دارلينجتون </h4>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <h4> دورهام </h4>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <h4> كيدلينجتون </h4>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <h4> أبينجدون </h4>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <h4> ووكينج </h4>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <h4> ألدرشوت </h4>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
