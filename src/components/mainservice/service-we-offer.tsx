"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { AxiosInstance } from "@/Api/Api";

type Service = {
  id: number;
  name: string;
  description: string;
  image: string;
};
const ServiceWeOffer = () => {
  const [services, setServices] = useState<Service[]>([]);

  const handleFetch = async () => {
    try {
      const response = await AxiosInstance.get("services");
      console.log(response.data.data);
      setServices(response.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <section className="hero">
      <Container>
        <div className="mainservText">
          {services.map((service, index) => (
            <Row
              key={service.id}
              className={(index + 1) % 2 === 0 ? "reverse" : ""}
            >
              <Col md={6}>
                <div className="hero-image text-center border rounded">
                  <Image
                    src={
                      service.image ? service.image : "/images/service1.jpeg"
                    }
                    // src={"/images/service1.jpeg"}
                    width={360}
                    height={226}
                    alt="hero image"
                    className="rounded w-100"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="hero-info">
                  <h1>{service.name}</h1>
                  <p>{service.description}</p>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceWeOffer;
