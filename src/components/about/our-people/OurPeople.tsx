import { Col, Container, Row } from "react-bootstrap";

const staff: { [key: string]: string[] } = {
  "15": [
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
  ],
  "8": [
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
  ],
  "3": [
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
    "https://avatars.githubusercontent.com/u/92796091?v=4",
  ],
};

export default function OurPeople() {
  return (
    <div id="our-people" className="pt-4 pt-md-6">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} className="text-center pb-3 pb-md-4">
            <h2>فريقنا</h2>
            <p className="fw-medium">
              شركتنا متجذرة في الناس - موظفينا، أسرنا المؤسسة، والمجتمعات التي
              نخدمها. بعض أعضاء فريقنا معنا لأكثر من 18 عامًا!
            </p>
          </Col>
        </Row>
        <div className="staffDiv">
          {Object.keys(staff)
            .reverse()
            .map((exp: string) => (
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
                <Col
                  xs={12}
                  sm={9}
                  md={10}
                  className="pb-2 pb-md-3 client-right"
                >
                  <ul className="staffPicsDiv">
                    {staff[exp].map((person: string, index: number) => (
                      <li
                        key={person + index}
                        className="staffPics-item akinit"
                        data-index="0"
                      >
                        <img src={person} alt="" className="imageVal" />
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
