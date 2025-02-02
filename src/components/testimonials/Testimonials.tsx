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
        <h2 className="text-center mb-5 fw-bold">أراء العملاء</h2>
        <Slider {...settings}>
          <div className="slider-item">
            <div className="slider-box-header">
              <h4>محمد أحمد</h4>
              <p>مدير، شركة</p>
            </div>
            <div className="slider-box-rate">⭐⭐⭐⭐⭐</div>
            <div className="slider-box-desc">
              <p>خدمة ممتازة! ننصح بها لجميع الأعمال الاحترافية</p>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-box-header">
              <h4>أميرة علي</h4>
              <p>مديرة، أعمال</p>
            </div>
            <div className="slider-box-rate">⭐⭐⭐⭐</div>
            <div className="slider-box-desc">
              <p>تجربة رائعة، سنستخدمها مرة أخرى!</p>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-box-header">
              <h4>عمر محمد</h4>
              <p>متعاون</p>
            </div>
            <div className="slider-box-rate">⭐⭐⭐⭐⭐</div>
            <div className="slider-box-desc">
              <p>كنا راضيين جداً عن النتيجة!</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="btn-out-serv text-center">
        <Link href={"#"} className="">
          <button className="btn-prim mt-4">مراجعتنا</button>
        </Link>
      </div>
    </Col>
  );
}
