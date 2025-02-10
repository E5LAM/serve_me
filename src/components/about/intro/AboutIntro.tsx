import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

interface AboutIntroProps {
  data: {
    image?: string;
    title: string;
    description: string;
  };
}

export default function AboutIntro({ data }: AboutIntroProps) {
  return (
    <Container className="about__intro mt-5">
      <Row className="align-items-center rounded-4 px-2 px-md-0 about__intro-bg shadow">
        <div className="col-md-5 d-none d-md-block">
          {data.image ? (
            <Image
              className="rounded-4 w-100"
              src={data.image}
              width={400}
              height={160}
              alt={data.title}
            />
          ) : (
            <span>No Image Available</span> // ضع `cleaningSVG` هنا إذا كان معرفًا
          )}
        </div>

        <Col xs={12} md={7} className="p-5 p-md-6">
          <h1 id="mhPageTitle">{data.title}</h1>
          <p className="mt-3 mt-md-0">{data.description}</p>
        </Col>
      </Row>
    </Container>
  );
}
