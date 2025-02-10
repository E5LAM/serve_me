import Image from "next/image";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";

// تعريف نوع البيانات
interface MissionItem {
  id: number;
  image: string;
  header: string;
  description: string;
}

interface AboutMissionProps {
  title?: string;
  data: MissionItem[];
}

export default function AboutMission({
  title = "مهمتنا",
  data,
}: AboutMissionProps) {
  return (
    <section id="our-mission" className="pt-md-4 about__mission">
      <div className="py-5 pt-md-10 mt-md-n10 about__mission-bg">
        <Container className="text-center">
          <div className="pb-3 pb-md-4 text-white">
            <h2 className="fw-bold">{title}</h2>
          </div>
          <Row className="align-items-stretch">
            {data?.map((item) => (
              <Col key={item.id} xs={12} md={6} className="pb-3 pb-md-4">
                <Card className="w-100 h-100">
                  <CardBody>
                    <div className="card-icon p-2 p-md-3">
                      <Image
                        src={item.image}
                        alt={item.header}
                        height={80}
                        width={80}
                      />
                    </div>
                    <div className="card-text pb-2 pb-md-3">
                      <h5 className="fw-bold pb-2">{item.header}</h5>
                      <p>{item.description}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}
