"use client";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

type Service = {
  id: number;
  name: string;
  description: string;
  image: string;
};
type ServiceWeOfferProps = {
  services: Service[];
};

const ServiceWeOffer: React.FC<ServiceWeOfferProps> = ({ services }) => {
  return (
    <section className="hero">
      <Container>
        <div className="mainservText">
          {services.map((service: Service, index: number) => (
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
