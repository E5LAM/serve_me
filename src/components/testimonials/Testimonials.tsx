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
              <p>Logo</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, inventore ducimus sapiente possimus similique vero
                porro at fuga dolorem corporis velit corrupti magni eum
                molestias itaque voluptate unde minima voluptatem!
              </p>
              <div className="testi-images d-flex justify-content-center align-items-center gap-5">
                <Image
                  src={"/images/testimonials/google.png"}
                  width={250}
                  height={150}
                  alt="Google Logo"
                />
                <Image
                  src={"/images/testimonials/yelp.png"}
                  width={250}
                  height={150}
                  alt="Yelp Logo"
                />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <h2 className="text-center mb-5">Client Testimonials</h2>
            <div className="testi-slider">
              <Slider {...settings}>
                <div className="slider-item">
                  <div className="slider-box-header">
                    <h4>John Doe</h4>
                    <p>CEO, Company</p>
                  </div>
                  <div className="slider-box-rate">⭐⭐⭐⭐⭐</div>
                  <div className="slider-box-desc">
                    <p>
                      Excellent service! Highly recommended for professional
                      work and great customer care.
                    </p>
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
        </Row>
      </Container>
    </section>
  );
}
