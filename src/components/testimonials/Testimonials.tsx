"use client";
import { Col } from "react-bootstrap";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials({ cols }: { cols?: number }) {
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
    <Col md={cols}>
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
              <p>خدمة ممتازة! أوصي بها بشدة للعمل المهني.</p>
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
  );
}
