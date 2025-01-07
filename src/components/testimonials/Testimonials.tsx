"use client";
import Link from "next/link";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ColSpec } from "react-bootstrap/esm/Col";

export default function Testimonials({ md }: { md: ColSpec | undefined }) {
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
    <Col md={md}>
      <div className="testi-slider">
        <h2 className="text-center mb-5 fw-bold">Client Testimonials</h2>
        <Slider {...settings}>
          <div className="slider-item">
            <div className="slider-box-header">
              <h4>John Doe</h4>
              <p>CEO, Company</p>
            </div>
            <div className="slider-box-rate">⭐⭐⭐⭐⭐</div>
            <div className="slider-box-desc">
              <p>Excellent service! Highly recommended for professional work</p>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-box-header">
              <h4>Jane Smith</h4>
              <p>Manager, Business</p>
            </div>
            <div className="slider-box-rate">⭐⭐⭐⭐</div>
            <div className="slider-box-desc">
              <p>Great experience, will definitely use again!</p>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-box-header">
              <h4>Mike Taylor</h4>
              <p>Freelancer</p>
            </div>
            <div className="slider-box-rate">⭐⭐⭐⭐⭐</div>
            <div className="slider-box-desc">
              <p>Very satisfied with the outcome!</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="btn-out-serv text-center">
        <Link href={"#"} className="">
          <button className="btn-prim mt-4">Our Reviews</button>
        </Link>
      </div>
    </Col>
  );
}
