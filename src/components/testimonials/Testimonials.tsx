"use client";
import { Col } from "react-bootstrap";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// تعريف الواجهة للبيانات
interface Testimonial {
  name: string;
  image: string;
  rating: number;
  description: string;
}

export default function Testimonials({
  cols,
  data,
}: {
  cols?: number;
  data?: Testimonial[];
}) {
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
        {data && data.length > 0 ? (
          <Slider {...settings}>
            {data.map((d: Testimonial) => (
              <div key={d.name} className="slider-item">
                <div className="slider-box-header d-flex justify-content-between align-items-center">
                  <Image width={50} height={50} src={d.image} alt={d.name} />
                  <h4>{d.name}</h4>
                </div>
                <div className="slider-box-rate">{"⭐".repeat(d.rating)}</div>
                <div className="slider-box-desc mt-4">
                  <p>{d.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>لا توجد أراء عملاء حاليا...</p>
        )}
      </div>
      <div className="btn-out-serv text-center">
        <Link href={"#"} className="">
          <button className="btn-prim mt-4">مراجعتنا</button>
        </Link>
      </div>
    </Col>
  );
}
