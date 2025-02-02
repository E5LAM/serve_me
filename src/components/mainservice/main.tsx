import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

type First = {
  firstSection: {
    title: string;
    description: string;
    image: string;
  };
};
const Main: React.FC<First> = ({ firstSection }) => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col md={6}>
            <div className="hero-info">
              <h1 className="">{firstSection?.title}</h1>
              <p>{firstSection?.description}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image text-center border rounded">
              <Image
                src={
                  firstSection?.image
                    ? firstSection.image
                    : "/images/service1.jpeg"
                }
                width={360}
                height={226}
                alt=" hero image"
                className="rounded w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
