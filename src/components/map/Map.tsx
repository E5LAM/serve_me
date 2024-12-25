import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Map() {
  return (
    <section className="map">
      <Container>
        <Row>
          <Col md={6}>
            <div className="map-location">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
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
          <Col md={6}>
            <h2>خدمات (الكلمة الرئيسية) في جميع أنحاء منطقة (الموقع)</h2>
            <p>
              لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
              موليتيا، كوربوريس دولوريم تمبورا أديبريسكي ريبوديندي
              ريهينديرت آت إيلوم لابوريام ألياس موليتي؟ أولام ديسيرونت
            </p>
            <Row>
              <Col md={6}>
                <ul className="list-unstyled">
                  <li>لوريم إيبسوم</li>
                  <li>لوريم إيبسوم</li>
                  <li>لوريم إيبسوم</li>
                  <li>لوريم إيبسوم</li>
                  <li>لوريم إيبسوم</li>
                </ul>
              </Col>

              <Col md={6}>
                <ul className="list-unstyled">
                  <li>لوريم إيبسوم</li>
                  <li>لوريم إيبسوم</li>
                  <li>لوريم إيبسوم</li>
                  <li>لوريم إيبسوم</li>
                  <li>لوريم إيبسوم</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
