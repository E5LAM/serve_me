"use client";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="testi-info text-center">
              <p className="testimonials-logo">اخدمني</p>
              <p>
                لوريم إيبسوم دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                لابوروم، إينفينتوري دوكيموس سابينتي بوسيموس سيميليكوي فيرو
                بورو آت فوجا دولوريم كوربوريس فيليت كوروبتي ماغني إيم
                موليستياس إيتاكوي وولوبات إندي مينما وولوباتيم!
              </p>
              <div className="testi-images d-flex justify-content-center align-items-center gap-5">
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
          <Col md={6}>
            <div className="testi-slider text-end">
              <h2 className="text-center mb-5 fw-bold">شهادات العملاء</h2>
              <Slider {...settings}>
                <div className="slider-item">
                  <div className="slider-box-header">
                    <h4>جون دو</h4>
                    <p>الرئيس التنفيذي، الشركة</p>
                  </div>
                  <div className="slider-box-rate">⭐⭐⭐⭐⭐</div>
                  <div className="slider-box-desc">
                    <p>
                      خدمة ممتازة! أوصي بها بشدة للعمل المهني.
                    </p>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="slider-box-header">
                    <h4>جين سميث</h4>
                    <p>مدير، الأعمال</p>
                  </div>
                  <div className="slider-box-rate">⭐⭐⭐⭐</div>
                  <div className="slider-box-desc">
                    <p>تجربة رائعة، سأستخدمها بالتأكيد مرة أخرى!</p>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="slider-box-header">
                    <h4>مايك تايلور</h4>
                    <p>مستقل</p>
                  </div>
                  <div className="slider-box-rate">⭐⭐⭐⭐⭐</div>
                  <div className="slider-box-desc">
                    <p>ممتازة جدًا في النتيجة!</p>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="btn-out-serv text-center">
              <Link href={"#"} className="">
                <button className="btn-prim mt-4">مراجعاتنا</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
