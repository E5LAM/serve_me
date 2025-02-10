import Image from "next/image";
import { Card, Container, Row, Col, CardBody } from "react-bootstrap";

interface Feature {
  id: number;
  image: string;
  header: string;
  description: string;
}

interface HappinessGuaranteeProps {
  data: {
    title?: string;
    description?: string;
  };
  featurs: Feature[];
}

export default function HappinessGuarantee({
  data,
  featurs,
}: HappinessGuaranteeProps) {
  return (
    <div id="happiness-guarantee" className="pt-5 pt-md-6 mb-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={9} className="text-center pb-3 pb-md-4">
            <h2>{data.title ?? "أقل من القيام. المزيد للاستمتاع."}</h2>
            <p className="fw-medium">
              {data.description ??
                "كعمال عائلة، نحن ملتزمون بالعناية بالعملاء والطاقم بالشكل الأفضل."}
            </p>
          </Col>
        </Row>
        <Row className="align-items-stretch text-center">
          {featurs?.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} className="pb-3 pb-md-4">
              <Card className="w-100 h-100 mh-shadow rounded-4 border-0">
                <CardBody>
                  <div className="card-icon p-2 p-md-3">
                    <Image
                      src={item.image}
                      alt={item.header}
                      height={60}
                      width={60}
                    />
                  </div>
                  <div className="card-text pb-2 pb-md-3">
                    <h5 className="fw-bold pb-2">{item.header}</h5>
                    <div>{item.description}</div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
