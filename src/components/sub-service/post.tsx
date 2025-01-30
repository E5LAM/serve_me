import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const Post = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="service-offered py-5">
      <Container>
        <Row>
          {image && (
            <Col md={6}>
              <div className="service-image text-center border rounded">
                <Image
                  src={image}
                  width={360}
                  height={226}
                  alt={title}
                  className="rounded w-100"
                />
              </div>
            </Col>
          )}
          <Col md={image ? 6 : 12}>
            <div className="service-info">
              <h2 className="service-title mb-4">{title}</h2>
              <p className="service-description">{description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Post;
