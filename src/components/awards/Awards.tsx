"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Image from "next/image";
export default function Awards() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="awards">
      <Container>
        <div className="awards-header d-flex justify-content-center align-items-center">
          <h2>Our Awards & Recognition</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            corporis dolorem tempora adipisci repudiandae reprehenderit at illum
            laboriosam alias molestiae? Ullam deserunt ex totam recusandae?
          </p>
        </div>
        <div className="awards-slider text-center">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slider-item">
                <Image
                  src={"/images/awards/awards.png"}
                  width={150}
                  height={150}
                  alt="awards"
                />
              </div>
              <div className="slider-item">
                <Image
                  src={"/images/awards/awards.png"}
                  width={150}
                  height={150}
                  alt="awards"
                />
              </div>
              <div className="slider-item">
                <Image
                  src={"/images/awards/awards.png"}
                  width={150}
                  height={150}
                  alt="awards"
                />
              </div>
              <div className="slider-item">
                <Image
                  src={"/images/awards/awards.png"}
                  width={150}
                  height={150}
                  alt="awards"
                />
              </div>
              <div className="slider-item">
                <Image
                  src={"/images/awards/awards.png"}
                  width={150}
                  height={150}
                  alt="awards"
                />
              </div>
              <div className="slider-item">
                <Image
                  src={"/images/awards/awards.png"}
                  width={150}
                  height={150}
                  alt="awards"
                />
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
}
