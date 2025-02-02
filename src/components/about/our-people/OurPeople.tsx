import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function OurPeople({ data, members }: any) {
  return (
    <div id="our-people" className="pt-4 pt-md-6">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} className="text-center pb-3 pb-md-4">
            <h2>{data.title ?? "فريقنا"}</h2>
            <p className="fw-medium">
              {data.description ??
                "شركتنا متجذرة في الناس - موظفينا، أسرنا المؤسسة، والمجتمعات التي نخدمها. بعض أعضاء فريقنا معنا لأكثر من 18 عامًا!"}
            </p>
          </Col>
        </Row>
        <div className="staffDiv">
          {Object.keys(members).map((exp: string) => (
            <Row
              key={exp}
              className="client-area staff-item akinit"
              data-index="0"
            >
              <Col
                xs={12}
                sm={3}
                md={2}
                className="pb-2 pb-md-3 fw-bold text-center text-sm-right"
              >
                أكثر من {exp} سنة خبرة
              </Col>
              <Col xs={12} sm={9} md={10} className="pb-2 pb-md-3 client-right">
                <ul className="staffPicsDiv">
                  {members[exp].map((person: any, index: number) => (
                    <li
                      key={person.name + index}
                      className="staffPics-item akinit"
                      data-index={index}
                    >
                      <Image
                        height={50}
                        width={50}
                        src={person.image}
                        alt={person.name}
                        className="imageVal object-fit-cover"
                      />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
}
